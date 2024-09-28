import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import AIText from '../ui/aiText';
import Answer from '../ui/answer';
import DialogInput from '../ui/dialogInput';

export default function Dialog(props) {
    const [answer, setAnswer] = useState("")
    const scrollViewRef = useRef(null);

    console.log(answer)

    const [dialog, setDialog] = useState([{ type: "AIText", text: "Zobaczmy" }])

    const handleSend = (text) => {
        console.log(text)
        setDialog((prev) => [...prev, { type: "Answer", text: text }, { type: "AIText", text: "No tak" }])
        scrollViewRef.current.scrollToEnd({ animated: true });
    }

    const handleProposition = (text) => {
        setDialog((prev) => [...prev, { type: "AIText", text: "Propozycja" }, { type: "AIText", text: "WOW" }])
        scrollViewRef.current.scrollToEnd({ animated: true });
    }

    return (

        <View className="bg-slate-700 justify-center flex-1 items-center w-full">
            <Text className="text-white text-3xl m-3 text-center">Dialog</Text>
            <ScrollView className="w-full" ref={scrollViewRef}>
                {dialog.map((i, index) => {
                    if (i.type == "Answer") {
                        return <Answer key={index} text={i.text} />
                    }
                    else if (i.type == "AIText") {
                        return <AIText key={index} text={i.text} />
                    }
                })}
            </ScrollView>
            <DialogInput handleSend={handleSend} handleProposition={handleProposition} />
        </View>

    );
}