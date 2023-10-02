import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './SearchBar.style';
import {useDebouncedCallback} from 'use-debounce';

type ExcludedTextInputProps = Pick<TextInputProps, 'placeholder'>;

export interface SearchBarProps extends ExcludedTextInputProps {
  onSearch: (value: string) => void;
  showIcon?: boolean;
  debounce?: number;
  lineless?: boolean;
}

const SearchBar = ({
  onSearch,
  showIcon = true,
  debounce = 250,
  lineless = false,
}: SearchBarProps) => {
  const debounced = useDebouncedCallback(value => onSearch(value), debounce);

  return (
    <View
      testID="search-container"
      style={[styles.container, !lineless && styles.line]}>
      {showIcon && (
        <Text testID="search-icon" style={styles.icon}>
          🔍
        </Text>
      )}
      <TextInput
        testID="search-input"
        style={styles.input}
        onChangeText={debounced}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
