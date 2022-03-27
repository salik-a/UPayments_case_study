import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import styles from './TextInput.style'

const Input = ({ placeholder, onChangeText, value, iconName, isSecure, title, isEmpty }) => {
    return (
        <View >
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.innerContainer, isEmpty ? { borderColor: 'tomato' } : null]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={isSecure}
                />

            </View>
        </View>
    );
};

export default Input;