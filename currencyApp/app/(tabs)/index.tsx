import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [fromlkr, setfromlkr] = useState("");
  const [tousd, setfromUsd] = useState("");

  const convert = () => {
    const Rate = 0.003;
    const converted = (parseFloat(fromlkr) * Rate).toFixed(2);
    setfromUsd(converted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount "
        value={fromlkr}
        onChangeText={setfromlkr}
      />

      <Button title="Convert" onPress={convert} />

      {tousd ? <Text style={styles.result}>USD: ${tousd}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 25,
    color: "black",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
