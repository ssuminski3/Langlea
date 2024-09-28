import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import AIText from '../ui/aiText';
import Question from '../ui/question';

export default function Reading(props) {

    const question = ["Co?", "Gdzie?", "Kto?", "Dlaczego?", "Kiedy?"]

    return (

        <View className="bg-slate-700 justify-center flex-1 items-center h-full">
            <ScrollView>
                <Text className="text-white text-3xl m-3 text-center">Reading</Text>
                <AIText text="Bardzo długa historia do, której będą zadawane pytania. Kurcze to naprawdę może się udać mogę zrobić tą aplikację tylko w weekend." />
                {
                    question.map((i, index) => {
                        return <Question key={index} question={i} />
                    })
                }
            </ScrollView>
        </View>

    );
}