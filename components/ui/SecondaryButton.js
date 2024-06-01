import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/color";

function SecondaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressedIOS, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.primary500,
    textDecorationLine: "underline",
  },

  pressedIOS: {
    opacity: 0.75,
  },
});
