import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createAccount = async () => {
    console.warn("hii!!");
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await response.user.updateProfile({ displayName: name });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      alert(e.message);
    }
  };

  return (
    <View style={{ margin: 16 }}>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ marginTop: 12 }}
      />
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginTop: 12 }}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ marginTop: 12 }}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button mode="outlined">Sign In</Button>
        <Button
          mode="contained"
          onPress={() => createAccount()}
          loading={isLoading}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
