import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Lang from '../ui/lang';
import { SimpleGrid } from 'react-native-super-grid';


//background: bg-slate-700
//secondary color bg-slate-900

languages = [
    { image: require("../images/english.png"), language: "English" },
    { image: require("../images/france.png"), language: "French" },
    { image: require("../images/german.png"), language: "German" },
    { image: require("../images/italy.png"), language: "Italian" },
    { image: require("../images/portugal.png"), language: "Portugese" },
    { image: require("../images/spain.png"), language: "Spanish" },
]

export default function App() {
    return (
        <View className="bg-slate-700 justify-center flex-1 items-center">
            <ScrollView>
                <SimpleGrid
                itemDimension={130}
                    data={languages}
                    renderItem={({ item }) => (<Lang language={item.language} image={item.image} />)} />
            </ScrollView>
        </View>
    );
}