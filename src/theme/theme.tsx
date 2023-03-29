import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#0d6efd',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: colors.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 10,
    color: colors.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
 },
});
