from rest_framework import serializers
from .models import TestData
<<<<<<< HEAD
=======

>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
class TestDataSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = TestData
        fields = "__all__"