import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

const initialState = {
  avatar: null,
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
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
      keyboardVerticalOffset={-194}
    >
      <View style={styles.form}>
        <View style={styles.avatarThumb}>
          <TouchableOpacity style={styles.btnAdd} activeOpacity={0.8}>
            <ImageBackground
              style={styles.imgBtnAdd}
              source={require("../../assets/images/add.png")}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <View style={styles.inner}>
          <TextInput
            style={[
              { ...styles.input, marginTop: 32 },
              focusedInput === "login" && styles.focused,
            ]}
            placeholder={"Логин"}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => handleFocus("login")}
            onBlur={handleBlur}
            value={state.login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
          />
          <TextInput
            style={[
              { ...styles.input, marginTop: 16 },
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
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 92,
    paddingBottom: 78,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatarThumb: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAdd: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  imgBtnAdd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default RegistrationScreen;
