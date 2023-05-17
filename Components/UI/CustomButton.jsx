import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const CustomButton = ({title, onPress}) => {
    return ( 
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
        </Pressable>
     );
}
 
export default CustomButton;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:20,
        padding:12,
        borderRadius:20,
        backgroundColor: Colors.customButtonColor
    },
    textTitle:{
        textAlign:'center',
        color:Colors.fontColor100
    },
});