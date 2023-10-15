import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={{height: '100%', width: '100%'}}>
        <Text style={styles.text}>My Autobiography</Text>
          <View style={styles.button1}>
            <Button title="Click me!" color='#000000' onPress={() => navigation.navigate('Home')}/>   
          </View>
      </ImageBackground>   
      <StatusBar style="auto" /> 
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      position: 'absolute',
      padding: 50,
      top: 250,
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    
    button1: {
      width: 100, 
      height: 50, 
      alignSelf: 'center', 
      marginTop: 430,
    }
  
  });
  