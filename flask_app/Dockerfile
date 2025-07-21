FROM python:3.9.23-alpine3.22
WORKDIR /app
COPY requirement.txt /app/
RUN pip install --no-cache-dir -r requirement.txt
COPY . .
EXPOSE 80
CMD ["python", "app.py"]
