import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [securePass, setSecurePass] = useState(true);

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const toggleSecurePass = () => {
    setSecurePass(!securePass);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-244}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Войти</Text>
        <View style={styles.inner}>
          <TextInput
            style={[
              { ...styles.input, marginTop: 32 },
              focusedInput === "email" && styles.focused,
            ]}
            placeholder={"Адрес электронной почты"}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={[
                styles.input,
                focusedInput === "password" && styles.focused,
              ]}
              secureTextEntry={securePass}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              style={styles.btnSecure}
              activeOpacity={0.8}
              onPress={toggleSecurePass}
            >
              <Text style={styles.titleBtnSecure}>
                {securePass ? "Показать" : "Скрыть"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={handleSubmit}
          >
            <Text style={styles.btnTitle}>Войти</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 32,
    paddingBottom: 144,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },
  inner: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  focused: {
    borderColor: "#FF6C00",
  },
  btn: {
    marginTop: 43,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  btnSecure: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  titleBtnSecure: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default LoginScreen;
