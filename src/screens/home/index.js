import React, { Component } from 'react';
import {  ImageBackground, Image, View, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {
  Container,
  Header,
  Title, 
  Content,
  Button,
  Icon,
  ListItem,
  Left,
  Text,
  Right,
  Body,
  Separator,
  List
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./styles";
// import Profile from "../profile/";
const backgroundImage = require("../../../assets/Main-menu.png");
const iconHafalan = require("../../../assets/hafalan.png");
const iconProgressSiswa = require("../../../assets/progress_siswa.png");
const iconLogout = require("../../../assets/logout.png");

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /*<Container style={styles.container}>*/

      <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
        <Header androidStatusBarColor='white'>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right/>
        </Header>

        <Grid >
          <Row>
            <Col>
                <View style={ styles.bottomItem }>
                  <View style={ styles.bottomItemIner }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HifdJadid')}>
                      <Image source={iconHafalan} style={styles.iconImage}
                      ></Image>
                      <Text style={ styles.textIcon }> Hifd Jadid </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </Col>
            <Col>
                <View style={ styles.bottomItem }>
                  <View style={ styles.bottomItemIner }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Murajaah')}>
                      <Image source={iconHafalan} style={styles.iconImage}></Image>
                      <Text style={ styles.textIcon }> Murajaah </Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </Col>
          </Row>
          
          <Row>
            <Col>
                <View style={ styles.bottomItem }>
                  <View style={ styles.bottomItemIner }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgresSiswa')}>
                      <Image source={iconProgressSiswa} style={styles.iconImage}></Image>
                      <Text style={ styles.textIcon }> Progress </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </Col>
            <Col>
                <View style={ styles.bottomItem }>
                  <View style={ styles.bottomItemIner }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                      <Image source={iconLogout} style={styles.iconImage}></Image>
                      <Text style={ styles.textIcon }> Logout </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </Col>
          </Row>
        </Grid>
          
        </ImageBackground>
    );
  }
}

export default Home;