import React, { useState, useEffect } from "react";

import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";
import { auth, firestore } from "../network/firebase";

import { addDoc, getDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Chatlist = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged fonksiyonu çalıştı");
      setEmail(user?.email ?? "");
    });
  }, []);

  const createChat = async () => {
    console.log("createChat fonksiyonu çalıştı");
    console.log(`Email : ${email}`);
    console.log(`userEmail : ${userEmail}`);
    //if (!email || !userEmail) return;

    try {
      console.log("createChat: Try çalıştı");
      const docRef = await addDoc(collection(firestore, "chats"), {
        users: [email, userEmail],
      });
    } catch (e) {
      console.log("createChat: Catch çalıştı");
      console.error("Error aldındı: ", e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#b8c7cf" }}>
      <List.Item
        title="User Name"
        description="Item description"
        left={() => <Avatar.Text label="UN" size={56} />}
      />
      <Divider inset style={{ backgroundColor: "red" }} />
      <List.Item
        title="User Name"
        description="Item description"
        left={() => <Avatar.Text label="UN" size={56} />}
      />
      <List.Item
        title="User Name"
        description="Item description"
        left={() => <Avatar.Text label="UN" size={56} />}
      />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Enter user email"
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}> Cancel</Button>
            <Button onPress={() => createChat()}>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16 }}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default Chatlist;
