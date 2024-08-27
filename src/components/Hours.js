import React, { useState, useEffect } from 'react';

const Hours = () => {
    const [hours, setHours] = useState('');
  
    useEffect(() => {
      const today = new Date().getDay();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const getHours = () => {
        if (today >= 1 && today <= 5) {
          return '10 a.m. to 4 p.m.';
        } else {
          return '9 a.m. to 8 p.m.';
        }
      };
  
      setHours(`${daysOfWeek[today]} ${getHours()}`);
    }, []);
  
    return (
      <div id="hours">
        <h2>Today's hours</h2>
        <p>{hours}</p>
      </div>
    );
  };

export default Hours;