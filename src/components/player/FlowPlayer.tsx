"use client";

import { useState } from "react";

import { ScreenTransition } from "@/components/player/layout/ScreenTransition";
import { ContactScreen } from "@/components/player/screens/ContactScreen";
import { DecisionScreen } from "@/components/player/screens/DecisionScreen";
import { DurationScreen } from "@/components/player/screens/DurationScreen";
import { InformationScreen } from "@/components/player/screens/InformationScreen";
import { RecommendationScreen } from "@/components/player/screens/RecommendationScreen";
import { StoryScreen } from "@/components/player/screens/StoryScreen";
import { ThankYouScreen } from "@/components/player/screens/ThankYouScreen";
import { WelcomeScreen } from "@/components/player/screens/WelcomeScreen";

import { implantFlow } from "@/features/flow/implantFlow";

import type {
  ConcernId,
  DurationId,
} from "@/config/flow";

import type { FlowScreenId } from "@/types/flow-engine";

type JourneyData = {
  concern: ConcernId | null;
  duration: DurationId | null;
};

type ContactData = {
  fullName: string;
  phone: string;
  consent: boolean;
};

const initialJourneyData: JourneyData = {
  concern: null,
  duration: null,
};

const initialContactData: ContactData = {
  fullName: "",
  phone: "",
  consent: false,
};

export function FlowPlayer() {
  const [currentScreen, setCurrentScreen] =
    useState<FlowScreenId>(implantFlow.startScreen);

  const [screenHistory, setScreenHistory] =
    useState<FlowScreenId[]>([]);

  const [journey, setJourney] =
    useState<JourneyData>(initialJourneyData);

  const [contact, setContact] =
    useState<ContactData>(initialContactData);

  function updateJourney(updates: Partial<JourneyData>) {
    setJourney((currentJourney) => ({
      ...currentJourney,
      ...updates,
    }));
  }

  function findNextScreen(screenId: FlowScreenId) {
    const currentStep = implantFlow.steps.find(
      (step) => step.id === screenId,
    );

    return currentStep?.next;
  }

  function goTo(nextScreen: FlowScreenId) {
    setScreenHistory((currentHistory) => [
      ...currentHistory,
      currentScreen,
    ]);

    setCurrentScreen(nextScreen);
  }

  function goToNextScreen() {
    const nextScreen = findNextScreen(currentScreen);

    if (!nextScreen) {
      return;
    }

    goTo(nextScreen);
  }

  function goBack() {
    const previousScreen = screenHistory.at(-1);

    if (!previousScreen) {
      return;
    }

    setScreenHistory((currentHistory) =>
      currentHistory.slice(0, -1),
    );

    setCurrentScreen(previousScreen);
  }

  function restartJourney() {
    setCurrentScreen(implantFlow.startScreen);
    setScreenHistory([]);
    setJourney(initialJourneyData);
    setContact(initialContactData);
  }

  function renderCurrentScreen() {
    switch (currentScreen) {
      case "welcome":
        return (
          <WelcomeScreen
            onStart={goToNextScreen}
          />
        );

      case "decision":
        return (
          <DecisionScreen
            onSelect={(value) => {
              updateJourney({
                concern: value,
              });

              goToNextScreen();
            }}
          />
        );

      case "story":
        return (
          <StoryScreen
            selectedAnswer={
              journey.concern ?? "multiple"
            }
            onContinue={goToNextScreen}
          />
        );

      case "duration":
        return (
          <DurationScreen
            onSelect={(value) => {
              updateJourney({
                duration: value,
              });

              goToNextScreen();
            }}
          />
        );

      case "information":
        return (
          <InformationScreen
            onContinue={goToNextScreen}
          />
        );

      case "recommendation":
        return (
          <RecommendationScreen
            concern={
              journey.concern ?? "multiple"
            }
            duration={
              journey.duration ?? "not-sure"
            }
            onContinue={goToNextScreen}
          />
        );

      case "contact":
        return (
          <ContactScreen
            onSubmit={(data) => {
              setContact(data);

              console.log(
                "Journey cevapları:",
                journey,
              );

              console.log(
                "İletişim bilgileri:",
                data,
              );

              goToNextScreen();
            }}
          />
        );

      case "thank-you":
        return (
          <ThankYouScreen
            fullName={contact.fullName}
            onRestart={restartJourney}
          />
        );

      default:
        return null;
    }
  }

  return (
    <>
      {screenHistory.length > 0 &&
        currentScreen !== "thank-you" && (
          <button
            type="button"
            onClick={goBack}
            className="
              fixed left-4 top-4 z-50
              rounded-full
              border border-[var(--color-border)]
              bg-white/90
              px-4 py-3
              text-sm font-semibold
              text-[var(--color-text-primary)]
              shadow-sm
              transition duration-200
              hover:-translate-y-0.5
              hover:shadow-md
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-black/10
              sm:left-8 sm:top-8
            "
          >
            ← Geri
          </button>
        )}

      <ScreenTransition screenKey={currentScreen}>
        {renderCurrentScreen()}
      </ScreenTransition>
    </>
  );
}