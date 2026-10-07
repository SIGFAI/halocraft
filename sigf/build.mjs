// HaloCraft (festella22, MIT): Minecraft inside Halo: Combat Evolved (MCC), a port of SkyCraft. A Spark mod
// (halocraft.dll, C++) draws Minecraft into Halo CE; Minecraft 26.3 + the SkyCraft-derived Fabric mod run hidden in a
// bundled portable Prism; HaloCraft.exe starts both (MCC through Steam's "anti-cheat disabled" option) and injects
// Spark into MCC once it is up.
//
// Upstream fetch (PLATFORM-SPEC section 4, "Upstream fetch"), not rehosted: the release zip bundles spark.dll
// (KodyJKing/spark, no license, required: halocraft.dll imports it), so SIGF may not ship it. The app downloads
// HaloCraft-0.1.2.zip from the author's release as released, unpacked into {game}/HaloCraft, and the author's
// launcher is the entry point. It finds MCC itself (Steam libraries), copies spark.dll and mods\halocraft.dll into
// MCC\Binaries\Win64 and keeps its own Minecraft in %LOCALAPPDATA%\HaloCraft (Microsoft sign-in in its Prism): both
// outside what the recipe installs, so Restore leaves them (card note). Minecraft is therefore not an app-installed
// side (no mrpack): its jar in the bundle is the author's.
//   node library/halocraft/build.mjs       (outputs: library/lib.mjs)
import { asset, card, dl, emit, pinned, player } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/festella22/halocraft', tag: 'v0.1.2', commit: 'b6e664d563811667d162bd4569d698fdbe8c8ea9',
  authors: ['festella22'],
  zip: { file: 'HaloCraft-0.1.2.zip', sha256: '3c110d9587bc0bb3420851906a2a9b68867171df742af47cbd7fd7bf38b0ee1d' }, // = GitHub digest, 2026-10-07
};
const ID = 'halocraft', VERSION = '0.1.2', NAME = 'HaloCraft';
const TAGLINE = 'Minecraft inside Halo: Combat Evolved: build, mine Halo\'s terrain and fight the Covenant with Minecraft weapons and mobs.';

const upUrl = `${UP.repo}/releases/download/${UP.tag}/${UP.zip.file}`;
const release = asset(UP.zip.file, await pinned(upUrl, UP.zip.sha256), { zipped: true, upstream: upUrl });
for (const f of ['HaloCraft.exe', 'halocraft.dll', 'spark.dll', 'HaloCraft-Minecraft.zip', 'LICENSE.txt']) if (!release.contents.some(c => c.path === f)) throw new Error(`${UP.zip.file} has no ${f}`);
const assets = [release];

const make = (urls) => ({
  id: `sigf/${ID}`,
  version: VERSION,
  name: NAME,
  tagline: player(ID).tagline ?? TAGLINE,
  how_to_play: player(ID).howToPlay,
  kind: 'passthrough',
  games: [
    { game: 'halomcc', role: 'host', label: 'Halo: The Master Chief Collection (Halo: CE)', engine: 'Halo CE in MCC (D3D11, x64) + Spark mod loader + halocraft.dll (C++)', apps: { steam: '976730' }, runtime: 'MCC on Steam with Halo: CE installed, run with anti-cheat disabled (offline); no build pinned' },
    { game: 'minecraft', role: 'guest', label: 'Minecraft', engine: 'Minecraft Java 26.3 + Fabric mod skycraft 0.1.2 (HaloCraft build), in the author\'s bundled portable Prism 11.1.1', mc: '26.3', loader: 'fabric@0.19.5', java: '25' },
  ],
  requires: [
    { id: 'minecraft-account', page: 'https://www.minecraft.net/store/minecraft-java-bedrock-edition-pc',
      note: 'a Microsoft account that owns Minecraft: Java Edition: the first launch opens HaloCraft\'s own Prism window to sign in, then it downloads Minecraft and Java' },
  ],
  install: [
    { game: 'halomcc', strategy: 'game-dir-snapshot', files: [
      // The author's file as released, every entry checked against `contents`, into its own folder of the game.
      { src: release.name, dst: '{game}/HaloCraft', unpack: true, contents: release.contents, ...dl(release, urls) },
    ] },
  ],
  // The author's launcher on every run: Minecraft (its bundle), MCC via steam://launch/976730/option2, then Spark.
  launch: [{ game: 'halomcc', exe: 'HaloCraft/HaloCraft.exe', args: [] }],
  files: [{ name: release.name, ...dl(release, urls) }],
  source: {
    repo: UP.repo, license: 'MIT + no license (upstream download)', upstream_license: 'MIT (HaloCraft, SkyCraft); bundled spark.dll has no license',
    fetch: 'upstream', tag: UP.tag, commit: UP.commit, hosted: `https://github.com/SIGFAI/${ID}`, based_on: 'https://github.com/chasmlol/SkyCraft',
  },
  media: { cover: `https://raw.githubusercontent.com/festella22/halocraft/${UP.commit}/docs/building.jpg` },
  built_by: { author: UP.authors[0], authors: [...UP.authors, 'chasmlol (SkyCraft)', 'KodyJKing (Spark)'], packaged_by: 'SIGF' },
  idea_by: UP.authors[0],
  built_at: '2026-10-07T00:00:00.000Z',
  ...card(UP.repo),
  issues: false, // issues are disabled on the upstream repo
  notes: player(ID).notes,
});

// No app fixture: it would commit the author's zip (with the unlicensed spark.dll) into our repo.
emit({ slug: ID, version: VERSION, assets, fixtureAssets: null, make });
