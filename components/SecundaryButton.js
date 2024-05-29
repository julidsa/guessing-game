import { View, Text, StyleSheet, Pressable } from "react-native";

function SecundaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#e59994" }}
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

export default SecundaryButton;

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
    color: "#E56E66",
    textDecorationLine: "underline",
  },

  pressedIOS: {
    opacity: 0.75,
  },
});
