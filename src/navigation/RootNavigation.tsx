import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabs from './TabNavigation';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootRouteProps, RootStackParamList} from 'types/navigation';
import MovieDetailScreen from 'screens/MovieDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC<{}> = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return navigation;
};

export function useAppRoute<
  T extends keyof RootStackParamList,
>(): RootRouteProps<T> {
  const route = useRoute<RootRouteProps<T>>();

  return route as RootRouteProps<T>;
}

export default RootNavigation;
