import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import UserSelect from './Screens/UserSelect';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark" />
      <UserSelect />
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
