import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamManager = () => {
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get('/api/teams/');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTeam = async () => {
        if (!teamName) return;

        try {
            const response = await axios.post('/api/teams/', { name: teamName });
            setTeams([...teams, response.data]);
            setTeamName('');
        } catch (error) {
            console.error('Error creating team:', error);
        }
    };

    const handleDeleteTeam = async (teamId) => {
        try {
            await axios.delete(`/api/teams/${teamId}/`);
            setTeams(teams.filter(team => team.id !== teamId));
        } catch (error) {
            console.error('Error deleting team:', error);
        }
    };

    if (loading) {
        return <div>Loading teams...</div>;
    }

    return (
        <div>
            <h2>Team Manager</h2>
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={handleCreateTeam}>Create Team</button>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>
                        {team.name}
                        <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamManager;