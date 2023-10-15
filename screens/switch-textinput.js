import React, { useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Switch} from 'react-native';
import { View } from 'react-native-web';

const TextInputE = () => {
  const [isText, onChangeText] = useState(false);
  const toggleSwitch = () => onChangeText(previousState => !previousState);
 
  return (
    <SafeAreaView style={{flex: 1}}>  
    <View style={styles.container}>
      <TextInput
        placeholder={isText ? 'Please Insert Value' : 'Input Disabled'}
        editable={isText? true : false}
        underlineColorAndroid="transparent"
        style={[
            styles.textInputStyle, 
            { 
              borderColor: isText ? 'black' : 'red',
              backgroundColor: isText ? 'white' : '#d8d8d8'
            }
        ]}
        text={isText}
      /> 
      
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isText ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isText}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30
  },

  textInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
});

export default TextInputE;