import React, { useState } from "react";

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

const Chatlist = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

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
            <TextInput label="Enter user email" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}> Cancel</Button>
            <Button>Save</Button>
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
