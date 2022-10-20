import React, {useState} from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import RoundEdgeButton from '../../../components/RoundEdgeButton';
import RoundEdgeInput from '../../../components/RoundEdgeInput';
import styles from '../../../styles/forms';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const ExperienceSchema = yup.object().shape({
  company: yup.string().required('required'),
  position: yup.string().required('requried'),
  from: yup
    .number()
    .required('from, is a required field')
    .integer('must be a valid number')
    .min(1950)
    .max(2022),
  to: yup
    .number()
    .required('to, is a required field')
    .integer('must be a valid number')
    .min(1950)
    .max(2022),
});
function EFInputGroup({data: {id}, onSave}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      company: '',
      position: '',
      from: '',
      to: '',
    },
    resolver: yupResolver(ExperienceSchema),
  });
  const handleSave = formData => {
    onSave({id, ...formData});
    ToastAndroid.show('data updated', 1000);
  };

  return (
    <View>
      <Controller
        control={control}
        name="company"
        render={({field: {onChange, onBlur, value}}) => (
          <RoundEdgeInput
            placeholder={'Company'}
            style={{...styles.input}}
            onChangeTextHandler={onChange}
            value={value}
          />
        )}
      />
      {errors.company && <Text>{errors.company.message}</Text>}
      <Controller
        control={control}
        name="position"
        render={({field: {onChange, onBlur, value}}) => (
          <RoundEdgeInput
            placeholder={'Position'}
            style={{...styles.input}}
            onChangeTextHandler={onChange}
            value={value}
          />
        )}
      />
      {errors.position && <Text>{errors.position.message}</Text>}
      <View style={styles.flexRow}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <RoundEdgeInput
              placeholder={'From'}
              style={{...styles.flexRowItem, ...styles.input}}
              onChangeTextHandler={onChange}
              value={value}
            />
          )}
          name="from"
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <RoundEdgeInput
              placeholder={'to'}
              style={{...styles.flexRowItem, ...styles.input}}
              onChangeTextHandler={onChange}
              value={value}
            />
          )}
          name="to"
        />

        <RoundEdgeButton
          title="save"
          stylesContainer={{height: 30, width: '30%'}}
          stylesText={{fontSize: 16}}
          onPressHandler={handleSubmit(handleSave)}
        />
      </View>
      {errors.from && <Text>{errors.from.message}</Text>}
      {errors.to && <Text>{errors.to.message}</Text>}
    </View>
  );
}

export default EFInputGroup;
