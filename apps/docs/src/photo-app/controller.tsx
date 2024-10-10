"use client";

import { useState } from "react";

import Layout from "./components/layout";
import IntroScreen from "./components/screens/intro";
import UploadScreen from "./components/screens/upload";
import LoadingScreen from "./components/screens/loading";
import PaywallScreen from "./components/screens/paywall";

import { STEPS_FLOW } from "./constants";

import type { Plan, Screen, TempImage } from "./types";

export default function Controller({ plans }: { plans: Plan[] }) {
  const [screen, setScreen] = useState<Screen>(STEPS_FLOW[0] as Screen);
  const [tempImages, setTempImages] = useState<TempImage[]>([]);

  const hasHeader = (["upload", "paywall"] as Screen[]).includes(screen);
  const hasProgress = (["upload"] as Screen[]).includes(screen);
  const hasOffer = (["paywall"] as Screen[]).includes(screen);
  const stepIndex = STEPS_FLOW.indexOf(screen);
  const progress = stepIndex;

  return (
    <Layout
      hasHeader={hasHeader}
      hasProgress={hasProgress}
      hasOffer={hasOffer}
      progress={progress}
      onBackClick={() => {
        setScreen(STEPS_FLOW[0] as Screen);
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
      {screen === "loading" && (
        <LoadingScreen
          images={tempImages}
          onFinish={() => {
            setScreen("paywall");
          }}
        />
      )}
      {screen === "paywall" && (
        <PaywallScreen
          plans={plans}
          onCTAClick={() => {
            // There is no spec for this button
          }}
        />
      )}
    </Layout>
  );
}
