import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #2563eb, #4f46e5)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 60 }}>❤️</span>
        </div>
        <h1
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            marginBottom: "10px",
          }}
        >
          HopeBridge
        </h1>
        <p
          style={{
            fontSize: 40,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Small Donations. Massive Impact.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
