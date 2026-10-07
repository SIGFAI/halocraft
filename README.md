# HaloCraft

Minecraft inside Halo: Combat Evolved: build, mine Halo's terrain and fight the Covenant with Minecraft weapons and mobs.

**HaloCraft is made by [festella22](https://github.com/festella22).** All credit for the mod goes to them. It is built on [chasmlol/SkyCraft](https://github.com/chasmlol/SkyCraft) by chasmlol (SkyCraft), KodyJKing (Spark).

- Original project: https://github.com/festella22/halocraft
- The original project has no issue tracker.
- Upstream release packaged here: [v0.1.2](https://github.com/festella22/halocraft/releases/tag/v0.1.2) (commit [`b6e664d`](https://github.com/festella22/halocraft/tree/b6e664d563811667d162bd4569d698fdbe8c8ea9))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> The original project has no issue tracker; problems with the one-click install go to this repository's issues.

## What you need

- **Halo: The Master Chief Collection (Halo: CE)** ([Steam](https://store.steampowered.com/app/976730/)): MCC on Steam with Halo: CE installed, run with anti-cheat disabled (offline); no build pinned.
- **Minecraft**: Java Edition 26.3.
- minecraft-account: a Microsoft account that owns Minecraft: Java Edition: the first launch opens HaloCraft's own Prism window to sign in, then it downloads Minecraft and Java (https://www.minecraft.net/store/minecraft-java-bedrock-edition-pc).
- Windows and the [SIGF app](https://sigf.ai).

## Install

In the SIGF app, open **HaloCraft** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. `HaloCraft-0.1.2.zip` comes from the author's own release.

### How to play

- Halo CE's levels with Minecraft's movement, inventory, blocks and combat: Chief follows Steve, and Minecraft weapons and mobs hurt the Covenant and the Flood.
- Press Play: HaloCraft starts its hidden Minecraft, then Halo: MCC with anti-cheat disabled. Pick any Halo CE campaign mission or a local custom game.
- E inventory, 1-9 or the wheel for the hotbar, Q drop, T chat, / commands, as in Minecraft. F5 switches Minecraft's camera view.
- Dig Halo's terrain a block at a time or blast it with TNT: dirt, sand, rock and metal drop what they are made of. Each level starts with a fresh starter kit.
- Esc opens Halo's pause menu or closes a Minecraft screen. F9 unloads the mod.

### Good to know

- You need Halo: The Master Chief Collection on Steam with Halo: CE installed, and a Microsoft account that owns Minecraft: Java Edition. The first Play opens HaloCraft's own Prism window to sign in, then downloads Minecraft and Java (a few minutes).
- Offline only: HaloCraft runs MCC with anti-cheat disabled. Never take the modded game online. Windows may warn that HaloCraft.exe is not signed: More info > Run anyway.
- Restore removes the HaloCraft folder. HaloCraft also copies spark.dll and mods\halocraft.dll into MCC\Binaries\Win64 and keeps its Minecraft in %LOCALAPPDATA%\HaloCraft: delete those by hand to remove it fully (they do nothing without HaloCraft.exe).
- Uses SkyCraft's link names: do not run it together with SkyCraft or another SkyCraft port. Early and experimental; the author has no issue tracker, and an MCC update can break it.

## What this repository holds

HaloCraft is MIT, but its release zip bundles the Spark mod loader (`spark.dll`, KodyJKing/spark), which has no license, so SIGF does not rehost the zip. This repository holds **only SIGF's own files**, never the author's:

1. This README, `sigf/` (the script that built the recipe, for reference) and `mashup.json` (the SIGF app recipe).
2. Not here: `HaloCraft-0.1.2.zip` (sha256 `3c110d9587bc0bb3420851906a2a9b68867171df742af47cbd7fd7bf38b0ee1d`). The app downloads it on the player's demand from the author's release, as released: https://github.com/festella22/halocraft/releases/download/v0.1.2/HaloCraft-0.1.2.zip
3. The release `v0.1.2`, which has no assets: the recipe's only download is the author's file above.

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| HaloCraft (`HaloCraft-0.1.2.zip`, the author's release file) | MIT (HaloCraft, festella22; SkyCraft, chasmlol); bundled Spark `spark.dll` has no license (KodyJKing); Prism Launcher GPL-3.0, Fabric API Apache-2.0, e4mc MIT in its Minecraft bundle. Not stored here; the app downloads it from the author's release | https://github.com/festella22/halocraft |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes HaloCraft installable in one click, credited to festella22. If you are the author and want anything changed or taken down, open an issue here.
