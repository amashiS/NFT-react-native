import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './Screens/GetStarted';
import Home from './Screens/Home';
import Details from './Screens/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <View style={styles.container}>
      <NavigationContainer >


        <Stack.Navigator screenOptions={{ animationEnabled: false, gestureEnabled: false, }}>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />

          </Stack.Navigator>
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
