from django.urls import path
from .views import LeaderboardView, LeaderboardDetailView

urlpatterns = [
    path('', LeaderboardView.as_view(), name='leaderboard-list'),
    path('<int:pk>/', LeaderboardDetailView.as_view(), name='leaderboard-detail'),
]