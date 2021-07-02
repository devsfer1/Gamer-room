import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import LoginScreen from '../screens/out/Login'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      gestureEnabled: 'true',
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode="none">
      <stackRoutes.Screen name="Login" component={LoginScreen} />
  </stackRoutes.Navigator>
);

export default AppRoutes