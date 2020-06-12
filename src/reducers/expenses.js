// Expences Reducer

const expensesReducerDefaultState = []; // Default state stored into a variable

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':         // Action cases brought by action generators and handled by reduser
      return [
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) =>  id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default: 
      return state;
  }
};

