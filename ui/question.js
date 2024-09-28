import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Question(props) {
    const [text, setText] = useState("")
    const [answer, setAnswer] = useState()
    console.log(answer)
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
                <Text className="border-slate-500 border-2 p-2 m-1 text-white">OKLOI</Text> :
                <TouchableOpacity className="bg-slate-900 w-full m-1 p-2" onPress={() => setAnswer("Walk")}>
                    <Text className="text-white text-center text-x">Potwierdź</Text>
                </TouchableOpacity>
            }
        </View>

    );
}