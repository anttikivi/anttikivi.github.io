// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

const fs = require("fs");
const path = require("path");

const recursiveReadDirSync = folderPath => {
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const entryPaths = fs
    .readdirSync(folderPath)
    .map(entry => path.join(folderPath, entry));
  const filePaths = entryPaths.filter(entryPath =>
    fs.statSync(entryPath).isFile()
  );
  const dirPaths = entryPaths.filter(
    entryPath => !filePaths.includes(entryPath)
  );
  const dirFiles = dirPaths.reduce(
    (prev, curr) => prev.concat(recursiveReadDirSync(curr)),
    []
  );

  return [...filePaths, ...dirFiles]
    .filter(f => !f.endsWith(".DS_Store") && !f.endsWith("README.md"))
    .map(f => {
      const root = path.join(__dirname, "..", "..", "..");
      return f.replace(root, "");
    });
};

const createRootPages = async createPage => {
  const rootPagesDir = path.join(__dirname, "src", "templates");
  const langRootDir = path.join(__dirname, "src", "locales");

  const langs = fs
    .readdirSync(langRootDir)
    .filter(f => f.endsWith(".js") && f.length === 5)
    .map(f => path.basename(f, ".js"));

  const files = recursiveReadDirSync(rootPagesDir)
    .filter(f => !f.startsWith("."))
    .filter(f => !f.includes(".scss"));

  files.forEach(f => {
    const fullpath = path.join(__dirname, "..", "..", "..", f);

    console.log("Processing file", fullpath);

    let originalSitePath = path
      .relative(rootPagesDir, fullpath)
      .replace(/.js$/g, "");

    console.log("The original path is", originalSitePath);

    // Remove the index files
    if (originalSitePath.endsWith("index")) {
      originalSitePath = originalSitePath.substring(
        0,
        originalSitePath.length - 5
      );
    }

    // If they have .fi then just drop that completely
    if (originalSitePath.endsWith(".fi")) {
      originalSitePath = originalSitePath.substring(
        0,
        originalSitePath.length - 3
      );
    }

    const pageSlugs = require("./src/data/page-slugs.json");

    langs.forEach(lang => {
      const prefix = lang === "fi" ? "/" : `/${lang}/`;

      let sitePath = `${prefix}${originalSitePath}`;

      if (
        originalSitePath in pageSlugs &&
        lang in pageSlugs[originalSitePath]
      ) {
        sitePath = `${prefix}${pageSlugs[originalSitePath][lang]}`;
      }

      console.log("The new path for the page is", sitePath);

      const pageOpts = {
        path: sitePath,
        component: fullpath,
        context: {
          lang: lang === "" ? "fi" : lang
        }
      };

      createPage(pageOpts);
    });
  });
};

exports.createPages = async ({actions}) => {
  const {createPage} = actions;

  await createRootPages(createPage);
};
