import { View } from 'react-native';
import AppNavigator from './AppNavigator';

const MainStack = () => {
  return (
    <View style={{flex: 1}}>
     <AppNavigator/>
   </View>
 );
}

export default MainStack;