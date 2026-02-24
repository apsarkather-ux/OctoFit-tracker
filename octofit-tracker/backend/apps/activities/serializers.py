from rest_framework import serializers
from .models import Activity

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'user', 'activity_type', 'duration', 'date', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']