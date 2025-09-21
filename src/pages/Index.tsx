import { useState } from "react";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { AuthScreen } from "../components/AuthScreen";
import { PreferencesScreen } from "../components/PreferencesScreen";
import { OnboardingCarousel } from "../components/OnboardingCarousel";
import { CompletionScreen } from "../components/CompletionScreen";
import { HomeScreen } from "../components/HomeScreen";

type OnboardingStep = "welcome" | "auth" | "preferences" | "carousel" | "completion" | "home";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");

  const handleStepChange = (step: OnboardingStep) => {
    setCurrentStep(step);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return <WelcomeScreen onGetStarted={() => handleStepChange("auth")} />;
      case "auth":
        return (
          <AuthScreen
            onBack={() => handleStepChange("welcome")}
            onContinue={() => handleStepChange("preferences")}
          />
        );
      case "preferences":
        return (
          <PreferencesScreen
            onBack={() => handleStepChange("auth")}
            onContinue={() => handleStepChange("carousel")}
          />
        );
      case "carousel":
        return (
          <OnboardingCarousel
            onBack={() => handleStepChange("preferences")}
            onContinue={() => handleStepChange("completion")}
          />
        );
      case "completion":
        return <CompletionScreen onStartExploring={() => handleStepChange("home")} />;
      case "home":
        return <HomeScreen />;
      default:
        return <WelcomeScreen onGetStarted={() => handleStepChange("auth")} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
