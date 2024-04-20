from django.urls import path
from .views import (
    UsersViewSet, CartViewSet, BookViewSet, CommentViewSet
)

urlpatterns = [
    path('users/', UsersViewSet.as_view(), name='users-list'),
    path('users/<int:pk>/', UsersViewSet.as_view(), name='user-detail'),
    path('books', BookViewSet.as_view(), name='books-list'),
    path('books/<int:pk>/', BookViewSet.as_view(), name='book-detail'),
]