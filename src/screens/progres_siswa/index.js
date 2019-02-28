import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  List,
  Text,
  Left,
  Right,
  Body,
  Separator
} from "native-base";
import { Alert, ListView, View, ActivityIndicator, StatusBar } from 'react-native';
import styles from "./styles";

class progresSiswa extends Component {
    constructor(props) {
      super(props)
      this.state = {
        dataKelas: null,
        isReady: false
      }
  }

  componentDidMount(){
    return fetch('http://mutabaah-ibnuabbas-bsd.com/api/kelas')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataKelas : responseJson.data,
          isReady: true
        },)
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pilihSiswa(params){
    this.props.navigation.push('progresSiswaDetail', {
      id_kelas: params,
    })
  }

  renderSiswa = () => {
    const { dataKelas } = this.state;
    if (!dataKelas) {
      return null;
    }
    else {
      return dataKelas.map((item, i) => {
        return (
          <ListItem key={i}
          button
          onPress={() => this.pilihSiswa(item.kelas_id)}
          >
            <Left>
              <Text key={i}>
                {item.kelas_name}
              </Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )
      })
    }
  }

  render() {
    const {isReady} = this.state;

    if (!isReady) {
      return ( 
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Progres Santri</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Text style={styles.headerName}>Pilih Kelas</Text>
          { this.renderSiswa() }
        </Content>
      </Container>
    );
  }
}

export default progresSiswa;