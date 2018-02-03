import React, { Component } from 'react';
import { Text, View, Button,TextInput } from 'react-native';


export default class HelloWorldApp extends Component {
  constructor(){
    super();
    this.state = {userName:"", rating:""}
    this.onclickLogIn= this.onclickLogIn.bind(this);
  }
  onclickLogIn(){
  console.log("username:", this.state.userName);

  fetch("https://9547aee7.ngrok.io/AssignmentServer/api/db/user/name/"+this.state.userName)
  .then((response) => response.json())
  .then((responseJson) =>{
    
    this.props.navigation.navigate("user",{user:responseJson});
    }).catch((e)=>{
      this.setState({rating:"could not find person"+e})
    });
  }
  render() {
    return (
      <View>
      <TextInput // lave et style sheet til input og lave en seperat compounent
      style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({ userName : text})} value= {this.state.userName}
      />
     
      <Button onPress = {this.onclickLogIn} style={{ textAlign: "center", fontSize: 20 }}

      
      title="Log in"
      color="#841584"
     
    />
    <Text>{this.state.rating}</Text>
      </View>

    );
  }
}