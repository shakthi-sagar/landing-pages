import { LandingPageApp } from "../../../shared/landing/AppShell";
import { quickPeekContent } from "./config/content";

function App() {
  return <LandingPageApp content={quickPeekContent} themeStorageKey="lockin-theme-mode" />;
}

export default App;
