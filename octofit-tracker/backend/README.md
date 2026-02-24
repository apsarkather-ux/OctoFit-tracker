# OctoFit Tracker Backend

Welcome to the OctoFit Tracker backend! This project is designed to provide a comprehensive fitness tracking solution for Mergington High School, enabling students to log their activities, manage teams, and compete on a leaderboard.

## Project Structure

The backend is built using Django and follows a modular structure. Below is an overview of the key components:

- **octofit/**: The main Django application package.
  - **__init__.py**: Initializes the octofit package.
  - **settings.py**: Configuration settings for the Django application, including database settings and installed apps.
  - **urls.py**: URL routing for the application, mapping URLs to views.
  - **wsgi.py**: Entry point for WSGI-compatible web servers.

- **apps/**: Contains the various applications that make up the OctoFit Tracker.
  - **users/**: Manages user profiles and authentication.
    - **models.py**: Defines the User model.
    - **serializers.py**: Serializers for the User model.
    - **views.py**: User-related operations.
    - **urls.py**: URL mappings for user views.
  
  - **activities/**: Handles activity logging and tracking.
    - **models.py**: Defines models for activity logging.
    - **serializers.py**: Serializers for activity models.
    - **views.py**: Activity-related operations.
    - **urls.py**: URL mappings for activity views.
  
  - **teams/**: Manages team creation and management.
    - **models.py**: Defines models for teams.
    - **serializers.py**: Serializers for team models.
    - **views.py**: Team management operations.
    - **urls.py**: URL mappings for team views.
  
  - **leaderboard/**: Manages the competitive leaderboard.
    - **models.py**: Defines models for leaderboard functionality.
    - **serializers.py**: Serializers for leaderboard models.
    - **views.py**: Leaderboard operations.
    - **urls.py**: URL mappings for leaderboard views.
  
  - **suggestions/**: Provides personalized workout suggestions.
    - **models.py**: Defines models for workout suggestions.
    - **serializers.py**: Serializers for suggestion models.
    - **views.py**: Suggestion generation and retrieval.
    - **urls.py**: URL mappings for suggestion views.

## Getting Started

To get started with the OctoFit Tracker backend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd octofit-tracker/backend
   ```

2. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Run migrations**:
   ```
   python manage.py migrate
   ```

4. **Start the development server**:
   ```
   python manage.py runserver
   ```

## Features

- User profiles for personalized fitness tracking.
- Activity logging and tracking for various exercises.
- Team creation and management for friendly competition.
- A competitive leaderboard to motivate users.
- Personalized workout suggestions based on user activity.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.