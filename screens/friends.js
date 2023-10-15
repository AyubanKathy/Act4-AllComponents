import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { useState } from "react";
import { ScrollView, SafeAreaView } from "react-native-web";

export default function Friends() {
    const [people, setPeople] = useState([
        {name: 'Rhizabelle Jhaine Dalen', key: '1'},
        {name: 'Myra Mortal', key: '2'},
        {name: 'Daisy Diane Eusalan', key: '3'},
        {name: 'Wilson Mirano Jr.', key: '4'},
        {name: 'Jon Eminem Moralde', key: '5'},
        {name: 'Mariangel Sajulga', key: '6'},
        {name: 'Mark Vincent Palban', key: '7'},
        {name: 'Jake Romar Galicia', key: '8'},
        {name: 'Jelbert Hibaya', key: '9'}
    ]);

    return (
        <SafeAreaView>
            <ScrollView>
            <Text style={styles.text2}>MY FRIENDS NAME ARE: </Text>
            <FlatList 
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}      
            />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        fontFamily: 'Century Gothic',
        top: 25,
        marginTop: 25,
        padding: 30,
        backgroundColor: '#F8C8DC',
        fontSize: 24,
        marginHorizontal: 25
    },

    text2: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 15,
        top: 40,
        textAlign: 'center'
    },
})


