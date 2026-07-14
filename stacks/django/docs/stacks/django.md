# Python + Django — Setup Notes

```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver      # http://localhost:8000
```

- Minimal project in `app/` (config) + `manage.py`. Add features with
  `python manage.py startapp <name>` (register in `INSTALLED_APPS`).
- For the full-featured scaffold, `django-admin startproject`.
- JSON APIs: add `djangorestframework`. Prod server: `gunicorn app.wsgi`.
