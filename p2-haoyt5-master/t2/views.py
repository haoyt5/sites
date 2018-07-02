from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 't2/index.html')

def first(request):
    return render(request, 'static/t2/1.png')

def second(request):
    return render(request, 'static/t2/2.png')

def third(request):
    return render(request, 'static/t2/3.png')

def fourth(request):
    return render(request, 'static/t2/4.png')

def fifth(request):
    return render(request, 'static/t2/5.png')