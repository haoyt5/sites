from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    path('homepage/',views.homepage, name="homepage"),
    path('homepage_guest/',views.homepage_guest, name="homepage_guest"),
    path('sos/',views.sos, name="sos"),
    path('family_diary/',views.family_diary, name="family_diary"),
    path('set_question/',views.set_question, name="set_question"),
    path('user_profile/',views.user_profile, name="huser_profile"),
    path('family_diary_detail_one/',views.family_diary_detail_one, name="family_diary_detail_one"),
    path('registration/', views.registration, name='registration'),
    path('login/', views.login, name='login'),
#     path('forum/question/<int:question_id>/',views.question, name='question'),
]



