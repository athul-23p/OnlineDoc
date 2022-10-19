import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import RoundEdgeButton from '../../components/RoundEdgeButton';
import {addQualificationDetails} from '../../redux/actions';
import {Qualification} from '../../utils/qualification';
import QFInputGroup from './components/QFInputGroup';
import formStyle from './../../styles/forms';
import {emptyField, isNum} from '../../utils/validate';

function QualificationFormScreen({navigation}) {
  const [qualifications, setQualifications] = useState([new Qualification()]);
  const dispatch = useDispatch();

  // adds a new qualification obj to qualifications
  const handleAdd = () => {
    setQualifications([...qualifications, new Qualification()]);
  };

  // updates an entry in qualifications
  const handleUpdateQualification = data => {
    console.log(data);
    let update = qualifications.map(item => {
      if (item.id == data.id) {
        item = {...item, ...data};
      }
      return item;
    });
    console.log(update);
    setQualifications(update);
  };

  // dispatch action to update qualification field & navigate to next screen
  const handleNext = () => {
    for (let qualificaton of qualifications) {
      if (!emptyField(qualificaton)) {
        Alert.alert('Form Error', 'Fill all the fields');
        return;
      }

      if (!isNum(qualificaton, 1950, 2022, 'from', 'to')) {
        Alert.alert('Form Error', 'From & To fields should be a valid number');
        return;
      }
    }
    dispatch(addQualificationDetails(qualifications));
    navigation.navigate('ExperienceDetails');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={formStyle.container}>
      <View>
        <Text style={[formStyle.title]}>Qualification </Text>
        {qualifications.map(data => (
          <QFInputGroup
            data={data}
            onSave={handleUpdateQualification}
            key={data.id}
          />
        ))}

        <RoundEdgeButton
          title="Add"
          stylesContainer={{
            backgroundColor: 'dodgerblue',
            width: '95%',
            height: 50,
            marginHorizontal: 10,
          }}
          onPressHandler={handleAdd}
        />
      </View>

      <RoundEdgeButton
        title="Next"
        stylesContainer={{
          backgroundColor: 'dodgerblue',
          width: 120,
          height: 50,
        }}
        stylesText={{color: 'white', fontSize: 18}}
        onPressHandler={handleNext}
      />
    </KeyboardAwareScrollView>
  );
}

export default QualificationFormScreen;
