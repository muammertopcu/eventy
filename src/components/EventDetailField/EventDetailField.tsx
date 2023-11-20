import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import AutoHeightWebView, {
  AutoHeightWebViewProps,
} from 'react-native-autoheight-webview';
import styles from './EventDetailField.styles';

export interface EventDetailFieldProps {
  label: string;
  content: string;
  webviewProps?: AutoHeightWebViewProps;
}

const EventDetailField = ({
  label,
  content,
  webviewProps,
}: EventDetailFieldProps) => {
  return (
    <Fragment>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>

      <AutoHeightWebView
        style={styles.container}
        scalesPageToFit={false}
        viewportContent="width=device-width, user-scalable=no"
        source={{html: content}}
        {...webviewProps}
      />
    </Fragment>
  );
};

export default EventDetailField;
