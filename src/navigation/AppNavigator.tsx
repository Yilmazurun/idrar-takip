import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import MainTabs from './MainTabs';
import EducationDetailScreen from '../screens/EducationDetailScreen';

export type RootStackParamList = {
    RoleSelection: undefined;
    Main: undefined;
    EducationDetail: { title: string; content: string; imageType?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="RoleSelection">
            <Stack.Screen
                name="RoleSelection"
                component={RoleSelectionScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={MainTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EducationDetail"
                component={EducationDetailScreen}
                options={{ headerShown: true, title: 'Eğitim Detayı' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
