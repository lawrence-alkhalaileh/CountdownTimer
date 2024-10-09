import React, { useState, useEffect } from 'react'
import iphone from '../assets/opollo-photography-VvJnZbta5GY-unsplash.jpg'


const Counter = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        sec: 0,
    });

    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 14);

        const formattedDate = futureDate.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        setEndDate(formattedDate);

        const countdown = () => {
            const now = new Date();
            const timeRemaining = futureDate - now;

            if (timeRemaining < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const sec = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, mins, sec });
        };

        const interval = setInterval(countdown, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className='section-center'>
                <article className='gift-img'>
                    <img src={iphone} alt='gift-image' />
                </article>
                <article className='gift-info'>
                    <h3>iPhone Giveaway</h3>
                    <h4 className='giveaway'>
                        Giveaway ends on {endDate}
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci id aperiam tenetur magni quia recusandae modi vitae? Consequuntur magnam maiores provident! Iusto veritatis dignissimos enim repellat. Aspernatur fuga officia perferendis!
                    </p>
                    <div className='deadline'>
                        <div>
                            <h4>{timeLeft.days}</h4>
                            <span>days</span>
                        </div>
                        <div>
                            <h4>{timeLeft.hours}</h4>
                            <span>hours</span>
                        </div>
                        <div>
                            <h4>{timeLeft.mins}</h4>
                            <span>minutes</span>
                        </div>
                        <div>
                            <h4>{timeLeft.sec}</h4>
                            <span>seconds</span>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Counter
