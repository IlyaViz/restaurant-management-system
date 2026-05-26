from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from account.serializers.user_serializer import UserSerializer

User = get_user_model()


class MeRetrieveAPIView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user
