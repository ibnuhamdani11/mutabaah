import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import Login from "./screens/login/";
import HifdJadid from "./screens/hifd_jadid";
import Murajaah from "./screens/murajaah";
import PilihJuz from "./screens/pilih_juz/";
import PilihJuzPart from "./screens/pilih_juz_part/";
import SideBar from "./screens/sidebar";
import MenuSetorOrUjian from "./screens/menu_setor_or_ujian";
import Setoran from "./screens/setoran";
import Ujian from "./screens/ujian/";
import ProgresSiswa from "./screens/progres_siswa/";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    HifdJadid: { screen: HifdJadid },
    Murajaah: { screen: Murajaah },
    ProgresSiswa: { screen: ProgresSiswa }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    PilihJuz: { screen: PilihJuz },
    PilihJuzPart: { screen: PilihJuzPart },
    MenuSetorOrUjian: { screen: MenuSetorOrUjian },
    Setoran: { screen: Setoran },
    Ujian: { screen: Ujian }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
