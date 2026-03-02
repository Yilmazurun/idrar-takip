import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'RoleSelection'>;
};

const RoleSelectionScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Placeholder for mascot image */}
                <View style={styles.mascotContainer}>
                    <Text style={styles.mascotEmoji}>💧</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.buttonText}>Ebeveyn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.buttonText}>Çocuk</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mascotContainer: {
        width: 250,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    mascotEmoji: {
        fontSize: 150,
    },
    button: {
        backgroundColor: '#2196F3',
        width: '80%',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default RoleSelectionScreen;
