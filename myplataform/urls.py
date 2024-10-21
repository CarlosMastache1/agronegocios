
from django.contrib import admin
from django.urls import path, include
from form import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.signin, name='login'),
    path('home/', views.home, name='home' ),
    path('form/', views.form, name='form' ),
    path('logout/', views.signout, name='logout'),
    path('reporte/', views.reporte, name='reporte'),
    path('grafica/', views.graficas, name='grafica'),

    path('credit/<int:credit_id>/', views.creditDetail, name='creditDetail'),




]
