import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, justifyContent: 'space-between'},
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowItem: {width: '30%'},
  input: {marginVertical: 8, fontSize: 16},
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 5,
    color: 'black',
  },
});

export default styles;
