import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import GuessedNumber from "../components/game/GuessedNumber";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/color";

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const firstGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(firstGuess);

  console.log(typeof userNumber, typeof currentGuess);
  if (firstGuess === userNumber) {
    console.log("De primeira!!!");
  }

  console.log(userNumber === currentGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Não minta!", "Você sabe que está errado... ", [
        { text: "Foi mal!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary, currentGuess);

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess 🎲</Title>
      <GuessedNumber>{currentGuess}</GuessedNumber>

      <View style={styles.commandContainer}>
        <View>
          <Text style={styles.text}>Higher or lower?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 45,
  },

  commandContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
    padding: 20,
    marginHorizontal: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  text: {
    fontSize: 18,
    paddingBottom: 10,
    color: Colors.primaryWhite,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 25,
  },
});
