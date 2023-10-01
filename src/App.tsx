import React from 'react';
import {SafeAreaView} from 'react-native';
import {SearchBar, EventCard} from './components';
import data from '../__mocks__/event.json';
import {Event} from '@types';

export default function App() {
  return (
    <SafeAreaView>
      <SearchBar onSearch={() => {}} />
      <EventCard data={data as Event} onSelect={() => {}} />
    </SafeAreaView>
  );
}
