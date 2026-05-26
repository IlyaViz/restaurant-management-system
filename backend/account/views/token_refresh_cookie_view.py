from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.response import Response


class TokenRefreshCookieView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response(
                {"detail": "Refresh token not found in cookies."}, status=401
            )

        request._full_data = {**request.data, "refresh": refresh_token}

        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            new_refresh_token = response.data.pop("refresh")

            response.set_cookie(
                key="refresh_token",
                value=new_refresh_token,
                httponly=True,
                secure=True,
                samesite="Lax",
            )

        return response
