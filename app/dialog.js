import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import AIText from '../ui/aiText';
import Answer from '../ui/answer';
import DialogInput from '../ui/dialogInput';
import { useLocalSearchParams } from 'expo-router';
import { startChat, continueChat } from '../aitranslator/gemini';

export default function Dialog() {
    const [answer, setAnswer] = useState("")
    const scrollViewRef = useRef(null);
    const local = useLocalSearchParams()
    const lang = local.language
    const sub = local.subject
    console.log(answer)

    const [dialog, setDialog] = useState([])
    const [loading, setLoading] = useState(true) // Add a loading state

    const handleSend = async (text) => {
        setLoading(true) // Set loading to true when sending message
        console.log(text)
        var txt = await continueChat(text)
        txt = JSON.parse(txt)
        setDialog((prev) => [...prev, { type: "Answer", text: text, error: txt.error }, { type: "AIText", text: txt.text }])
        setLoading(false) // Set loading to false when response is received
        scrollViewRef.current.scrollToEnd({ animated: true });
    }

    const handleProposition = (text) => {
        setDialog((prev) => [...prev, { type: "AIText", text: "Propozycja" }, { type: "AIText", text: "WOW" }])
        scrollViewRef.current.scrollToEnd({ animated: true });
    }

    useEffect(() => {
        async function fetchChat() {
            try {
                setLoading(true) // Set loading to true when fetching chat
                const text = await startChat(lang, sub);
                setDialog((prev) => [...prev, { type: "AIText", text: text }]);
                setLoading(false) // Set loading to false when chat is received
            } catch (error) {
                console.error("Error fetching chat:", error);
                // You can also update the state with an error message if needed
                setLoading(false) // Set loading to false on error
            }
        }
        fetchChat();
    }, []);

    return (

        <View className="bg-slate-700 justify-center flex-1 items-center w-full">
            <Text className="text-white text-3xl m-3 text-center">Dialog</Text>
            <ScrollView className="w-full" ref={scrollViewRef}>
                {dialog.map((i, index) => {
                    if (i.type == "Answer") {
                        return <Answer key={index} text={i.text} error={i.error} />
                    }
                    else if (i.type == "AIText") {
                        return <AIText key={index} text={i.text} />
                    }
                })}
            </ScrollView>
            {loading ? <ActivityIndicator size="large" color="#fff" style={{ alignSelf: 'center', padding: 10, backgroundColor: '#333', borderRadius: 5 }} /> :
                <DialogInput handleSend={handleSend} handleProposition={handleProposition} />}
        </View>

    );
}