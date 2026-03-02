import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const GamesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.icon}>🎮</Text>
                <Text style={styles.title}>Oyunlar</Text>
                <Text style={styles.subtitle}>Yakında Gelecek...</Text>
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
    },
    icon: {
        fontSize: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        fontStyle: 'italic',
    }
});

export default GamesScreen;
