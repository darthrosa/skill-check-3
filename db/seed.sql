create table helo_users (
    id serial primary key,
    username varchar(40),
    password text
);

create table blog_posts (
    id serial primary key,
    user_id int references users(id),
    title VARCHAR(150),
    image text,
    content text
);

select * from helo_users;
select * from blog_posts;