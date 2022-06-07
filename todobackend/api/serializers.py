from rest_framework import serializers
from todo.models import Todo
<<<<<<< HEAD
=======
from padoms.models import Padoms
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
class TodoSerializer(serializers.ModelSerializer):
    created = serializers.ReadOnlyField()
    completed = serializers.ReadOnlyField()
    class Meta:
        model = Todo
        fields = ['id','title','memo','created','completed']
class TodoToggleCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id']
        read_only_fields = ['title','memo','created','completed']
<<<<<<< HEAD



=======
class PadomsSerializer(serializers.ModelSerializer):
    created = serializers.ReadOnlyField()
    completed = serializers.ReadOnlyField()
    class Meta:
        model = Padoms
        fields = ['id','title','memo','created','completed']
class PadomsToggleCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Padoms
        fields = ['id']
        read_only_fields = ['title','memo','created','completed']  
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090

