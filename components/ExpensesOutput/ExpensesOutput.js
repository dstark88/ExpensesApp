import { View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'New bike',
    amount: 9500.00,
    date: new Date('2024-01-05')
  },
  {
    id: 'e2',
    description: 'A pair cycling shoes',
    amount: 299.99,
    date: new Date('2024-03-19')
  },
  {
    id: 'e3',
    description: 'Helmet',
    amount: 189.99,
    date: new Date('2024-04-01')
  },
  {
    id: 'e4',
    description: 'Cycling clothes',
    amount: 199.99,
    date: new Date('2024-05-18')
  },
  {
    id: 'e5',
    description: 'Entry fee',
    amount: 110.00,
    date: new Date('2024-06-14')
  }
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

