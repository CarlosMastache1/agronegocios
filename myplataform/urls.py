
from django.contrib import admin
from django.urls import path, include
from form import views 
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.home, name='home'),
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
    path('getcharts4/', views.get_chart4, name='getcharts4'),
    path('getcharts5/', views.get_chart5, name='getcharts5'),
    path('credit/<int:credit_id>/', views.creditDetail, name='creditDetail'),
    path('credit/<int:credit_id>/update', views.creditUpdate, name='creditUpdate'),
    path('credit/<int:credit_id>/delete', views.delete_credit, name='delete_credit'),
    path('', views.indSec, name='index' ),
    path('agricola/', views.sectorAgri, name='agricola'),
    path('descripcion_agave/', TemplateView.as_view(template_name="agave/descripcion_agave.html"), name='descripcion_agave'),
    path('tablas2/', TemplateView.as_view(template_name="agave/tablas/2.html"), name='tablas2'),
    path('tablas3/', TemplateView.as_view(template_name="agave/tablas/3.html"), name='tablas3'),
    path('tablas4/', TemplateView.as_view(template_name="agave/tablas/4.html"), name='tablas4'),
    path('tablas5/', TemplateView.as_view(template_name="agave/tablas/5.html"), name='tablas5'),
    path('grafica1/', TemplateView.as_view(template_name="agave/graficas/grafica1.html"), name='grafica1'),
    path('tablas6/', TemplateView.as_view(template_name="agave/tablas/6.html"), name='tablas6'),
    path('grafica2/', TemplateView.as_view(template_name="agave/graficas/grafica2.html"), name='grafica2'),
    path('grafica3/', TemplateView.as_view(template_name="agave/graficas/grafica3.html"), name='grafica3'),
    path('tablas8/', TemplateView.as_view(template_name="agave/tablas/8.html"), name='tablas8'),
    path('iframeAgave/', TemplateView.as_view(template_name="agave/iframe_de_todo.html"), name='iframeAgave'),
    path('agave/', TemplateView.as_view(template_name="agave/estadisticas_agave.html"), name='agave'),
    path('mapa/', TemplateView.as_view(template_name="agave/mapa.html"), name='mapa'),
    path('descripcion_ajonjoli/', TemplateView.as_view(template_name="ajonjoli/descripcion_ajonjoli.html"), name='descripcion_ajonjoli'),
    path('tablas1Aj/', TemplateView.as_view(template_name="ajonjoli/tablas/1.html"), name='tablas1Aj'),
    path('tablas2Aj/', TemplateView.as_view(template_name="ajonjoli/tablas/2.html"), name='tablas2Aj'),
    path('tablas3Aj/', TemplateView.as_view(template_name="ajonjoli/tablas/3.html"), name='tablas3Aj'),
    path('tablas4Aj/', TemplateView.as_view(template_name="ajonjoli/tablas/4.html"), name='tablas4Aj'),
    path('graficas1Aj/', TemplateView.as_view(template_name="ajonjoli/graficas/1.html"), name='graficas1Aj'),






]
