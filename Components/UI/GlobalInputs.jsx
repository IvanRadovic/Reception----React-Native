import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const GlobalInputs = ({placeholder}) => {

    const [text, setText] = useState('');

    return ( 
        <TextInput
            placeholder={placeholder}
            style={styles.inputs}
            placeholderTextColor='#5F8C9A'
            onChangeText={(value) => setText(value)}
            value={text}
        />
     );
}
 
export default GlobalInputs;

const styles = StyleSheet.create({
    inputs:{
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#5F8C9A',
        borderRadius: 8,
        color: 'black',
        fontSize: 15,
        marginVertical:10
    }
});