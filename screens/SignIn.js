import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../network/firebase";
import { useNavigation } from "@react-navigation/core";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const signIn = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(`An user with email:${response.user.email} signed in.`);
      navigation.popToTop();
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return (
    <View style={{ margin: 16 }}>
      {!!error && (
        <Subheading style={{ color: "red", textAlign: "center", margin: 16 }}>
          {error}
        </Subheading>
      )}
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginTop: 12 }}
        keyboardType="email-address"
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ marginTop: 12 }}
        secureTextEntry
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button mode="outlined" onPress={() => navigation.navigate("SignUp")}>
          SignUp
        </Button>
        <Button mode="contained" onPress={() => signIn()} loading={isLoading}>
          SignIn
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
