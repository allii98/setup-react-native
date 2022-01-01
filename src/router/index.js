import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Profile, EditProfile, ChangePassword, Login, Absen, Histori } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const mainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="mainApp" component={mainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password' }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Absen" component={Absen} options={{ title: 'Absensi' }} />
            <Stack.Screen name="Histori" component={Histori} options={{ title: 'Riwayat Absensi' }} />
        </Stack.Navigator>
    )
}

export default Router
