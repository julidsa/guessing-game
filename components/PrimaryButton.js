import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  const pressHandler = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
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

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    borderRadius: 8,
    backgroundColor: "#ffaaa5",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    paddingHorizontal: 10,
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
