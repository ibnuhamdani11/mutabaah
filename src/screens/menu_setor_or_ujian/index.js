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
  List
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Setoran",
    text: "Setoran"
  },
  {
    route: "Ujian",
    text: "Ujian"
  }
];

class MenuSetorOrUjian extends Component {

  constructor(props) {
 
    super(props)
    this.state = {
      nameHeader: null,
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');

    // if (tipeJuz == '1 juz') {
    //   var url = 'http://mutabaah-ibnuabbas-bsd.com/api/kelas';
    // }else if(tipeJuz == '1/2 juz'){
    //   var url = 'http://mutabaah-ibnuabbas-bsd.com/api/kelas';
    // }else if(tipeJuz == '1/4 juz'){
    //   var url = 'http://mutabaah-ibnuabbas-bsd.com/api/kelas';
    // }
    this.setState({
      nameHeader  : status
    })
  }

  pilihListSetor(params){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const id_siswa = navigation.getParam('id_siswa', 'No id_siswa');

    this.props.navigation.push('ListSetor', {
      juz      : juz,
      status   : status,
      tipeJuz  : tipeJuz,
      tipeRoute : params,
      id_siswa  : id_siswa
      })
    
  }
  
  render() {
    const {nameHeader} = this.state;
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

        <Content>
          <Text style={styles.headerName}>Pilih Setoran atau Ujian</Text>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.pilihListSetor(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default MenuSetorOrUjian;
