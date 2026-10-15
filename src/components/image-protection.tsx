import type { ImgHTMLAttributes } from "react";

type ProtectedImageProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Basic client-side protection for public website images.
 *
 * Usage:
 * <ProtectedImage src="/images/product.webp" alt="Product" />
 *
 * This discourages casual saving only. It cannot prevent screenshots,
 * browser developer tools, or downloading a publicly accessible image URL.
 */
export default function ProtectedImage({
  onContextMenu,
  onDragStart,
  onDoubleClick,
  style,
  ...props
}: ProtectedImageProps) {
  return (
    <img
      {...props}
      draggable={false}
      onContextMenu={(event) => {
        event.preventDefault();
        onContextMenu?.(event);
      }}
      onDragStart={(event) => {
        event.preventDefault();
        onDragStart?.(event);
      }}
      onDoubleClick={(event) => {
        event.preventDefault();
        onDoubleClick?.(event);
      }}
      style={{
        ...style,
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitUserDrag: "none",
      }}
    />
  );
}
