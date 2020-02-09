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


## userテーブル

|column|type|options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|passward|integer|null: false, foreign_key: true|

### Association
has_many :tweets
has_many :commetns


## commentsテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null :fail, foreign_key: true|
|text|integer|null :fail, foreign_key: true|
|image|long_binary||
|day|date||

### Association
belongs_to :user
has_many :groups


## groupsテーブル
|column|type|options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|
|menber_id|integer|null: false, foreign_key: true|

### Asociation
belong_to :groups_users
has_many :comments


## groups_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

