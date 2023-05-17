import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useState } from "react";
import  { Ionicons }  from "@expo/vector-icons";

import GlobalInputs from "../Components/UI/GlobalInputs";
import Colors from "../Constants/Colors";
import CustomButton from "../Components/UI/CustomButton";
import { loginInputs } from "../Constants/ConstantInputs";

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [inputValues, setInputValue] = useState({
        email:'',
        password:''
    });

    /* -- Pressing the forgot password -- */
    const handleForgotPassword = () => {
        setShowLoginForm(false);
        setShowEmailForm(true);
      };
    /* --- Pressing submit button after entering  --- */
    const handleSubmitEmail = () => {
        setShowEmailForm(false);
        setShowResetPassword(true);
      };
    /* --- Pressing submit button after new password */
    const handleSubmitNewPassword = () => {
        setNewPassword('');
        setConfirmPassword('');
        setShowResetPassword(false);
        setShowLoginForm(true);
      };

    /* -- Going back */
    const handleGoBack = () => {
        setShowLoginForm(true);
        setShowEmailForm(false);
    };

    /* ---Input values -- */
    const handleInputChange = ( key, value) => {
        setInputValue({ ...inputValues, [key]:value });
    }

    return ( 
        <View style={styles.root}>
            <ImageBackground 
                    source={require('../assets/BackgrImgs/BG3.png')} 
                    style={styles.imageBackground}
                >
                <View style={styles.containerLogin}>
                    {/* --- Image -- */}
                
                        <View style={styles.containerLogo}>
                            <Image source={require('../assets/Logo/Hotel.png')} />
                        </View>
                    
                    <View style={styles.containerElements}>
                        {/* ---- LOGIN FORM REGULAR --- */}
                        {/* -- Text and inputs -- */}
                        {showLoginForm && 
                            <View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.headerText}>Welcome</Text>
                                    <Text style={styles.textDecsc}>Manage your properites and see all your reservations in one place</Text>
                                </View>
                                {/* --- Inputs -- */}
                                <View style={styles.inputsContainer}>
                                    {
                                        loginInputs.map((input, index) => (
                                            <GlobalInputs
                                                key={index}
                                                placeholder={input.placeholder}
                                                value={inputValues[input.stateKey]}
                                                onChange={(text) => handleInputChange(input.stateKey, text)}
                                            />
                                        ))
                                    }
                                    <Pressable onPress={handleForgotPassword}>
                                        <Text style={styles.textPass}>Forgot Password?</Text>
                                    </Pressable>
                                </View>
                            </View>}

                            {/* --- Showing EMAIL for submit --- */}
                        {showEmailForm && 
                            <View>
                                <Pressable onPress={handleGoBack}>
                                        <Ionicons name="arrow-back-outline" size={25} />
                                </Pressable>
                                <View style={styles.textContainer}>
                                    <Text style={styles.headerText}>Forgot password</Text>
                                    <Text style={styles.textDecsc}>Please enter your email and we will send you instructions for resetting your password</Text>
                                </View>
                                <GlobalInputs
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholder="Email"
                                />
                            </View>}
                        {showResetPassword && 
                            <View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.headerText}>New password</Text>
                                    <Text style={styles.textDecsc}>Enter your password below</Text>
                                </View>
                                <GlobalInputs
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholder="New password"
                                />
                                <GlobalInputs
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholder="Confirm password"
                                />
                            </View>
                        }
                        {/* -- Button --- */}
                        { 
                        showLoginForm && <CustomButton title='Log in' onPress={() => navigation.navigate('UserSelect')} />
                        }
                        { 
                        showEmailForm && <CustomButton title='Send' onPress={handleSubmitEmail} />
                        }
                        { 
                        showResetPassword && <CustomButton title='Submit' onPress={handleSubmitNewPassword} />
                        }
                    </View>
                </View>
            </ImageBackground>
        </View>
     );
}
 
export default Login;

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'transparent'

    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
      },
    containerLogin:{
        flex:1,
    },
    containerLogo:{
        flex:1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        padding:10,
        borderBottomWidth:0
    },
    containerElements:{
        flex:3,
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        paddingHorizontal:20,
        borderTopColor:'white',
        borderTopWidth:2,
        backgroundColor:'white',
        borderTopRightRadius:'50%',
        borderTopLeftRadius:'50%',
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center',
        gap:15,
        marginBottom:18
    },
    headerText:{
        fontSize:22,
        fontWeight:'bold'
    },
    textDecsc:{
        fontSize:16,
        lineHeight:24,
        textAlign:'center',
        opacity:0.5
    },
    inputsContainer:{
        gap:10
    },
    textPass:{
        color:'darkblue'
    },
    
});