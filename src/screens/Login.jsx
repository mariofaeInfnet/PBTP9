import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import firebase from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  function checkUser() {
    setIsLoading(true);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMsg("Valid user.");
      })
      .catch((error) => {
        setMsg(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <View>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <View>
          <Text>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Text>Password:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
          />
          <Pressable onPress={() => checkUser()} style={styles.btn}>
            <Text style={styles.btnLabel}>Access</Text>
          </Pressable>
        </View>
      )}
      {msg && (
        <View style={Platform.OS == "web" ? styles.msgContainer : null}>
          <Text>{msg}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
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
    color: "white",
  },
  msgContainer: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
  },
});
