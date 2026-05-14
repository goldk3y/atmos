"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

interface VideoPlayerModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  videoUrl: string;
  title: string;
}

function VideoPlayerModal({
  isOpen,
  onOpenChange,
  videoUrl,
  title,
}: VideoPlayerModalProps) {
  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onOpenChange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          onClick={() => onOpenChange(false)}
        >
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-[background-color] duration-150 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close video player"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            className="aspect-video w-full max-w-4xl p-4"
            initial={{ transform: "scale(0.95)", opacity: 0 }}
            animate={{ transform: "scale(1)", opacity: 1 }}
            exit={{ transform: "scale(0.97)", opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e6e6e9] ring-1 ring-[var(--atmos-border)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--atmos-page)]",
            className
          )}
          style={{ aspectRatio }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          <Image
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            fill
            sizes="(min-width: 1180px) 1180px, calc(100vw - 3rem)"
            unoptimized
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--atmos-ink)]/75 via-[var(--atmos-ink)]/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <h3 className="text-2xl font-medium text-white">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-white/80">{description}</p>
            )}
          </div>
        </div>

        <VideoPlayerModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          videoUrl={videoUrl}
          title={title}
        />
      </>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer, VideoPlayerModal };
