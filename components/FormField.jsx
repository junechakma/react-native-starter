import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)
    const [isfocus, setIsFocus] = useState(false)

    const handleFocus = () => {
        setIsFocus(true)
    }

    const handleBlur = () => {
        setIsFocus(false)
    }

    return (
        <View style={[styles.container, otherStyles]}>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={[styles.inputContainer, { borderColor: isfocus ? '#FFA500' : '#211D2F' }]} >
                <TextInput style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                {
                    title === "Password" &&
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={showPassword ? icons.eye : icons.eyeHide} 
                        resizeMode='contain'
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 10,
        justifyContent: 'center',
        paddingTop: 10
    },
    title: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '600',
        marginRight: 10,
        marginBottom: 10,
    },
    inputContainer: {
        flex: 1,
        height: 46,
        borderWidth: 2,
        backgroundColor: '#1F1B2E',
        borderRadius: 10,
        borderColor: '#211D2F',
        justifyContent: 'center',
        flexDirection: "column",
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: '600',
    },
});

export default FormField;
