if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (const video of document.querySelectorAll("video")) {
    video.removeAttribute("autoplay");
    video.pause();
  }
}
