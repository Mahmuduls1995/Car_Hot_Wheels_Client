import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = () => {
    const pdata = [
        {
            name: 'Python',
            student: 13,
            fees: 10
        },
        {
            name: 'Javascript',
            student: 15,
            fees: 12
        },
        {
            name: 'Javascript',
            student: 48,
            fees: 68
        },
        {
            name: 'CSS',
            student: 8,
            fees: 15
        },
        {
            name: 'Html',
            student: 89,
            fees: 45
        }, {
            name: 'Python',
            student: 13,
            fees: 74
        },
        {
            name: 'Javascript',
            student: 15,
            fees: 84
        },
        {
            name: 'PHP',
            student: 48,
            fees: 19
        },
    ]
    const colors = scaleOrdinal(schemeCategory10).range();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://hidden-savannah-51184.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [])
    return (
        <div>
            <h4>Bookings</h4>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart data={pdata} width={500} height={300} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <YAxis />
                    <Tooltip itemStyle={{ color: "white" }} contentStyle={{ backgroundColor: "blue" }} />
                    <Legend />
                    <Bar dataKey="student" fill="#8884d8">
                        {/* {pdata.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))} */}
                    </Bar>
                    <Bar dataKey="fees" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;