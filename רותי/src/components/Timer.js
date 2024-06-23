import React, { useEffect, useRef, useState } from 'react'

export const Timer = ({ time, children }) => {
    const [currentTime, setCurrentTime] = useState(time);
    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            setCurrentTime(c => c - 1);
        }, 1000);

        return () => {
            clearInterval(interval.current);
        }
    }, []);

    useEffect(() => {
        if (currentTime === 0)
            clearInterval(interval.current);
    }, [currentTime])


    return (<>
        <div>Timer</div>
        <p>{currentTime}</p>
        {currentTime !== 0 && children}
    </>);
}