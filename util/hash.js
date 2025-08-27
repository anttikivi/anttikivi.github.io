import crypto from "node:crypto";
import fs from "node:fs/promises";
import { processCssFile } from "./css.js";
import { memoize } from "./index.js";

/**
 * @param {string} inputPath
 * @returns {Promise<string>}
 */
async function createFileHashInternal(inputPath) {
    try {
        if (inputPath.endsWith(".css")) {
            return (await processCssFile(inputPath)).hash;
        } else if (inputPath.endsWith(".ico")) {
            return crypto
                .createHash("sha256")
                .update(await fs.readFile(inputPath, "binary"))
                .digest("hex");
        } else if (inputPath.endsWith(".png")) {
            return crypto
                .createHash("sha256")
                .update(await fs.readFile(inputPath, "binary"))
                .digest("hex");
        } else {
            throw new Error("invalid file type passed to the hashing function");
        }
    } catch (err) {
        console.error(err);
    }
}

export const createFileHash =
    process.env.NODE_ENV === "development"
        ? createFileHashInternal
        : memoize(createFileHashInternal);
