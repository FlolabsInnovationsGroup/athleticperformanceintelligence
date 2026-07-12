import { copyFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoSvg = readFileSync(join(root, "public", "logo.svg"), "utf8");

copyFileSync(join(root, "public", "logo.svg"), join(root, "src", "app", "icon.svg"));

const width = 1200;
const height = 630;

const logoMarkup = logoSvg
  .replace(/<svg[^>]*>/, "")
  .replace("</svg>", "");

const ogSvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#0a1219"/>
  <rect x="0" y="0" width="8" height="${height}" fill="#31d2c1"/>
  <g transform="translate(88 115) scale(0.34)">
    ${logoMarkup}
  </g>
  <text x="300" y="250" fill="#e8f2f5" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700">
    Athletic Performance Intelligence
  </text>
  <text x="300" y="310" fill="#31d2c1" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600">
    Hardware Agnostic
  </text>
  <text x="300" y="380" fill="#8fa8b5" font-family="Arial, Helvetica, sans-serif" font-size="28">
    Delivered to you by MoodChanger. Powered by FloBrain.
  </text>
  <text x="300" y="520" fill="#4a6272" font-family="Arial, Helvetica, sans-serif" font-size="22">
    FloLabs Innovations Group
  </text>
</svg>
`;

const outputPath = join(root, "public", "og-image.png");

await sharp(Buffer.from(ogSvg)).png().toFile(outputPath);

console.log(`Wrote ${outputPath} (${width}x${height})`);
