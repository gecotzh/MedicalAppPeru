import React, { useEffect, useState } from "react";
import { AppProvider } from "./context/context";
import { Navigation } from "./routes/navigation";
import { Splash } from "./screens/splash";

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);
  return (
    <AppProvider>
      {splash ? <Splash /> : <Navigation />}
    </AppProvider>
  );
}

export default App;
