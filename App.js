import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Details from './src/pages/Details/'
import Login from './src/pages/Login/';
import NewUser from './src/pages/NewUser/';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Task"
          component={Task}
          options={{
            headerTintColor: "#f92e6a",
            headerLeft: null
          }}
        />
        <Stack.Screen 
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

