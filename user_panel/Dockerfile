# Build Stage
FROM cirrusci/flutter:stable AS build

WORKDIR /app
COPY . .

RUN flutter pub get
RUN flutter build web

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build/web /usr/share/nginx/html

EXPOSE 3016
CMD ["nginx", "-g", "daemon off;"]
