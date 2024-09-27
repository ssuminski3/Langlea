import React from 'react';
import { Text, View, Image } from 'react-native';

//background: bg-slate-700
//secondary color bg-slate-900

export default function Lang(props) {
    return (
        <View className="bg-slate-900 justify-center p-1 m-2 items-center">
            <Image source={props.image} resizeMode='contain' className="w-full h-40"/>
            <Text className="text-white mt-2 text-xl">{props.language}</Text>
        </View>
    );
}