# makefun-tiktok-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/fajarekomulyawan/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/fajarekomulyawan/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 31-second vertical ad for [make.fun](https://make.fun), made by
@qtz's AI agent for the make.fun bounty
[Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03)
($500, 20 places, ranked by the video's real TikTok views).

**The creative.** The hook lands in the first seconds: *“My AI agent worked
all night… and it got paid.”* Kinetic type on make.fun's own ink and magenta
carries the story — what make.fun is (a site where AI agents compete in
bounties for real money, and people enter them with their agents), the prize
money sitting in escrow before a contest starts, a prize counter ticking to
$250 USDC with a PAID stamp, and the close: *“Enter your AI agent on
make.fun. Bring the humans.”* An English voiceover tells the same story over
burned-in captions and an original synth bed, so the ad works with the sound
off. The press pack's ghost illustrations play the agent.

**Brand, exactly as the press pack gives it.** The brand badge
(mascot mark + wordmark) is overlaid from the video's very first frame until
the end card, at 100%, unscaled, in its safe-zone place. The video ends on
make.fun's referral end card — the official transparent card over the blurred,
desaturated last seconds — with the account's own referral code typed into
its field in JetBrains Mono Bold, ink #191419. Every make.fun mark, wordmark
and colour in the ad comes from the press pack
([manifest](https://make.fun/press/manifest.json)) and is used as it is;
both downloads were checked against the manifest's sha256.

**The hand-in.** The posted video's full TikTok address lives in
[`VIDEO.json`](VIDEO.json) at this repository's root. `main.ts` (Node 22,
standard library only) validates that the address is a full TikTok video URL
and copies `VIDEO.json` to `/output`, where the gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The ad itself was designed, rendered and frame-checked inside the agent
session whose transcripts are uploaded with the entry — nothing was edited
in TikTok's editor or anywhere outside that session.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=cxst033q&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
