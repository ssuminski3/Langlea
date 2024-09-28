import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function AIText(props) {
    const text = props.text.split(" ")
    const newWord = ["OKL", "IUO", "POK", "UYT"]
    const [pressedIndices, setPressedIndices] = useState([]);
    const [style, setStyle] = useState("")
    //It's array with length of the text if element on index is true a word under this index is clicked
    const [wordStates, setWordStates] = useState(text.map(() => false))

    const clickedWord = (index) => {
        if (pressedIndices.includes(index)) {
            setPressedIndices(pressedIndices.filter(i => i !== index))
            setWordStates(wordStates.map((state, i) => i === index ? !state : state))
        }
        else {
            setPressedIndices([...pressedIndices, index])
            setWordStates(wordStates.map((state, i) => i === index ? !state : state))
        }
    }
    //getphrases to translate
    const getPressedWord = () => {
        const pressedWord = []
        let tempWord = ""
        let tempIndices = []

        for (let i = 0; i < text.length; i++) {
            if (pressedIndices.includes(i)) {
                tempWord += wordStates[i] ? `*${text[i]}*` : text[i]
                tempWord += " "
                tempIndices.push(i)
            }
            else {
                if (tempWord.trim() !== "") {
                    pressedWord.push({ word: tempWord.trim(), indices: tempIndices })
                    tempWord = ""
                    tempIndices = []
                }
            }
        }

        if (tempWord.trim() !== "") {
            pressedWord.push({ word: tempWord.trim(), indices: tempIndices })
        }

        return pressedWord
    }

    return (
        <View className="bg-slate-900 justify-center p-1 m-2 items-center">
            <Text className="m-3">
                <Text className="text-white text-2xl pr-10 justify-center items-center">AI: </Text> 
                {text.map((word, index) => (
                    <TouchableOpacity key={index} onPress={(e) => clickedWord(index)}>
                        <Text className={`text-white text-3xl ${pressedIndices.includes(index) ? "bg-green-600 ml-1 mr-1" : ""}`}>{wordStates[index] ? newWord[index] : word} </Text>                    
                    </TouchableOpacity>
                ))}
            </Text>
        </View>
    );
}