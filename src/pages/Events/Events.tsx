import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {Error, EventCard, Loading, SearchBar} from '@components';
import type {Event} from '@types';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useGetEventsQuery} from '../../redux/api/events';

export default function Events() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [eventList, setEventList] = useState<Event[] | undefined>();
  const {data, isLoading, isError, refetch} = useGetEventsQuery('');

  useEffect(() => {
    setEventList(data);
  }, [data]);

  const handleEventSelect = () => navigation.navigate('EventDetail');

  const renderEvent: ListRenderItem<Event> = ({item}) => (
    <EventCard data={item} onSelect={handleEventSelect} />
  );

  const searchEvents = (search: string) => {
    const filteredEvents = data?.filter(event =>
      event.Adi.toLowerCase().includes(search.toLowerCase()),
    );

    setEventList(filteredEvents);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={eventList}
        renderItem={renderEvent}
        refreshing={isLoading}
        onRefresh={refetch}
        ListHeaderComponent={<SearchBar onSearch={searchEvents} />}
      />
    </SafeAreaView>
  );
}
