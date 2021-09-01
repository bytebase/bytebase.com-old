import GhostContentAPI, {
  PostOrPage,
  PostsOrPages,
} from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://bytebase.ghost.io",
  key: "f3ffa1aa4e40b7999486ef97e5",
  version: "v3",
});

export async function getPosts(): Promise<PostsOrPages | void> {
  return await api.posts
    .browse({
      limit: "all",
      include: ["tags", "authors"],
      order: "published_at DESC",
    })
    .catch((err) => {
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
    .catch((err) => {
      console.error(err);
    });
}
