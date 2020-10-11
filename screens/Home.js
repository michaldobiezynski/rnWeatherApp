import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import Header from './Header';

const Home = () => {
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading',
  });

  const getWeather = () => {
    fetch(`http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=london&units=m`)
        .then(data=>data.json())
        .then(results => {
            console.log(results.location.name);
            setInfo({
                name: results.location.name,
                temp: results.current.temperature,
                humidity: results.current.humidity,
                desc: results.current.weather_descriptions[0],
                icon: results.current.weather_icons[0],

            })
        })
        .catch( error => {
            console.error(error)
        })
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={{flex: 1}}>
        <Header name="Weather app"/>
            <View style={{alignItems:"center"}}>
                <Title style={{color:"#00aaff", marginTop:30, fontSize: 30}}>
                    {info.name}
                </Title>
                <Image style={{width:120, height: 120}} source={{uri: info.icon}}/>
            </View>

        <Card style={{margin: 5, padding: 12}}>
            <Title style={{color: "#00aaff"}}>Temperature: {info.temp}</Title>
        </Card>
        <Card style={{margin: 5, padding: 12}}>
            <Title style={{color: "#00aaff"}}>Humidity: {info.humidity}</Title>
        </Card>
        <Card style={{margin: 5, padding: 12}}>
            <Title style={{color: "#00aaff"}}>Description: {info.desc}</Title>
        </Card>
    </View>
  );
};

export default Home;
