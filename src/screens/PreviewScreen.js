import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyle from '../styles/globalStyle';

function PreviewScreen({navigation}) {
  const store = useSelector(store => store);
  const {experiences, qualifications} = store;
  console.log(store);
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <Text style={styles.title}>Preview</Text>
      {/*Basic details*/}
      <View style={styles.section}>
        <Text style={[styles.subtitle]}>Basic Info</Text>
        <View style={styles.flexRow}>
          <Text style={[styles.itemLabel, styles.text]}>Name</Text>
          <Text
            style={[
              styles.text,
            ]}>{`${store.firstName} ${store.lastName}`}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.itemLabel, styles.text]}>Email</Text>
          <Text style={[styles.text]}>{store.email}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.itemLabel, styles.text]}>Mobile </Text>
          <Text style={[styles.text]}>{store.mobile}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.subtitle]}>Qualifications </Text>
        {qualifications.map(data => (
          <View key={data.id} style={[styles.subsection]}>
            <Text style={[styles.text, globalStyle.bold]}>{data.course}</Text>
            <Text style={[styles.text]}>{data.institution}</Text>
            <View style={[styles.flexRow]}>
              <Text style={[styles.text, styles.rowItem]}>{data.from}</Text>
              <Text style={[styles.rowItem]}>-</Text>
              <Text style={[styles.text, styles.rowItem]}>{data.to}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={[styles.subtitle]}>Experiences </Text>
        {experiences.map(data => (
          <View key={data.id} style={[styles.subsection]}>
            <Text style={[styles.text, globalStyle.bold]}>{data.company}</Text>
            <Text style={[styles.text]}>{data.position}</Text>
            <View style={[styles.flexRow]}>
              <Text style={[styles.text, styles.rowItem]}>{data.from}</Text>
              <Text style={[styles.rowItem]}>-</Text>
              <Text style={[styles.text, styles.rowItem]}>{data.to}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyle.container,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    ...globalStyle.largeText,
    marginBottom: 5,
  },
  section: {marginVertical: 10},
  flexRow: {flexDirection: 'row'},
  itemLabel: {
    width: '40%',
  },
  text: {
    ...globalStyle.mediumText,
    color: 'black',
  },
  rowItem: {
    marginRight: 10,
  },
  subsection: {
    marginVertical: 5,
  },
});
export default PreviewScreen;
