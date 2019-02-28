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
  View,
  Picker,
  DatePicker,
  Textarea
} from "native-base";
import styles from "./styles";

class Ujian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // chosenDate         : new Date(),
      // selected2          : undefined,
      // status             : undefined,
      statusLulus        : null,
      dateUjian          : null,
      taqdirNilai        : null,
      mulahadhahCatatan  : null,
      statusLulus1       : null,
      dateUjian1         : null,
      taqdirNilai1       : null,
      mulahadhahCatatan1 : null,
      statusHeader       : null,
      user_name          : null
    };

    // this.setDate = this.setDate.bind(this);
  }

  componentDidMount(){
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const tipeRoute = navigation.getParam('tipeRoute', 'No tipeRoute');
    const id_siswa  = navigation.getParam('id_siswa', 'No id_siswa');
    const id_setoran = navigation.getParam('id_setoran', 'No id_setoraan');

    console.log('id_setoran', id_setoran);
    // console.log('tipe juz', tipeJuz);
    // console.log('status', status);
    // console.log('tipe juz', tipeRoute);
    // console.log('id_siswa', id_siswa);

    if (status == 'Murajaah') {
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/getData1Juz/?id_setoran='+id_setoran;
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/getData12Juz/?id_setoran='+id_setoran;
      }
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
          statusLulus1        : responseJson.data.ujian_status_lulus,
          dateUjian1          : responseJson.data.ujian_date,
          taqdirNilai1        : responseJson.data.ujian_nilai,
          mulahadhahCatatan1  : responseJson.data.ujian_catatan,
          statusHeader        : status
        })
      })
      .catch((error) =>{
        console.error(error);
    });


  }

  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }

  // onValueChange2(value: string) {
  //   this.setState({
  //     selected2: value
  //   });
  // }

  // onChangeStatus(value: string) {
  //   this.setState({
  //     status: value
  //   });
  // }

  simpanData = async () => {
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');
    const status = navigation.getParam('status', 'No status');
    const id_setoran = navigation.getParam('id_setoran', 'No id_setoraan');

    const { statusLulus }        = this.state;
    const { dateUjian }          = this.state;
    const { taqdirNilai }        = this.state;
    const { mulahadhahCatatan }  = this.state;
    console.log('statusLulus', statusLulus);
    // console.log('dateUjian', dateUjian);
    console.log('taqdirNilai', taqdirNilai);
    console.log('mulahadhahCatatan', mulahadhahCatatan);

    await AsyncStorage.getItem('user_name', (error, result) => {
      if (result) {
          this.setState({
              user_name: result
          });
          console.log('result', result)
      }else{
        console.log('gagal user_name')
      }
    });

    let dateUjianPost = this.convertDate(dateUjian);
    console.log('dateUjianPost', dateUjianPost);

    const { user_name }          = this.state;
    console.log('user_name', user_name);
    if ((statusLulus == null) || (statusLulus == '') || (dateUjian == null) || (taqdirNilai == null) || (taqdirNilai == '') || (mulahadhahCatatan == null)) {
      Alert.alert("Harus diisi semua dangan benar");
    }else{
      // simpan data
    if (status == 'Murajaah') {
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/updateInsertUjian1';
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/updateInsertUjian12';
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/murajaah/updateInsertUjian14';
      }
    }else if(status == 'Hifd Jadid'){
      if (tipeJuz == '1 juz') {
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/updateInsertUjian1';
      }else if(tipeJuz == '1/2 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/updateInsertUjian12';
      }else if(tipeJuz == '1/4 juz'){
        var url = 'http://mutabaah-ibnuabbas-bsd.com/api/hifd_jadid/updateInsertUjian14';
      }
    }
    console.log(url);
    console.log('juz', juz)
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_setoran    : id_setoran,
        status_lulus  : statusLulus,
        juz           : juz,
        created_by    : user_name,
        ujian_date    : dateUjianPost,
        ujian_nilai   : taqdirNilai,
        ujian_catatan : mulahadhahCatatan
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {

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


// 
    }
  }

  convertDate(dt){
    if (dt == null) {
      return '0000-00-00'
    }
    let year=dt.getFullYear();
    let month=dt.getMonth()+1 //getMonth is zero based;
    let day=dt.getDate();
    return year+"-"+month+"-"+day;
  }

  renderInputNilai = () => {
    const { navigation } = this.props;
    const juz = navigation.getParam('juz', 'No juz');
    const tipeJuz = navigation.getParam('tipeJuz', 'No tipeJuz');

    if (tipeJuz == '1 juz') {
      return(
        <Item stackedLabel>
          <Label>Taqdir</Label>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              // placeholder="Pilih Salah Satu"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.taqdirNilai}
              onValueChange={(newTaqdir) => {this.setState({ taqdirNilai: newTaqdir })}}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Pilih Salah Satu" value='' />
              <Item label="Mumtaz+" value="Mumtaz+" />
              <Item label="Mumtaz" value="Mumtaz" />
              <Item label="Jayyid Jiddan+" value="Jayyid Jiddah+" />
              <Item label="Jayyid Jiddan" value="Jayyid Jiddah" />
              <Item label="Jayyid+" value="Jayyid+" />
              <Item label="Jayyid" value="Jayyid" />
              <Item label="Maqbul" value="Maqbul" />
            </Picker>
          </Item>
        </Item>  
      )
    }else{
      return(
        <Item stackedLabel>
          <Label>Taqdir</Label>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              // placeholder="Pilih Salah Satu"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.taqdirNilai}
              onValueChange={(newTaqdir) => {this.setState({ taqdirNilai: newTaqdir })}}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Pilih Salah Satu" value='' />
              <Item label="Mumtaz" value="Mumtaz" />
              <Item label="Jayyid Jiddan" value="Jayyid Jiddah" />
              <Item label="Jayyid" value="Jayyid" />
              <Item label="Maqbul" value="Maqbul" />
            </Picker>
          </Item>
        </Item>  
      )
    }

  }

  renderFormUI = () => {
    const { dateUjian1 }          = this.state;
    const { taqdirNilai1 }        = this.state;
    const { mulahadhahCatatan1 }  = this.state;
    const { statusLulus1 }        = this.state;
    
    if (dateUjian1 !== '0000-00-00') {
      // console.log('dateUjian1', dateUjian1)
      return(
        <Content>
          <Text style={styles.headerName}>Detail Ujian</Text>
          <Form>
                <Item stackedLabel>
                  <Label>Waktu</Label>
                  <Label style={styles.labelFont}>{dateUjian1}</Label>
                </Item>
                <Item stackedLabel>
                  <Label>Taqdir</Label>
                  <Label style={styles.labelFont}>{taqdirNilai1}</Label>
                </Item>
                <Item stackedLabel>
                  <Label>Mulahadhah</Label>
                  <Label style={styles.labelFont}>{mulahadhahCatatan1}</Label>
                </Item>
                <Item stackedLabel>
                  <Label>Status</Label>
                  <Label style={styles.labelFont}>{statusLulus1}</Label>
                  
                </Item>
          </Form>
        </Content>
      )
    }else{
      return(
        <Content>
          <Text style={styles.headerName}>Form Ujian</Text>
          <Form>
                <Item stackedLabel>
                  <Label>Waktu</Label>
                  <DatePicker
                    minimumDate={new Date(2019, 1, 1)}
                    maximumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    // onDateChange={this.setDate}
                    onDateChange={(newDate) => {this.setState({ dateUjian: newDate })}}
                  />
                </Item>
                { this.renderInputNilai() }
                <Item stackedLabel>
                  <Label>Mulahadhah</Label>
                    <Textarea style={styles.textarea} onChangeText={mulahadhahCatatan => this.setState({mulahadhahCatatan})} rowSpan={5} bordered placeholder="Tulis catatan" />
                </Item>
                <Item stackedLabel>
                  <Label>Status Lulus</Label>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      // placeholder=""
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.statusLulus}
                      // onValueChange={this.onChangeStatus.bind(this)}
                      onValueChange={(statusLulus) => {this.setState({ statusLulus: statusLulus })}}
                    >
                      <Item label="Pilih Salah Satu" value='' />
                      <Item label="Lulus" value="Lulus" />
                      <Item label="Tidak Lulus" value="Tidak Lulus" />
                    </Picker>
                  </Item>
                  
                </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={ this.simpanData }>
            <Text>Simpan</Text>
          </Button>
        </Content>
      )
    }
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
        { this.renderFormUI() }
      </Container>
    );
  }
}

export default Ujian;
