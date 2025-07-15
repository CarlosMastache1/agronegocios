
from django.contrib import admin
from django.urls import path, include
from form import views 
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.signin, name='login'),
    path('home/', views.home, name='home' ),
    path('gestionProductos/', views.gestProd, name='gestionProductos' ),
    path('form/', views.form, name='form' ),
    path('logout/', views.signout, name='logout'),
    path('reporte/', views.reporte, name='reporte'),
    path('grafica/', views.graficas, name='grafica'),
    path('graficaPubli/', views.graficasPublicas, name='graficaPubli'),
    path('getcharts/', views.get_chart, name='getcharts'),
    path('getcharts2/', views.get_chart2, name='getcharts2'),
    path('getcharts22023/', views.get_chart22023, name='getcharts22023'),
    path('getcharts3/', views.get_chart3, name='getcharts3'),
    path('getcharts4/', views.get_chart4, name='getcharts4'),
    path('getcharts5/', views.get_chart5, name='getcharts5'),
    path('get_chart_2023_1/', views.get_chart_2023_1, name='get_chart_2023_1'),
    path('get_chart_2024_1/', views.get_chart_2024_1, name='get_chart_2024_1'),
    path('get_chart_2023_2/', views.get_chart22023, name='get_chart_2023_2'),
    path('get_chart_2024_2/', views.get_chart22024, name='get_chart_2024_2'),
    path('get_chart_2023_3/', views.get_chart32023, name='get_chart_2023_3'),
    path('get_chart_2024_3/', views.get_chart32024, name='get_chart_2024_3'),

    path('get_chart_2023_5/', views.get_chart52023, name='get_chart_2023_5'),
    path('get_chart_2024_5/', views.get_chart52024, name='get_chart_2024_5'),

    path('tiendaHome/', views.tiendaIndex, name='tiendaHome'),
    path('tiendaCategorias/', views.tiendaCategorias, name='tiendaCategorias'),
    
    
    path('catalogo/', views.catalogoProductos, name='catalogoProductos'),
    path('categoriaAgricola/', views.tiendaAgricola, name='categoriaAgricola'),
    path('categoriaPecuario/', views.tiendaPecuario, name='categoriaPecuario'),
    path('categoriaPesquero/', views.tiendaPesquero, name='categoriaPesquero'),
    path('categoriaAcuicola/', views.tiendaAcuicola, name='categoriaAcuicola'),
    path('categoriaForestal/', views.tiendaForestal, name='categoriaForestal'),
    path('categoriaAgroindustrial/', views.tiendaIndustrial, name='categoriaAgroindustrial'),
    path('productosAgricola/<str:categoria>/', views.tiendaProducAgri, name="productosAgricola"),
    path('productosAgricola/<str:categoria>/<str:nombre>', views.productorProductorAgri, name="productosProductorAgricola"),
    path('productosPecuario/<str:categoria>/', views.tiendaProducPecu, name="productosPecuario"),
    path('detailProduct/<int:product_id>/', views.prodDetail, name='detailProduct'),
    path('formProductos/', views.formProductos, name='formProductos' ),
    path('credit/<int:credit_id>/', views.creditDetail, name='creditDetail'),
    
    path('product/<int:prod_id>/approved', views.productApproved, name='productApproved'),
    path('product/<int:prodA_id>/desapproved', views.productDesapproved, name='productDesapproved'),
    path('credit/<int:credit_id>/update', views.creditUpdate, name='creditUpdate'),
    path('eliminar/<int:id>/', views.delete_credit, name='delete_credit'),
    path('eliminarProd/<int:id>/', views.delete_product, name='delete_product'),
    path('', views.indSec, name='index' ),
    path('agricola/', views.sectorAgri, name='agricola'),
    path('pecuario/', views.sectorPecu, name='pecuario'),


    path('agave/', TemplateView.as_view(template_name="agricola/agave/index.html"), name='agave'),
    path('ajonjoli/', TemplateView.as_view(template_name="agricola/ajonjoli/index.html"), name='ajonjoli'),
    path('calabacita/', TemplateView.as_view(template_name="agricola/calabacita/index.html"), name='calabacita'),
    path('cafe/', TemplateView.as_view(template_name="agricola/cafe/index.html"), name='cafe'),
    path('jengibre/', TemplateView.as_view(template_name="agricola/jengibre/index.html"), name='jengibre'),
    path('limon/', TemplateView.as_view(template_name="agricola/limon/index.html"), name='limon'),
    path('litchi/', TemplateView.as_view(template_name="agricola/litchi/index.html"), name='litchi'),
    path('mango/', TemplateView.as_view(template_name="agricola/mango/index.html"), name='mango'),
    path('melon/', TemplateView.as_view(template_name="agricola/melon/index.html"), name='melon'),
    path('papaya/', TemplateView.as_view(template_name="agricola/papaya/index.html"), name='papaya'),
    path('pepino/', TemplateView.as_view(template_name="agricola/pepino/index.html"), name='pepino'),
    path('pina/', TemplateView.as_view(template_name="agricola/piña/index.html"), name='pina'),
    path('platano/', TemplateView.as_view(template_name="agricola/platano/index.html"), name='platano'),
    path('sandia/', TemplateView.as_view(template_name="agricola/sandia/index.html"), name='sandia'),


    path('graficos-precios/', views.precios_maiz, name='graficos_precios'),
    path('nosotros/', views.nosotros, name='nosotros'),
    path('directorio/', views.directorio, name='directorio'),
    path('ubicacion/', views.ubicacion, name='ubicacion'),
    path('terminos-condiciones/', TemplateView.as_view(template_name="terminos.html"), name='terminos-condiciones'),

    path('iframeMundo/', TemplateView.as_view(template_name="includes/mapaMundo.html"), name='iframeMundo'),
    path('iframeMexico/', TemplateView.as_view(template_name="includes/mapaMexico.html"), name='iframeMexico'),
    path('iframeOaxaca/', TemplateView.as_view(template_name="includes/mapaOaxaca.html"), name='iframeOaxaca'),

    path('avicola/', TemplateView.as_view(template_name="pecuario/avicola/index.html"), name='avicola'),
    path('apicola/', TemplateView.as_view(template_name="pecuario/apicola/index.html"), name='apicola'),
    path('bovino/', TemplateView.as_view(template_name="pecuario/bovino/index.html"), name='bovino'),
    path('caprino/', TemplateView.as_view(template_name="pecuario/caprino/index.html"), name='caprino'),
    path('porcino/', TemplateView.as_view(template_name="pecuario/porcino/index.html"), name='porcino'),
    path('ovino/', TemplateView.as_view(template_name="pecuario/ovino/index.html"), name='ovino'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
