import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../routes";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.menuStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.BooksListPage)}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
