"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(
  () => import("@/app/lighthouse/scene"),
  { ssr: false }
);

export default function SceneWrapper() {
  return <SceneCanvas />;
}
