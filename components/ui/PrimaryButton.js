import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/color";

function PrimaryButton({ children, onPress }) {
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

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  pressedIOS: {
    opacity: 0.75,
  },
});
