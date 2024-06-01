import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

function GuessedNumber({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default GuessedNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryWhite,
    padding: 24,
    marginVertical: 24,
    marginHorizontal: 54,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary800,
  },
});
