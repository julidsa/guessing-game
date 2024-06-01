import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecundaryButton from "../components/ui/SecundaryButton";
import { useState } from "react";
import Colors from "../constants/color";

function StartGameScreen({ onPickNumber }) {
  const [number, setNumber] = useState("");

  const handleGivenNumber = (enteredGoal) => {
    setNumber(enteredGoal);
  };

  const resetNumber = () => {
    setNumber("");
  };

  const confirmNumberHandler = () => {
    const chosenNum = parseInt(number);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid number!", "Enter a number between 1 and 99", [
        { text: "Got it!", style: "destructive", onPress: resetNumber() },
      ]);
    }

    onPickNumber(chosenNum);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={handleGivenNumber}
        value={number}
      />
      <View style={styles.buttonsContainer}>
        <SecundaryButton onPress={resetNumber}>Reset</SecundaryButton>
        <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  view: {
    alignContent: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 25,
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primaryWhite,
    elevation: 7,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 15,
  },

  input: {
    height: 50,
    width: 50,
    fontSize: 26,
    alignContent: "center",
    borderBottomColor: Colors.primary,
    color: "#3f4f45",
    borderBottomWidth: 1,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
