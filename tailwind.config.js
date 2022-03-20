module.exports = {
  purge: {
    options: {
      safelist: [/^ml-/],
    },
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
