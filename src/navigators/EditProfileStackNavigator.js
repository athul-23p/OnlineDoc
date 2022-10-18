import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BasicDetailsFormScreen from '../screens/BasicDetailsFormScreen';
import ExperienceFormScreen from '../screens/ExperiencesFormScreen/ExperienceFormScreen';
import PreviewScreen from '../screens/PreviewScreen';
import QualificationFormScreen from '../screens/QualificationForm/QualificationFormScreen';

const EditProfile = createNativeStackNavigator();
function EditProfileStackNavigator(props) {
  return (
    <EditProfile.Navigator screenOptions={{headerShown: false}}>
      <EditProfile.Screen
        name="BasicDetails"
        component={BasicDetailsFormScreen}
      />
      <EditProfile.Screen
        name="QualificationDetails"
        component={QualificationFormScreen}
      />
      <EditProfile.Screen
        name="ExperienceDetails"
        component={ExperienceFormScreen}
      />
      <EditProfile.Screen name="Preview" component={PreviewScreen} />
    </EditProfile.Navigator>
  );
}

export default EditProfileStackNavigator;
