import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from "native-base";
import UserApi from "../../apis/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Style from "./LoginScreen.style";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Format email invalide").required("Requis"),
      password: Yup.string().required("Requis"),
    }),

    onSubmit: async (values) => {
      try {
        const userToken = await UserApi.tokenLogin(e);

        if (userToken !== null) {
          await AsyncStorage.setItem("@user_token", JSON.stringify(userToken));
          navigation.navigate("Home");
        }
      } catch (err) {
        alert(err);
      }
    },
  });

  const onTest = async () => {
    try {
      const value = await AsyncStorage.getItem("@user_token");
      alert(value);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              onChangeText={formik.handleChange("email")}
              value={formik.values.email}
              onBlur={formik.handleBlur("email")}
              name="email"
              type="email"
            />
          </Item>
          {formik.touched.email && formik.errors.email ? (
            <Text style={Style.errorText}>{formik.errors.email}</Text>
          ) : null}
          <Item floatingLabel>
            <Label>Mot de passe</Label>
            <Input
              onChangeText={formik.handleChange("password")}
              value={formik.values.password}
              onBlur={formik.handleBlur("password")}
              name="password"
              type="password"
              secureTextEntry
            />
          </Item>
          {formik.touched.password && formik.errors.password ? (
            <Text style={Style.errorText}>{formik.errors.password}</Text>
          ) : null}
        </Form>
        <Button rounded style={Style.button} onPress={formik.handleSubmit}>
          <Text>Se connecter</Text>
        </Button>
        <Button rounded style={Style.button} onPress={() => onTest()}>
          <Text>TOKEN</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default LoginScreen;
