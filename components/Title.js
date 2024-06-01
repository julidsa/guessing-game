import { Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-bold",
    fontSize: 28,
    color: Colors.primaryWhite,
    textAlign: "center",
  },
});
