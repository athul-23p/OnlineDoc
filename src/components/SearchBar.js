import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
function SearchBar({onSubmitHandler}) {
  const [query, setQuery] = useState('');

  const handleInput = text => setQuery(text);
  const handleSubmit = () => onSubmitHandler(query);
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color={'lightgray'} />
      <TextInput
        placeholder="Search..."
        style={styles.textInput}
        value={query}
        onChangeText={handleInput}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 10,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 16,
    paddingVertical: 2,
  },
});
export default SearchBar;
