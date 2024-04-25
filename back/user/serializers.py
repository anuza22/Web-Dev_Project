from django.contrib.auth.models import User
from rest_framework import serializers

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Make password write-only
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        # Hash the password before saving the user
        user = User.objects.create_user(**validated_data)
        return user
