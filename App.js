import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Components/Home/Home';
import Users from './Components/Home/Users/Users';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/"><Text>Home</Text></Link>
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/users"><Text>Users</Text></Link>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
        </Routes>
      </NativeRouter>
    </View>
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
