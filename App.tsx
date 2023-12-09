//import {SafeAreaView} from 'react-native';
import React from "react";
import AppNavigate from "./navigation/AppNavigate";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigate />
    </Provider>
  );
};

export default App;
