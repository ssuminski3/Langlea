import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Reading(props) {

    return (

        <View className="bg-slate-700 justify-center flex-1 items-center h-full">
            <Text className="text-white text-3xl m-3 text-center">Reading {props.language} {props.subject}</Text>
        </View>

    );
}