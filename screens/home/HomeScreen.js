import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import UserApi from "../../apis/user.api";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { View } from "react-native";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [userInfos, setUserInfos] = useState({});
  useEffect(() => {
    const getInfos = async () => {
      try {
        const userToken = await AsyncStorage.getItem("@user_token");
        const user = await UserApi.getInfos(JSON.parse(userToken).token);
        setUserInfos(user["user"]);
      } catch {
        alert("Failed to get user infos");
      }
    };
    getInfos();
  }, []);

  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Text>ID : {JSON.stringify(userInfos.id)}</Text>
          </ListItem>
          <ListItem>
            <Text>First Name : {JSON.stringify(userInfos.firstName)}</Text>
          </ListItem>
          <ListItem>
            <Text>Last Name : {JSON.stringify(userInfos.lastName)}</Text>
          </ListItem>
          <ListItem>
            <Text>Email : {JSON.stringify(userInfos.email)}</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default HomeScreen;
