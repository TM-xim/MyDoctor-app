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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Style from "./RegisterScreen.style";
import UserApi from "../../apis/user.api";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Le champ doit contenir moins de 20 caractères")
        .required("Requis"),
      lastName: Yup.string()
        .max(20, "Le champ doit contenir moins de 20 caractères")
        .required("Requis"),
      email: Yup.string().email("Format email invalide").required("Requis"),
      password: Yup.string().required("Requis"),
    }),

    onSubmit: async (values) => {
      try {
        const data = await UserApi.register(values);
        //alert(JSON.stringify(data.token));

        if (data.token !== null) {
          await AsyncStorage.setItem("@user_token", JSON.stringify(data.token));
          navigation.navigate("Home");
        }
      } catch (err) {
        alert(err);
      }
    },
  });

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label htmlFor="lastName">Nom</Label>
            <Input
              onChangeText={formik.handleChange("lastName")}
              value={formik.values.lastName}
              onBlur={formik.handleBlur("lastName")}
              name="lastName"
              id="lastName"
              type="text"
            />
          </Item>
          {formik.touched.lastName && formik.errors.lastName ? (
            <Text style={Style.errorText}>{formik.errors.lastName}</Text>
          ) : null}
          <Item floatingLabel>
            <Label>Prénom</Label>
            <Input
              onChangeText={formik.handleChange("firstName")}
              value={formik.values.firstName}
              onBlur={formik.handleBlur("firstName")}
              name="firstName"
              id="firstName"
              type="text"
            />
          </Item>
          {formik.touched.firstName && formik.errors.firstName ? (
            <Text style={Style.errorText}>{formik.errors.firstName}</Text>
          ) : null}
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
              /*               value={state.password}
              onChangeText={(text) => setState({ ...state, password: text })} */
              name="password"
              type="password"
              secureTextEntry
            />
          </Item>
          {formik.touched.password && formik.errors.password ? (
            <Text style={Style.errorText}>{formik.errors.password}</Text>
          ) : null}
        </Form>
        <Button
          type="submit"
          rounded
          style={Style.button}
          onPress={formik.handleSubmit}
        >
          <Text>Créer mon compte</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
