import { ImageResponse } from "next/og";

export const alt = "GrayPeak Studio — web design and development";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #fafafa 0%, #e4e4e7 45%, #27272a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#18181b",
            }}
          >
            GrayPeak Studio
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 28,
              color: "#52525b",
            }}
          >
            Fast, clear, maintainable web experiences
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
