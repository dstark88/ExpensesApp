import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
});

