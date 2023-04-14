from django.db import models

# Create your models here.



class Main_Sites(models.Model):
    url = models.CharField(max_length=300, blank=True)
    