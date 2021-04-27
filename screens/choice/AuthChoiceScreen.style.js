import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: '40%'
  },
  loginButton: { alignSelf: "center", marginTop: 20 },
  registerButton: { alignSelf: "center" },
  longLine: {
    height: 1.1,
    backgroundColor: "#E6E6E6",
    marginBottom: 10,
    marginTop: 10,
    flex: 1,
  },

  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 20
  },

  textLine: {
    width: "auto",
    marginHorizontal: 10,
    color: "#A7ADBD",
  },
});
