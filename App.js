import React, { useRef } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const ButtonBasics = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale value

  const onPress = () => {
    Alert.alert("You tapped the button!");
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9, // Scale down to 90%
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Scale back to original size
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Button title="Press Me" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Button title="Press Me" color="#841584" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Button title="This looks great!" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Button title="OK!" color="#841584" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ButtonBasics;
