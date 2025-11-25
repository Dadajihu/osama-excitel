import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';

const data = [
  { stage: 'Total Leads', value: 1000, fill: '#E5E7EB' }, 
  { stage: 'Qualified', value: 750, fill: '#93C5FD' }, 
  { stage: 'Partner', value: 550, fill: '#EF4444' }, // The Bottleneck
  { stage: 'Install', value: 450, fill: '#22C55E' }, 
];

const BottleneckFunnel: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        Funnel Volume Analysis
      </h3>
      <div className="flex-grow relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 10,
              right: 60,
              left: 40,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f3f4f6" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="stage" 
              type="category" 
              width={100} 
              tick={{fontSize: 14, fontWeight: 700, fill: '#374151'}}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{border:'none', boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
            <Bar dataKey="value" barSize={50} radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList dataKey="value" position="right" style={{ fontWeight: 800, fontSize: 16, fill: '#1F2937' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        {/* Minimal Annotation for Qualified -> Partner Drop (750 -> 550 is ~27% drop) */}
        <div className="absolute top-[58%] right-0 transform -translate-y-1/2 flex items-center">
             <div className="text-red-600 font-black text-4xl mr-2">27%</div>
             <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Drop</div>
        </div>
      </div>
    </div>
  );
};

export default BottleneckFunnel;