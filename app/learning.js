import React, { useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router';
import Reading from './reading';
import Dialog from './dialog';

export default function Learning() {
    const local = useLocalSearchParams()
    const lang = local.language
    const sub = local.subject
    const type = local.type

    useEffect(() => {
        if (type === "Dialog") {
            router.navigate({ pathname: './dialog', params: { language: lang, subject: sub }})
        } else if (type === "Czytanie ze zrozumieniem") {
            router.navigate({ pathname: './reading', params: { language: lang, subject: sub }})
        }
    }, [type, lang, sub])

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}