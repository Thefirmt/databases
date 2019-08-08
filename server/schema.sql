CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* auto increment id*/
  id int primary key not null auto_increment,
  /*message*/
  message varchar(400),
  /*created by*/
  created_on datetime(1),
  /*room id foreign key*/
  room_id int,
  /*user id foreign key*/
  user_id int
);

CREATE TABLE users (
	/* auto increment id*/
	id int primary key not null auto_increment,
	username varchar(60),
  -- post_count int
);

CREATE TABLE rooms (
	id int primary key not null auto_increment,
	roomname varchar(100)
);

/*add foreign keys appropriately alter table foreign key references*/
/*insert into rooms, users, messages*/
-- FOREIGN KEY (room_id) REFERENCES rooms(id),
  -- FOREIGN KEY (user_id) REFERENCES users(id)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

