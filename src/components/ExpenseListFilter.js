import React from 'react';
import { DateRangePicker } from 'react-dates';
import {connect } from 'react-redux';
import {setEndDate, setStartDate, setTextFilter} from '../actions/filters';
import {sortByDate, sortByAmount} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state= {
        calendarFocussed : null
    };
    onDatesChange = ({startDate,endDate})=>{
          this.props.setStartDate(startDate);
          this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocussed)=>{
        this.setState(()=>({calendarFocussed}));
    }

    onTextChange=  (e)=>{
        this.props.setTextFilter(e.target.value);
  }
   onSortChange =(e)=>{
    e.target.value == 'date' ? this.props.sortByDate(): this.props.sortByAmount();
}
    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
            <select value="this.props.filters.sortBy"
            onChange ={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
            startDate ={this.props.filters.startDate}
            endDate ={this.props.filters.endDate }
            onDatesChange= {this.onDatesChange}
            focusedInput = {this.state.calendarFocussed}
            onFocusChange= {this.onFocusChange} 
            numberOfMonths = {1} 
            isOutsideRange = {()=> false} 
            showClearDates= {true}>
            </DateRangePicker>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    };
};

const mapDispatchtoProps = (dispatch) => ({
    setTextFilter : (text)=> dispatch(setTextFilter(text)),
    sortByDate : ()=>dispatch(sortByDate()),
    sortByAmount : ()=> dispatch(sortByAmount()),
    setStartDate: ()=>dispatch(setStartDate()),
    setEndDate: ()=>dispatch(setEndDate()),
})

export default connect(mapStateToProps)(ExpenseListFilters);