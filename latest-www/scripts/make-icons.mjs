import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoSvg = readFileSync(join(root, "public", "logo.svg"));
const bg = { r: 15, g: 37, b: 50, alpha: 1 }; // #0f2532

async function icon(size, out) {
  const pad = Math.round(size * 0.18);
  const inner = size - pad * 2;
  const mark = await sharp(logoSvg)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([{ input: mark, left: pad, top: pad }])
    .png()
    .toFile(join(root, "public", out));

  console.log("wrote", out, size);
}

await icon(32, "favicon-32.png");
await icon(48, "favicon-48.png");
await icon(180, "apple-touch-icon.png");
await icon(512, "icon-512.png");

// Multi-size ICO via PNG pack (browsers accept PNG-named favicon too; also write favicon.png)
await sharp(join(root, "public", "favicon-32.png"))
  .resize(32, 32)
  .toFile(join(root, "public", "favicon.ico"));

console.log("done");
