## Prototype L Template

## Set up db
1. install docker
2. in one terminal, run `docker-compose up --build`. This gets the db up and running. 
3. In another terminal, run `docker-compose run --rm app python manage.py migrate`. In fact use this command to run anything adhoc. 
4. now cd into db_test_app and run `docker build . -t app && docker run --net=host app`.  

### Adhoc commands

docker-compose run --rm app python manage.py startapp pltemplate

docker-compose run --rm app python manage.py populate_db

## Set up application

1.  `docker-compose up --build` and go to http://localhost:8000/api