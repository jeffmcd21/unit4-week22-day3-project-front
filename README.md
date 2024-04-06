

# Seir-Seal Project 4

- **Jeff McDonald** (2024-03-27)

- **App Name:** A Field of Baseball
- **Description:** Historical Statisicts and Information on All Leagues of Baseball

- **Github Backend:** https://github.com/jeffmcd21/unit4-week22-day3-project-backend
- **Deployed Backend:** https://unit4-week22-day3-project-backend.onrender.com

- **Github Frontend:** https://github.com/jeffmcd21/unit4-week22-day3-project-front
- **Deployed Frontend:** https://resilient-tapioca-ee8767.netlify.app/

- **Miro Board:** https://miro.com/app/board/uXjVKarxPOI=/
    - #### ERD (Entity Relationship Diagram)
    - #### My diagram showing the models and relationships between them.

## List of Dependencies

##### Backend (python-django)

- django
- asgiref
- dj-database-url
- Django
- django-cors-headers
- django-environ
- djangorestframework
- gunicorn
- packaging
- pip
- psycopg2-binary
- setuptools
- sqlparse
- typing_extensions


##### Frontend (React)

- react
- react-dom
- react-router-dom
- milligram

## Route Map

| Route Name | Endpoint | Method | Decsription |
|------------|----------|--------|-------------|
| Index | /info | GET | Renders team details |
| New | /batter_info/new | GET | Display a form to add new players |
| Delete | /batter_info/:id | DELETE | Remove a particular player then redirect |
| Update | /batter_info/:id | PUT | Update a particular player then redirect |
| Create | /batter_info | GET | Add a new player to the database then redirect |
| Edit | /batter_info/:id/edit | POST | Show edit form for one player |
| Show | /batter_info/:id | GET | Show info about one player |
| Create User | /auth/signup/ | POST | User create account |
| User Login | /auth/login/ | POST | User sign into account |


## Design Mockups (Mobile & Desktop)

##### Mobile Design

![Mobile Design Mockup](https://i.imgur.com/lw1B6J0.png)

##### Desktop Design

![Desktop Design Mockup](https://i.imgur.com/B9EXxQb.png)


