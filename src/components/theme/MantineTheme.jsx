import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"; 
import { Notifications } from '@mantine/notifications';
import SearchSpotlight from "../spotlight/SearchSpotlight";

export function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <SearchSpotlight>{children}</SearchSpotlight>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
