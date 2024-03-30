import React from "react";
import { StyleSheet, View } from "react-native";
import BooksListPage from "./screens/BooksListPage";
import Login from "./screens/Login"; // Verificar esse erro aqui depois
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.BooksListPage}>
          <Stack.Screen
            name={Routes.BooksListPage}
            component={BooksListPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.Login}
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
