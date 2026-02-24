import React from 'react';
import UserProfile from '../components/UserProfile';
import ActivityLogger from '../components/ActivityLogger';
import TeamManager from '../components/TeamManager';
import Leaderboard from '../components/Leaderboard';
import WorkoutSuggestions from '../components/WorkoutSuggestions';

const Home = () => {
    return (
        <div>
            <h1>Welcome to OctoFit Tracker</h1>
            <UserProfile />
            <ActivityLogger />
            <TeamManager />
            <Leaderboard />
            <WorkoutSuggestions />
        </div>
    );
};

export default Home;