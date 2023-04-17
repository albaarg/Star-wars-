import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Characters from "../screens/Character";
import Favorites from "../screens/Favorites";
import MenuItem from "../components/MenuItem";
import theme from "../config/theme";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <NavigationContainer>
  <Drawer.Navigator
    initialRouteName="Characters"
    drawerContent={(props) => <MenuItem {...props} />}
    screenOptions={{
      drawerActiveTintColor: theme.color.white,
      drawerInactiveTintColor: theme.color.white,
    }}
  >
    <Drawer.Screen
      name="Characters"
      options={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.color.black,
        },
        headerTintColor: theme.color.white,
        drawerStyle: { backgroundColor: theme.color.black },
        headerTitleStyle: {
          fontSize: 16,
        },
      }}
    >
      {(props) => <Characters {...props} />}
    </Drawer.Screen>
    <Drawer.Screen
      name="Favorites"
      options={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.color.black,
        },
        headerTintColor: theme.color.white,
        drawerStyle: { backgroundColor: theme.color.black },
        headerTitleStyle: {
          fontSize: 16,
        },
      }}
    >
      {(props) => <Favorites {...props} />}
    </Drawer.Screen>
  </Drawer.Navigator>
</NavigationContainer>

);

export default AppNavigator;
