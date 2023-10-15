import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/main';
import Home from './screens/home';
import Link1 from './screens/link1';
import Friends from './screens/friends';
import Vid from './screens/video';
import SwitchTextInput from './screens/switch-textinput';
import FullName from './screens/fullname';
import Address from './screens/address';
import SchoolAttended from './screens/schoolattended';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true}}>
    <Stack.Screen
      name="Main" 
      component={Main}
      options={{
        title: 'My Autobiography',
        headerTitleAlign: 'center', 
      }}
    />
      <Stack.Screen name="Home" component={Home}  options={{
        title: 'Home',
        headerTitleAlign: 'left', 
      }}/>
      <Stack.Screen name="FullName" component={FullName}  options={{
        title: 'Full Name',
        headerTitleAlign: 'left', 
      }}/>
      <Stack.Screen name="Address" component={Address}  options={{
        title: 'Address',
        headerTitleAlign: 'left', 
      }}/>
      <Stack.Screen name="SchoolAttended" component={SchoolAttended}  options={{
        title: 'School',
        headerTitleAlign: 'left', 
      }}/>
      <Stack.Screen name="Link1" component={Link1} options={{
        title: 'Linking and WebBrowser',
        headerTitleAlign: 'left',
      }} />
      <Stack.Screen name="Friends" component={Friends} options={{
        title: 'ScrollView and FlatList',
        headerTitleAlign: 'left',
      }}/>
      <Stack.Screen name="Video" component={Vid} options={{
        title: 'Video and VideoThumbnails',
        headerTitleAlign: 'left',
      }}/>
      <Stack.Screen name="SwitchTextInput" component={SwitchTextInput} options={{
        title: 'Switch and Text Input',
        headerTitleAlign: 'left',
      }}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
}








