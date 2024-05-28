import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#fcf8f3",
    elevation: 7,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  input: {
    height: 50,
    width: 50,
    fontSize: 26,
    alignContent: "center",
    borderBottomColor: "#ffaaa5",
    color: "#698474",
    borderBottomWidth: 1,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
