import React, { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const SigninScreen = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        Alert.alert('Error', 'Please enter a valid email address');
        return;
      }
  
      if (password.trim() === '') {
        Alert.alert('Error', 'Password cannot be empty');
        return;
      }
      console.log("Email:", username);
      console.log("Password:", password);
      navigation.navigate("Home", { email: username });
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    const onSignInWithGooglePressed = () => {
        console.warn("Sign In With Google");
    }

    const onSignInWithFacebookPressed = () => {
        console.log("Sign In With Facebook");
    }

    const onSignInWithGithubPressed = () => {
        console.warn("Sign In With Github");
    }

    const onSignupPressed = () => {
        console.warn("Sign Up");
        navigation.navigate("Signup");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain" 
                />

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                    secureTextEntry={false} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                <CustomButton 
                    text="Sign In" 
                    onPress={onSignInPressed} />
                <CustomButton 
                    text="Forgot Password" 
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY" />
                <CustomButton 
                    text="Sign In With Google" 
                    onPress={onSignInWithGooglePressed} 
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                    />
                <CustomButton 
                    text="Sign In With Facebook" 
                    onPress={onSignInWithFacebookPressed}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                    />
                <CustomButton 
                    text="Sign In With Github" 
                    onPress={onSignInWithGithubPressed}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                    />
                <CustomButton 
                    text="Dont't have an account? Create one" 
                    onPress={onSignupPressed}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#000",
    },
    logo: {
        width: '60%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 30
    }
});

export default SigninScreen;