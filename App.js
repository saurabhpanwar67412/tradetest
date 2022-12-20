import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import './App.css';
// import Switch from './src/components/Switch';
import Dashboard from './src/components/Dashboard';
import login from './src/components/Login';
import welcome from './src/components/Welcome'

export default function App() {
  return (
    // <View style={styles.container}>
    <welcome/>
      // <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
