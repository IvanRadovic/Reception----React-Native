import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

/* --- Components --- */
import PrivateApartmans from './Screens/PrivateApartmans';
import SmallHotels from './Screens/SmallHotels';
import UserSelect from './Screens/UserSelect';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions>
        <Stack.Screen options={{ headerShown:false}} name="UserSelect" component={UserSelect} />
        <Stack.Screen name="SmallHotels" component={SmallHotels} />
        <Stack.Screen name="PrivateApartments" component={PrivateApartmans} />
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
