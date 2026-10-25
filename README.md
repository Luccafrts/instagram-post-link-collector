# Instagram Post Link Collector

**Language:** English | [Português (Brasil)](README.pt-BR.md)

A lightweight JavaScript script that collects **Instagram post and Reel links** from a profile, directly in your browser's developer console.

It scrolls through the profile, gathers the publication links loaded on the page, removes duplicates, and exports a `.txt` file containing one URL per line.

> **Note:** This tool collects **links only**. It does not download photos or videos, and it cannot guarantee that every publication on a profile will be found.

## Features

- Collects post (`/p/`), Reel (`/reel/`), and legacy video (`/tv/`) links.
- Supports publication URLs with or without the profile name in the path.
- Automatically scrolls to load more publications.
- Deduplicates links.
- Exports the results to `links-instagram-USERNAME.txt`.
- Requires no packages, extensions, or installation.

## Usage

1. Open [Instagram](https://www.instagram.com/) in your browser and sign in if needed.
2. Go to the profile you want to inspect, e.g. `https://www.instagram.com/username/`.
3. Wait until its post thumbnails are visible.
4. In **Firefox**, press **Ctrl + Shift + K** to open the browser console. In other browsers, open Developer Tools and select **Console**.
5. Open [`instagram-post-link-collector.js`](instagram-post-link-collector.js), review it, and paste its full contents into the console.
6. Press **Enter**. Keep the profile tab open while the script scrolls and collects links.
7. When finished, your browser will save the `.txt` file (usually in Downloads).

### Example output

`links-instagram-username.txt`:

```text
https://www.instagram.com/p/EXAMPLE123/
https://www.instagram.com/reel/EXAMPLE456/
```

*The URLs above are illustrative examples.*

## How it works

The script reads links from the **currently loaded page**, identifies publication URLs, and scrolls to request additional content. It stores unique URLs in a `Set` and exports them as a plain-text file. It stops after repeatedly reaching the bottom without finding new links, or when its iteration limit is reached.

## Limitations & responsible use

- **Completeness is not guaranteed.** Instagram can change its page layout, restrict access, or stop loading older content.
- The script only collects links accessible in your current browser session. It does not unlock private, archived, or deleted posts.
- It does **not** read passwords or cookies, send data to external servers, or download media files.
- Avoid running multiple copies at once; automatic scrolling may take a while.
- Only use it for content you are authorized to access, and respect creators' rights and applicable platform terms.

## Troubleshooting

**“No posts found” / “Nenhuma publicação encontrada”**

Check that you are on an Instagram **profile page**, not the homepage, and that post thumbnails have loaded before running the script.

**Fewer links than expected**

Instagram may not have loaded the entire profile. The resulting file only includes links that the browser was able to load during collection.

**Browser blocks console pasting**

Always inspect code before running it in the developer console. Follow your browser's security guidance.

## Repository structure

```text
instagram-post-link-collector/
├── instagram-post-link-collector.js
├── README.md
└── README.pt-BR.md
```

## Disclaimer

This is an independent project and is not affiliated with or endorsed by Instagram or Meta.
