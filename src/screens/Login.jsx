import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  ActivityIndicator,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import firebase from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  function verificarUsuario() {
    setIsLoading(true);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setMsg("Usuário válido.");
      })
      .catch((error) => {
        setMsg(error.message);
      })
      .finally(setIsLoading(false));
  }

  return (
    <View>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <View>
          <Text>Email:</Text>
          <TextInput value={userEmail} onChangeText={setUserEmail} />
          <Text>Senha:</Text>
          <TextInput value={userPassword} onChangeText={setUserPassword} />
          <Pressable onPress={() => verificarUsuario()} style={styles.btn}>
            <Text style={styles.btnLabel}>Acessar</Text>
          </Pressable>
        </View>
      )}
      {msg && (
        <View styles={Platform.OS == "web" ? styles.btn : styles.btnLabel}>
          <Text>{msg}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 2,
    ...Platform.select({
      android: {
        backgroundColor: "blue",
      },
      default: {
        backgroundColor: "#219ebc",
      },
    }),
  },
  btnLabel: {
    textAlign: "center",
  },
});
