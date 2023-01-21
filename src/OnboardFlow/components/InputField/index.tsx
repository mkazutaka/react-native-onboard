import React, { FC, useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { HORIZONTAL_PADDING_DEFAULT, VERTICAL_PADDING_DEFAULT } from '../../constants'
import { TextStyles } from '../../types'

export interface FormEntryField {
    label?: string
    placeHolder?: string
    type: 'email' | 'text' | 'password'
    onSetText?: (text: string) => void
    getErrorMessage?: (text: string) => string
    isRequired?: boolean
    id: string
}

export const InputField: FC<FormEntryField & TextStyles> = ({
    label,
    placeHolder,
    type,
    onSetText,
    getErrorMessage,
    textStyle,
    id,
}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [text, setText] = useState('')

    function getKeyboardType(inputType: string) {
        if (inputType == 'email') {
            return 'email-address'
        }

        return 'default'
    }

    function getTextContentType(inputType: string) {
        if (inputType == 'email') {
            return 'emailAddress'
        }

        if (inputType == 'password') {
            return 'password'
        }

        return 'none'
    }

    function getDataDetectorType(inputType: string) {
        return undefined
    }

    return (
        <>
            <TextInput
                onFocus={() => {
                    setIsFocused(true)
                }}
                onBlur={() => setIsFocused(false)}
                value={text}
                textContentType={getTextContentType(type)}
                dataDetectorTypes={getDataDetectorType(type)}
                maxLength={255}
                placeholder={placeHolder}
                style={[
                    styles.option,
                    {
                        paddingVertical: VERTICAL_PADDING_DEFAULT,
                        paddingHorizontal: HORIZONTAL_PADDING_DEFAULT,
                        marginTop: VERTICAL_PADDING_DEFAULT,
                    },
                    textStyle,
                    isFocused ? styles.optionSelected : null,
                ]}
                keyboardType={getKeyboardType(type)}
                secureTextEntry={type == 'password'}
                onChangeText={(string) => {
                    const error = getErrorMessage ? getErrorMessage(string) : null
                    if (error) {
                        setErrorMessage(error)
                    }
                    setText(string)
                    if (onSetText) {
                        onSetText(string)
                    }
                }}
            />
            {errorMessage && <Text style={[styles.errorText]}>{errorMessage}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    option: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 12,
        fontSize: 18,
    },
    errorText: {
        fontSize: 14,
        color: '#a60202',
        marginTop: VERTICAL_PADDING_DEFAULT / 4,
    },
    optionSelected: {
        borderColor: '#000',
    },
})
