# OctoFit Tracker

Welcome to the OctoFit Tracker project! This application is designed to promote fitness and healthy competition among students at Mergington High School. The OctoFit Tracker allows users to log their activities, manage teams, and receive personalized workout suggestions, all while fostering a sense of community and motivation.

## Project Overview

The OctoFit Tracker consists of two main components: the backend and the frontend.

### Backend

The backend is built using Django and provides the necessary APIs for user management, activity logging, team management, leaderboard functionality, and personalized workout suggestions. The backend structure includes:

- **User Management**: Handles user profiles, registration, and authentication.
- **Activity Logging**: Allows users to log various activities and track their progress.
- **Team Management**: Enables users to create and manage teams for friendly competition.
- **Leaderboard**: Displays a competitive leaderboard based on user activity.
- **Workout Suggestions**: Provides personalized workout recommendations based on user preferences and activity history.

### Frontend

The frontend is developed using React.js and offers an intuitive interface for users to interact with the OctoFit Tracker. Key features include:

- **User Profiles**: Users can view and edit their profiles.
- **Activity Logger**: A component for logging activities quickly and easily.
- **Team Manager**: Allows users to create and manage their teams.
- **Leaderboard**: Displays the competitive leaderboard in a user-friendly format.
- **Workout Suggestions**: Presents personalized workout suggestions to keep users engaged.

## Getting Started

To get started with the OctoFit Tracker, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd octofit-tracker
   ```

2. **Set Up the Backend**:
   - Navigate to the `backend` directory.
   - Install the required dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Run the migrations:
     ```
     python manage.py migrate
     ```
   - Start the development server:
     ```
     python manage.py runserver
     ```

3. **Set Up the Frontend**:
   - Navigate to the `frontend` directory.
   - Install the required dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm start
     ```

## Features

- User profiles for personalized experiences.
- Activity logging and tracking to monitor fitness progress.
- Team creation and management for competitive engagement.
- A competitive leaderboard to motivate users.
- Personalized workout suggestions tailored to individual fitness levels.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Special thanks to the Mergington High School community for their support and feedback in developing the OctoFit Tracker.