from django.urls import path
from rest_framework.routers import DefaultRouter
from account.views.kitchen_staff_viewset import KitchenStaffViewSet
from account.views.manager_viewset import ManagerViewSet
from account.views.customer_viewset import CustomerViewSet
from account.views.user_create_view import UserCreateView
from account.views.kitchen_staff_work_viewset import KitchenStaffProfileViewSet
from account.views.user_list_view import UserListView
from account.views.token_obtain_pair_cookie_view import TokenObtainPairCookieView
from account.views.token_refresh_cookie_view import TokenRefreshCookieView
from account.views.me_retrieve_api_view import MeRetrieveAPIView
from account.views.logout_view import LogoutView

router = DefaultRouter()
router.register(r"kitchen-staff", KitchenStaffViewSet)
router.register(r"customer", CustomerViewSet)
router.register(r"kitchen-staff-work", KitchenStaffProfileViewSet)
router.register(r"manager", ManagerViewSet)

urlpatterns = [
    path("token/", TokenObtainPairCookieView.as_view(), name="account-token"),
    path("token/refresh/", TokenRefreshCookieView.as_view(), name="account-token-refresh"),
    path("token/logout/", LogoutView.as_view(), name="account-token-logout"),
    path("register/", UserCreateView.as_view(), name="account-register"),
    path("user/", UserListView.as_view(), name="account-user"),
    path("me/", MeRetrieveAPIView.as_view(), name="account-me"),
] + router.urls
