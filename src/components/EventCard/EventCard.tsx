import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './EventCard.style';
import {Event} from '@types';

export interface EventCardProps {
  data: Event;
  onSelect: () => void;
}

const FreeBadge = () => (
  <View style={styles.freeBadgeContainer} testID={'event-card-free-bade'}>
    <Text style={styles.freeBadgeTitle}>Free</Text>
  </View>
);

const GenreBadge = ({genre}: {genre: string}) => (
  <View style={styles.genreBadgeContainer} testID={'event-card-genre-bade'}>
    <Text style={styles.genreBadgeTitle}>{genre}</Text>
  </View>
);

const EventCard = ({data, onSelect}: EventCardProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onSelect}
      testID={'event-card-touchable'}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.KucukAfis}} />
        <Text style={styles.name}>{data.Adi}</Text>
        {data.UcretsizMi && <FreeBadge />}
        <GenreBadge genre={data.Tur} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EventCard;
