import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
import Title from "../components/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ guesses, userNumber }) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.title}>FIM DE JOGO</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/game-over-img.jpg")}
        />
      </View>
      <Text style={styles.summaryTexts}>
        Seu celular precisou de <Text style={styles.highlight}>X</Text>{" "}
        tentativas para adivinhar o número{" "}
        <Text style={styles.highlight}>Y</Text>!
      </Text>

      <PrimaryButton>Jogar novamente</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 38,
    color: Colors.primary,
  },

  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    marginVertical: 40,
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
  },

  summaryTexts: {
    fontFamily: "poppins-regular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },

  highlight: {
    fontFamily: "poppins-bold",
  },
});
