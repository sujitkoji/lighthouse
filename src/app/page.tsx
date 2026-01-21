"use client";
import { useState } from "react";
import SceneWrapper from "@/app/lighthouse/SceneWrapper";
import Loader from "@/app/Loader/loader";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <main>
        <SceneWrapper />
      </main>
    </>
  );
}
