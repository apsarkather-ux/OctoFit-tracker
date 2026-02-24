import React, { useState } from 'react';
import axios from 'axios';

const ActivityLogger = () => {
    const [activityType, setActivityType] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/activities/', {
                activityType,
                duration,
                date,
            });
            if (response.status === 201) {
                setMessage('Activity logged successfully!');
                setActivityType('');
                setDuration('');
                setDate('');
            }
        } catch (error) {
            setMessage('Error logging activity. Please try again.');
        }
    };

    return (
        <div>
            <h2>Log Your Activity</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Activity Type:</label>
                    <input
                        type="text"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duration (in minutes):</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log Activity</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ActivityLogger;