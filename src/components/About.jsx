import React from 'react';

const Timeline = React.forwardRef((props, ref) => {
  console.log('Timeline component rendered');
  
  return (
    <section
      ref={ref} // Attach the forwarded ref here
      className="relative min-h-screen flex flex-col justify-center bg-zinc-900 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-15">
        {/* Your Timeline content goes here */}
        <h2 className="text-3xl font-bold text-white mb-4">Timeline</h2>
        {/* Example Timeline Items */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-200">Event One</h3>
            <p className="text-gray-400">Description for event one.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200">Event Two</h3>
            <p className="text-gray-400">Description for event two.</p>
          </div>
          {/* Add more timeline events as needed */}
        </div>
      </div>
    </section>
  );
});

export default Timeline;
