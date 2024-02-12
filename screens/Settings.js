import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";

import { Avatar, Title, Subheading, Button } from "react-native-paper";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../network/firebase";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth);
  });

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Avatar.Text label="UN" />
      <Title>User Name</Title>
      <Subheading>user@name.com</Subheading>
      <Button onPress={() => signOut(auth)}>Sign Out</Button>
    </View>
  );
};

export default Settings;
