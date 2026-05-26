from rest_framework.views import APIView
from rest_framework.response import Response


class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response({"detail": "Successfully logged out"})
        response.delete_cookie("refresh_token")

        return response
