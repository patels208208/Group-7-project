create database habit_tracker;
use habit_tracker;

create table users (
user_id int primary key auto_increment,
first_name varchar (100),
surname varchar (100),
email_address varchar(100) not null unique,
user_password varchar (100) not null,
avatar_name varchar(100)
);

create table habit_type (
habit_id int primary key auto_increment,
habit_name varchar (100) not null,
habit_icon varchar (100),
created_dt timestamp default current_timestamp,
updated_dt timestamp default current_timestamp on update current_timestamp
);

create table user_habit (
user_habit_id int primary key auto_increment,
user_id int,
habit_id int,
measurement_unit int, /*eg. 1 unit */
measurement varchar(50), /*eg. ml/glass/bottle etc */
frequency_unit int, /*eg. x times */
frequency varchar (50) , /*eg. daily */
created_dt timestamp default current_timestamp,
updated_dt timestamp default current_timestamp on update current_timestamp,
reminder_set bool /*wish list - optional*/,
reminder_frequency int /*wish list - optional*/,
foreign key (user_id) references users(user_id),
foreign key (habit_id) references habit_type(habit_id)
);

create table goal_completion (
completion_id int primary key auto_increment,
user_id int, 
user_habit_id int,
completed bool,
completed_dt timestamp default current_timestamp,
foreign key (user_id) references users(user_id),
foreign key (user_habit_id) references user_habit(user_habit_id)
);

insert into habit_type (habit_name, created_dt, updated_dt)
values ("Hydration", current_timestamp(), current_timestamp() ),
("Nutrition", current_timestamp(), current_timestamp() ),
("Movement", current_timestamp(), current_timestamp() ),
("Reading", current_timestamp(), current_timestamp() ),
("Sleep", current_timestamp(), current_timestamp() ),
("Medication", current_timestamp(), current_timestamp() ),
("Hobbies", current_timestamp(), current_timestamp() ),
("Self-care", current_timestamp(), current_timestamp() ),
("Pets", current_timestamp(), current_timestamp() ),
("Plants", current_timestamp(), current_timestamp() ),
("Socialising", current_timestamp(), current_timestamp() ),
("Social Media", current_timestamp(), current_timestamp() );

select * from habit_type;
select * from user_habit;
select * from users;
select * from goal_completion;






