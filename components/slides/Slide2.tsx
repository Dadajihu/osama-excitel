import React from 'react';
import BottleneckFunnel from '../charts/BottleneckFunnel';

const Slide2: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-6 lg:p-10 max-w-7xl mx-auto w-full">
       {/* Header */}
       <div className="mb-8 flex-shrink-0">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Slide 2 / The Cost</h2>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Time Decay & <span className="text-orange-600">Wasted Capital.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start h-full min-h-0">
        {/* Left Column: Typography */}
        <div className="space-y-12 flex-shrink-0">
          
          {/* Item 1 */}
          <div>
            <div className="flex items-baseline space-x-3 mb-1">
               <span className="text-5xl font-black text-gray-900">100%</span>
               <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">Wasted</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Acquisition Cost</h3>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Every qualified lead lost at the bottleneck is pure capital destruction. <br/>
              <span className="text-orange-600 font-bold">This is your funding pool.</span>
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Time Kills Sales.</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg inline-block">
              <p className="font-mono text-base font-bold text-gray-800">
                P(Cancel | <span className="text-red-500">Delay</span>) &gt; P(Cancel | <span className="text-green-500">Fast</span>)
              </p>
            </div>
            
            <p className="text-lg text-gray-500 font-medium mt-4">
              Pipeline is a decaying inventory. Speed is not a feature, it's a requirement.
            </p>
          </div>

        </div>

        {/* Right Column: Chart */}
        <div className="h-full w-full min-h-[350px] flex-grow">
            <BottleneckFunnel className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Slide2;