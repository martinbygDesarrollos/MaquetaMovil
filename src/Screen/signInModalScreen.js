import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Modal } from 'react-native';

import { width, height } from '../Styles/configsStyle';

export default function singInModalScreen() {
    const [nickName, onChangeNickName] = useState(null);
    const [password, onChangePassword] = useState(null);

    return (
        <Modal>
            <View style={styles.container}>
                <Text>Iniciar sesion</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeNickName(text)}
                    value={nickName}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeNickName(text)}
                    value={nickName}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.8,
    }
});