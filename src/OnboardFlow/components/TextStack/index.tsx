import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TextStyles } from '../../types'
import {
    COLOR_MUTED_TEXT_DEFAULT,
    COLOR_TEXT_DEFAULT,
    TEXT_ALIGN_DEFAULT,
    VERTICAL_PADDING_SMALL_DEFAULT,
} from '../../constants'
import RenderHtml, {HTMLSource} from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

export interface TextStackProps {
    subtitle?: HTMLSource
    title?: HTMLSource
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export const TextStack: FC<TextStackProps & TextStyles> = ({
    title,
    subtitle,
    titleStyle,
    subtitleStyle,
    textStyle,
    textAlign,
    ...props
}) => {
    return (
        <View>
          {title ? (
            <RenderHtml
              contentWidth={WIDTH}
              source={title}
            />
          ) : null}
          {subtitle ? (
            <RenderHtml
              contentWidth={WIDTH}
              source={subtitle}
            />
          ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '800',
        lineHeight: 42,
        width: '100%',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 26,
        width: '100%',
    },
})
