import RootNavigation from './src/navigation/RootNavigation';

import React from 'react';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './src/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
};
