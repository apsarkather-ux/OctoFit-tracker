import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust the base URL as needed

// User API calls
export const fetchUserProfile = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/`);
    return response.data;
};

export const updateUserProfile = async (userId, userData) => {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}/`, userData);
    return response.data;
};

// Activity API calls
export const logActivity = async (activityData) => {
    const response = await axios.post(`${API_BASE_URL}/activities/`, activityData);
    return response.data;
};

export const fetchActivities = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/activities/?user=${userId}`);
    return response.data;
};

// Team API calls
export const createTeam = async (teamData) => {
    const response = await axios.post(`${API_BASE_URL}/teams/`, teamData);
    return response.data;
};

export const fetchTeams = async () => {
    const response = await axios.get(`${API_BASE_URL}/teams/`);
    return response.data;
};

// Leaderboard API calls
export const fetchLeaderboard = async () => {
    const response = await axios.get(`${API_BASE_URL}/leaderboard/`);
    return response.data;
};

// Workout Suggestions API calls
export const fetchWorkoutSuggestions = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/suggestions/?user=${userId}`);
    return response.data;
};