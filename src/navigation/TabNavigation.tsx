import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListBookedScreen from 'screens/ListBookedScreen';
import ListFavoriteScreen from 'screens/ListFavoriteScreen';
import ListMovieScreen from 'screens/ListMovieScreen';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC<any> = () => {
  const _renderIcon = (icName: string) => <Icon name={icName} size={24} />;

  return (
    <Tab.Navigator initialRouteName="activity">
      <Tab.Screen
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: () => _renderIcon('wrench-outline'),
        }}
        name="movies"
        component={ListMovieScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => _renderIcon('bell-ring-outline'),
        }}
        name="favorites"
        component={ListFavoriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: () => _renderIcon('cog-outline'),
        }}
        name="booked"
        component={ListBookedScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
