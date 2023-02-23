import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  // TouchableWithoutFeedback,
} from "react-native";

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (input) => {
    setFocusedInput(input);
    setIsShowKeyboard(true);
  };

  // const keyboardHide = () => {
  //   Keyboard.dismiss();
  //   setIsShowKeyboard(false);
  // };

  const handleBlur = () => {
    setFocusedInput(null);
    setIsShowKeyboard(false);
  };

  return (
    // <TouchableWithoutFeedback onPress={keyboardHide}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.form, marginBottom: isShowKeyboard && -194 }}>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput
          style={[
            { ...styles.input, marginTop: 32 },
            focusedInput === "login" && styles.focused,
          ]}
          placeholder={"Логин"}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => handleFocus("login")}
          onBlur={handleBlur}
        />
        <TextInput
          style={[styles.input, focusedInput === "email" && styles.focused]}
          placeholder={"Адрес электронной почты"}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
        <TextInput
          style={[styles.input, focusedInput === "password" && styles.focused]}
          secureTextEntry={true}
          placeholder={"Пароль"}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />

        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
      </View>
    </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    height: 50,
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 19,
  },
  focused: {
    borderColor: "#FF6C00",
  },
  btn: {
    marginTop: 43,
    paddingVertical: 16,
    paddingHorizontal: 94.5,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
