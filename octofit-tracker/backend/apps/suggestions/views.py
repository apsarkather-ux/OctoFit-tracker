from rest_framework import viewsets
from .models import WorkoutSuggestion
from .serializers import WorkoutSuggestionSerializer

class WorkoutSuggestionViewSet(viewsets.ModelViewSet):
    queryset = WorkoutSuggestion.objects.all()
    serializer_class = WorkoutSuggestionSerializer

    def get_queryset(self):
        # You can customize the queryset based on user preferences or other criteria
        return super().get_queryset()