import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './Button.styles';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button = ({text, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      testID={'button-touchable'}
      {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
