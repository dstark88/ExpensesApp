import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'New bike',
    amount: 9500.00,
    date: new Date('2024-01-05')
  },
  {
    id: 'e2',
    description: 'Cycling shoes',
    amount: 299.99,
    date: new Date('2024-02-19')
  },
  {
    id: 'e3',
    description: 'Helmet',
    amount: 189.99,
    date: new Date('2024-03-03')
  },
  {
    id: 'e4',
    description: 'Cycling clothes',
    amount: 200.00,
    date: new Date('2024-03-18')
  },
  {
    id: 'e5',
    description: 'Entry fee',
    amount: 110.00,
    date: new Date('2024-04-14')
  },
  {
    id: 'e6',
    description: 'Nutrition',
    amount: 20.00,
    date: new Date('2024-04-22')
  },
  {
    id: 'e7',
    description: 'GPS computer',
    amount: 200.00,
    date: new Date('2024-05-02')
  },
  {
    id: 'e8',
    description: 'Heart rate monitor',
    amount: 110.00,
    date: new Date('2024-06-10')
  },
  {
    id: 'e9',
    description: 'Rx sunglasses',
    amount: 300.00,
    date: new Date('2024-06-15')
  }
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
