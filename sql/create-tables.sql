create table regions(
	id serial not null primary key,
	name text not null
);

create table routes(
	id serial not null primary key,
	route_name text not null,
	fare decimal(10,2)
);

create table taxis(
    id serial not null primary key,
    reg_number text not null,
    taxi_region_id int,
    foreign key (taxi_region_id) references regions(id)
);

create table trips(
    id serial not null primary key,
    route_id int,
    taxi_id int,
    foreign key (route_id) references routes(id),
	foreign key (taxi_id) references taxis(id)
);