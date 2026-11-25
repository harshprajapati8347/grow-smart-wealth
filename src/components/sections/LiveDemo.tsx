"use client";

import { useEffect, useRef } from "react";
import { heroDemoSeconds, heroDemos } from "@/data/site";
import { AppLink } from "@/components/shared/AppLink";

export function LiveDemo({ activeIndex }: { activeIndex: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const slide = track?.children.item(activeIndex);
    if (!track || !(slide instanceof HTMLElement)) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: slide.offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    const videos = trackRef.current?.querySelectorAll("video");
    if (!videos) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    videos.forEach((video, index) => {
      if (index === activeIndex && !reduce) {
        video.preload = "auto";
        video.currentTime = 0;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <div className="overflow-hidden rounded-[20px] border border-pf-line bg-white shadow-pf-frame">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-b border-pf-line px-4 py-2 sm:relative sm:min-h-12 sm:grid-cols-1">
        <div
          className="flex items-center gap-1.5 sm:absolute sm:top-1/2 sm:left-4 sm:-translate-y-1/2"
          aria-hidden
        >
          <span className="size-2.5 rounded-full bg-pf-dot-red" />
          <span className="size-2.5 rounded-full bg-pf-dot-yellow" />
          <span className="size-2.5 rounded-full bg-pf-dot-green" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:px-16">
          <p className="rounded-full bg-muted px-3 py-1 text-xs text-pf-quiet">
            Live demo
          </p>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div
          ref={trackRef}
          className="pointer-events-none flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-lg motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Slides"
        >
          {heroDemos.map((demo, index) => (
            <div
              key={demo.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${heroDemos.length}, ${demo.title}`}
              className="min-w-full shrink-0 basis-full snap-center"
            >
              <video
                muted
                playsInline
                loop
                preload={index === 0 ? "auto" : "none"}
                width={1600}
                height={1000}
                disablePictureInPicture
                className="aspect-[16/10] w-full bg-pf-surface object-cover"
                onTimeUpdate={(event) => {
                  if (index !== activeIndex) return;
                  const video = event.currentTarget;
                  if (video.currentTime >= heroDemoSeconds) {
                    video.currentTime = 0;
                  }
                }}
              >
                <source src={demo.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
