// src/theme/index.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#FBF0E9",
      100: "#F4DAC7",
      200: "#EDC3A4",
      300: "#E5AC81",
      400: "#DE955E",
      500: "#D97B4F", // cor principal (terracota)
      600: "#B8623B",
      700: "#8B5E3C", // marrom madeira
      800: "#6B4529",
      900: "#4A2F1C",
    },
    sand: {
      50: "#FDFBF8",
      100: "#F4E9DC", // bege areia
      200: "#EADFCC",
      300: "#DFCFB5",
    },
    ink: {
      500: "#3A2E28", // marrom quase preto (texto)
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "sand.50",
        color: "ink.500",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
});

export default theme;