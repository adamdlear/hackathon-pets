import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from './pages/Dashboard.js';
import Account from './pages/Account.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
              />
          )
          }}
      />
      <Tab.Screen
          name="Account"
          component={Account}
          options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
              />
          )
          }}/>
      </Tab.Navigator>

    </NavigationContainer>
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

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />