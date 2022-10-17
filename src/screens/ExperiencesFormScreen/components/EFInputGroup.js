import React from 'react';
import {View} from 'react-native';
import RoundEdgeInput from '../../../components/RoundEdgeInput';

function EFInputGroup(props) {
  return (
    <View>
      <RoundEdgeInput placeholder={'Company'} />
      <RoundEdgeInput placeholder={'Position'} />
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
export default EFInputGroup;
