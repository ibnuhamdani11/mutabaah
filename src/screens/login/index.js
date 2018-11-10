import React, { Component } from "react";
import { Image, View, StatusBar, Alert, AsyncStorage } from "react-native";
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
   
   
    fetch('http://xposi.co.id/apical/panel/adm/login/react_login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        Username: UserEmail,
     
        Password: UserPassword
     
      })
 
    }).then((response) => response.json())
          .then((responseJson) => {

              // If server response message same as Data Matched
             if(responseJson == 'Success')
              {
                
                // AsyncStorage.setItem('TASKS', 'isinya adalah');
                var aa = AsyncStorage.getItem('TASKS');
                    aa.then((result)=>{
                      console.log("test", result);
                    })
                
                  //Then open Profile activity and send user email to profile activity.
                  this.props.navigation.navigate('Home')
              }
              else{

                Alert.alert("Username dan Password Salah, Cek Kembali");
                //Toast.show("Username dan Password Salah, Cek Kembali");
                
              }

          }).catch((error) => {
            console.error(error);
          });
  
  /*if (UserEmail == 'admin') {
    this.props.navigation.navigate('Home')
  }*/
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          {/*
            <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        */}
          <Body>
            <Title>Login</Title>
          </Body>
          {/*<Center />*/}
        </Header>

        <Content>
          <View>
            <Image source={logo} />
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input 
              onChangeText={UserEmail => this.setState({UserEmail})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
              secureTextEntry 
              onChangeText={UserPassword => this.setState({UserPassword})} />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.UserLoginFunction}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
