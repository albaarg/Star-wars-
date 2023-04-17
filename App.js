import { Provider } from "react-redux";
import { store } from "./src/store/query"
import MainStack from './src/navigation/MainStack';

export default function App() {
  return (
    <Provider store={store}>
     <MainStack/>
     </Provider>
  );
}

