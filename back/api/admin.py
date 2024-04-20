from django.contrib import admin
from .models import User, Book, Cart, Comment

# Register your models here.
admin.site.register(User)
admin.site.register(Book)
admin.site.register(Cart)
admin.site.register(Comment)