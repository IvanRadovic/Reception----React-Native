import { ImageBackground, View, StyleSheet } from "react-native";
import UniqueScreen from "../Components/ManageScreens/UniqueScreen";

const PrivateApartmans = () => {

    return ( 
        <View style={styles.root}>
            <ImageBackground 
                source={require('../assets/BackgrImgs/BG2.png')}
                style={styles.imageBackground}
            >
                <UniqueScreen />
            </ImageBackground> 
        </View>
        
        
     );
}
 
export default PrivateApartmans;

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        // justifyContent: 'center', 
        // alignItems: 'center', 
      },
});