// 1. Import libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// 2. Create component that returns some JSX
const ComponentsScreen = () => {
  const name = 'Eric'
  return(
    <View>
        <Text style={styles.text}>Getting started with React Native!</Text>
        <Text style={styles.subheader}>My name is {name}.</Text>
    </View>
  )
};

// 3. Create stylesheet for styling component
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subheader: {
    fontSize: 30
  }
});

// 4. Export component to use elsewhere in project
export default ComponentsScreen;
