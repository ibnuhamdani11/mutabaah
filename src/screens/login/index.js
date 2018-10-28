import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
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
  Thumbnail
} from "native-base";
import styles from "./styles";
import Home from "../home/";

const logo = require("../../../assets/logo_ibnu_abbas.jpeg");

class Login extends Component {
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
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
