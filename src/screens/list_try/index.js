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

class ListTry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
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
            <Title>Daftar </Title>
          </Body>
          <Right>
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
                onPress={() => this.props.navigation.navigate(data.route, {
                  title: data.text
                })}
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

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('MenuSetorOrUjian', {
              title: 'Tambah'
            })}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default ListTry;
