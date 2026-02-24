from django.db import models
from django.contrib.auth.models import User

class LeaderboardEntry(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)

    class Meta:
        ordering = ['-score']

    def __str__(self):
        return f"{self.user.username} - Score: {self.score}, Rank: {self.rank}"