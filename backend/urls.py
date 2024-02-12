from django.urls import path
from .views import home, Register, Forgot

urlpatterns = [
    path('', home, name="home"),
    path("/register", Register, name="register"),
    path("/forgot", Forgot, name="forgot-pass"),
]