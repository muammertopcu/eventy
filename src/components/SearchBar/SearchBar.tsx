import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './SearchBar.style';

interface SearchBarProps {
  onSearch: (value: string) => void;
  showIcon?: boolean;
  lineless?: boolean;
}

const SearchBar = ({
  onSearch,
  showIcon = true,
  lineless = false,
}: SearchBarProps) => {
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
        onChangeText={onSearch}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
