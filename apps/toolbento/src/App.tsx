import { LandingPageApp } from "../../../shared/landing/AppShell";
import { quickPeekContent } from "./config/content";

function App() {
  return <LandingPageApp content={quickPeekContent} themeStorageKey="toolbento-theme-mode" />;
}

export default App;
