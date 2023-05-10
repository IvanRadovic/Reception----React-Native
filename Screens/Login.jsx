import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import GlobalInputs from "../Components/UI/GlobalInputs";
import Colors from "../Constants/Colors";
import CustomButton from "../Components/UI/CustomButton";
import { loginInputs } from "../Constants/ConstantInputs";
import { useState } from "react";

const Login = ({navigation}) => {

    const [inputValues, setInputValue] = useState({
        email:'',
        password:''
    });

    const handleInputChange = ( key, value) => {
        setInputValue({ ...inputValues, [key]:value });
    }

    return ( 
        <View style={styles.containerLogin}>
            {/* --- Image -- */}
            <View style={styles.containerLogo}>
                <Image source={require('../assets/Logo/Hotel.png')} />
            </View>
            <View style={styles.containerElements}>
                {/* -- Text and inputs -- */}
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
                        <Pressable>
                            <Text style={styles.textPass}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                </View>
                {/* -- Button --- */}
                <CustomButton title='Log in' onPress={() => navigation.navigate('UserSelect')} />
            </View>
        </View>
     );
}
 
export default Login;

const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        backgroundColor:Colors.backgroundColor300,
    },
    containerLogo:{
        flex:1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.backgroundColor300,
        marginTop:20,
        padding:10,
    },
    containerElements:{
        flex:3,
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
    }
    
});