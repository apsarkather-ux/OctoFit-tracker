import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutSuggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get('/api/suggestions/');
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching workout suggestions:', error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div>
            <h2>Personalized Workout Suggestions</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutSuggestions;