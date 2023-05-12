import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
/* -- Components --- */
import GlobalInputs from "../../UI/GlobalInputs";
import Colors from "../../../Constants/Colors";
import { generalInputs } from "../../../Constants/ConstantInputs";

const GeneralInformation = () => {

    const [generalValues, setGeneralValues] = useState({
        hotelName:'',
        email:'',
        phone:'',
        fax:'',
    })

    const handleValues = (key, value) => {
      setGeneralValues({ ...generalValues, [key]:value })
    }
    return ( 
        <View style={styles.uniqueContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>General Information</Text>
                    <Text style={styles.textDesc}> Please eneter your general and contact information below</Text>
                </View>
                <View style={styles.inputsContainer}>
                    {
                        generalInputs.map((input, index) => (
                            <GlobalInputs
                            key={index}
                            value={generalValues[input.stateKey]}
                            placeholder={input.placeholder}
                            onChange={(text) => handleValues(input.stateKey, text)}
                            />
                        ))
                    }
                </View>
        </View>
        
     );
}
 
export default GeneralInformation;

const styles = StyleSheet.create({
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
    },
    textAddress:{
        fontSize:20,
        fontWeight:400
    }
});