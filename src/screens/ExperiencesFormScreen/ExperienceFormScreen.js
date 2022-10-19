import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Experience} from '../../utils/experience';
import EFInputGroup from './components/EFInputGroup';
import {addExperienceDetails} from '../../redux/actions';
import RoundEdgeButton from '../../components/RoundEdgeButton';
import formStyle from '../../styles/forms';
import {emptyField, isNum} from '../../utils/validate';

function ExperienceFormScreen({navigation}) {
  const [experiences, setExperiences] = useState([new Experience()]);
  const dispatch = useDispatch();
  // adds a new experience obj to experiences
  const handleAdd = () => {
    setExperiences([...experiences, new Experience()]);
  };

  // updates an entry in experiences
  const handleUpdateExperiences = data => {
    console.log(data);
    let update = experiences.map(item => {
      if (item.id == data.id) {
        item = {...item, ...data};
      }
      return item;
    });
    console.log(update);
    setExperiences(update);
  };

  // dispatch action to update experience field & navigate to next screen
  const handleNext = () => {
    for (let experience of experiences) {
      if (!emptyField(experience)) {
        Alert.alert('Form Error', 'Fill all the fields');
        return;
      }

      if (!isNum(experience, 1950, 2022, 'from', 'to')) {
        Alert.alert('Form Error', 'From & To fields should be a valid number');
        return;
      }
    }

    dispatch(addExperienceDetails(experiences));
    navigation.navigate('Preview');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={formStyle.container}>
      <View>
        <Text style={[formStyle.title]}>Experience</Text>
        {experiences?.map(data => (
          <EFInputGroup
            key={data.id}
            data={data}
            onSave={handleUpdateExperiences}
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

export default ExperienceFormScreen;
