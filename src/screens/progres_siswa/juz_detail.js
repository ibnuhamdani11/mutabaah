import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Label
} from "native-base";
import { Alert, ListView, View, ActivityIndicator, StatusBar } from 'react-native';
import styles from "./styles";

class juzDetail extends Component {
    constructor(props) {
      super(props)
      this.state = {
        dataProgresUjian1: null,
        dataProgresUjianUlang1  : null,
        dataProgresUjian12      : null,
        dataProgresUjianUlang12 : null,
        dataProgresUjian14      : null,
        isReady: false
      }
 
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id_siswa = navigation.getParam('id_siswa', 'NO-ID');
    const juz = navigation.getParam('juz', 'NO-juz');
    // const { dataProgres } = this.state;
    // console.log('juz1', juz)
    // console.log('id_siswa', id_siswa)

    return fetch("http://mutabaah-ibnuabbas-bsd.com/api/siswa/progresSiswa1?id_siswa="+id_siswa+"&&juz="+juz)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson', responseJson.data)
        if (responseJson.status =='success') {
          this.setState({
            dataProgresUjian1 : responseJson.data.ujian_1,
            dataProgresUjianUlang1 : responseJson.data.ujian_ulang_1,
            dataProgresUjian12 : responseJson.data.ujian_1_2,
            dataProgresUjianUlang12 : responseJson.data.ujian_ulang_1_2,
            dataProgresUjian14 : responseJson.data.ujian_1_4,
            isReady: true
          })
        }else{
          this.setState({
            dataProgresUjian1 : 'kosong',
            dataProgresUjianUlang1 : 'kosong',
            dataProgresUjian12 : 'kosong',
            dataProgresUjianUlang12 : 'kosong',
            dataProgresUjian14 : 'kosong',
            isReady: true
          })
        }
        
      })
      .catch((error) =>{
        console.error(error);
    });
      
  }

  convertStatusLulus(param){
    if (param == '1') {
      return 'Lulus';
    }else{
      return 'Tidak Lulus';
    }
  }

  convertDate(param){
    if (param == '0000-00-00') {
      return 'Belum';
    }else if(param == null) {
      return 'Belum';
    }else {
      return param;
    }
  }

  convertDataNull(param){
    if (param == null) {
      return 'Belum Diuji';
    }else{
      return param;
    }
  }
  renderText1 = () => {
    const { dataProgresUjian1 } = this.state;
    if (dataProgresUjian1 == 'kosong') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else if (dataProgresUjian1.length == '0') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else{
      return dataProgresUjian1.map((item, index) => {
        return (
          <CardItem bordered key={index}>
          <Body>
            <Text>Setoran { this.convertDate(item.ujian_awal) } s/d { this.convertDate(item.ujian_akhir) }</Text>
            <Text>Nilai { item.ujian_nilai } Status { this.convertStatusLulus(item.ujian_status_lulus) }</Text>
            <Text>Ujian_date { this.convertDate(item.ujian_date) }</Text>
            <Text>Penguji setoran { this.convertDataNull(item.created_by) }</Text>
            <Text>Penguji ujian { this.convertDataNull(item.created_ujian_by) }</Text>
          </Body>
          </CardItem>
        )
      })
    }
  }

  renderText12 = () => {
    const { dataProgresUjian12 } = this.state;
    console.log('dataProgresUjian12', dataProgresUjian12)

    if (dataProgresUjian12 == 'kosong') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else if (dataProgresUjian12.length == '0') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else{
      return dataProgresUjian12.map((item, index) => {
        return (

          <CardItem bordered key={index}>
          <Body>
            <Text>Setoran { this.convertDate(item.ujian_awal) } s/d { this.convertDate(item.ujian_akhir) }</Text>
            <Text>Nilai { item.ujian_nilai } Status { this.convertStatusLulus(item.ujian_status_lulus) }</Text>
            <Text>Ujian_date { this.convertDate(item.ujian_date) }</Text>
            <Text>Penguji setoran { this.convertDataNull(item.created_by) }</Text>
            <Text>Penguji ujian { this.convertDataNull(item.created_ujian_by) }</Text>
          </Body>
          </CardItem>
        )
      })
    }
  }

  renderText14 = () => {
    const { dataProgresUjian14 } = this.state;
    console.log('dataProgresUjian14', dataProgresUjian14)

    if (dataProgresUjian14 == 'kosong') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else if (dataProgresUjian14.length == '0') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else{
      return dataProgresUjian14.map((item, index) => {
        return (

          <CardItem bordered key={index}>
          <Body>
            <Text>Setoran { this.convertDate(item.ujian_awal) } s/d { this.convertDate(item.ujian_akhir) }</Text>
            <Text>Nilai { item.ujian_nilai } Status { this.convertStatusLulus(item.ujian_status_lulus) }</Text>
            <Text>Ujian_date { this.convertDate(item.ujian_date) }</Text>
            <Text>Penguji setoran { this.convertDataNull(item.created_by) }</Text>
            <Text>Penguji ujian { this.convertDataNull(item.created_ujian_by) }</Text>
          </Body>
          </CardItem>
        )
      })
    }
  }

  renderTextUlang1 = () => {
    const { dataProgresUjianUlang1 } = this.state;
    if (dataProgresUjianUlang1 == 'kosong') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else if (dataProgresUjianUlang1.length == '0') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else{
      return dataProgresUjianUlang1.map((item, index) => {
        return (
          <CardItem bordered key={index}>
          <Body>
            <Text>Setoran { this.convertDate(item.ujian_awal) } s/d { this.convertDate(item.ujian_akhir) }</Text>
            <Text>Nilai { item.ujian_nilai } Status { this.convertStatusLulus(item.ujian_status_lulus) }</Text>
            <Text>Ujian_date { this.convertDate(item.ujian_date) }</Text>
            <Text>Penguji setoran { this.convertDataNull(item.created_by) }</Text>
            <Text>Penguji ujian { this.convertDataNull(item.created_ujian_by) }</Text>
          </Body>
          </CardItem>
        )
      })
    }
  }

  renderTextUlang12 = () => {
    const { dataProgresUjianUlang12 } = this.state;
    console.log('dataProgresUjianUlang12', dataProgresUjianUlang12)

    if (dataProgresUjianUlang12 == 'kosong') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else if(dataProgresUjianUlang12.length == '0') {
      return(
        <CardItem bordered>
          <Body>
            <Text>Belum ada setoran/ ujian</Text>
          </Body>
          </CardItem>
      )
    }else{
      return dataProgresUjianUlang12.map((item, index) => {
        return (

          <CardItem bordered key={index}>
          <Body>
            <Text>Setoran { this.convertDate(item.ujian_awal) } s/d { this.convertDate(item.ujian_akhir) }</Text>
            <Text>Nilai { item.ujian_nilai } Status { this.convertStatusLulus(item.ujian_status_lulus) }</Text>
            <Text>Ujian_date { this.convertDate(item.ujian_date) }</Text>
            <Text>Penguji setoran { this.convertDataNull(item.created_by) }</Text>
            <Text>Penguji ujian { this.convertDataNull(item.created_ujian_by) }</Text>
          </Body>
          </CardItem>
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
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered first>
              <Text>Hifd Jadid</Text>
            </CardItem>
            <CardItem bordered>
              <Text>1/4 Juz</Text>
            </CardItem>
              { this.renderText14() }
            <CardItem bordered>
              <Text>1/2 Juz</Text>
            </CardItem>
              { this.renderText12() }
            <CardItem bordered>
              <Text>1 Juz</Text>
            </CardItem>
              { this.renderText1() }
            <CardItem header bordered first>
              <Text>Murajaah</Text>
            </CardItem>
            <CardItem bordered>
              <Text>1/2 Juz</Text>
            </CardItem>
              { this.renderTextUlang12() }
            <CardItem bordered>
              <Text>1 Juz</Text>
            </CardItem>
              { this.renderTextUlang1() }
            {/*<CardItem footer bordered last>
              <Text>GeekyAnts</Text>
            </CardItem>*/}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default juzDetail;
