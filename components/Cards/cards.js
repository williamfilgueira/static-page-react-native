import React from "react";

import { View, Text, Image } from "react-native";
import estilo from "./style";

import convidado from "../../assets/convidado.png";
import carne from "../../assets/carne.png";
import refrigerante from "../../assets/refrigerante.png";
import cerveja from "../../assets/cerveja.png";

export default function Cards() {
  return (
    <View style={estilo.boxDados}>
      <View style={estilo.boxCard}>
        <Image style={estilo.boxCardIcone} source={convidado} />
        <Text style={estilo.boxCardTexto}>Convidados</Text>
        <Text style={estilo.boxCardValor}>1</Text>
      </View>

      <View style={estilo.boxCard}>
        <Image style={estilo.boxCardIcone} source={carne} />
        <Text style={estilo.boxCardTexto}>400 GR</Text>
      </View>

      <View style={estilo.boxCard}>
        <Image style={estilo.boxCardIcone} source={refrigerante} />
        <Text style={estilo.boxCardTexto}>Refrigerante</Text>
        <Text style={estilo.boxCardValor}>700 Ml</Text>
      </View>
      <View style={estilo.boxCard}>
        <Image style={estilo.boxCardIcone} source={cerveja} />

        <Text style={estilo.boxCardTexto}>Cerveja</Text>

        <Text style={estilo.boxCardValor}>4 Latas</Text>
      </View>
    </View>
  );
}
