import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import EducationScreen from '../screens/EducationScreen';
import GamesScreen from '../screens/GamesScreen';
import TrackerScreen from '../screens/TrackerScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#90CFF7', // Light blue header color
                },
                headerTintColor: '#000',
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Eğitim') {
                        return <Text style={{ fontSize: size, color }}>📚</Text>;
                    } else if (route.name === 'Oyun') {
                        return <Text style={{ fontSize: size, color }}>🎮</Text>;
                    } else if (route.name === 'Hesap') {
                        return <Text style={{ fontSize: size, color }}>👤</Text>;
                    }
                },
                tabBarActiveTintColor: '#62B1F6',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Eğitim" component={EducationScreen} />
            <Tab.Screen name="Oyun" component={GamesScreen} />
            <Tab.Screen name="Hesap" component={TrackerScreen} />
        </Tab.Navigator>
    );
};

export default MainTabs;
