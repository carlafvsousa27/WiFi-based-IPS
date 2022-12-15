import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaInicial from './screens/paginaInicial';
import SelecaoHospital from './screens/selecaoHospital';
import Trajeto from './screens/trajeto';
import TabBarHospitais from './screens/tabBarHospitais';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="paginaInicial" component={PaginaInicial} />
          <Stack.Screen name="selecaoHospital" component={SelecaoHospital} />
          <Stack.Screen name="trajeto" component={Trajeto} />
          <Stack.Screen name="tabBarHospitais" component={TabBarHospitais} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;