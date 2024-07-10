import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import SellPage from './pages/SellPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="主页" component={HomePage} />
      <Tab.Screen name="出闲置" component={SellPage} />
      <Tab.Screen name="我的" component={MyPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
