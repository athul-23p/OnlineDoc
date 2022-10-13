import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import SearchBar from '../../components/SearchBar';
import {API_URL} from '../../config/api';
import Card from './components/Card';

const listDoctors = async (page = 1, per_page = 6) => {
  try {
    let res = await fetch(
      `${API_URL}/api/users?page=${page}&per_page=${per_page}`,
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDoctorsCount = async () => {
  try {
    let data = await listDoctors(1);
    let {total} = data;
    return total;
  } catch (error) {
    console.log(error);
  }
};

function ListScreen(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const renderItem = ({item}) => <Card person={item} />;

  const filterByName = ({first_name, last_name}) => {
    keyword = query.toLowerCase();
    first_name = first_name.toLowerCase();
    last_name = last_name.toLowerCase();

    return first_name.includes(keyword) || last_name.includes(keyword);
  };

  useEffect(() => {
    async function search() {
      setIsLoading(true);
      if (query.length > 0) {
        let total = await getDoctorsCount();
        let {data: doctors, total_pages} = await listDoctors(1, total);
        let result = doctors.filter(filterByName);
        setData(result);
        setPage(1);
        setTotalPages(total_pages);
      } else {
        let {data, total_pages} = await listDoctors(page);
        setData(data);
        setTotalPages(total_pages);
      }
    }
    search().then(() => setIsLoading(false));
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      listDoctors(page).then(({data, total_pages}) => {
        setData(prev => [...prev, ...data]);
        setTotalPages(total_pages);
      });
    }
  }, [page]);

  return (
    <BackgroundWrapper style={{paddingTop: 20, paddingHorizontal: 10}}>
      <SearchBar onSubmitHandler={string => setQuery(string)} />
      {isLoading ? (
        <ActivityIndicator size={'large'} style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'gray'}}>No search results found</Text>
            </View>
          )}
          ListFooterComponent={() => {
            console.log(page, totalPages);
            return page !== totalPages ? <ActivityIndicator /> : null;
          }}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (page < totalPages) {
              setPage(prev => prev + 1);
            }
          }}
          style={{height: '90%'}}
        />
      )}
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {flex: 1, alignItems: 'center'},
});
export default ListScreen;
