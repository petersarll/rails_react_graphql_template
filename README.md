# rails_react_graphql_template

Basic template using ruby on rails, react, graphql, Apollo, and postgreSQL

prerequisites:

Ruby: 2.6.3

node: 11.14.0

Rails: 6.0.2

recreating this template:

    $ rails new rails-react-graphql -T -d=postgresql --webpack=react
    $ cd rails-react-graphql
    $ rails db:create

if:
`$ rails db:create`

fails, start your postgres database

    $ postgres -D /usr/local/var/postgres

and try again.

Add the following to your GemFile

`gem 'graphql', '~> 1.9', '>= 1.9.3'`

    $ bundle install
    $ rails generate graphql:install
    $ bundle install # to install graphiql-rails
    $ rails server

if error

`"Sprockets::Rails::Helper::AssetNotPrecompiled in GraphiQL::Rails::Editors#show"`

add these two lines to app/assets/config/manifest.js

`//= link graphiql/rails/application.css`

`//= link graphiql/rails/application.js`

restart server:

    $ rails server

check http://localhost:3000/ or the localhost you are using to make sure rails server is working

![localhost](https://github.com/petersarll/rails_react_graphql_template/blob/master/README_images/localhost.png)

check http://localhost:3000/graphiql or the localhost you are using to make sure rails graphiql is working

![localhost/graphiql](https://github.com/petersarll/rails_react_graphql_template/blob/master/README_images/localhost:graphqiql.png)
