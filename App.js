import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

/* --- Components --- */
import PrivateApartmans from './Screens/PrivateApartmans';
import SmallHotels from './Screens/SmallHotels';
import UserSelect from './Screens/UserSelect';
import BackButton from './Components/UI/BackButton';
import Colors from './Constants/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:Colors.stackColor}
      }}>
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
            title:'Small hotel',
            headerBackTitle: '',
            headerLeft: () => (
              <BackButton iconName="close" onPress={() => navigation.navigate("UserSelect")} />
            ),
          })}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
