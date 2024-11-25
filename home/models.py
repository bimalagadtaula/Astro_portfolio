from django.db import models


# Create your models here.
class Contact(models.Model):
    firstname=models.CharField( max_length=50)
    lastname=models.CharField(max_length=50)
    email=models.EmailField(max_length=254)
    tel=models.CharField( max_length=50)
    about=models.TextField()
    date=models.DateTimeField()
    def __str__(self):
        return self.firstname
    
