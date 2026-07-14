## Stack: Python + Django

- **Language:** Python. **Framework:** Django 6. **Server:** gunicorn (prod),
  `runserver` (dev). Minimal runnable project — grow it with `startapp`.
- **Structure:** project config in `app/` (`settings.py`, `urls.py`, `wsgi.py`);
  add feature apps via `python manage.py startapp <name>` and register them in
  `INSTALLED_APPS`; templates in `<app>/templates/`.
- **Conventions:** keep secrets in env (`DJANGO_SECRET_KEY`, `DJANGO_DEBUG`,
  `DJANGO_ALLOWED_HOSTS`); never commit them. Use the ORM + migrations; validate
  input with forms/serializers. Add Django REST Framework for JSON APIs.
- **Commands:**
  ```
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver      # dev
  python manage.py check          # validate the project
  python manage.py test           # tests
  ```
