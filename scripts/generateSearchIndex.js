import fse from "fs-extra";
import { findLast, last } from "lodash";

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

async function generateSearchIndex() {
  // Patch docs index objects of algolia.
  const { $content } = require("@nuxt/content");
  const data = await $content("docs", {
    deep: true,
  })
    .where({ slug: { $regex: /^(?!_)/ } })
    .fetch();
  const objects = [];

  for (const item of data) {
    const DOC_PATH_PREFIX = "/docs/en";
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
      if (
        node.type === "element" &&
        node.tag.length === 2 &&
        node.tag.startsWith("h")
      ) {
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

  fse.writeFileSync("./log", JSON.stringify(objects));

  // const algoliasearch = require("algoliasearch");
  // const client = algoliasearch(
  //   "2M7XI1QIDY",
  //   process.env.ALGOLIA_ADMIN_API_KEY
  // );
  // const index = client.initIndex("bytebase-docs");
  // await index.clearObjects();
  // await index.saveObjects(objects);
}

export default generateSearchIndex;
