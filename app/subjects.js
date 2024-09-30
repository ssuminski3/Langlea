import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function App() {
    const local = useLocalSearchParams()
    const lang  = local.language
    const subjects = ["Asking for direction", "Vacation", "Numbers", "Introducing", "Time and date", "Hobby", "Food"]
    return (
        <View className="bg-slate-700 justify-center flex-1 items-center">
            <Text className="text-white text-3xl m-3 text-center">What subject do you want to learn in {lang}?</Text>
            <ScrollView className="w-full">
                {
                    subjects.map(s => {
                        return (
                            <TouchableOpacity key={s} className="bg-slate-900 p-3 mt-3 w-full" onPress={() => router.navigate({ pathname: './type', params: { language: lang, subject: s }})}>
                                <Text className="text-white w-full text-center text-2xl">{s}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
    