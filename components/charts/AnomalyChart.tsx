import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { AnomalyDataPoint } from '../../types';

const data: AnomalyDataPoint[] = [
  { date: '2024-04-01', created: 1754, accepted: 1530 },
  { date: '2024-04-02', created: 1536, accepted: 1671 }, // Anomaly: Accepted > Created
  { date: '2024-04-03', created: 1621, accepted: 1609 },
  { date: '2024-04-04', created: 1862, accepted: 1862 }, // High point
  { date: '2024-04-05', created: 1675, accepted: 1612 },
  { date: '2024-04-06', created: 1588, accepted: 1580 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-900 p-2 shadow-xl text-sm font-bold">
        <p className="uppercase tracking-wide text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-blue-600">Created: {payload[0].value}</p>
        <p className="text-red-600">Accepted: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const AnomalyChart: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        Anomaly: Time-Lag Contamination
      </h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 10, bottom: 0, left: -20 }}>
            <CartesianGrid stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{fontSize: 10, fill: '#9CA3AF'}} 
              axisLine={false}
              tickLine={false}
              tickFormatter={(val) => val.slice(5)} // Show MM-DD
            />
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#2563EB" 
              tick={{fontSize: 10}} 
              domain={['auto', 'auto']} 
              hide={true}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#DC2626" 
              tick={{fontSize: 10}} 
              domain={['auto', 'auto']} 
              hide={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600, paddingTop: '10px' }} />
            <Line
              yAxisId="left"
              type="linear"
              dataKey="created"
              stroke="#2563EB"
              strokeWidth={3}
              name="Leads Created"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="linear"
              dataKey="accepted"
              stroke="#DC2626"
              strokeDasharray="4 4"
              strokeWidth={3}
              name="Leads Accepted"
              dot={false}
            >
               <LabelList 
                  dataKey="accepted" 
                  position="top" 
                  content={(props: any) => {
                      const { x, y, index } = props;
                      if (index === 1 || index === 3) { 
                          return (
                              <text x={x} y={y - 10} fill="#DC2626" fontSize="14" fontWeight="bold" textAnchor="middle">
                                 !
                              </text>
                          );
                      }
                      return null;
                  }} 
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnomalyChart;