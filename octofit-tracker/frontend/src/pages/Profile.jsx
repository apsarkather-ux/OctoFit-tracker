import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userData = await getUserProfile();
                setUser(userData);
            } catch (err) {
                setError('Failed to load user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <div>
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    {/* Additional user information can be displayed here */}
                </div>
            )}
        </div>
    );
};

export default Profile;