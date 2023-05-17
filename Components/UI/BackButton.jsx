import { Pressable, StyleSheet } from "react-native";
import  { Ionicons }  from "@expo/vector-icons";

import Colors from "../../Constants/Colors";

const BackButton = ({iconName, onPress}) => {
    return ( 
        <Pressable onPress={onPress}>
            <Ionicons style={styles.iconContainer} color={Colors.backButtonColor} name={iconName} size={26} />
        </Pressable>
     );
}
 
export default BackButton;

const styles = StyleSheet.create({
    iconContainer:{
        marginLeft:10
    }
});