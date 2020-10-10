import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {TextInput, Button, Card} from 'react-native-paper';
import Header from './Header';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const fetchCities = (text) => {
    setCity(text);
    fetch(
      `https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=${text}&locationType=city&format=json`,
    )
      .then((item) => item.json())
      .then((cityData) => {
        if (cityData.location.address) {
          console.log(cityData.location.address.slice(0, 9));
          setCities(cityData.location.address.slice(0, 9));
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={{flex: 1}}>
      <Header name="SearchScreen" />
      <TextInput
        label="city name"
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={(text) => {
          fetchCities(text);
        }}
      />
      <Button
        icon="content-save"
        mode="contained"
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 20}}
        onPress={() => console.log('Pressed')}>
        <Text style={{color: 'white'}}>Press me</Text>
      </Button>

      <FlatList
        data={cities}
        renderItem={({item}) => {
          return (
            <Card style={{margin: 2, padding: 12}}>
              <Text>{item}</Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Search;
