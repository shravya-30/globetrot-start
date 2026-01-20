import { WelcomeScreen } from "../components/WelcomeScreen";
import { AuthScreen } from "../components/AuthScreen";
import { PreferencesScreen } from "../components/PreferencesScreen";
import { OnboardingCarousel } from "../components/OnboardingCarousel";
import { CompletionScreen } from "@/components/CompletionScreen";
import { HomeScreen } from "../components/HomeScreen";
import { usePersistentState } from "@/hooks/use-persistent-state";

type OnboardingStep = "welcome" | "auth" | "preferences" | "carousel" | "completion" | "home";

const Index = () => {
  const [currentStep, setCurrentStep] = usePersistentState<OnboardingStep>("travelmate_step", "welcome");
  const [stepHistory, setStepHistory] = usePersistentState<OnboardingStep[]>("travelmate_step_history", []);

  const goToStep = (next: OnboardingStep) => {
    setStepHistory((prev) => [...prev, currentStep]);
    setCurrentStep(next);
  };

  const goBack = () => {
    setStepHistory((prev) => {
      const copy = [...prev];
      const previous = copy.pop();
      if (previous) setCurrentStep(previous);
      return copy;
    });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return <WelcomeScreen onGetStarted={() => goToStep("auth")} />;
      case "auth":
        return <AuthScreen onBack={goBack} onContinue={() => goToStep("preferences")} />;
      case "preferences":
        return <PreferencesScreen onBack={goBack} onContinue={() => goToStep("carousel")} />;
      case "carousel":
        return <OnboardingCarousel onBack={goBack} onContinue={() => goToStep("completion")} />;
      case "completion":
        return <CompletionScreen onBack={goBack} onStartExploring={() => goToStep("home")} />;
      case "home":
        return <HomeScreen onBack={goBack} />;
      default:
        return <WelcomeScreen onGetStarted={() => goToStep("auth")} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
