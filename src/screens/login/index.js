import React, { Component } from "react";
import { ImageBackground, Image, View, StatusBar, Alert, AsyncStorage } from "react-native";
// import Toast, {ToastAndroid} from 'react-native-simple-toast';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Center,
  Thumbnail,
  TextInput,
  StyleSheet
} from "native-base";
import styles from "./styles";
import Home from "../home/";
import axios from "axios";
import { StackNavigator } from 'react-navigation';

const logo = require("../../../assets/logo_ibnu_abbas.png");
const backgroundImage = require('../../../assets/background-login.png');

class Login extends Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
    }
  }

  UserLoginFunction = () =>{
 
   const { UserEmail }  = this.state ;
   const { UserPassword }  = this.state ;
   
   
    fetch('http://mutabaah-ibnuabbas-bsd.com/api/user_login/cekLogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        email: UserEmail,
     
        password: UserPassword
     
      })
 
    }).then((response) => response.json())
          .then((responseJson) => {

              // If server response message same as Data Matched
             if(responseJson.status == 'success')
              {
                
                AsyncStorage.setItem('user_name', responseJson.data.user_name);
                AsyncStorage.setItem('user_id', responseJson.data.user_id);
                var aa = AsyncStorage.getItem('user_name');
                    aa.then((result)=>{
                      console.log("test", result);
                    })
                console.log("test", responseJson.data.user_id);
                  //Then open Profile activity and send user email to profile activity.
                  Alert.alert("Selamat Datang");
                  this.props.navigation.navigate('Home')
              }
              else{

                Alert.alert("Username dan Password Salah,");
                //Toast.show("Username dan Password Salah, Cek Kembali");
                
              }

          }).catch((error) => {
            /*console.error(error);*/
            Alert.alert("Cek Kembali Koneksi Internet Anda");
          });

  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
        <Content>
          <View style={styles.logoContainer}>
            <Image source={logo} />
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
              onChangeText={UserEmail => this.setState({UserEmail})}
              keyboardType="email-address"
              returnKeyType = "next"
              autoCorrect = {false}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
              secureTextEntry 
              onChangeText={UserPassword => this.setState({UserPassword})} 
              returnKeyType = "go"
              autoCorrect = {false}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.UserLoginFunction}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </ImageBackground>
    );
  }
}

export default Login;
