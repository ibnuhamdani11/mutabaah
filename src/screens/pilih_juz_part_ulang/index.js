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
    route: "ListTry",
    text: "1/2 juz"
  },
  {
    route: "ListTry",
    text: "1 juz"
  }

];

class PilihJuzPartUlang extends Component {
  
  pilihSetorOrUjian(params){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const id_siswa = navigation.getParam('id_siswa', 'No id_siswa');
    if (params == '1 juz') {
      this.props.navigation.push('MenuSetorOrUjian', {
      juz      : juz,
      status   : 'Murajaah',
      tipeJuz  : params,
      id_siswa : id_siswa
    })
    }else if(params == '1/2 juz'){
      this.props.navigation.push('MenuSetorOrUjian', {
      juz      : juz,
      status   : 'Murajaah',
      tipeJuz  : params,
      id_siswa : id_siswa
    })
    }else if(params == '1/4 juz'){
      this.props.navigation.push('MenuSetorOrUjian', {
      juz      : juz,
      status   : 'Murajaah',
      tipeJuz  : params,
      id_siswa : id_siswa
      })
    }
    
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Murajaah</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          <Text style={styles.headerName}>Pilih Tipe Setoran</Text>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.pilihSetorOrUjian(data.text)}
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

export default PilihJuzPartUlang;
