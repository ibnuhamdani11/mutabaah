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

class juzProgres extends Component {
    constructor(props) {
      super(props)
      this.state = {
        dataJuz: null,
        isReady: false
      }
 
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id_siswa = navigation.getParam('id_siswa', 'NO-ID');

    return fetch('http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/juzSelanjutnya/id/'+id_siswa)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataJuz : responseJson.data,
          isReady: true
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pilihJuzNext(params){
    const { navigation } = this.props;
    const id_siswa = navigation.getParam('id_siswa', 'NO-ID');
    
    this.props.navigation.push('juzDetail', {
      id_siswa: id_siswa,
      juz: params
    })
  }

  renderJuz = () => {
    const { dataJuz } = this.state;
    var tmp = [];
    // console.log('dataJuz', dataJuz);
    for (let i = 1; i <= dataJuz.ujian_next; ++i) {
      tmp.push({"juz" : i});
    }
    // console.log('tmp', tmp);
    if (!tmp) {
      return null;
    }
    else {
      return tmp.map((item, i) => {
        return (
          <ListItem key={i}
          button
          onPress={() => this.pilihJuzNext(item.juz)}
          >
            <Left>
              <Text key={i}>
                Juz {item.juz}
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Progres Santri</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
        <Content>
          { this.renderJuz() }
        </Content>
      </Container>
    );
  }
}

export default juzProgres;