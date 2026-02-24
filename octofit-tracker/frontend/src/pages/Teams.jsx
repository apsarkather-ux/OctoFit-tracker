import React, { useEffect, useState } from 'react';
import TeamManager from '../components/TeamManager';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch('/api/teams/');
                const data = await response.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div>
            <h1>Teams</h1>
            <TeamManager teams={teams} />
        </div>
    );
};

export default Teams;