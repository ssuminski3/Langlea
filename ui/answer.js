import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Answer(props) {

    return (

        <View className="bg-slate-900 justify-center p-1 m-2 items-center">
            <Text>
                <Text className="text-white text-2xl pr-10 justify-center items-center">YOU: </Text>
                <Text className="text-white text-3xl m-3 text-center">{props.text}</Text>
            </Text>
            <View className="bg-red-500 border-red-950 border-2 p-2">
                <Text className="text-red-950">{props.error}</Text>
            </View>
        </View>

    );
}