import { Pressable,View,Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import  { Ionicons }  from "@expo/vector-icons"

const UserSelectButton = ({title, icon, text, onPress}) => {

    const handlePress = () => {
    }


    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.allElements}>
                <View style={styles.iconText}>
                    <Ionicons name={icon} size={26} />
                    <View style={styles.containerText}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <Text style={styles.textDesc}>{text}</Text>
                    </View>
                </View>
                <Ionicons name='chevron-forward-outline' size={26} />
            </View>

        </Pressable>
      );
}

export default UserSelectButton;


const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:Colors.userSelectButton
    },
    allElements:{
        height:80,
        paddingVertical:8,
        paddingHorizontal:25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconText:{
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    containerText:{
        gap:5
    },
    textTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    textDesc:{
        fontSize:13
    }
});