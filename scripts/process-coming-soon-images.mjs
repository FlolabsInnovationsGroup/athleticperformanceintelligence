import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const candidates = path.join(root, "public/images/sections/_candidates/coming-soon");
const outDir = path.join(root, "public/images/sections");

const images = [
  {
    src: "glasses-ray-ban-meta.png",
    out: "coming-soon-smart-glasses.webp",
    position: "centre",
    source: "Ray-Ban Meta Gen 2 product photo",
  },
  {
    src: "ring-a.jpg",
    out: "coming-soon-smart-ring.webp",
    position: "centre",
    // Unsplash: smart ring with visible sensors — Andrey Matveev
    source: "https://unsplash.com/photos/fingers-hold-a-black-smart-ring-with-circuits-visible-VUmPbOXmUoQ",
  },
  {
    src: "watch-a.jpg",
    out: "coming-soon-smart-watch.webp",
    extract: { left: 0, top: 750, width: 1920, height: 1080 },
    // Pexels: smartwatch on wrist showing fitness data — Lisa Fotios
    source: "https://www.pexels.com/photo/smartwatch-displaying-fitness-data-on-wrist-4379288/",
  },
  {
    src: "feet-pod-polar.png",
    out: "coming-soon-smart-foot-pods.webp",
    position: "centre",
    source: "Polar Bluetooth Smart foot pod on Asics running shoe",
  },
];

const width = 1600;
const height = 900;

for (const {
  src,
  out,
  position = "centre",
  extract,
  contain,
  source,
} of images) {
  const input = path.join(candidates, src);
  const output = path.join(outDir, out);

  let pipeline = sharp(input);
  if (extract) {
    pipeline = pipeline.extract(extract);
  }

  if (contain) {
    pipeline = pipeline.resize(width, height, {
      fit: "contain",
      background: contain,
    });
  } else if (extract) {
    pipeline = pipeline.resize(width, height);
  } else {
    pipeline = pipeline.resize(width, height, { fit: "cover", position });
  }

  await pipeline.webp({ quality: 82 }).toFile(output);

  const crop = extract
    ? `extract ${extract.width}x${extract.height}@${extract.left},${extract.top}`
    : contain
      ? `contain on ${contain}`
      : `cover ${position}`;
  console.log(`Wrote ${out} from ${src} (${crop})`);
  console.log(`  Source: ${source}`);
}
