FROM python:3.11-slim

WORKDIR /usr/src/app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

ENV FLASK_APP=app/main.py

EXPOSE 3004

CMD ["python", "app/main.py"]
