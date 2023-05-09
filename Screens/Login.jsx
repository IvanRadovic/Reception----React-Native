import { View, Text, Image, StyleSheet } from "react-native";

import GlobalInputs from "../Components/UI/GlobalInputs";
import Colors from "../Constants/Colors";
import CustomButton from "../Components/UI/CustomButton";

const Login = () => {
    return ( 
        <View style={styles.containerLogin}>
            <View style={styles.containerLogo}>
                <Image source={require('../assets/Logo/Hotel.png')} />
            </View>
            <View style={styles.containerForm}>
                {/* -- Text and inputs -- */}
                <View>
                    <View>
                        <Text>Welcome</Text>
                        <Text>Manage your properites and see all your reservations in one place</Text>
                    </View>
                    <View>
                        <GlobalInputs placeholder='Email' />
                        <GlobalInputs placeholder='Password'/>
                        <Text>Forgot Password?</Text>
                    </View>
                </View>
                {/* -- Button --- */}
                <CustomButton title='Log in' />
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
    containerForm:{
        flex:3,
        padding:10,
        borderTopColor:'white',
        borderTopWidth:2,
        backgroundColor:'white',
        borderTopRightRadius:'50%',
        borderTopLeftRadius:'50%',
    }
    
});