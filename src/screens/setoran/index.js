import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
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
  DatePicker
} from "native-base";
import styles from "./styles";

class Setoran extends Component {
  constructor(props) {
    super(props);
    // this.state = { dateAwalPost: new Date('Y-m-d') };

    this.setDate = this.setDate.bind(this);
    this.state = {
      dateAwal     : null,
      dateAkhir    : null,
      statusData   : null,
      dateAwalPost : null,
      dateAkhirPost: null,
      user_id      : null,
      user_name    : null,
      statusHeader : null
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const juz         = navigation.getParam('juz', 'No juz');
    const tipeJuz     = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status      = navigation.getParam('status', 'No status');
    const tipeRoute   = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa    = navigation.getParam('id_siswa', 'No id_siswa');
    const id_setoran  = navigation.getParam('id_setoran', 'No id_setoran');
    const setorIsi    = navigation.getParam('setorIsi', 'No setorIsi')
    // console.log('id_setoran', id_setoran);
    // this.setState({statusHeader: status})

    if(setorIsi == 'yes'){
      if (status == 'Murajaah') {
        if (tipeJuz == '1 juz') {
          var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/getData1Juz/?id_setoran='+id_setoran;
        }else if(tipeJuz == '1/2 juz'){
          var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/getData12Juz/?id_setoran='+id_setoran;
        }
        // else if(tipeJuz == '1/4 juz'){
        //   var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/getData14Juz/?id_setoran='+id_setoran;
        // }
      }else if(status == 'Hifd Jadid'){
        if (tipeJuz == '1 juz') {
          var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/getData1Juz/?id_setoran='+id_setoran;
        }else if(tipeJuz == '1/2 juz'){
          var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/getData12Juz/?id_setoran='+id_setoran;
        }else if(tipeJuz == '1/4 juz'){
          var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/getData14Juz/?id_setoran='+id_setoran;
        }
      }
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            dateAwal   : responseJson.data.ujian_awal,
            dateAkhir  : responseJson.data.ujian_akhir,
            statusData : responseJson.status,
            statusHeader: status
          })
        })
        .catch((error) =>{
          console.error(error);
      });
    }

  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  renderDateAwal = () =>{
    const {dateAwal} = this.state;
    const {statusData} = this.state;

    if (statusData == 'success') {
      if (dateAwal == null) {
        return(
          <DatePicker
            // defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date()}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Pilih tanggal"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={this.setDate}
            onDateChange={(newDate) => {this.setState({ dateAwalPost: newDate })}}
          />
        );
      }else if (dateAwal == '0000-00-00') {
        return(
          <DatePicker
            // defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date()}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Pilih tanggal"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={this.setDate}
            onDateChange={(newDate) => {this.setState({ dateAwalPost: newDate })}}
          />
        );
      }else{
        return(
          <Label style={styles.labelDate}>{dateAwal}</Label>
        );
      }
    }else{
      return(
        <DatePicker
          // defaultDate={new Date(2019, 4, 4)}
          minimumDate={new Date(2019, 1, 1)}
          maximumDate={new Date()}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Pilih tanggal"
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          // onDateChange={this.setDate}
          onDateChange={(newDate) => {this.setState({ dateAwalPost: newDate })}}
        />
      );
    }
  }

  renderDateAkhir = () =>{
    const {dateAkhir} = this.state;
    const {statusData} = this.state;

    if (statusData == 'success') {
      if (dateAkhir == '0000-00-00') {
        return(
          <DatePicker
            // defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date()}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Pilih tanggal"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={this.setDate}
            onDateChange={(newDate) => {this.setState({ dateAkhirPost: newDate })}}
          />
        );
      }else if (dateAkhir == null) {
        return(
          <DatePicker
            // defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date()}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Pilih tanggal"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={this.setDate}
            onDateChange={(newDate) => {this.setState({ dateAwalPost: newDate })}}
          />
        );
      }else{
        return(
          <Label style={styles.labelDate}>{dateAkhir}</Label>
        );
      }
    }else{
      return(
        <DatePicker
          // defaultDate={new Date(2019, 4, 4)}
          minimumDate={new Date(2019, 1, 1)}
          maximumDate={new Date()}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Pilih tanggal"
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          // onDateChange={this.setDate}
          onDateChange={(newDate) => {this.setState({ dateAkhirPost: newDate })}}
        />
      );
    }
  }

  renderButton = ()  =>{
    const { dateAwal } = this.state;
    const { dateAkhir }= this.state;

    if (dateAwal == null || dateAkhir == null) {
      return (
        <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.simpanData}>
          <Text>Simpan</Text>
        </Button>
      )
    }else if (dateAwal == '0000-00-00' || dateAkhir == '0000-00-00') {
      return (
        <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.simpanData}>
          <Text>Simpan</Text>
        </Button>
      )
    }else if(dateAwal != '0000-00-00' && dateAkhir != '0000-00-00' || dateAwal != null && dateAkhir != null){
      return null
    }
  }

  simpanData = async () => {
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const tipeRoute = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa  = navigation.getParam('id_siswa', 'No id_siswa');

    // get data
      await AsyncStorage.getItem('user_id', (error, result) => {
        if (result) {
            this.setState({
                user_id: result
            });
        }else{
          console.log('gagal user_id')
        }
      });
      await AsyncStorage.getItem('user_name', (error, result) => {
        if (result) {
            this.setState({
                user_name: result
            });
        }else{
          console.log('gagal user_name')
        }
      });

    // declaration const for state 
    const { dateAwalPost }  = this.state ;
    const { dateAkhirPost }  = this.state ;
    const { user_id }  = this.state ;
    const { user_name }  = this.state ;

    let dateAwalTmp = this.convertDate(dateAwalPost);
    let dateAkhirTmp = this.convertDate(dateAkhirPost);
    // console.log('dataawal', dateAwalTmp);
    // console.log('dataakhir', dateAkhirTmp);
    // console.log('user_id', user_id);
    // console.log('user_name', user_name);
    if (status == 'Murajaah') {
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/insertUjian1';
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/insertUjian12';
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/insertUjian14';
      }
    }else if(status == 'Hifd Jadid'){
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/insertUjian1';
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/insertUjian12';
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/insertUjian14';
      }
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_user     : user_id,
        id_siswa    : id_siswa,
        ujian_juz   : juz,
        ujian_awal  : dateAwalTmp,
        ujian_akhir : dateAkhirTmp,
        name_user   : user_name
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {

              // If server response message same as Data Matched
             if(responseJson.status == 'success')
              {         
                Alert.alert("Sukses Simpan Data");
                this.props.navigation.navigate('Home')
              }
              else{
                Alert.alert("Gagal"); 
              }

          }).catch((error) => {
            /*console.error(error);*/
            Alert.alert("Cek Kembali Koneksi Internet Anda");
          });
  }

  // async CekDataAsync (){
  //     await AsyncStorage.getItem('user_id', (error, result) => {
  //       if (result) {
  //           this.setState({
  //               user_id: result
  //           });
  //       }else{
  //         console.log('gagal');
  //       }
  //     });
  //     await AsyncStorage.getItem('user_name', (error, result) => {
  //       if (result) {
  //           this.setState({
  //               user_name: result
  //           });
  //       }else{
  //          console.log('gagal');          
  //       }
  //     });
      
  // };


  convertDate(dt){
    if (dt == null) {
      return '0000-00-00'
    }
    let year=dt.getFullYear();
    let month=dt.getMonth()+1 //getMonth is zero based;
    let day=dt.getDate();
    return year+"-"+month+"-"+day;
  }


  render() {
    const { statusHeader } = this.state;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{ statusHeader }</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={styles.headerName}>Tanggal Tasmi'</Text>
          <Form>
            <Item stackedLabel>
              <Label>Awal Tasmi' </Label>
              { this.renderDateAwal() }
            </Item>
            <Item stackedLabel>
              <Label>Akhir Tasmi'</Label>
              { this.renderDateAkhir() }
            </Item>
          </Form>
            { this.renderButton() }
        </Content>
      </Container>
    );
  }
}

export default Setoran;
