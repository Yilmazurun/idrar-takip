import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
    navigation: any; // Using any here to bypass complex nested navigation typing for this simple app
};

const topics = [
    { id: '1', title: 'Giriş', content: 'İdrar takibi, çocuklarda tuvalet alışkanlıklarının gelişimini izlemek için önemlidir.', imageType: 'intro' },
    { id: '2', title: 'Normal işeme işlevi hakkında bilgiler', content: 'Mesane, böbrekten üreterler yolu ile gelen idrarın belirli bir süre bekletildiği daha sonra üretraya iletildiği, ileri derecede genişleme yeteneğine sahip içi boşluklu bir organdır.', imageType: 'anatomy' },
    { id: '3', title: 'Düzenli işeme alışkanlıkları ve davranış değiştirme talimatları', content: 'Küçük çocuklar için tuvalet adaptörleri ve ayak altı destekleri ile tuvalet çocuğun kullanımına uygun hale getirilmelidir. Aksi halde tuvalette işeme sırasında dengede duramayan çocuk pelvik taban kaslarını farkında olmadan kasarak, işeme sırasında eksternal sfinkterin kasılmasına ve mesanenin tamamen boşaltılamamasına sebep olur.\n\nİşeme işleminin ertelenmemesi, idrarın son zamana kadar bekletilmemesi, çok sıkışma hissinden daha önce tuvalete gidilmesi gerekir. Çamaşırı ıslandığında mutlaka temizi ile değiştirmelidir.', imageType: 'habit' },
    { id: '4', title: 'Diyet değişiklikleri ve kabızlığın önlenmesi', content: 'Birçok yiyecek ve içeceğin mesane irritasyonu başlatma ve arttırmada önemlidir. Mesane irritanları 5 C olarak tanımlanır: Caffeine (kola, kahve, neskafe ve çay gibi içecekler), carbonation (kafein içermese bile herhangi bir gazlı içecek), citrus (narenciye; portakal, limon ve greyfurt gibi yiyecekler ve bunların ekstratları), chocolate (çikolatalı yiyecek ve içecekler), coloring (boya ve renklendirici içeren herhangi bir yiyecek veya içecek).', imageType: 'diet' },
    { id: '5', title: 'İşeme günlükleri ile işeme alışkanlıklarının kayıt edilmesi', content: 'Hesap sekmesinden çocuğunuzun günlük uyanık ve uykuda işeme durumlarını kaydedebilirsiniz.', imageType: 'diary' },
    { id: '6', title: 'Düzenli takip destek ve cesaretlendirme', content: 'Çocuğunuzu başarılarında tebrik edin ve olumsuz durumlarda destek olun.', imageType: 'support' },
];

const EducationScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={topics}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => navigation.getParent()?.navigate('EducationDetail', {
                            title: item.title,
                            content: item.content,
                            imageType: item.imageType
                        })}
                    >
                        <Text style={styles.listItemText}>{item.title}</Text>
                        <Text style={styles.listItemIcon}>▼</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#FAFAFA',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        marginRight: 10,
    },
    listItemIcon: {
        fontSize: 16,
        color: '#666',
    },
});

export default EducationScreen;
