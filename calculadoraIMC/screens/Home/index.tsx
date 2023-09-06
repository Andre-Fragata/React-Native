import { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./style";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(null);

  const calculateIMC = () => {
    if (weight && height) {
      const weightValue = parseFloat(weight.replace(",", "."));
      const heightValue = parseFloat(height.replace(",", "."));

      if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
        const imcValue = weightValue / (heightValue * heightValue);
        setIMC(imcValue.toFixed(2)); // Arredonda o IMC para 2 casas decimais
      } else {
        setIMC("Valores inválidos"); // Exibe uma mensagem de erro se os valores forem inválidos
      }
    }
  };

  const getClassificacaoIMC = (imc) => {
    if (imc >= 40.0) {
      return { classificacao: "Obesidade grau III" };
    } else if (imc >= 35.0 && imc < 40.0) {
      return { classificacao: "Obesidade grau II" };
    } else if (imc >= 30.0 && imc < 35.0) {
      return { classificacao: "Obesidade grau I" };
    } else if (imc >= 25.0 && imc < 30.0) {
      return { classificacao: "Sobrepeso" };
    } else if (imc >= 18.6 && imc < 25.0) {
      return { classificacao: "Normal" };
    } else {
      return { classificacao: "Abaixo do normal" };
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container1}>
        <StatusBar />
        <Text style={styles.titulo}>Calculadora de IMC</Text>
        <Text style={styles.subtitulo}>
          Descubra qual o seu Indice de massa corporal.
        </Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.inputPeso}
            placeholder="Peso"
            placeholderTextColor={"black"}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
          <TextInput
            style={styles.inputAltura}
            placeholder="Altura"
            placeholderTextColor={"black"}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={calculateIMC}>
          <Text style={styles.textButton}>CALCULAR</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container2}>
        <Text style={styles.subImc}>Seu indice de massa corporal é</Text>
        <Text style={styles.imc}>{getClassificacaoIMC(imc).classificacao}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Cesul</Text>
      </View>
    </View>
  );
}
