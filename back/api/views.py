from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializer import UserSerializer

# Create your views here.

class UsersViewSet(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer