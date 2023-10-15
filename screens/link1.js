import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';


export default function Link1() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.button1}>
            <Button 
                title="Open with Link" 
                onPress={() => Linking.openURL("https://www.facebook.com/kathrinemae.quileopasayuban/")}
            />

            <Button 
                title="Open with Web Browser" 
                onPress={() => WebBrowser.openBrowserAsync("https://www.instagram.com/kthrnmybn/?fbclid=IwAR3U_gHOcINMCyg31DSpC3bOMjFsy_sv2fBOaoc-sZrAiNC-Qqjte-imytM")}
            />  
            </View>
        <StatusBar style="auto"/>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8C8DC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    top: 10,
    margin: 80,
    width: 200,
    height: 60,
  }
});