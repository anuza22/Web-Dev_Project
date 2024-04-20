from django.db import models
from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import User, Cart, Book, Comment
from .serializer import UserSerializer, CartSerializer, BookSerializer, CommentSerializer


# Create your views here.

class UsersViewSet(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    @property
    def total_price(self):
        queryset = self.books.all().aggregate(
            total_price=models.Sum('price'))
        return queryset["total_price"]

class BookViewSet(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer