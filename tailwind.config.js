module.exports = {
  purge: {
    // "bg-", "text-" are used by tag.
    // "ml-", "pl-", "rotate-" are used by docs.
    safelist: [/^bg-/, /^text-/, /^ml-/, /^pl-/, /^rotate-/],
  },
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "accent-disabled": "var(--color-accent-disabled)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-text": "var(--color-accent-text)",
        main: "var(--color-main)",
        "main-hover": "var(--color-main-hover)",
        "main-text": "var(--color-main-text)",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              width: "100%",
            },
            code: {
              padding: "0 0.4em",
              margin: 0,
              fontSize: "1em",
              backgroundColor: "#f5f2f0",
              borderRadius: "6px",
              fontWeight: "inherit",
              color: "inherit",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
          },
        },
        xl: {
          css: {
            code: {
              padding: "0 0.4em",
              margin: 0,
              fontSize: "1em",
              backgroundColor: "#f5f2f0",
              borderRadius: "6px",
              fontWeight: "inherit",
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
