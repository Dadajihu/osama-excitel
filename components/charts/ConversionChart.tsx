import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';

const data = [
  {
    name: 'Qualified → Partner',
    value: 75,
    fill: '#EF4444', // Red 500
  },
  {
    name: 'Partner → Install',
    value: 82,
    fill: '#10B981', // Emerald 500
  },
];

const ConversionChart: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
        Conversion Rate Drop
      </h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fontWeight: 600, fill: '#374151' }} 
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip 
              cursor={{fill: '#f9fafb'}}
              contentStyle={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <ReferenceLine y={75} stroke="#EF4444" strokeDasharray="3 3" />
            <Bar dataKey="value" barSize={80} radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
               <LabelList 
                dataKey="value" 
                position="top" 
                formatter={(val: number) => `${val}%`} 
                style={{ fontSize: 24, fontWeight: 900, fill: '#111827' }} 
                offset={10}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversionChart;