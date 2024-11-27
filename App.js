import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>2 kotak dengan warna yang berbeda</Text>

      {/* Wrapper untuk kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: "yellow" }]}></View>
        {/* Kotak 2 */}
        <View style={[styles.box, { backgroundColor: "purple" }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 50,
  },
  box: {
    width: 100,
    height: 100,
  },
});
