// Remove i18n prefix path in origin path, and using for `localePath`.
// e.g. `/en/path/to/file` -> `/path/to/file`
export const removeI18nPrefixPath = (path: string): string => {
  return "/" + path.split("/").slice(2).join("/");
};

export const getBrowserOSName = (): string => {
  let name = "Unknown OS";

  if (navigator.appVersion.indexOf("Win") != -1) {
    name = "Windows";
  } else if (navigator.appVersion.indexOf("Mac") != -1) {
    name = "MacOS";
  }

  return name;
};
