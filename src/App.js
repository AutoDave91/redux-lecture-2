import React from "react";
import {Provider} from 'react-redux';

import "./App.css";
import CharacterList from "./components/CharacterList";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterList />
      </div>
    </Provider>
  );
}

export default App;
