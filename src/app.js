import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({description : 'Water bill', amount: 4500}));
store.dispatch(addExpense({description : 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description : 'Rent', amount: 109700}));
// store.dispatch(setTextFilter('water'));

// setTimeout( ()=>{
//  store.dispatch(setTextFilter('bill'));
// },3000)

const state= store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store= {store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));