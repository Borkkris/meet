import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';



const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ['#ffffff', '#969696', '#6e6e6e', '#3c3c3c', '#000000'];

    // The useEffect function will run when there’s a change to the events prop.
    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            const data = genres.map((genre) => {
                const value = events.filter((event) => event.summary.split(/[-!.,\s]/).includes(genre)).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

    return (

         <ResponsiveContainer height={350}>
            <PieChart width={100} height={350}>
                <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`
                }
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </ResponsiveContainer>

    );
}

export default EventGenre;