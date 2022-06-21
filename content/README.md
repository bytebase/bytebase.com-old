# Content Guideline

This doc describes how to build content inside this bytebase.com repo. The repo hosts 3 major content types:

- Documentation at https://www.bytebase.com/docs
- Blog at https://www.bytebase.com/blog
- Changelog at https://www.bytebase.com/changelog

For general writing guide, please check [this writing guide](https://github.com/bytebase/bytebase/blob/main/docs/writing-guide.md).

## General

### Naming

All lowercase with `-` as word separator:

- `my-awesome-post.md`
- `my-awesome-image.webp`

### Image

- Naming: choose a readable image name.
- Use 16:9 ratio if possible. Feature image **must** use 16:9.
- Format: use WebP instead of PNG format to reduce image size.
- Use GIF judicious. Sometimes you have to use GIF to explain the interaction, however, GIF is much larger and slows page loading speed.

## Documentation

- Put documentation under https://github.com/bytebase/bytebase.com/tree/main/content/docs.
- Put image under https://github.com/bytebase/bytebase.com/tree/main/static/docs.
- Check https://www.bytebase.com/docs/document-write-guide for supported markdown syntax.

## Blog

- Put under https://github.com/bytebase/bytebase.com/tree/main/content/blog.
- Under https://github.com/bytebase/bytebase.com/tree/main/static/blog, for each blog post, create a folder using the blog post file name and put all images for that post there.
- Use feature image.

## Changelog

- Put under https://github.com/bytebase/bytebase.com/tree/main/content/changelog.
- Under https://github.com/bytebase/bytebase.com/tree/main/static/changelog, for each changelog containing any image, create a folder using the changelog version and put all images for that changelog there.
- Do **NOT** use feature image
