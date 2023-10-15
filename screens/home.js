import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { TouchableOpacity, SafeAreaView, Image, TouchableHighlight } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";

export default function Home() {
    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}> 
    <Text style={styles.text2}>PROFILE: </Text>
    <ActivityIndicator size={'large'} color={'white'} />
    <Image source={require('../assets/kath.jpg')} style= {styles.kath}/>
        <TouchableOpacity onPress={() => navigation.navigate('FullName')}>
            <View style={styles.button}> 
                <Text style={styles.text}>FULL NAME</Text>
            </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Address')}>
            <View style={styles.button}>
                <Text style={styles.text}>ADDRESS</Text>
            </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('SchoolAttended')}>
            <View style={styles.button}>
                <Text style={styles.text}>SCHOOL ATTENDED</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
            <View style={styles.button}>
                <Text style={styles.text}>MY FRIENDS</Text>
            </View>
        </TouchableOpacity>  

        <View>
            <Text style={styles.text1}>MY ASSIGNMENT:</Text>
        </View>

        <TouchableHighlight onPress={() => navigation.navigate('SwitchTextInput')}>
            <View style={styles.button}>
                <Text style={styles.text}>SWITCH AND TEXT INPUT</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Link1')}>
            <View style={styles.button}>
                <Text style={styles.text}>LINKING</Text>
            </View>
        </TouchableHighlight> 
        <TouchableHighlight onPress={() => navigation.navigate('Video')}>
            <View style={styles.button}>
                <Text style={styles.text}>VIDEO</Text>
            </View>
        </TouchableHighlight> 
        <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8C8DC',
      alignItems: 'center',
    },

    button: {
        margin: 4,
        width: 170,
        height: 50,
        backgroundColor: '#CCCCCC',
        padding: 10,
    },

    text: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
        fontSize: 14
    },

    text1: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 200
    },

    text2: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 15,
        top: 20,
        marginRight: 250
    },

    kath: {
        top: 5,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        margin: '30px',  
    }
});