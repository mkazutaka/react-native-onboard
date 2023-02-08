import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export const TextStack = ({ title, subtitle, titleStyle, subtitleStyle, textStyle, textAlign, ...props }) => {
    return (<View>
          {title ? (<RenderHtml contentWidth={WIDTH} source={title}/>) : null}
          {subtitle ? (<RenderHtml contentWidth={WIDTH} source={subtitle}/>) : null}
        </View>);
};
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
});
