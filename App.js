import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fadeAnim] = useState(new Animated.Value(-1)); // Valor de animação para o texto
  const [fadeImage] = useState(new Animated.Value(-1)); // Valor de animação para o texto

  const [font] = useFonts({
    Great_Vibes: require("../TelaInicial2/src/Fontes/Great_Vibes/GreatVibes-Regular.ttf"),
  });

  useEffect(() => {
    // Animação de fade para o texto
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);
  useEffect(() => {
    // Animação de fade para o texto
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.papeldeparede}
        source={require("./src/imagens/cupcake.png")}
        blurRadius={6}
      />
      <Animated.Image
        style={[styles.logo, { opacity: fadeAnim }]}
        source={require("./src/imagens/logo.png")}
      />
      <Animated.Text style={[styles.txt, { opacity: fadeAnim }]}>
        Doce Encanto
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    flexWrap: "wrap",
    fontSize: 48,
    textAlign: "center",
    bottom: "63%",
    color: "black",
    fontFamily: "Great_Vibes",
    fontWeight: "300",
  },
  logo: {
    width: "34%",
    height: "15%",
    bottom: "62%",
    justifyContent: "center",
    borderRadius: "50%",
  },
  papeldeparede: {
    width: "100%",
    height: "110%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
