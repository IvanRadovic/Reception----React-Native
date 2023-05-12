import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import { hotelAddressInputs } from "../../../Constants/ConstantInputs";
import GlobalInputs from "../../UI/GlobalInputs";

const HotelAddress = () => {
    const [generalValues, setGeneralValues] = useState({
        city:'',
        postal:'',
        adress:'',
    })

    const handleValues = (key, value) => {
      setGeneralValues({ ...generalValues, [key]:value })
    }
    return ( 
            <View style={styles.uniqueContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>Hotel Address</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.rowInputs}>
                        {hotelAddressInputs.slice(0, 2).map((input, index) => (
                        <GlobalInputs
                            key={index}
                            value={generalValues[input.stateKey]}
                            placeholder={input.placeholder}
                            onChange={(text) => handleValues(input.stateKey, text)}
                            styleInput={styles.inputs}
                        />
                        ))}
                    </View>
                    <View style={styles.columnInputs}>
                        {hotelAddressInputs.slice(2).map((input, index) => (
                        <GlobalInputs
                            key={index}
                            value={generalValues[input.stateKey]}
                            placeholder={input.placeholder}
                            onChange={(text) => handleValues(input.stateKey, text)}
                        />
                        ))}
                    </View>
                </View>
            </View>
     );
}
 
export default HotelAddress;

const styles = StyleSheet.create({
    textContainer:{
        width:'100%',width:'100%',
        marginVertical:15,
        marginVertical: 15,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    textHeader:{
        fontSize:18,
        fontWeight:500
    },
    textDesc:{
        fontSize:13,
        color:Colors.fontColor200
    },
    inputsContainer:{
        flex:1,
    },
    textAddress:{
        fontSize:20,
        fontWeight:400
    },
    rowInputs: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      columnInputs: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
      },
      inputs:{
        flex:1,
        marginHorizontal: 10,
      }
});