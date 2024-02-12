from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'login.html')


def Register(request):
    return render(request, 'register.html')

def Forgot(request):
    return render(request, 'forgot-pass.html')