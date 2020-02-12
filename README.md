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

# chat-space DB設計

## usersテーブル

|column|type|options|
|------|----|-------|
|name|integer|null: false|
|email|integer|null: false|
|passward|integer|null: false|

### Association
has_many :groups_users
has_many :tweets


## groups_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|column|type|options|
|------|----|-------|
|group_name|integer|null: false|
|menber_user_id|integer|null: false|

### Asociation
has_many :groups_users
has_many :tweets

## tweetsテーブル
|column|type|options|
|------|----|-------|
|text|integer|null :fail|
|image|long_binary||
|day|date||
|user_id|integer|null :fail|
|group_id|integer|null :fail|

### Association
belongs_to :user
belongs_to :group

