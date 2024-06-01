import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen onGameOver={setIsGameOver} />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary800, Colors.primary500]}
    >
      <ImageBackground
        source={require("./assets/dices.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
