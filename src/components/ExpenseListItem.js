import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import {removeExpense} from '../actions/expenses';

const ExpenseListItem= ({id,description, amount ,createdAt})=>(
 <div>
 <Link to={`edit/${id}`}><h1>{description} </h1></Link>
 <p>{amount}

 -
  {moment(createdAt).format('MMMM Do, YYYY')}
 </p>

 </div> 
);


export default ExpenseListItem;

//  <button onClick={()=>{dispatch(removeExpense({id}))}}>Remove</button>