"""
Django settings for myplataform project.

Generated by 'django-admin startproject' using Django 5.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
import os 

from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-8kba8=c2+$l@=aq^cqv-ywa%5^#ubd0&e#7u169joy&4ki((bk'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['18.144.6.149', 'localhost', 'web-production-e5589.up.railway.app', '127.0.0.1', 'sefader-agronegocios.com']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'whitenoise.runserver_nostatic', 
    'form',
    'django.contrib.humanize',
    'corsheaders',  
    'storages',

]



MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',  

]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CORS_ALLOW_ALL_ORIGINS = True  # Permitir todas las conexiones (usar solo en desarrollo)
CORS_ALLOW_CREDENTIALS = True


ROOT_URLCONF = 'myplataform.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates'),
        os.path.join(BASE_DIR, 'myplataform', 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myplataform.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

# BASE DE DATOS PARA PRODUCCION
DATABASES = {
                            'default': {
                                'ENGINE': 'django.db.backends.postgresql_psycopg2',
                                'NAME': 'agronegocios',
                                'USER': 'carlos',
                                'PASSWORD': 'mastache123',
                                'HOST': 'db-agonegocios.c3k440iemp4z.us-west-1.rds.amazonaws.com',
                                'PORT': '5432', 
                                            }
                            }

# BASE DE DATOS PARA DESARROLLO
# DATABASES = {
#                                                                               'default': {
#                                                                                'ENGINE': 'django.db.backends.postgresql_psycopg2',
#                                                                                'NAME': 'developer',
#                                                                                'USER': 'postgres', 
#                                                                                'PASSWORD': 'mastache', 
#                                                                                'HOST': 'localhost',
#                                                                                'PORT': '5432'
#                                                                            }
#                                                                         } 

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

USE_L10N = True

LANGUAGE_CODE = 'es'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

X_FRAME_OPTIONS = 'SAMEORIGIN'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
LOGIN_URL = '/login'

STATIC_ROOT = os.path.join(BASE_DIR, "static/")

STATICFILES_DIR = (os.path.join(BASE_DIR, 'form/static'),)

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


CSRF_TRUSTED_ORIGINS = ['http://*','https://web-production-3fb5.up.railway.app', 'https://sefader-agronegocios.com']

#PERMISO PARA MANDAR CORREO ELECTRONICO

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER ='agronegociossefader@gmail.com'
EMAIL_HOST_PASSWORD = 'peaqkmlhefsiujws'
EMAIL_USE_TLS = True


AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


AWS_S3_REGION_NAME = 'us-east-1' 
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'


MEDIA_URL = f"https://{AWS_S3_CUSTOM_DOMAIN}/media/"


