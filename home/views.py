from django.shortcuts import render
from .models import Contact
from datetime import datetime

# Create your views here.
def func(request):
    if request.method=="POST":
        firstname=request.POST.get("firstname")
        lastname=request.POST.get("lastname")
        email=request.POST.get("email")
        tel=request.POST.get("tel")
        about=request.POST.get("about")
        contact=Contact(firstname=firstname,lastname=lastname,email=email,tel=tel,about=about ,date=datetime.today())
        contact.save()
    

    return render(request,"index.html")