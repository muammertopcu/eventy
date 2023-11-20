import React from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useGetEventDetailQuery} from '@redux/api/events';
import {Button, Error, EventDetailField, Loading} from '@components';
import styles from './EventDetail.styles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {checkContentIsValid, openEventLocation} from '@utils';

const baseEventURL = 'https://kultursanat.izmir.bel.tr/Etkinlikler/';

const EventDetail = () => {
  const route = useRoute<any>();
  const {id} = route.params;
  const {data, isLoading, isError} = useGetEventDetailQuery({id});

  if (isLoading) {
    return <Loading text={'Loading Event Detail'} />;
  }

  if (isError) {
    return <Error error={'Error Loading Event Detail'} />;
  }

  if (!data) {
    return null;
  }

  const handleOpenLocation = () => {
    openEventLocation(data.EtkinlikMerkezi).catch(error => console.log(error));
  };

  const handleOpenExternalLink = async () => {
    const url = baseEventURL + data.EtkinlikUrl;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const {Hakkinda, Ulasim, Iletisim, Adres, KoordinatX, KoordinatY} =
    data.EtkinlikMerkezi;

  const hasEventPlaceInfo = checkContentIsValid(Hakkinda);
  const hasEventPlaceTransport = checkContentIsValid(Ulasim);
  const hasEventPlaceContact = checkContentIsValid(Iletisim);
  const hasEventPlaceAddress = checkContentIsValid(Adres);
  const hasEventPlaceCoordinates = KoordinatX && KoordinatY;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground source={{uri: data.Resim}} style={styles.background}>
          <Image source={{uri: data.Resim}} style={styles.image} />
        </ImageBackground>

        <Text style={styles.eventName}>{data.Adi}</Text>

        <AutoHeightWebView
          style={styles.eventInfo}
          viewportContent="width=device-width, user-scalable=no"
          source={{html: data.Aciklama}}
        />

        {hasEventPlaceInfo && (
          <EventDetailField
            label={`Etkinlik Yeri: ${data.EtkinlikMerkezi.Adi}`}
            content={Hakkinda}
            webviewProps={{style: styles.eventPlace}}
          />
        )}

        {hasEventPlaceAddress && (
          <EventDetailField label={'Adres'} content={Adres} />
        )}

        {hasEventPlaceTransport && (
          <EventDetailField label={'Ulaşım'} content={Ulasim} />
        )}

        {hasEventPlaceContact && (
          <EventDetailField label={'İletişim'} content={Iletisim} />
        )}

        {hasEventPlaceCoordinates && (
          <Button text={'Adrese Git'} onPress={handleOpenLocation} />
        )}

        <Button
          text={'Etkinlik Sayfasına Git'}
          onPress={handleOpenExternalLink}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetail;
