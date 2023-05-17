import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";

/* --- Components --- */
import DropdownComponent from "../Components/UI/Dropdown";
import UserSelectButton from "../Components/UI/UserSelecetButton";
import { StatusBar } from "expo-status-bar";

const UserSelect = ({ navigation}) => {

    return ( 
        <>
        <StatusBar style='dark'/>
        <ImageBackground 
                source={require('../assets/BackgrImgs/BG3.png')}
                style={styles.imageBackground}
            >
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
                        <UserSelectButton title='Small hotel' icon='bed-outline' text='Hotel org. registered by law' onPress={() => navigation.navigate('SmallHotels')}  />
                        <UserSelectButton  title='Private Homewner' icon='home-outline' text='Owners renting their property' onPress={() => navigation.navigate('PrivateApartments')} />
                    </View>
                </View>
        </View>
        </ImageBackground>
        </>
        
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
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', 
        alignItems: 'center', 
      },

});