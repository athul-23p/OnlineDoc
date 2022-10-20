import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import RoundEdgeButton from '../../../components/RoundEdgeButton';
import RoundEdgeInput from '../../../components/RoundEdgeInput';
import styles from '../../../styles/forms';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const QualificationSchema = yup.object().shape({
  course: yup.string().required('required'),
  institution: yup.string().required('requried'),
  from: yup
    .number('must be a valid number')
    .required('from, is a required field')
    .min(1950)
    .max(2022),
  to: yup
    .number('must be a valid number')
    .required('to, is a required field')
    .min(1950)
    .max(2022),
});

function QFInputGroup({data: {id}, onSave}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      course: '',
      institution: '',
      from: '',
      to: '',
    },
    resolver: yupResolver(QualificationSchema),
  });

  const handleSave = formData => {
    // console.log(formData);
    onSave({id, ...formData});
    ToastAndroid.show('data updated', 1000);
  };
  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <RoundEdgeInput
            placeholder={'Course...'}
            style={{...styles.input}}
            onChangeTextHandler={onChange}
            value={value}
          />
        )}
        name="course"
      />
      {errors.course && <Text>{errors.course.message}</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <RoundEdgeInput
            placeholder={'Institution ...'}
            style={{...styles.input}}
            onChangeTextHandler={onChange}
            value={value}
          />
        )}
        name="institution"
      />
      {errors.institution && <Text>{errors.institution.message}</Text>}
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

export default QFInputGroup;
