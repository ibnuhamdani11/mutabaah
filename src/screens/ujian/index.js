import React, { Component } from "react";
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
  Picker,
  DatePicker,
  Textarea
} from "native-base";
import styles from "./styles";

class Ujian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: undefined,
      status: undefined
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  onChangeStatus(value: string) {
    this.setState({
      status: value
    });
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
            <Title>Ujian</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Waktu</Label>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
              />
            </Item>
            <Item stackedLabel>
              <Label>Taqdir</Label>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Pilih Salah Satu"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Item label="Mumtaz" value="key0" />
                  <Item label="Jayyid Jiddan" value="key1" />
                  <Item label="Jayyid" value="key2" />
                  <Item label="Maqbul" value="key3" />
                </Picker>
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Mulahadhah</Label>
                <Textarea style={styles.textarea} rowSpan={5} bordered placeholder="Tulis catatan" />
            </Item>
            <Item stackedLabel>
              <Label>Status</Label>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Pilih Salah Satu"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.status}
                  onValueChange={this.onChangeStatus.bind(this)}
                >
                  <Item label="Lulus" value="key0" />
                  <Item label="Tidak Lulus" value="key1" />
                </Picker>
              </Item>
              
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Simpan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Ujian;
