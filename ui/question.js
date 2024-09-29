import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { checkAnswer } from '../aitranslator/gemini';

export default function Question(props) {
    const [text, setText] = useState("")
    const [answer, setAnswer] = useState()
    const [loading, setLoading] = useState(false) // Add a loading state

    async function pressed(){
        setLoading(true) // Set loading to true when pressed
        var t = await checkAnswer(props.question, text)
        setAnswer(t)
        setLoading(false) // Set loading to false when answer is received
    }
    return (

        <View className="bg-slate-700 w-full p-2">
            <Text className="text-xl text-white ml-1">{props.question}</Text>
            <TextInput
                multiline={true}
                placeholder='Answer'
                className={`text-white text-xl m-1 ${answer ? "border-slate-500" : "border-slate-900"} border-2 p-1`}
                onChangeText={(e) => setText(e)}
            />
            {answer ?
                <Text className="border-slate-500 border-2 p-2 m-1 text-white">{answer}</Text> :
                <View>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" style={{ alignSelf: 'center', padding: 10, backgroundColor: '#333', borderRadius: 5 }} /> // Show ActivityIndicator while loading
                    ) : (
                        <TouchableOpacity className="bg-slate-900 w-full m-1 p-2" onPress={pressed}>
                            <Text className="text-white text-center text-x">Potwierdź</Text>
                        </TouchableOpacity>
                    )}
                </View>
            }
        </View>

    );
}