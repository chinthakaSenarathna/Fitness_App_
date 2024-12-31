import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignupScreen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const onSignupPressed = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert("Error", "Please enter a valid email address");
        return;
      }
      // if (password.length < 8) {
      //   Alert.alert("Error", "Password must be at least 8 characters long");
      //   return;
      // }
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }
      console.log("Email:", email);
      console.log("Password:", password);
      navigation.navigate("Signin");
    }

    const onSignInWithGooglePressed = () => {
        console.warn("Sign In With Google");
    }

    const onSignInWithFacebookPressed = () => {
        console.warn("Sign In With Facebook");
    }
    
    const onSignInWithGithubPressed = () => {
        console.warn("Sign In With Github");
    }

    const onSigninPressed = () => {
        console.warn("Sign In");
        navigation.navigate("Signin");
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms Of Use");
    }

    const onPrivacyPressed = () => {
        console.warn("Privacy Policy");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput 
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false}
                />
                <CustomInput 
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInput 
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    secureTextEntry={true}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our 
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                <CustomButton 
                    text="Sign Up"
                    onPress={onSignupPressed}
                />
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
                    text="Have an account? Sign In" 
                    onPress={onSigninPressed}
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 30,
        color: '#051C60'
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})

export default SignupScreen