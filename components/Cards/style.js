import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  boxDados: {
    padding: 20,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  boxCard: {
    backgroundColor: "#ddf2ed",
    minWidth: 120,

    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00a79d",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
  boxCardIcone: {
    width: 20,
    height: 30,
  },
  boxCardTexto: {
    color: "#00a79d",
  },
  boxCardValor: {
    color: '#00a79d',
    fontSize: 20,
    fontWeight: "700"
  },
});

export default estilo;
