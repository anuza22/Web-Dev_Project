from django.urls import path
from .views import (
    UsersViewSet
)

urlpatterns = [
    path('users/', UsersViewSet.as_view(), name='users-list'),
    path('users/<int:pk>/', UsersViewSet.as_view(), name='user-detail')
]