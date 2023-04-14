from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from . serializers import *
# Create your views here.

@api_view(['GET'])
def Detect(request):

    website_url = [
        
        
        "https://gra.gov.gh/",
        "https://www.ec.gov.gh/",
        "https://statsghana.gov.gh/",
        "https://www.nia.gov.gh/",
        "https://www.nca.org.gh/",
        "https://ghs.gov.gh/",
        "https://passport.mfa.gov.gh/",
        "https://www.dvla.gov.gh/",
        "https://www.mtn.com.gh/",
        "https://www.vodafone.com.gh/",
        "https://www.airteltigo.com.gh/",
        "https://www.ecg.com.gh/"
        
        
        
    ]


    statuses = {
        200: "Website Available",
        301: "Permanent Redirect",
        302: "Temporary Redirect",
        404: "Not Found",
        500: "Internal Server Error",
        503: "Service Unavailable"
    }
    
    available =[]
    not_available = []
    not_secure = []



    for url in website_url:
        try:
            web_response = requests.get(url)
            print(url, web_response.status_code)
            if ((web_response.status_code == 200) or (web_response.status_code == 406)):
                available.append(url)
            
            else:
                not_available.append(url)
        except:
            print(url)
            not_secure.append(url)
            

    all = ("these websites are up and running",available, "these websites are down or have no SSL certificates", not_secure, )
    return Response(all)



@api_view(['POST'])
def Check(request):
        if request.method == "POST":
            serializer = MainSerializer(data=request.data)

        if serializer.is_valid():
            
            print(serializer.validated_data["url"])
            

            
            try:
                web_response = requests.get(serializer.validated_data["url"])
                print(request.data)
                
                if ((web_response.status_code == 200) or (web_response.status_code == 406)):
                    
                    return Response("This website is up and running")
                
                else:
                    print(web_response.status_code)
                    return Response("This website is either down, or has no SSL certificate")
            except:
                
                return Response("This website is either down or has no SSL certificate")
        
        
            
        

        