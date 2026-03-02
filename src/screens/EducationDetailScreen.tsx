import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'EducationDetail'>;

const EducationDetailScreen = ({ route }: Props) => {
    const { title, content, imageType } = route.params;

    const renderImagePlaceholder = () => {
        let emoji = '📚';
        if (imageType === 'anatomy') emoji = '🫀';
        if (imageType === 'habit') emoji = '🚽';
        if (imageType === 'diet') emoji = '☕';

        return (
            <View style={styles.imagePlaceholder}>
                <Text style={{ fontSize: 80 }}>{emoji}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {renderImagePlaceholder()}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    imagePlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
        textAlign: 'justify',
    },
});

export default EducationDetailScreen;
