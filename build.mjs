import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const parts = [
  "build/chunk-01.b64",
  "build/chunk-02.b64",
  "build/chunk-03.b64",
  "build/chunk-04.b64",
  "build/chunk-05.b64",
];

const base64 = (await Promise.all(parts.map((file) => readFile(file, "utf8"))))
  .map((part) => part.trim())
  .join("");

const source = Buffer.from(base64, "base64");
const actualHash = createHash("sha256").update(source).digest("hex");
const expectedHash = "9060462c40a75b1b2cb2907cf86eef16e9d51ec5c32f30a59ed3978eb6624fa0";

if (actualHash !== expectedHash) {
  throw new Error(`index.js integrity check failed: ${actualHash}`);
}

await writeFile("index.js", source);
console.log(`index.js reconstructed and verified: ${actualHash}`);
