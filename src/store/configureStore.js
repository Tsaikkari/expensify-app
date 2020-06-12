import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export default () => {
  const store = createStore(  // State and action passed in as arguments through reducers
    combineReducers({         // Store is an object
      expenses: expensesReducer, // array on the prop handled by reducer
      filters: filtersReducer    // object on the prop handled by its reducer
    }), 
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};


