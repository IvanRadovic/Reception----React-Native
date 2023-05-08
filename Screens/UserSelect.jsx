import { View, Text, StyleSheet } from "react-native";

/* --- Components --- */
import DropdownComponent from "../Components/UI/Dropdown";
import UserSelectButton from "../Components/UI/UserSelecetButton";

const UserSelect = () => {
    return ( 
        <View style={styles.componentContainer}>
            <View style={styles.containerForAllElements}>
                <View style={styles.containerLang}>
                    <Text style={styles.header}>Welcome</Text>
                    <DropdownComponent />
                </View>
                <View>
                    <Text style={styles.textDesc}>
                        Its time to setup your hotel, please tell us what type of organization are you:
                    </Text>
                </View>
                <View>
                    <UserSelectButton title='Small hotel' icon='bed-outline' text='Hotel org. registered by law'  />
                    <UserSelectButton  title='Private Home' icon='home-outline' text='Owners renting their property'/>
                </View>
            </View>
            
        </View>
        
     );
}
 
export default UserSelect;

const styles = StyleSheet.create({
    componentContainer:{
        flex:1,
        paddingVertical:15,
        paddingHorizontal:10
    },
    containerForAllElements:{
        marginTop:35,
        marginHorizontal:15,
        gap:20
    },
    containerLang:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        fontSize:30,
    },
    textDesc:{
        fontSize:15,
        lineHeight:25
    },

});