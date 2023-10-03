import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './Screens/GetStarted';
import Details from './Screens/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Wallet from './Screens/Wallet';
import Sidebar from './Screens/Sidebar';
import Collection from './Screens/Collection';
import User from './Screens/User';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <View style={styles.container}>
      <NavigationContainer >


        <Stack.Navigator screenOptions={{ animationEnabled: false, gestureEnabled: false, }}>
          
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
          <Stack.Screen name="Collection" component={Collection} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={User} options={{ headerShown: false }} />


          </Stack.Navigator>
          <StatusBar style="dark" />
      </NavigationContainer >

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
