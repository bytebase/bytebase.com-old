import algoliasearch from "algoliasearch";
import { findLast, last, unionBy, uniqBy } from "lodash";
import { $content } from "@nuxt/content";

const DOC_PATH_PREFIX = "/docs/en";
const HEAD_TAG_REGEX = /^h\d$/;

function getContentOfNode(node) {
  if (node.type === "text") {
    return node.value;
  } else {
    let content = "";
    for (const child of node.children) {
      content = content + getContentOfNode(child);
    }
    return content;
  }
}

async function generateSearchIndexForLayout(category, indexName) {
  const objects = [];
  const layout = await $content("docs", "en", category, "_layout").fetch();
  const dataObject = {
    objectID: undefined,
    hierarchy: {
      lvl0: indexName,
      lvl1: null,
      lvl2: null,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null,
    },
    type: "lvl0",
  };
  objects.push(dataObject);

  for (const node of layout.body.children) {
    if (node.type === "element" && HEAD_TAG_REGEX.test(node.tag)) {
      const child = node.children[1];
      let path = undefined;
      let title = getContentOfNode(node);

      if (child.type !== "text") {
        if (child.props.to) {
          path = child.props.to;
        } else {
          path = child.props.href;
        }
        title = child.children[0].value;
      } else {
        title = child.value;
      }

      const level = node.tag.slice(1) - 1;
      const type = `lvl${level}`;
      const dataObject = {
        objectID: path + objects.length,
        url: "/docs" + path,
        hierarchy: {},
        type: type,
        content: title,
      };
      const lastObject = findLast(objects, (o) => o.type === `lvl${level - 1}`);
      if (lastObject) {
        dataObject.hierarchy = {
          ...lastObject.hierarchy,
        };
      }
      dataObject.hierarchy[type] = title;
      objects.push(dataObject);
    }
  }

  const resultObjects = objects
    .filter((data) => typeof data.objectID === "string")
    .map((data) => {
      return {
        ...data,
        objectID: category + data.objectID,
      };
    });

  return resultObjects;
}

async function generateSearchIndex() {
  const objects = [];
  const contentNodes = await $content("docs", {
    deep: true,
  })
    .where({ slug: { $regex: /^(?!_)/ } })
    .fetch();

  for (const item of contentNodes) {
    const path = item.path.slice(DOC_PATH_PREFIX.length);

    const dataObject = {
      objectID: path,
      url: `/docs${path}`,
      hierarchy: {
        lvl0: "Documentation",
        lvl1: item.title,
        lvl2: null,
        lvl3: null,
        lvl4: null,
        lvl5: null,
        lvl6: null,
      },
      type: "lvl1",
    };
    objects.push(dataObject);

    for (const node of item.body.children) {
      if (node.type === "element" && HEAD_TAG_REGEX.test(node.tag)) {
        const level = node.tag.slice(1);
        const type = `lvl${level}`;
        const title = getContentOfNode(node);
        const dataObject = {
          objectID: path + objects.length,
          url: `/docs${path}#${node.props.id}`,
          hierarchy: {},
          type: type,
          content: getContentOfNode(node),
        };
        const lastObject = findLast(
          objects,
          (o) => o.type === `lvl${level - 1}`
        );
        if (lastObject) {
          dataObject.hierarchy = {
            ...lastObject.hierarchy,
          };
        }
        dataObject.hierarchy[type] = title;
        objects.push(dataObject);
      } else {
        const lastObject = last(objects);
        if (lastObject && lastObject.type === "content") {
          lastObject.content = lastObject.content + getContentOfNode(node);
        } else {
          const dataObject = {
            objectID: path + objects.length,
            url: `/docs${path}`,
            hierarchy: lastObject.hierarchy,
            type: "content",
            content: getContentOfNode(node),
          };
          objects.push(dataObject);
        }
      }
    }
  }

  // Generate search index for TOC.
  const docsLayoutSearchIndexList = await generateSearchIndexForLayout(
    "",
    "Documentation"
  );
  objects.push(...docsLayoutSearchIndexList);
  const cliLayoutSearchIndexList = await generateSearchIndexForLayout(
    "cli",
    "CLI"
  );
  objects.push(...cliLayoutSearchIndexList);
  const apiLayoutSearchIndexList = await generateSearchIndexForLayout(
    "api",
    "API"
  );
  objects.push(...apiLayoutSearchIndexList);
  const howtoLayoutSearchIndexList = await generateSearchIndexForLayout(
    "how-to",
    "How-To"
  );
  objects.push(...howtoLayoutSearchIndexList);

  const resultObjects = uniqBy(
    objects.filter((data) => typeof data.objectID === "string"),
    "url"
  );

  const client = algoliasearch("2M7XI1QIDY", process.env.ALGOLIA_ADMIN_API_KEY);
  const index = client.initIndex("bytebase-docs");
  await index.clearObjects();
  await index.saveObjects(resultObjects);
}

export default generateSearchIndex;
