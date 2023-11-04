import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  Text,
  View,
} from 'react-native';
import styles from './Loading.style';

export interface LoadingProps extends ActivityIndicatorProps {
  text?: string;
}

const Loading = ({text, ...props}: LoadingProps) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="#000000" {...props} />

      {text && (
        <Text testID={'loading-text'} style={styles.text}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default Loading;
