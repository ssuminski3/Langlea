import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function DialogInput(props) {
    const [height, setHeight] = useState(40); // Initial height
    const [text, setText] = useState("")
    return (

        <View className="bg-slate-700 w-full p-2" style={{ flexDirection: "row" }}>
            <TextInput
                multiline={true}
                placeholder='Answer'
                className='text-white text-xl m-1 h-full border-slate-900 border-2 p-1 w-4/5'
                onChangeText={(e) => setText(e)}
               />
            <TouchableOpacity onPress={() => {props.handleSend(text); console.log(text)}} className="items-center justify-center m-1">
                <Icon name="send" size={24} color="#0f172a" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.handleProposition} className="items-center justify-center m-1">
                <Icon name="question" size={24} color="#0f172a" />
            </TouchableOpacity>
        </View>

    );
}