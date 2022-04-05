import React from 'react';

function TimerComponent(){
    const [time1, setTime1] = React.useState(0);
    const [time, setTime] = React.useState(0);
    console.log('Update');
    React.useEffect(function(){
        setTime1(time1 + 0.0001);
    }, [time1]);
    function updateTime(){
        setTime(time+1);
    }
    return (
        <div>
            <h4>{Math.floor(time1)} times</h4>
            <h3>{time} seconds</h3>
            <button onClick={updateTime}>only one click please!</button>
        </div>
    )
}

export default TimerComponent;