import { copyFileSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const iconPath = join(root, "app", "icon.svg");
const ogPath = join(root, "app", "opengraph-image.png");
const twPath = join(root, "app", "twitter-image.png");

/** Site background from globals.css --background */
const BG = { r: 5, g: 8, b: 20 };

const W = 1200;
const H = 630;
const logoSize = 360;

const svg = readFileSync(iconPath);
const logoPng = await sharp(svg).resize(logoSize, logoSize).png().toBuffer();

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: BG,
  },
})
  .composite([
    {
      input: logoPng,
      left: Math.round((W - logoSize) / 2),
      top: Math.round((H - logoSize) / 2),
    },
  ])
  .png()
  .toFile(ogPath);

copyFileSync(ogPath, twPath);

console.log("Wrote", ogPath, "and", twPath);
