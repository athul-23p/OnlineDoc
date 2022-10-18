import React, {useState} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import RoundEdgeButton from '../../../components/RoundEdgeButton';
import RoundEdgeInput from '../../../components/RoundEdgeInput';
import styles from '../../../styles/forms';

function QFInputGroup({data, onSave}) {
  const [formData, setFormData] = useState(data);

  const handleInput = key => text => {
    setFormData({...formData, [key]: text});
  };

  const handleSave = () => {
    // add validation here

    onSave(formData);
    ToastAndroid.show('data updated', 1000);
  };
  return (
    <View key={data.id}>
      <RoundEdgeInput
        placeholder={'Course...'}
        style={{...styles.input}}
        onChangeTextHandler={handleInput('course')}
      />
      <RoundEdgeInput
        placeholder={'Institution ...'}
        style={{...styles.input}}
        onChangeTextHandler={handleInput('institution')}
      />
      <View style={styles.flexRow}>
        <RoundEdgeInput
          placeholder={'From Year'}
          style={{...styles.flexRowItem, ...styles.input}}
          onChangeTextHandler={handleInput('from')}
        />
        <RoundEdgeInput
          placeholder={'To Year'}
          style={{...styles.flexRowItem, ...styles.input}}
          onChangeTextHandler={handleInput('to')}
        />
        <RoundEdgeButton
          title="save"
          stylesContainer={{height: 30, width: '30%'}}
          stylesText={{fontSize: 16}}
          onPressHandler={() => handleSave()}
        />
      </View>
    </View>
  );
}

export default QFInputGroup;
