
from rest_framework import serializers

from . models import *

class MainSerializer(serializers.ModelSerializer):
        class Meta:
            model = Main_Sites
            fields = '__all__'