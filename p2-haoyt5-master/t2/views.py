from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 't2/index.html')
  
def one(request):
    return render(request, 't2/1.html')

def two(request):
    return render(request, 't2/2.html')

def three(request):
    return render(request, 't2/3.html')

def four(request):
    return render(request, 't2/4.html')

def five(request):
    return render(request, 't2/5.html')