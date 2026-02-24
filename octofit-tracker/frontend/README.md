# OctoFit Tracker Frontend

Welcome to the OctoFit Tracker frontend! This application is designed to help users track their fitness activities, manage teams, and receive personalized workout suggestions in a fun and engaging way.

## Project Structure

The frontend is built using React and follows a component-based architecture. Below is an overview of the key directories and files:

- **src/**: Contains all the source code for the frontend application.
  - **components/**: Reusable components that make up the user interface.
    - `UserProfile.jsx`: Displays user information and allows for profile editing.
    - `ActivityLogger.jsx`: Allows users to log their activities.
    - `TeamManager.jsx`: Enables users to create and manage teams.
    - `Leaderboard.jsx`: Displays the competitive leaderboard.
    - `WorkoutSuggestions.jsx`: Presents personalized workout suggestions to users.
  - **pages/**: Contains the main pages of the application.
    - `Dashboard.jsx`: The main interface for users.
    - `Profile.jsx`: Displays user profile information.
    - `Teams.jsx`: Allows users to view and manage their teams.
    - `Home.jsx`: The landing page for the application.
  - **services/**: Contains functions for making API calls to the backend.
    - `api.js`: Handles API requests and responses.
  - `App.jsx`: The main application component that sets up routing and renders the application.
  - `index.jsx`: The entry point for the React application.

## Getting Started

To get started with the OctoFit Tracker frontend, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd octofit-tracker/frontend
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Application**: 
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- User profiles for personalized experiences.
- Activity logging and tracking to monitor fitness progress.
- Team creation and management for friendly competition.
- A competitive leaderboard to motivate users.
- Personalized workout suggestions tailored to individual fitness levels.

## Contributing

We welcome contributions to the OctoFit Tracker project! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.