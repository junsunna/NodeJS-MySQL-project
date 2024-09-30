use firstdabase;

create table if not exists users (
	id varchar(100) primary key comment '사용자 로그인 아이디',
    name varchar(100) not null comment '사용자 이름',
    age smallint unsigned not null comment '사용자 나이, 최대 65,000살',
    password varchar(300) not null comment '로그인 암호, 패스워드'
);


