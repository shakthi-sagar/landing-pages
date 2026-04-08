import { LandingPageApp } from "../../../shared/landing/AppShell";
import { lockInContent } from "./config/content";

function App() {
  return <LandingPageApp content={lockInContent} themeStorageKey="lockin-theme-mode" />;
}

export default App;
