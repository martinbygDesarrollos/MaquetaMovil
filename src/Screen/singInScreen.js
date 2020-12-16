import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SingInModalScreen from './signInModalScreen';

export default function singInScreen() {
    return (
        <View style={styles.container}>
            <SingInModalScreen />
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