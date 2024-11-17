import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const studentsMarksData = [
        { id: 1, name: 'Jan', math: 75, physics: 78, chemistry: 85 },
        { id: 2, name: 'Chris', math: 60, physics: 65, chemistry: 70 },
        { id: 3, name: 'Kishan', math: 90, physics: 88, chemistry: 92 },
        { id: 4, name: 'Ruhul', math: 80, physics: 82, chemistry: 84 },
        { id: 5, name: 'Amar', math: 95, physics: 91, chemistry: 89 },
        { id: 6, name: 'Hasnath', math: 86, physics: 87, chemistry: 90 },
        { id: 7, name: 'Omor', math: 81, physics: 83, chemistry: 85 },
        { id: 8, name: 'Siddik', math: 92, physics: 90, chemistry: 94 },
        { id: 9, name: 'Cool', math: 89, physics: 88, chemistry: 91 },
        { id: 10, name: 'Gourov', math: 73, physics: 75, chemistry: 78 }
      ];

    return (
        <div>
            <LChart width={500} height={400} data={studentsMarksData}>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='black'></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;