import { Image, View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function School() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/bisu.png')} style={styles.kath}/>
            <View>
                <Text style={styles.text1}>Bachelor of Science in Information Technology</Text>
                <Text style={styles.text1}>BOHOL ISLAND STATE UNIVERSITY</Text>
                <Text style={styles.text1}>BALILIHAN CAMPUS</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    kath: {
        top: 5,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        margin: '30px',
    },

    text1: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
        fontSize: 14
    }
});