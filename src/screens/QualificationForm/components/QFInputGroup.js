import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RoundEdgeInput from '../../../components/RoundEdgeInput';

function QFInputGroup({data}) {
  const [formData, setFormData] = useState({institution: ''});
  return (
    <View>
      <RoundEdgeInput
        placeholder={'10th/12th/UG/PG'}
        style={{marginVertical: 8}}
      />
      <RoundEdgeInput
        placeholder={'School/College ...'}
        style={{marginVertical: 8}}
      />
      <View style={styles.flexRow}>
        <RoundEdgeInput
          placeholder={'From Year'}
          style={{width: '40%', marginVertical: 8}}
        />
        <RoundEdgeInput
          placeholder={'To Year'}
          style={{width: '40%', marginVertical: 8}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default QFInputGroup;
