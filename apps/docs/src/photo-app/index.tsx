"use client";

import { useState } from "react";

import Layout from "./components/layout";
import IntroScreen from "./components/screens/intro";
import UploadScreen from "./components/screens/upload";
import LoadingScreen from "./components/screens/loading";

import type { Screen, TempImage } from "./types";
import { STEPS_FLOW } from "./constants";

export default function PhotoAppPage() {
  const [screen, setScreen] = useState<Screen>(STEPS_FLOW[0] as Screen);
  const [tempImages, setTempImages] = useState<TempImage[]>([]);

  const hasHeader = ["upload"].includes(screen);
  const hasProgress = ["upload"].includes(screen);
  const stepIndex = STEPS_FLOW.indexOf(screen);
  const progress = stepIndex;

  return (
    <Layout
      hasHeader={hasHeader}
      hasProgress={hasProgress}
      progress={progress}
      onBackClick={() => {
        if (STEPS_FLOW[stepIndex - 1]) {
          setScreen(STEPS_FLOW[stepIndex - 1] as Screen);
        }
      }}
      onCloseClick={() => {
        // There is no spec for this button
      }}
    >
      {screen === "intro" && (
        <IntroScreen
          onCTAClick={() => {
            setScreen("upload");
          }}
        />
      )}
      {screen === "upload" && (
        <UploadScreen
          onFinish={(images) => {
            setTempImages(images);
            setScreen("loading");
          }}
        />
      )}
      {screen === "loading" && <LoadingScreen images={tempImages} />}
    </Layout>
  );
}
