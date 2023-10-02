import React from 'react';
import SearchBar, {type SearchBarProps} from './SearchBar';
import {Meta, StoryObj} from '@storybook/react-native';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const SearchBarMeta: Meta<SearchBarProps> = {
  title: 'SearchBar',
  component: SearchBar,
  argTypes: {
    onSearch: {action: 'on searched key'},
  },
  args: {
    showIcon: true,
    lineless: false,
    debounce: 350,
  },
};

export default SearchBarMeta;

export const Basic: StoryObj<SearchBarProps> = {};

export const WithList: StoryObj<SearchBarProps> = {
  decorators: [
    (_, options) => {
      const data = Array.from({length: 50}, (_v, i) => i + 1);
      const [list, setList] = useState(data);

      function onSearch(text: string) {
        const newList = data.filter(item => item.toString().includes(text));
        setList(newList);
      }

      return (
        <View style={style.container}>
          <SearchBar {...options.args} onSearch={onSearch} />
          <FlatList
            data={list}
            renderItem={({item}) => (
              <View style={style.itemContainer}>
                <Text style={style.itemText}>{item}</Text>
              </View>
            )}
            keyExtractor={item => item.toString()}
          />
        </View>
      );
    },
  ],
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
