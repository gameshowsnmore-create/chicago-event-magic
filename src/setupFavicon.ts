// Sets favicon links at runtime using the logo in src/assets.
// This avoids needing a file in /public and works in both dev and build.

import logoUrl from "@/assets/logo.png?url";

function setFavicon(url: string) {
  // Remove existing icons to avoid duplicates
  const existing = document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="shortcut icon"]');
  existing.forEach((el) => el.parentElement?.removeChild(el));

  const make = (rel: string, sizes?: string) => {
    const link = document.createElement("link");
    link.rel = rel as HTMLLinkElement["rel"];
    link.type = "image/png";
    if (sizes) link.sizes = sizes;
    link.href = url;
    document.head.appendChild(link);
  };

  // Common icon relations; using same PNG for simplicity
  make("icon", "32x32");
  make("shortcut icon");
}

// Immediately set on module load
if (typeof document !== "undefined") {
  setFavicon(logoUrl);
}

export {};

