import React, {useEffect, useState} from 'react';
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import AIText from '../ui/aiText';
import Question from '../ui/question';
import { writeStory } from '../aitranslator/gemini';
import { useLocalSearchParams } from 'expo-router';

export default function Reading(props) {

    const [questions, setQuestions] = useState([])
    const [story, setStory] = useState("")
    const [loading, setLoading] = useState(true) // Add a loading state
    const local = useLocalSearchParams()
    const lang = local.language
    const sub = local.subject

    useEffect(() => {
        async function fetchChat() {
            try {
                setLoading(true) // Set loading to true when fetching chat
                const text = await writeStory(lang, sub);
                var txt = JSON.parse(text)
                console.log("Q: "+txt.questions)
                setStory(txt.story)
                setQuestions(txt.questions)
                console.log("Text: "+text)
                setLoading(false) // Set loading to false when chat is received
            } catch (error) {
                console.error("Error fetching chat:", error);
                // You can also update the state with an error message if needed
                setLoading(false) // Set loading to false on error
            }
        }
        fetchChat();
    }, []);

    if (loading) {
        return (
            <View className="bg-slate-700 justify-center flex-1 items-center h-full">
                <ActivityIndicator size="large" color="#fff" style={{ alignSelf: 'center', padding: 10, backgroundColor: '#333', borderRadius: 5 }} />
            </View>
        );
    }

    return (

        <View className="bg-slate-700 justify-center flex-1 items-center h-full">
            <ScrollView>
                <Text className="text-white text-3xl m-3 text-center">Reading</Text>
                <AIText text={story} />
                {
                    questions.map((i, index) => {
                        return <Question key={index} question={i} />
                    })
                }
            </ScrollView>
        </View>

    );
}