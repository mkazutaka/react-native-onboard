import { FC } from 'react';
import { TextStyles } from '../../types';
import { HTMLSource } from 'react-native-render-html';
export interface TextStackProps {
    subtitle?: HTMLSource;
    title?: HTMLSource;
}
export declare const TextStack: FC<TextStackProps & TextStyles>;
