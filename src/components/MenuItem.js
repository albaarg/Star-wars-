import { View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import theme from "../config/theme";

const MenuItem = (props) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {... props}
    contentContainerStyle={{backgroundColor:`${theme.color.black}`, flex: 1}}
    >
      <DrawerItemList {... props}/>
    </DrawerContentScrollView>
    </View>

  )
}

export default MenuItem;