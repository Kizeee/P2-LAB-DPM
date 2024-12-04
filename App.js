import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>2 kotak dengan warna yang berbeda</Text>

      {/* Kotak-kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: "#FF6347" }]} />
        <View style={[styles.box, { backgroundColor: "#4682B4" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 50,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
