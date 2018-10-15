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
    route: "MenuSetorOrUjian",
    text: "1/4 Pertama"
  },
  {
    route: "MenuSetorOrUjian",
    text: "1/4 Kedua"
  },
  {
    route: "Ujian",
    text: "1/2 Ujian Pertama"
  },
  {
    route: "MenuSetorOrUjian",
    text: "1/4 Ketiga"
  },
  {
    route: "MenuSetorOrUjian",
    text: "1/4 Keempat"
  },
  {
    route: "Ujian",
    text: "1/2 Ujian Kedua"
  },
  {
    route: "Ujian",
    text: "1 Juz"
  }
];

class PilihJuzPart extends Component {
  
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
            <Title>Pilih Tipe</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
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

export default PilihJuzPart;
