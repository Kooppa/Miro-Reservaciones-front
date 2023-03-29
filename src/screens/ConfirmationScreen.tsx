/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles, colors } from '../theme/theme';

export const ConfirmationScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text style={{ ...styles.title, textAlign: 'center' }}>Reservación Exitosa</Text>
        <Icon name="happy" size={ 100 } style={{ textAlign: 'center' }} />
        <View>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Fecha:</Text>
          <Text style={{ fontSize: 18 }}>20/04/2023</Text>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Hora:</Text>
          <Text style={{ fontSize: 18 }}>4:00 p.m.</Text>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Nombre:</Text>
          <Text style={{ fontSize: 18 }}>Rosalia</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: colors.primary, borderRadius: 8, marginTop: 20, width: 200, alignSelf: 'center' }}
          onPress={ () => navigation.navigate('Menu' as never) }
        >
          <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 12, textAlign: 'center' }}>
            Regresar al menú
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
