import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(  // State and action passed in as arguments through reducers
    combineReducers({         // Store is an object
      expenses: expensesReducer, // array on the prop handled by reducer
      filters: filtersReducer    // object on the prop handled by its reducer
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};


