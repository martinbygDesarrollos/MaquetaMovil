import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function homeScreen(){

    return(
        <View style={styles.container}>
            <Text>Inicio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });