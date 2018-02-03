import React, { Component } from 'react';
import { Text, View, Button,TextInput } from 'react-native';


export default class HomeScreen extends React.Component {
   
    render() {
     console.log("props",this.props)
     let user = this.props.navigation.state.params.user;
//user.sc.map

      return (
          <View>
        <Text>welkomme {user.name}</Text>
        <Text>Your rating is  {user.rating}</Text>

        </View>
      );
    }
  }