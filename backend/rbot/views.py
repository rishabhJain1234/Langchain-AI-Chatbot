from django.shortcuts import render,redirect
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from .models import User
from .serializers import UserSerializer
import requests
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from dotenv import load_dotenv
from authlib.integrations.django_client import OAuth
import os
import json
load_dotenv()

CLIENT_ID = os.getenv("CLIENT_ID2")
CLIENT_SECRET = os.getenv("CLIENT_SECRET2")

oauth = OAuth()

AUTHLIB_OAUTH_CLIENTS = {
'KIRA': {
    'client_id': os.getenv('CLIENT_ID'),
    'client_secret': os.getenv('CLIENT_SECRET'),
    'redirect_uri': 'http://localhost:8000/callback',
}
}

KIRA=oauth.register("KIRA",
               client_id=os.getenv('CLIENT_ID'),
               client_secret=os.getenv('CLIENT_SECRET'),
               server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
               client_kwargs={"scope": "email"}
               )

AUTHLIB_INSECURE_TRANSPORT=True

# Create your views here.
def index(request):
  url = "https://channeli.in/oauth/authorise/?client_id="+CLIENT_ID+"&redirect_uri=http://localhost:8000/authenticate/&state='success'"
  return redirect(url)

def login(request):
        redirect_uri = 'http://localhost:8000/callback'
        return oauth.KIRA.authorize_redirect(request, redirect_uri)

def authenticate(request):
  code = request.GET['code']
  print(code)
  url1 = "https://channeli.in/open_auth/token/"
  payload1 = {'client_id': CLIENT_ID, 'client_secret': CLIENT_SECRET ,'grant_type': 'authorization_code' , 'redirect_uri':'http://localhost:8000/authenticate/','code': code}
  response1 = requests.post(url1 , data=payload1)
  print(response1.json().get('error',''))
  token = "Bearer " + response1.json().get('access_token','')
  print(token)
  param = {"Authorization" : token}
  url2 = "https://channeli.in/open_auth/get_user_data/"
  response2 = requests.get(url = url2 , headers = param)
  print(response2)
  mail = response2.json().get('contactInformation','').get('instituteWebmailAddress','')
  user = User.objects.all().filter(email = mail).first()
  if (user == None):
    user = User.objects.create_user(email = mail)
                
  chats = user.chats
  new_chat=json.dumps(chats);
  print(new_chat)
  token, created = Token.objects.get_or_create(user=user)
  print(token.key)
#   return HttpResponse({'token': token.key , 'chat history' : chats})
  
  # payload2 = {
  #   'uname' = 
  # }
  return redirect(f"http://localhost:3000/kira/?token=${token.key}&chat_history=${new_chat}")

    
def callback(request):
    token = KIRA.authorize_access_token()
    user_info = KIRA.get('https://www.googleapis.com/oauth2/v2/userinfo')
    user_email = user_info.json().get('email')
    return HttpResponse(user_email)
class UserLoginView(APIView):
    
    def post(self,request):
        email = request.GET.get("email","")
        user = User.objects.all().filter(email = email).first()
        if (user == None):
            user = User.objects.create_user(email = email)
                
        # user = User.objects.all().filter(email = email).first()
        chats = user.chats
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key , 'chat history' : chats})

class UserViewSet(APIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [permissions.IsAuthenticated]

  def get(self,request):
    chats = request.user.chats
    return Response(chats)

  