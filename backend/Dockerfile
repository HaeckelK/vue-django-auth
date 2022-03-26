FROM python:3.9.0-slim
# TODO run as non root
ENV PYTHONUNBUFFERED=1

WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . .

CMD gunicorn --bind 0.0.0.0:$PORT personal_site.wsgi