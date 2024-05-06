import LeftDrawer from "../../components/Layout/LeftDrawer";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import IconBoxWraaper from "../../components/HomePageComponent/IconBoxWraaper/IconBoxWraaper";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ContrastTwoToneIcon from "@mui/icons-material/ContrastTwoTone";
import { ILeftDrawerList, IModeList } from "./index.type";
import { useDarkModeStore } from "../../store/darkModeStore";

function HomePage() {
  const { darkMode, setDarkMode } = useDarkModeStore();
  
  const onClickDardMode = (item: IModeList) => {
    setDarkMode(item.name === "dark" ? true : false);
  };

  const LeftDrawerList: ILeftDrawerList[] = [
    { router: "/home", name: "Users", icon: GroupIcon },
    { router: "/home/product", name: "Product", icon: ShoppingBagIcon },
    { router: "/home/settings", name: "Settings", icon: QueryStatsIcon }
  ];

  const modeList: IModeList[] = [
    { name: "light", icon: WbSunnyIcon, status: !darkMode },
    { name: "dark", icon: NightsStayIcon, status: darkMode }
  ];

  const notMode: IModeList[] = [
    { name: "light", icon: ContrastTwoToneIcon, status: !darkMode },
    { name: "dark", icon: ContrastTwoToneIcon, status: darkMode }
  ];

  return (
    <LeftDrawer leftList={LeftDrawerList}>
      <IconBoxWraaper
        list={modeList}
        title="Mode"
        onIconClick={onClickDardMode}
      />
      <IconBoxWraaper list={notMode} title="Mode" />
    </LeftDrawer>
  );
}

export default HomePage;
