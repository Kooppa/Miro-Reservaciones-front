/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { styles, colors } from '../theme/theme';

export const MenuScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={ () => navigation.navigate('LogIn' as never) }
          >
            <Icon name="log-out" color="red" size={ 30 } />
          </TouchableOpacity>
          <View style={{ flex: 10 }}>
            <Text style={{ ...styles.title, textAlign: 'center', right: 15 }}>Menú</Text>
          </View>
        </View>
        <Text style={{ color: colors.primary, fontSize: 16, textTransform: 'uppercase' }}>Abril 2023</Text>
        <View>
          <Icon name="calendar" size={ 300 } color="gray" />
        </View>
        <TextInput
          style={{ ...styles.input, width: 320 }}
          placeholder="Horarios disponibles"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={ false }
        />
        <View>
          <Text style={{ color: colors.primary, fontSize: 16, marginVertical: 6 }}>
            Seleccionar el día que desea reservar el gimnasio.
          </Text>
          <Text style={{ color: colors.primary, fontSize: 16, marginVertical: 6 }}>
            Escoger entre los horarios disponibles de la fecha seleccionada.
          </Text>
          <Text style={{ color: colors.primary, fontSize: 16, marginVertical: 6 }}>
            Dar click en reservar espacio.
          </Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: colors.primary, borderRadius: 8, marginTop: 20 }}
          onPress={ () => navigation.navigate('Confirmation' as never) }
        >
          <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 12 }}>
            Reservar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
