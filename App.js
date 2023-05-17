import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

/* --- Components --- */
import PrivateApartmans from './Screens/PrivateApartmans';
import Login from './Screens/Login';
import SmallHotels from './Screens/SmallHotels';
import UserSelect from './Screens/UserSelect';
import BackButton from './Components/UI/BackButton';
import Colors from './Constants/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.root}>
        <ImageBackground
        source={require('./assets/BackgrImgs/BG2.webp')}
        style={styles.imageBackground}
      >
        <NavigationContainer style={styles.container}>
          <StatusBar style="light" />
          <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'transparent'},
            headerTransparent: true,
            headerTitleStyle: {color:'black'},
          }}>
            <Stack.Screen 
              name="Login" 
              component={Login}
              options={({ navigation }) => ({
                title:'Log in',
                headerShown:false,
                headerBackTitle: '',
                headerLeft: () => (
                  <BackButton iconName="close" onPress={() => navigation.navigate("UserSelect")} />
                ),
              })}  
            />
            <Stack.Screen 
              options={{ headerShown:false}} 
              name="UserSelect" 
              component={UserSelect} 
            />
            <Stack.Screen 
              name="SmallHotels" 
              component={SmallHotels} 
              options={({ navigation }) => ({
                title:'Small hotel',
                headerBackTitle: '',
                headerLeft: () => (
                  <BackButton iconName="close" onPress={() => navigation.navigate("UserSelect")} />
                ),
              })} 
            />
            <Stack.Screen 
              name="PrivateApartments" 
              component={PrivateApartmans}
              options={({ navigation }) => ({
                title:'Private homeowner',
                headerBackTitle: '',
                headerLeft: () => (
                  <BackButton iconName="close" onPress={() => navigation.navigate("UserSelect")} />
                ),
              })}  
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
