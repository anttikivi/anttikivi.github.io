import { EleventyI18nPlugin } from "@11ty/eleventy";
import tailwindcss from "@tailwindcss/postcss";
import memoize from "memoize";
import crypto from "node:crypto";
import fs from "node:fs";
import postcss from "postcss";

/**
 * @typedef ProcessInput
 * @property {string} path
 * @property {string} contents
 */

/**
 * @typedef ProcessResult
 * @property {string} text
 * @property {string} hash
 */

/**
 * @callback ProcessFunction
 * @param {ProcessInput} input
 * @returns {Promise<ProcessResult>}
 */

/**
 * @type {ProcessFunction}
 */
async function processCSS(input) {
  const { path: inputPath, contents } = input;
  if (!contents) {
    console.error("no contents were passed to be processed by PostCSS");
  }

  let plugins = [tailwindcss];

  const result = await postcss(plugins).process(contents, {
    from: inputPath,
  });

  const hash = crypto.createHash("sha256").update(result.css).digest("hex");

  return { text: result.css, hash };
}

/**
 * @param {string} inputPath
 */
async function createFileHash(inputPath) {
  try {
    const contents = fs.readFileSync(inputPath, "utf-8");
    /** @type {ProcessResult} */
    let processed = undefined;
    if (inputPath.endsWith(".css")) {
      processed = await processCSS({ path: inputPath, contents: contents });
    } else {
      throw new Error("invalid file type passed to the hashing function");
    }
    return processed.hash;
  } catch (err) {
    console.error(err);
  }
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "fi",
  });

  eleventyConfig.addFilter(
    "hash",
    /** @param {string} filename */ memoize(async function (filename) {
      if (process.env.NODE_ENV === "development") {
        return filename;
      }
      const inputFile = path.join("src", filename);
      const hash = await createFileHash(inputFile);
      if (filename.endsWith(".css")) {
        if (process.env.NODE_ENV === "production") {
          return `/${hash}.css`;
        }
        return `${filename.substring(0, filename.lastIndexOf("."))}.${hash}.css`;
      } else if (filename.endsWith(".js")) {
        if (process.env.NODE_ENV === "production") {
          return `/${hash}.js`;
        }
        return `${filename.substring(0, filename.lastIndexOf("."))}.${hash}.js`;
      } else {
        return filename;
      }
    }),
  );

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: function (contents, inputPath) {
      return async function () {
        return (await processCSS({ path: inputPath, contents: contents })).text;
      };
    },
    compileOptions: {
      permalink: async function (_, inputPath) {
        const filename = inputPath.substring(
          inputPath.lastIndexOf("/") + 1,
          inputPath.lastIndexOf("."),
        );
        if (process.env.NODE_ENV === "development") {
          return `${filename}.css`;
        }
        const hash = await createFileHash(inputPath);
        if (process.env.NODE_ENV === "production") {
          return `${hash}.css`;
        }
        return `${filename}.${hash}.css`;
      },
    },
  });
}

export const config = {
  dir: {
    input: "src",
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
