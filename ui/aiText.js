import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { translate } from '../aitranslator/gemini';

export default function AIText(props) {
  const text = props.text.split(" ");
  const [selectedWords, setSelectedWords] = useState({});

  const clickedWord = async (index) => {
    const word = text[index];
    if (selectedWords[word]) {
      delete selectedWords[word];
    } else {
      const translatedWord = await translate(word)
      selectedWords[word] = translatedWord;
    }
    setSelectedWords({ ...selectedWords });
  };

  return (
    <View className="bg-slate-900 justify-center p-1 m-2 items-center">
      <Text className="m-3">
        <Text className="text-white text-2xl pr-10 justify-center items-center">AI: </Text>
        {text.map((word, index) => (
          <TouchableOpacity key={index} onPress={async(e) => await clickedWord(index)}>
            <Text
              className={`text-white text-3xl ml-1 mr-1 ${selectedWords[word] ? "bg-green-600 text-xl" : ""}`}
            >
              {selectedWords[word] || word}
            </Text>
          </TouchableOpacity>
        ))}
      </Text>
    </View>
  );
}