import django
django.setup()

from life.models import Family, Question, Answer, User, Like, Comment, Message
from django.utils import timezone

print("Family Objects: {}".format(Family.objects.all()))
print("Question Objects: {}".format(Question.objects.all()))
print("Answer Objects: {}".format(Answer.objects.all()))
print("User Objects: {}".format(User.objects.all()))
print("Like Objects: {}".format(Like.objects.all()))
print("Comment Objects: {}".format(Comment.objects.all()))
print("Message Objects: {}".format(Message.objects.all()))






