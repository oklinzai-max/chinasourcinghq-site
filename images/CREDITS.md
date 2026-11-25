# Image credits

Photographs come from three free-licence sources: **Wikimedia Commons**
(CC0 / CC BY-SA 4.0 — attribution shown under the image where the licence
requires it), **Pexels** (Pexels License — commercial use, no attribution
required) and **Unsplash** (Unsplash License — same). None requires payment;
if the site is ever sold or relicensed, re-check the licences at that time.

**Subject rule:** a photograph is used only where it is the thing the article
is about. *Industry mood is not enough.* The test applied to every file below:

- Canton Fair guide → the Canton Fair Complex itself, from the air
- Foshan furniture → a furniture hall with room sets, i.e. what you walk through
- Yiwu market guide → the market's own gate, with its floor directory
- Yiwu inside the market → a stall inside the market, stock to the ceiling

Where nothing met that test, the page keeps its navy header and no photo. A
picture that quietly implies something untrue is worse than no picture.

## Guide photographs (1400 × 788, 16:9)

**8 of the 27 guides carry a photograph.** The other 19 have none.

| File | Source | Used on | What it actually shows |
|---|---|---|---|
| `ph-canton-complex.jpg` | Wikimedia Commons, [Aerial View, Canton Fair Complex 20230701-A](https://commons.wikimedia.org/wiki/File:Aerial_View,_Canton_Fair_Complex_20230701-A.jpg) — Tim Wu, CC BY-SA 4.0, 2023-07-01 | Canton Fair: complete buyer guide | Halls A, B and C of the Canton Fair Complex in Pazhou, the central plaza and the ferry pier on the Pearl River |
| `ph-yiwu-market.jpg` | Wikimedia Commons, [小商品城 / Yiwu International Trade City](https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E5%95%86%E5%93%81%E5%9F%8E_-_panoramio.jpg) — 蒋鹏飞, CC BY 3.0, taken 2010-03-28 | Yiwu International Trade City guide + Yiwu hub hero | The whole front of the Futian Market building on a clear day: the cable-supported canopy, the glass hall, the palms and the open plaza |
| `ph-yiwu-hall.jpg` | Wikimedia Commons, [Yi wu futien market](https://commons.wikimedia.org/wiki/File:Yi_wu_futien_market_-_panoramio.jpg) — HALUK COMERTEL, CC BY 3.0, taken 2008-08-27 | Yiwu: inside the market + Yiwu hub "Districts and floors" | The interior hall of Yiwu International Trade City — escalators and walkways linking the market floors, with visitors crossing the concourse |
| `ph-furniture-hall.jpg` | Pexels 6969830 | Foshan: furniture & building materials | A furniture hall with several room sets on display |
| `ph-train-fuxing.jpg` | Pexels 38886108 | Booking high-speed trains | A Fuxing train at a Chinese station platform |
| `ph-electronics.jpg` | Unsplash `photo-1518770660439-4636190af475` | Shenzhen electronics | A populated printed circuit board |
| `ph-port-ship.jpg` | Unsplash `photo-1578575437130-527eed3abbec` | Samples, shipping & logistics | Container ship berthed under gantry cranes |
| `ph-desk-calc.jpg` | Unsplash `photo-1554224155-6726b3ff858f` | Visa & invitation | Passport, printed forms and a calculator on a desk |

Attribution for the two CC BY-SA files is rendered under the image itself in
`GuideLayout.astro` (`credit` field in `src/lib/guide-media.ts`).

### Rejected, and why

Kept here so nobody re-adds them thinking they are an improvement.

| Candidate | Why not |
|---|---|
| Old `ph-yiwu-market.jpg` (Commons, HALUK COMERTEL, 2010) | The same Futian Market front but shot under a flat grey overcast sky — it read as old and run-down. Replaced with the sunny shot above (same building, clear day). Both are CC BY 3.0. |
| Old `ph-yiwu-stall.jpg` (Commons "Gramophone shop, District 1", Muzzleflash, CC0, 2017) | A cluttered close-up of a single gramophone/clocks stall. Authentic, but it read as shabby and did not show the scale of the market; replaced by the bright interior-hall photo above. |
| `Yiwu_Market.jpg` (Commons) | A tourist snapshot with a person posing in the foreground — not a usable scene photo |
| `201706 Overview of Yiwu International Trading Town.jpg` (Commons) | A distant skyline across the river, mostly sky — not the market |
| `hero-canton-fair.jpg` (Unsplash `photo-1517154421773`) | A Korean street scene; it stood in for the Canton Fair for one draft and was deleted |
| Pexels 19425033 "Chinese exhibition centre" | Any Chinese expo hall, not the Canton Fair — replaced by the Commons aerial |
| Getty-sponsored "Yiwu International Trade Centre" on Pexels | Sponsored placement, not a Pexels-licence image |
| `ph-mall.jpg` (Unsplash `photo-1519567241046`) | A shopping mall atrium; Yiwu is a wholesale market, not a mall |
| Commons "District 3, Gate 67" | A doorway sign close-up. Readable, but a doorway is not what a market guide is about — replaced by the whole building front |
| Guilin night market | Legible "Guilin" signage; would read as Yiwu and be wrong |
| Pexels 1587825140708 trade-fair hall | Portuguese-language banners on the wall |
| Tourism photos (Canton Tower, Shanghai skyline, hotel rooms, aircraft) | True but generic: they say "China", not what the article is about |
| Card-terminal photo | China pays by QR code; a card terminal misleads |

## Direct download patterns

- Pexels: `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=788&fit=crop`
- Commons: `https://upload.wikimedia.org/wikipedia/commons/{h1}/{h1h2}/{filename}`
  where `h1 = md5(filename)[0]` and `h1h2 = md5(filename)[0:2]`, filename with
  underscores and URL-encoded commas. `upload.wikimedia.org` is unreliable from
  this network; downloading through headless Chrome and exporting via canvas
  works (see `.preview/wm/grab.html`).

## Heroes (1600 × 900, Unsplash)

| File | Unsplash photo ID | Used on |
|---|---|---|
| `hero-shanghai.jpg` | `photo-1548919973-5cef591cdbc9` | Homepage hero |
| `hero-toolkit.jpg` | `photo-1497032628192-86f99bcd76bc` | Free toolkit page hero |
| `hero-yiwu.jpg` | `photo-1555529669-e69e7aa0ba9a` | Reserved for the Yiwu hub |
| `hero-sourcing.jpg` | `photo-1590496793929-36417d3117de` | Reserved for the China Sourcing hub |
| `hero-travel.jpg` | `photo-1436491865332-7a61a109cc05` | Reserved for the Travel Toolkit |
| `card-factory.jpg` | `photo-1581092918056-0c4c3acd3789` | Reserved |
| `card-team.jpg` | `photo-1521737604893-d14cc237f11d` | Reserved |
| `card-office.jpg` | `photo-1497366754035-f200968a6e72` | Reserved |

Tool cards do **not** use photography: they render a miniature of each tool's
own interface (`src/components/ui/ToolMock.astro`), because a photo of a
meeting room says nothing about a spreadsheet.

Typography: **Source Serif 4** (SIL Open Font License), self-hosted at
`public/fonts/source-serif-4-latin.woff2`, latin subset, variable weights.
