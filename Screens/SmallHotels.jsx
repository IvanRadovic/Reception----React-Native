import { ImageBackground, View, StyleSheet } from "react-native";
import UniqueScreen from "../Components/ManageScreens/UniqueScreen";

const SmallHotels = () => {
    return (  
        <View style={styles.root}>
            <ImageBackground 
                source={require('../assets/BackgrImgs/BG4.webp')}
                style={styles.imageBackground}
            >
            <UniqueScreen />
            </ImageBackground> 
        </View>        
    );
}
 
export default SmallHotels;

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
      },
});