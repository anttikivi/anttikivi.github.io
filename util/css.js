import browserslist from "browserslist";
import { browserslistToTargets, transform } from "lightningcss";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import { memoize } from "./index.js";

/**
 * @typedef {Object} CssResult - The object returned from `processCss`.
 * @property {string} code - the processed CSS code
 * @property {string} hash - hash created from the result to use in filenames
 */

/**
 * @param {string} input - The CSS to process.
 * @param {string} inputPath - Path to the CSS file to process.
 * @returns {Promise<CssResult>}
 */
async function processCssInternal(input, inputPath) {
    let result = input;

    if (process.env.NODE_ENV === "production") {
        const targets = browserslistToTargets(browserslist(">= 0.005% and not dead"));
        const { code } = transform({
            filename: inputPath,
            code: Buffer.from(input),
            minify: true,
            sourceMap: false,
            targets,
        });
        result = code;
    }

    const hash = crypto.createHash("sha256").update(result).digest("hex");

    return { code: result, hash };
}

export const processCss =
    process.env.NODE_ENV == "development" ? processCssInternal : memoize(processCssInternal);

/**
 * @param {string} inputPath - Path to the CSS file to process.
 * @returns {Promise<CssResult>}
 */
async function processCssFileInternal(inputPath) {
    const input = await fs.readFile(inputPath, "utf-8");
    return await processCss(input, inputPath);
}

export const processCssFile =
    process.env.NODE_ENV == "development"
        ? processCssFileInternal
        : memoize(processCssFileInternal);
