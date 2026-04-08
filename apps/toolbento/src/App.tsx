import { LandingPageApp } from "../../../shared/landing/AppShell";
import { toolBentoContent } from "./config/content";

function App() {
  return <LandingPageApp content={toolBentoContent} themeStorageKey="toolbento-theme-mode" />;
}

export default App;
