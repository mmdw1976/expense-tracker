import React from 'react';

import Chart from '../chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0, id: 13},
        {label: 'Feb', value: 0, id: 14},
        {label: 'Mar', value: 0, id: 15},
        {label: 'Apr', value: 0, id: 16},
        {label: 'May', value: 0, id: 17},
        {label: 'Jun', value: 0, id: 18},
        {label: 'Jul', value: 0, id: 19},
        {label: 'Aug', value: 0, id: 20},
        {label: 'Sep', value: 0, id: 21},
        {label: 'Okt', value: 0, id: 22},
        {label: 'Nov', value: 0, id: 23},
        {label: 'Dec', value: 0, id: 24}
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return ( 
        <div>
            <Chart dataPoints={chartDataPoints}/>
        </div>
     );
}
 
export default ExpensesChart;