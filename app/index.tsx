// app/index.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router"; // Importar router para navegación
import { useEffect } from "react";

const ONBOARDED_KEY = "dfind:onboarded";
const AUTH_TOKEN_KEY = "dfind:auth_token";

export default function Index() {
  useEffect(() => {
    (async () => {
      const onboarded = await AsyncStorage.getItem(ONBOARDED_KEY);
      if (onboarded !== "true") {
        router.replace("/welcome"); // 👈 primera vez
        return;
      }
      const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
      router.replace(token ? "/" : "/login"); // 👈 ajusta la ruta principal
    })();
  }, []);

  return null; // deja el Splash mientras decide
}
