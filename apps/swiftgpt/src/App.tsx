import { LandingPageApp } from "../../../shared/landing/AppShell";
import { swiftGPTContent } from "./config/content";

function App() {
  return <LandingPageApp content={swiftGPTContent} themeStorageKey="swiftgpt-theme-mode" />;
}

export default App;
