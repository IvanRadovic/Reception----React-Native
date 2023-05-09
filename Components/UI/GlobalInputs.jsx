import { useState } from "react";
import { TextInput } from "react-native";

const GlobalInputs = (placeholder) => {

    const [text, setText] = useState('');

    return ( 
        <TextInput
            placeholder={placeholder}
            style={styles.inputs}
            placeholderTextColor=''
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
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000',
        fontSize: 16,
        marginVertical:10
    }
});