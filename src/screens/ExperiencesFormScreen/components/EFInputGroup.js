import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import RoundEdgeButton from '../../../components/RoundEdgeButton';
import RoundEdgeInput from '../../../components/RoundEdgeInput';
import styles from '../../../styles/forms';

function EFInputGroup({data, onSave}) {
  const [formData, setFormData] = useState(data);

  const handleInput = key => text => {
    setFormData({...formData, [key]: text});
  };

  const handleSave = () => {
    onSave(formData);
    ToastAndroid.show('data updated', 1000);
  };

  return (
    <View>
      <RoundEdgeInput
        placeholder={'Company'}
        style={{...styles.input}}
        onChangeTextHandler={handleInput('company')}
      />
      <RoundEdgeInput
        placeholder={'Position'}
        style={{...styles.input}}
        onChangeTextHandler={handleInput('position')}
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

export default EFInputGroup;
