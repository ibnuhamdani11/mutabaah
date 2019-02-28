import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Separator,
  List,
  View,
  Fab
} from "native-base";
import { Alert, ListView, ActivityIndicator, StatusBar } from 'react-native';
import styles from "./styles";

const datas = [
  {
    route: "MenuSetorOrUjian",
    text: "Test1"
  },
  {
    route: "MenuSetorOrUjian",
    text: "Test1"
  },
  {
    route: "MenuSetorOrUjian",
    text: "Test1"
  }
];

class ListSetor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active         : false,
      nameHeader     : null,
      dataListSetor  : null,
      statusDataList : null,
      isReady        : false,
      tipeRoute      : null
    };
  }

  componentDidMount(){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const tipeRoute = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa  = navigation.getParam('id_siswa', 'No id_siswa');
    // console.log('juz', juz);
    // console.log('tipe juz', tipeJuz);
    // console.log('status', status);
    // console.log('tipe juz', tipeRoute);
    // console.log('id_siswa', id_siswa);
    // console.log('tipe juz', tipeJuz);

    if (status == 'Murajaah') {
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/listData1Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/listData12Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/listData14Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }
    }else if(status == 'Hifd Jadid'){
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/listData1Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/listData12Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/listData14Juz/?id_siswa='+id_siswa+'&&juz='+juz;
      }
    }
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataListSetor : responseJson.data,
          isReady: true,
          nameHeader  : status,
          tipeRoute   : tipeRoute,
          statusDataList : responseJson.status
        },)
        // console.log('state', this.state.dataListSetor)
    })
      .catch((error) =>{
        console.error(error);
      });
  }
  nextPage(params, params2){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const tipeRoute = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa  = navigation.getParam('id_siswa', 'No id_siswa');

    this.props.navigation.push(params, {
      status      : status,
      juz         : juz,
      tipeJuz     : tipeJuz,
      tipeRoute   : tipeRoute,
      id_siswa    : id_siswa,
      id_setoran  : params2,
      setorIsi    : 'yes'
    })
  }

  setoranPage(){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const tipeRoute = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa  = navigation.getParam('id_siswa', 'No id_siswa');

    this.props.navigation.push('Setoran', {
      status      : status,
      juz         : juz,
      tipeJuz     : tipeJuz, 
      tipeRoute   : tipeRoute,
      id_siswa    : id_siswa,
      setorIsi    : 'no'
    })
  }

  renderListSetor = () => {
    const { dataListSetor } = this.state;
    const { statusDataList } = this.state;
    const {tipeRoute} = this.state;
    var tmp = [];
    // console.log('dataListSetor', dataListSetor[0].ujian_id);

    if (statusDataList == 'success') {
        for (let i = 1; i <= dataListSetor.length; ++i) {
        tmp.push({"setoran" : i,
        "id_setoran" :dataListSetor[0].ujian_id});
      }
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
          onPress={() => this.nextPage(tipeRoute, item.id_setoran)}
          >
            <Left>
              <Text key={i}>
                {tipeRoute} ke {item.setoran}
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

  renderButtonAdd = () => {
    const { tipeRoute } = this.state;
    if (tipeRoute == 'Setoran') {
      return (
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setoranPage()}>
            <Icon name="add" />
          </Fab>
        </View>
      )
    }else{
      return null;
    }
  }
  
  render() {
    const {nameHeader} = this.state;
    const {isReady} = this.state;
    const {tipeRoute}  = this.state;

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
            <Title>{nameHeader}</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Text style={styles.headerName}>List {tipeRoute}</Text>
        <Content>
          { this.renderListSetor() }
        </Content>
          { this.renderButtonAdd() }
      </Container>
    );
  }
}

export default ListSetor;
