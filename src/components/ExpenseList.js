import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selecteExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length === 0 ? (
        <p>No expenses</p>
        ) :
        (props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })
        )}
    </div>
);

//hoc

const mapStatetoProps = (state) => {
    return {
        expenses: selecteExpenses(state.expenses, state.filters)

    }
}
export default connect(mapStatetoProps)(ExpenseList);


