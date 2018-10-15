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
import PilihJuz from "../pilih_juz/";

const datas = [
  {
    name: "Beranda",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Hifd Jadid",
    route: "HifdJadid",
    icon: "paper",
    bg: "#48525D"
  },
  {
    name: "Murajaah",
    route: "Murajaah",
    icon: "paper",
    bg: "#48525D"
  },
  {
    name: "Progres Siswa",
    route: "ProgresSiswa",
    icon: "person",
    bg: "#C5F442"
  }
];

class Home extends Component {
  
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
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
        {
          /* <Text style={styles.direction}>Pilih menu</Text>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.name}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          /> */
        }
        </Content>
      </Container>
    );
  }
}

export default Home;
