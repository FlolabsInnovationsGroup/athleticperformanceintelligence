import { htmlResponse, renderHub } from "../../lib/careers/pages.js";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(renderHub());
}
