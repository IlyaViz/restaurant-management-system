from rest_framework_simplejwt.views import TokenObtainPairView


class TokenObtainPairCookieView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            refresh = response.data["refresh"]

            response.data.pop("refresh")

            response.set_cookie(
                key="refresh_token",
                value=refresh,
                httponly=True,
                secure=True,
                samesite="Lax",
            )

        return response
