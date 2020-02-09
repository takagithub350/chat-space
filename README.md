# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

user
|column|type|options|
|------|----|-------|
|email|varchar|null: false|
|passward|varchar|null: false|
|nickname|varchar|null: false|

has_many :tweets
has_many :commetns

tweets
|column|type|options|
|------|----|-------|
|user_id|varchar|null :fail|
|text|varchar|null :fail|
|image|long_binary||

belongs_to :user
has_many :comments

comments
|column|type|options|
|------|----|-------|
|user_id|varchar|null :fail|
|text|varchar|null :fail|
|tweet_id|varchar|null :fail|

belongs_to :user
belongs_to :tweet