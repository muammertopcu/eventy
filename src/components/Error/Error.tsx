import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import styles from './Error.style';

export interface ErrorProps {
  error?: string;
}

const Error = ({error}: ErrorProps) => {
  return (
    <View style={styles.wrapper}>
      <Fragment>
        <Text style={styles.icon}>❌</Text>
        {error && (
          <Text testID={'error-text'} style={styles.text}>
            {error}
          </Text>
        )}
      </Fragment>
    </View>
  );
};

export default Error;
