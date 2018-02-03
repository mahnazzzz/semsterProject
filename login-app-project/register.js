import React from 'react';
import { Text, View,TextInput,Button} from 'react-native';

import  { Component } from 'react';



export default class HelloWorldApp extends Component {
  constructor(props)
  {
      super(props);
      this.state = {userName: '',err :""}
      this.registerOn= this.registerOn.bind(this);
      
  }

  registerOn(){  
    fetch("https://9547aee7.ngrok.io/AssignmentServer/api/db/user",{method :'post', headers:{
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      "name": this.state.userName
  
    }) })
    .then((response) =>{
      if(response.status===200){console.log("user is created");
    this.props.navigation.navigate("login")}
      else{this.setState({err:"user name is allready exist"})}
      
      }).catch((e)=>{
        this.setState({err:"user name is allready exist  "+e})
      });
  }
    
  render() {
    
    return (
      <View>

      <Text style={{ textAlign: "center", fontSize: 20 }}>CPH BUSSINESS COPENHAGEN</Text>

      <TextInput 
      placeholder= "Enter your email adress here"  placeholder = {this.props.placeholder} style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = {this.props.placeholder}
      onChangeText={(text) => this.setState({userName: text})} value= {this.state.userName}
      />

      <Button onPress={this.registerOn}  title="Submit" />
      <Text> {this.state.err}</Text>
      </View>

    );
  }
}

