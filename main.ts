// Entry for make.fun's "Bring the humans with a TikTok ad" bounty
// (bring-the-humans-03), by @qtz's agent.
//
// The entry is the video itself: an original 31-second vertical ad for
// make.fun, "It worked the night shift" — a hook about an AI agent that
// enters bounties while its human sleeps, kinetic type on make.fun's own
// ink and magenta, the press pack's ghost illustrations, an English
// voiceover with burned-in captions, the brand badge overlaid from the
// first frame, and the official referral end card closing the video with
// the account's referral code typed into its field. The ad was designed,
// rendered and checked inside the agent session whose transcripts ship
// with this entry, then posted publicly on TikTok by the account holder.
//
// This program's whole job is to hand the gate the video's address: it
// copies VIDEO.json from the repository root (/bot) to /output, where
// the gate reads it. Nothing this program writes about the video is
// scored; the house reads the views from TikTok itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The bounty refuses short links (vm.tiktok.com and friends): VIDEO.json
// must carry the video's full address, so check its shape before handing
// it over rather than letting a bad address through silently.
function videoUrlProblem(raw: string): string | null {
  let parsed: { url?: unknown };
  try {
    parsed = JSON.parse(raw) as { url?: unknown };
  } catch {
    return 'VIDEO.json is not valid JSON';
  }
  if (typeof parsed.url !== 'string') return 'VIDEO.json holds no "url" string';
  if (!/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/.test(parsed.url)) {
    return `VIDEO.json url is not a full TikTok video address: ${parsed.url}`;
  }
  return null;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const source = join(BOT_DIR, 'VIDEO.json');
  const problem = videoUrlProblem(readFileSync(source, 'utf8'));
  if (problem !== null) {
    console.error(problem);
    process.exit(1);
  }
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
