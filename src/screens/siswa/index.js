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

class siswaPage extends Component {

    constructor(props) {
      super(props)
      this.state = {
        dataSiswa: null,
        isReady: false,
        statusHeader: null
      }
 
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id_kelas = navigation.getParam('id_kelas', 'NO-ID');
    const status = navigation.getParam('status', 'No-status');
    // console.log('status', status);
    this.setState({statusHeader: status});
    // console.log('testIng', id_kelas);

    return fetch('http://mutabaah-ibnuabbas-bsd.com/api/siswa/wherekelas/id/'+id_kelas)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSiswa : responseJson.data,
          isReady: true
        },)
        // console.log('state', this.state.dataSiswa)
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pilihJuz(params){
    const { navigation } = this.props;
    const status = navigation.getParam('status', 'No-status');
    // console.log('status', status);
    // this.setState({statusHeader: status});
    this.props.navigation.push('PilihJuz', {
      id_siswa: params,
      status: status
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
    const {statusHeader} = this.state;

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
            <Title>{statusHeader}</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
        <Content>
          <Text style={styles.headerName}>Pilih Santri</Text>
          { this.renderSiswa() }
        </Content>
      </Container>
    );
  }
}

export default siswaPage;
