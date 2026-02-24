import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Teams from './pages/Teams';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';
import ActivityLogger from './components/ActivityLogger';
import TeamManager from './components/TeamManager';
import Leaderboard from './components/Leaderboard';
import WorkoutSuggestions from './components/WorkoutSuggestions';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile} />
                <Route path="/teams" component={Teams} />
                <Route path="/user-profile" component={UserProfile} />
                <Route path="/activity-logger" component={ActivityLogger} />
                <Route path="/team-manager" component={TeamManager} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/workout-suggestions" component={WorkoutSuggestions} />
            </Switch>
        </Router>
    );
};

export default App;