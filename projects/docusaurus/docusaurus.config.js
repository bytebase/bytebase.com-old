/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Bytebase",
  tagline: "Bytebase Docs",
  url: "https://bytebase.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "../img/favicon.svg",
  organizationName: "bytebase", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Bytebase",
      logo: {
        alt: "Bytebase Logo",
        src: "../img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/bytebase/bytebase",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "bytebase.com",
              to: "https://bytebase.com",
            },
            {
              label: "How we build",
              to: "https://bytebase.com/pages/howwebuild",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Source code",
              href: "https://github.com/bytebase/bytebase/projects/1",
            },
            {
              label: "Feedback and discussion",
              href: "https://github.com/bytebase/bytebase/discussions",
            },
            {
              label: "Roadmap",
              href: "https://github.com/bytebase/bytebase/projects/1",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bytebase. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/bytebase/bytebase.com/projects/docusaurus/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/bytebase/bytebase.com/projects/docusaurus/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
