import React from 'react';

const Slide3: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-8 lg:p-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Slide 3 / The Solution</h2>
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
          Fund Velocity. <br/>
          <span className="text-green-600">Guarantee ROI.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 h-full">
        {/* Left Column: Action Plan */}
        <div className="space-y-12">
          
          <div className="group">
            <div className="flex items-baseline mb-2">
               <span className="text-sm font-black text-gray-300 mr-4">01</span>
               <h3 className="text-3xl font-black text-gray-900 group-hover:text-green-600 transition-colors">Fix Funding Balance</h3>
            </div>
            <p className="text-xl text-gray-500 font-medium pl-10">
              Shift WAC from Marketing (M) to Partner Incentives (P). 
              <span className="block mt-1 text-sm text-gray-400 font-bold uppercase tracking-wide">Proof: LP Principle</span>
            </p>
          </div>

          <div className="group">
            <div className="flex items-baseline mb-2">
               <span className="text-sm font-black text-gray-300 mr-4">02</span>
               <h3 className="text-3xl font-black text-gray-900 group-hover:text-green-600 transition-colors">Enforce Velocity</h3>
            </div>
            <p className="text-xl text-gray-500 font-medium pl-10">
              Implement Velocity Bonus for <span className="text-gray-900 font-bold">&lt; 24h Install</span>.
              <span className="block mt-1 text-sm text-gray-400 font-bold uppercase tracking-wide">Proof: Expected Value E[X]</span>
            </p>
          </div>

          <div className="group">
            <div className="flex items-baseline mb-2">
               <span className="text-sm font-black text-gray-300 mr-4">03</span>
               <h3 className="text-3xl font-black text-gray-900 group-hover:text-green-600 transition-colors">Clean KPI</h3>
            </div>
            <p className="text-xl text-gray-500 font-medium pl-10">
              Track weekly lead creation cohorts with 95% Confidence Intervals.
            </p>
          </div>

        </div>

        {/* Right Column: LP Model */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col justify-center border border-gray-100">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">
            Linear Programming Model
          </h3>

          <div className="font-mono space-y-8">
            {/* Objective */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Maximize Installations (I)</p>
              <div className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                I = (k<sub>L</sub> · <span className="text-gray-400">M</span>) × C<sub>L→Q</sub> × f(<span className="text-green-600">P</span>)
              </div>
            </div>

            {/* Constraints */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Subject To</p>
              <div className="space-y-4 text-lg md:text-xl text-gray-600">
                <div className="flex">
                  <span className="w-6 text-gray-300">1.</span>
                  <span>M + P ≤ Budget</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-gray-300">2.</span>
                  <span>Demand ≤ Capacity (P)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;