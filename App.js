import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserSelect from './Screens/UserSelect';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <UserSelect />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
