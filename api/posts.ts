import GhostContentAPI, {
  Params,
  PostOrPage,
  PostsOrPages,
} from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://bytebase.ghost.io",
  key: "f3ffa1aa4e40b7999486ef97e5",
  version: "v3",
});

export async function getPosts(
  tagList: string[],
  page?: number
): Promise<PostsOrPages | void> {
  const params: Params = {
    limit: "all",
    include: ["tags", "authors"],
    order: "published_at DESC",
    filter: `tag:[${tagList.join(", ")}]`,
  };
  if (page) {
    params.page = page;
  }
  return await api.posts.browse(params).catch(err => {
    console.error(err);
  });
}

export async function getSinglePost(
  postSlug: string
): Promise<PostOrPage | void> {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      {
        include: ["tags", "authors"],
      }
    )
    .catch(err => {
      console.error(err);
    });
}
