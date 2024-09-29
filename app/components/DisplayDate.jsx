import React from 'react';

const DateDisplay = () => {
   /* ------Function to format the date -------- */
  const getFormattedDate = () => {

    // Get present Date
    const date = new Date();
    
    /* ---------Options to get desire formate------------ */
    const options = {
      weekday: 'long',  
      year: 'numeric',  
      month: 'long',    
      day: 'numeric'    
    };
    
    /* ----------------Format the date with options--------- */
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='text-[12px] text-[#313131] '>
      {getFormattedDate()}
    </div>
  );
};

export default DateDisplay;
