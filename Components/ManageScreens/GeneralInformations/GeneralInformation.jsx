import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

/* -- Components --- */
import GlobalInputs from "../../UI/GlobalInputs";
import Colors from "../../../Constants/Colors";
import CustomButton from "../../UI/CustomButton"
import { generalInputs } from "../../../Constants/ConstantInputs";

const GeneralInformation = () => {

    const navigation = useNavigation();

    const [info, setInfo] = useState(null);
    const [generalValues, setGeneralValues] = useState({
        hotelName:'',
        email:'',
        phone:'',
        fax:'',
    })

    const handleValues = (key, value) => {
      setGeneralValues({ ...generalValues, [key]:value })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://130.61.83.69/api/entities/roomtype/list');
                const data = response.data;
                setInfo(data);
          } catch (error) {
            console.log(error);
          }
        }

        fetchData();
      },[]);

    /* --- Handle submit --- */
    const handleSubmit = () => {
        navigation.navigate('Details', );
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
                <View style={styles.buttonContainer}>
                <CustomButton title="Check your rooms" onPress={handleSubmit} style={styles.button} />
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
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row'
    },
    button:{
        color:Colors.customButtonColor,
        backgroundColor:"grey",
        borderWidth:2,
        borderColor:"white"
    }
});