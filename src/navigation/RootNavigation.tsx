import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListProductScreen from '../screens/ListProductScreen';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="ListProductScreen">
      <Stack.Screen
        name="ListProductScreen"
        component={ListProductScreen}
        options={{title: 'Products'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
