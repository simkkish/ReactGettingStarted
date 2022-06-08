import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Tickets from './Tickets';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} haderMode={'screen'}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}>
          {props => <Home {...props} username={'Sports Fan'} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Tickets'}
          component={Tickets}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
