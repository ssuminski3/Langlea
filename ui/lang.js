
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Lang(props) {

    return (
        <TouchableOpacity onPress={() => router.navigate({ pathname: './subjects', params: { language: props.language }})}>
            <View className="bg-slate-900 justify-center p-1 m-2 items-center">
                <Image source={props.image} resizeMode='contain' className="w-full h-40" />
                <Text className="text-white mt-2 text-xl">{props.language}</Text>
            </View>
        </TouchableOpacity>
    );
}