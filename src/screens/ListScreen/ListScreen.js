import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar';
import {API_URL} from '../../config/api';
import Card from './components/Card';

const listUser = async (page = 1, per_page = 6) => {
  try {
    let res = await fetch(
      `${API_URL}/api/users?page=${page}&per_page=${per_page}`,
    );
    let data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

function ListScreen(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [query, setQuery] = useState('');
  const renderItem = ({item}) => <Card person={item} />;

  useEffect(() => {
    console.log('query', query === '');
    if (query !== '') {
      listUser().then(({total}) => {
        listUser(1, total).then(({data}) => {
          let result = data.filter(({first_name, last_name}) => {
            keyword = query.toLowerCase();
            first_name = first_name.toLowerCase();
            last_name = last_name.toLowerCase();

            return first_name.includes(keyword) || last_name.includes(keyword);
          });
          setData(result);
          setTotalPages(1);
        });
      });
    } else {
      setData([]);
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    listUser(page).then(({data, total_pages}) => {
      setData(prev => [...prev, ...data]);
      setTotalPages(total_pages);
    });
  }, [page]);

  return (
    <View style={styles.container}>
      <SearchBar onSubmitHandler={string => setQuery(string)} />
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
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          if (page < totalPages) {
            setPage(prev => prev + 1);
          } else {
            ToastAndroid.show('End Reached', 2000);
          }
        }}
        style={{height: '90%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ListScreen;
