from django.db import models
from django.utils import timezone


"""
家庭包括一系列的Users
"""
class Family(models.Model):
    def __str__(self):
        return self.name

    # 家庭名称
    name = models.CharField(max_length=30)


"""
每一个用户的个人属性
"""
class User(models.Model):
    def __str__(self):
        return "[{0} : {1}]".format(self.family.name, self.username)

    # 用户名
    username = models.CharField(max_length=20)
    # 密码
    password = models.CharField(default="", max_length=30)
    # 是否为Senior User
    identified = models.BooleanField(default=False)
    # 隶属于哪个家庭
    family = models.ForeignKey(Family, default=None, on_delete=models.CASCADE)

    # 检查是否为Senior User
    def is_senior(self):
        return self.identified

    # 检查是否相符
    def check_password(self, psw):
        return psw == self.password


"""
每天提出的问题
"""
class Question(models.Model):
    def __str__(self):
        return "[{0} : {1}]".format(self.question[:20], self.user.username)

    # 问题内容
    question = models.CharField(max_length=50)
    # 0-Text; 1-Image; 2-Paint
    qtype = models.IntegerField(default=0)
    # 哪个用户的问题
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    # >>> q.creation_date.strftime("%x")
    # '07/23/18'
    # >>> q.creation_date.strftime("%X")
    # '06:30:39'
    # Many other directives to explore
    creation_date = models.DateTimeField(editable=False, blank=True, null=True)
    last_modified = models.DateTimeField(editable=False, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.creation_date = timezone.now()
        self.last_modified = timezone.now()
        return super(Question, self).save(*args, **kwargs)


"""
用户对于某个问题的回答
"""
class Answer(models.Model):
    def __str__(self):
        return "[QusID {0} : AnsID {1}: {2}]".format(self.question.id, self.id, self.user.username)

    # 回答的内容
    answer = models.CharField(max_length=500)
    # 插入的图片
    image = models.ImageField(upload_to='photos/', blank=True, null=True)
    # 对应哪个问题
    question = models.ForeignKey(Question, default=None, on_delete=models.CASCADE)
    # 哪个用户的回答
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)


"""
用户对某个回答的点赞
"""
class Like(models.Model):
    def __str__(self):
        return "[AnsID {0} : {1}]".format(self.answer.id, self.user.username)
    # 哪个文章
    answer = models.ForeignKey(Answer, default=None, on_delete=models.CASCADE)
    # 哪个用户
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    # 点赞日期
    date = models.DateTimeField(auto_now=True)


"""
用户对某个回答的评论
"""
class Comment(models.Model):
    def __str__(self):
        return "[AnsID {0} : {1}]".format(self.answer.id, self.user.username)

    # 评论的内容
    comment = models.CharField(max_length=500)
    # 对应哪个回答
    answer = models.ForeignKey(Answer, default=None, on_delete=models.CASCADE)
    # 哪个用户的评论
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)


"""
家庭的消息
"""
class Message(models.Model):
    def __str__(self):
        return "[{0} : {1}]".format(self.message[:20], self.family.name)

    # 信息内容
    message = models.CharField(max_length=500)
    # 谁家的信息
    family = models.ForeignKey(Family, default=None, on_delete=models.CASCADE)
    # 是否已读
    is_read = models.BooleanField(default=False)























# When using shell first type in following
# >>> exec(open('shellscript.py').read())

# END

