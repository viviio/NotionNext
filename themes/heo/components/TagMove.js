import React from 'react';

export const App = () => {
    const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
    const TAGS = ['Protopie', 'CSS', 'JavaScript', 'Unity', 'Tailwind', 'React', 'AE', 'Rive', 'UI/UX', 'Figma', 'Animation', 'AI'];
    const DURATION = 15000;
    const ROWS = 1;
    const TAGS_PER_ROW = 5;
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

    function InfiniteLoopSlider({children, duration, reverse = false}){
      return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal'
          }}>
          <div className='inner'>
            {children}
            {children}
          </div>
        </div>
      );
    };

    function Tag({ text }) {
      return(
      <div className='tag dark:text-[#e2e8f0] dark:bg-[#334155]'><span>#</span> {text}</div>
    );
    };


    return<div className='app' >

            <div className='tag-list'>
                {[...new Array(ROWS)].map((_, i) => (
                  <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} >
                    {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                      <Tag text={tag} key={tag}/>
                    ))}
                  </InfiniteLoopSlider>
                ))}
                <div className='fade dark:bg-gradient-to-r from-[#1a191d] via-transparent via-50% to-[#1a191d]'/>
            </div>
    </div>
  
}


