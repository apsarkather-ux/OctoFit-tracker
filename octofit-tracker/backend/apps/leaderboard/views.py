from rest_framework import viewsets
from .models import Leaderboard
from .serializers import LeaderboardSerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

    def get_queryset(self):
        return self.queryset.order_by('-score')  # Order by score for leaderboard ranking

    def perform_create(self, serializer):
        serializer.save()  # Save new leaderboard entry

    def perform_update(self, serializer):
        serializer.save()  # Update existing leaderboard entry

    def perform_destroy(self, instance):
        instance.delete()  # Delete leaderboard entry