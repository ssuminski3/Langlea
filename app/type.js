import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router';

export default function App() {
    const local = useLocalSearchParams()
    const lang = local.language
    const sub = local.subject
    return (
        <View className="bg-slate-700 justify-center flex-1 items-center">
            <Text className="text-white text-3xl m-3 text-center">What type of learning do you prefer in {lang} of {sub}?</Text>
            <ScrollView>
                <TouchableOpacity className="bg-slate-900 p-10  mt-3" onPress={() => router.navigate({ pathname: './dialog', params: { language: lang, subject: sub, type: "Dialog" } })}>
                    <Text className="text-white w-full text-center text-2xl">Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-slate-900 p-10  mt-3" onPress={() => router.navigate({ pathname: './reading', params: { language: lang, subject: sub, type: "Czytanie ze zrozumieniem" } })}>
                    <Text className="text-white w-full text-center text-2xl">Reading</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}