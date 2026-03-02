import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DiaryEntry = {
    id: string;
    day: number;
    awake: boolean;
    asleep: boolean;
};

const TrackerScreen = () => {
    const [entries, setEntries] = useState<DiaryEntry[]>([]);

    useEffect(() => {
        loadEntries();
    }, []);

    const loadEntries = async () => {
        try {
            const stored = await AsyncStorage.getItem('@diary_entries');
            if (stored !== null) {
                setEntries(JSON.parse(stored));
            } else {
                // Initialize with default
                const initial: DiaryEntry[] = Array.from({ length: 9 }, (_, i) => ({
                    id: i.toString(),
                    day: i + 1,
                    awake: false,
                    asleep: false,
                }));
                setEntries(initial);
                await AsyncStorage.setItem('@diary_entries', JSON.stringify(initial));
            }
        } catch (e) {
            console.error(e);
        }
    };

    const saveEntries = async (newEntries: DiaryEntry[]) => {
        try {
            await AsyncStorage.setItem('@diary_entries', JSON.stringify(newEntries));
        } catch (e) {
            console.error(e);
        }
    };

    const toggleStatus = (id: string, type: 'awake' | 'asleep') => {
        const newEntries = entries.map(entry => {
            if (entry.id === id) {
                return { ...entry, [type]: !entry[type] };
            }
            return entry;
        });
        setEntries(newEntries);
        saveEntries(newEntries);
    };

    const addDay = () => {
        const nextDay = entries.length + 1;
        const newEntry: DiaryEntry = {
            id: nextDay.toString(),
            day: nextDay,
            awake: false,
            asleep: false,
        };
        const newEntries = [...entries, newEntry];
        setEntries(newEntries);
        saveEntries(newEntries);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.headerText, { flex: 1 }]}>Gün</Text>
                    <Text style={[styles.headerText, { flex: 2, textAlign: 'center' }]}>Uyanıkken</Text>
                    <Text style={[styles.headerText, { flex: 2, textAlign: 'center' }]}>Uyurken</Text>
                </View>

                <FlatList
                    data={entries}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.tableRow}>
                            <Text style={[styles.rowText, { flex: 1 }]}>{item.day}</Text>

                            <TouchableOpacity
                                style={[styles.checkboxContainer, { flex: 2 }]}
                                onPress={() => toggleStatus(item.id, 'awake')}
                            >
                                <View style={[styles.checkbox, item.awake && styles.checkboxChecked]} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.checkboxContainer, { flex: 2 }]}
                                onPress={() => toggleStatus(item.id, 'asleep')}
                            >
                                <View style={[styles.checkbox, item.asleep && styles.checkboxChecked]} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity style={styles.fab} onPress={addDay}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    table: {
        margin: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#FAFAFA',
        flex: 1,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#F5F5F5',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    rowText: {
        fontSize: 16,
        color: '#333',
    },
    checkboxContainer: {
        alignItems: 'center',
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#90CFF7',
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#90CFF7',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#42A5F5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    fabIcon: {
        fontSize: 30,
        color: 'white',
    },
});

export default TrackerScreen;
