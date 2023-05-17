import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const GlobalInputs = ({value, name, placeholder, onChange, styleInput, style}) => {


    return (
        <View style={[styleInput, style]}>
            <TextInput
            name={name}
            placeholder={placeholder}
            style={styles.inputs}
            placeholderTextColor='#5F8C9A'
            onChangeText={onChange}
            value=''
        />
        </View>
     );
}
 
export default GlobalInputs;

const styles = StyleSheet.create({
    inputs:{
        height:50,
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#5F8C9A',
        borderRadius: 8,
        color: 'black',
        fontSize: 15,
        marginVertical:10
    }
});