type Props = {
  /** "light" renders dark lines for light-background sections (default).
   *  "dark" renders white lines for dark-background sections. */
  variant?: "light" | "dark";
  /** Overall div opacity. Defaults to 0.35. */
  opacity?: number;
  className?: string;
};

const LINE_COLOR = {
  light: "rgb(24 24 27 / 0.05)",
  dark: "rgb(255 255 255 / 0.04)",
};

export function GridPattern({
  variant = "light",
  opacity = 0.35,
  className = "",
}: Props) {
  const lineColor = LINE_COLOR[variant];
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      aria-hidden
      style={{
        opacity,
        backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
