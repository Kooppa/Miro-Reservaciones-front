/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { styles, colors } from '../theme/theme';

export const LogInScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="fitness" size={ 200 } />
        <Text style={ styles.title }>Miró Reservaciones</Text>
        <TextInput
          style={ styles.input }
          placeholder="Usuario"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={ false }
        />
        <TextInput
          style={ styles.input }
          placeholder="Contraseña"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={ false }
        />
        <Text style={{ color: colors.primary, fontSize: 16, textDecorationLine: 'underline' }}>¿Olvidó su contraseña?</Text>
        <TouchableOpacity
          style={{ backgroundColor: colors.primary, borderRadius: 8, marginTop: 20 }}
          onPress={ () => navigation.navigate('Menu' as never) }
        >
          <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 12 }}>
            Ingresar
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginTop: 20, textAlign: 'center' }}>Aplicación exclusiva para miembros de Miró Inspira, Zibatá</Text>
      </View>
    </SafeAreaView>
  );
};
