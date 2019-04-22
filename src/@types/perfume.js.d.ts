declare module 'perfume.js/dist/lib/detect-browser' {
  import {
    BrowserInfo,
    BotInfo,
    NodeInfo
  } from 'perfume.js/dist/types/detect-browser';

  export function detect(): BrowserInfo | BotInfo | NodeInfo | null;
}
