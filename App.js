import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import paginaInicial from './screens/paginaInicial';
import selecaoHospital from './screens/selecaoHospital';

const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="paginaInicial" component={paginaInicial} />
          <Stack.Screen name="selecaoHospital" component={selecaoHospital} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;