
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
    path('getcharts/', views.get_chart, name='getcharts'),
    path('getcharts2/', views.get_chart2, name='getcharts2'),
    path('getcharts3/', views.get_chart3, name='getcharts3'),
    path('credit/<int:credit_id>/', views.creditDetail, name='creditDetail'),
    path('credit/<int:credit_id>/delete', views.delete_credit, name='delete_credit'),


]
