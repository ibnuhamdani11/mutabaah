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

class progresSiswaDetail extends Component {
    constructor(props) {
      super(props)
      this.state = {
        dataSiswa: null,
        isReady: false
      }
 
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id_kelas = navigation.getParam('id_kelas', 'NO-ID');

    return fetch('http://mutabaah-ibnuabbas-bsd.com/api/siswa/wherekelas/id/'+id_kelas)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSiswa : responseJson.data,
          isReady: true
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pilihJuz(params){
    const { navigation } = this.props;
    const status = navigation.getParam('status', 'No-status');
    this.props.navigation.push('juzProgres', {
      id_siswa: params
    })
  }

  renderSiswa = () => {
    const { dataSiswa } = this.state;
    if (!dataSiswa) {
      return null;
    }
    else {
      return dataSiswa.map((item, i) => {
        return (
          <ListItem key={i}
          button
          onPress={() => this.pilihJuz(item.siswa_id)}
          >
            <Left>
              <Text key={i}>
                {item.siswa_name}
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
          { this.renderSiswa() }
        </Content>
      </Container>
    );
  }
}

export default progresSiswaDetail;