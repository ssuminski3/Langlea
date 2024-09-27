import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function App() {
    const local = useLocalSearchParams()
    const lang  = local.language
    const subjects = ["Pytanie o drogę", "Wakacje", "Liczby", "Przedstawianie się", "Czas i data", "Zainteresowania i hobby", " Restauracja/Potrawy"]
    return (
        <View className="bg-slate-700 justify-center flex-1 items-center">
            <Text className="text-white text-3xl m-3 text-center">What subject do you want to learn in {lang}?</Text>
            <ScrollView className="w-full">
                {
                    subjects.map(s => {
                        return (
                            <TouchableOpacity className="bg-slate-900 p-3 mt-3 w-full" onPress={() => router.navigate({ pathname: './type', params: { language: lang, subject: s }})}>
                                <Text className="text-white w-full text-center text-2xl">{s}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
    