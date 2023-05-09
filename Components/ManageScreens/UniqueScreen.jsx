import { View, Text, StyleSheet } from "react-native";

import GlobalInputs from "../UI/GlobalInputs";
import Colors from "../../Constants/Colors";

const UniqueScreen = () => {
    return (
        <View style={styles.uniqueContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>General Information</Text>
                <Text style={styles.textDesc}> Please eneter your general and contact information below</Text>
            </View>
            <View style={styles.inputsContainer}>
                <GlobalInputs placeholder='Name' />
                <GlobalInputs placeholder='Email'/>
                <GlobalInputs placeholder='Phone'/>
            </View>
        </View>
    );
}
 
export default UniqueScreen;

const styles = StyleSheet.create({
    uniqueContainer:{
        flex:1,
        padding: 10,
    },
    textContainer:{
        width:'100%',width:'100%',
        marginVertical:15,
        gap:5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    textHeader:{
        fontSize:22,
        fontWeight:500
    },
    textDesc:{
        fontSize:13,
        color:Colors.fontColor200
    },
    inputsContainer:{
        gap:10
    }
});