from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
from django.utils import timezone
from django.http import HttpResponseRedirect
from life.models import *


# System User [System Family -> id=1]
systemFamily = Family.objects.get(id=1)
systemUser = systemFamily.user_set.all()[0]
currentUser = systemUser

"""
用户登陆后的主页面
"""
def main_page(request):
    global currentUser
    # Assert user has logged in
    assert not currentUser.id == 1
    if request.method == 'POST':
        question_text = request.POST['question'].strip()
        question_description = request.POST['description'].strip()
        currentUser.question_set.create(question=question_text, description=question_description)
        #         Question.objects.create(user=currentUser, question=question_text, description=question_description)
        return HttpResponseRedirect('/life/forum/')
    else:
        pass
    return render(request, 'life/forum_create.html')

"""
检查用户是否登陆，若为登陆则跳转至登陆主界面。 否则进入用户主页面
"""
def homepage(request):
    global currentUser
    # Check if System User
    #if currentUser.id == 1:
    return render(request, 'life/homepage.html')
    #else:
     #   return main_page(request)


def registration(request):
    global currentUser
    if request.method == 'POST':
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()
        User.objects.create(username=username, password=password)
        return HttpResponseRedirect('/life/')
    else:
        pass
    return render(request, 'life/registration.html')


def login(request):
    global currentUser
    context = {
        'user_not_found': False,
        'password_mismatch': False,
    }
    if request.method == 'POST':
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()

        search_result = User.objects.filter(username=username)
        if len(search_result) == 0:
            context['user_not_found'] = True
        else:
            user = search_result[0]
            if user.check_password(password):
                currentUser = user
                context['user_not_found'] = False
                context['password_mismatch'] = False
                return HttpResponseRedirect('/life/')
            else:
                context['password_mismatch'] = True
    else:
        pass

    return render(request, 'life/login.html', context)


# def forum_create(request):
#     global currentUser
#     if request.method == 'POST':
#         question_text = request.POST['question'].strip()
#         question_description = request.POST['description'].strip()
#         currentUser.question_set.create(question=question_text, description=question_description)
# #         Question.objects.create(user=currentUser, question=question_text, description=question_description)
#         return HttpResponseRedirect('/life/forum/')
#     else:
#         pass
#     return render(request, 'life/forum_create.html')

def family_diary(request):
    return render(request, 'life/family_diary.html')

def sos(request):
    return render(request, 'life/sos.html')

def user_profile(request):
    return render(request, 'life/user_profile.html')

def set_question(request):
    return render(request, 'life/set_question.html')

def homepage_guest(request):
    return render(request, 'life/homepage_guest.html')

def family_diary_detail_one(request):
    return render(request, 'life/family_diary_detail_one.html')

















