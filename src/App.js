import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import Login from "./screens/login/";
import HifdJadid from "./screens/hifd_jadid";
import siswaPage from "./screens/siswa/";
import Murajaah from "./screens/murajaah";
import PilihJuz from "./screens/pilih_juz/";
import PilihJuzPart from "./screens/pilih_juz_part/";
import PilihJuzPartUlang from "./screens/pilih_juz_part_ulang/";
import SideBar from "./screens/sidebar";
import MenuSetorOrUjian from "./screens/menu_setor_or_ujian";
import Setoran from "./screens/setoran";
import Ujian from "./screens/ujian/";
import ProgresSiswa from "./screens/progres_siswa/";
import progresSiswaDetail from "./screens/progres_siswa/siswa_detail";
import juzProgres from "./screens/progres_siswa/juz";
import juzDetail from "./screens/progres_siswa/juz_detail";
import ListSetor from "./screens/list_setor";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    HifdJadid: { screen: HifdJadid },
    Murajaah: { screen: Murajaah },
    ProgresSiswa: { screen: ProgresSiswa }
  },
  {
    initialRouteName: "Home",
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
    PilihJuzPartUlang: { screen: PilihJuzPartUlang },
    MenuSetorOrUjian: { screen: MenuSetorOrUjian },
    Setoran: { screen: Setoran },
    Ujian: { screen: Ujian },
    ListSetor: { screen: ListSetor },
    Login: { screen: Login },
    siswaPage: { screen: siswaPage },
    progresSiswaDetail: { screen: progresSiswaDetail },
    juzProgres: { screen: juzProgres },
    juzDetail: { screen: juzDetail },
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
