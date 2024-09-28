import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router';

export default function App() {
    const local = useLocalSearchParams()
    const lang  = local.language
    const sub = local.subject
    const types = ["Dialog", "Czytanie ze zrozumieniem"]
    return (
        <View className="bg-slate-700 justify-center flex-1 items-center">
            <Text className="text-white text-3xl m-3 text-center">What type of learning do you prefer in {lang} of {sub}?</Text>
            <ScrollView>
                {
                    types.map(t => {
                        return (
                            <TouchableOpacity key={t} className="bg-slate-900 p-10  mt-3" onPress={() => router.navigate({ pathname: './learning', params: { language: lang, subject: sub, type: t }})}>
                                <Text className="text-white w-full text-center text-2xl">{t}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}