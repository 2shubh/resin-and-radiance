import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Optional: set SITE_URL when you build for your real domain, e.g.
//   SITE_URL=https://resinandradiance.in npm run build
// It turns the link-preview image and canonical URL into absolute links,
// which WhatsApp, Instagram and Facebook need to show a preview card.
function siteUrlTags() {
  const siteUrl = (process.env.SITE_URL || '').replace(/\/+$/, '')
  return {
    name: 'site-url-tags',
    transformIndexHtml() {
      const image = siteUrl ? `${siteUrl}/og-image.jpg` : 'og-image.jpg'
      const tags = [
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
      ]
      if (siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
        )
      }
      return tags
    },
  }
}

// Videos dropped into public/videos are detected here, so the page only
// shows a player for files that really exist (no requests for missing ones).
const videoDir = fileURLToPath(new URL('./public/videos', import.meta.url))

function listVideoFiles() {
  try {
    return fs.readdirSync(videoDir).filter((f) => /\.(mp4|webm|m4v|mov)$/i.test(f))
  } catch {
    return []
  }
}

function watchVideos() {
  return {
    name: 'watch-videos',
    configureServer(server) {
      server.watcher.add(videoDir)
      const restart = (file) => file.startsWith(videoDir) && server.restart()
      server.watcher.on('add', restart)
      server.watcher.on('unlink', restart)
    },
  }
}

export default defineConfig({
  // Relative paths, so the built site works on any host or sub-folder.
  base: './',
  plugins: [react(), tailwindcss(), siteUrlTags(), watchVideos()],
  define: {
    __VIDEO_FILES__: JSON.stringify(listVideoFiles()),
  },
})
