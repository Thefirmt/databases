CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* auto increment id*/
  id int primary key not null auto_increment,
  /*message*/
  message,
  /*created by*/
  createdBy,
  /*room id foreign key*/
  room_id,
  /*user id foreign key*/
  user_id
);

CREATE TABLE users {
	/* auto increment id*/
	id int primary key not null auto_increment,
	username varchar(60)
}

CREATE TABLE rooms {
	id int primary key not null auto_increment,
	roomname varchar(100)
}

/*add foreign keys appropriately alter table foreign key references*/
/*insert into rooms, users, messages*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

