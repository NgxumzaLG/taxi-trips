-- Insert the region into regions table
insert into regions(name) values ('Durban');
insert into regions(name) values ('Cape Town');
insert into regions(name) values ('Gauteng');

-- Insert the route into routes table
insert into routes(route_name, fare) values ('Umlazi - Durban Central', 15.00);
insert into routes(route_name, fare) values ('Durban Central - Umhlanga Rocks', 17.00);
insert into routes(route_name, fare) values ('Durban Central - Umbilo', 7.00);
insert into routes(route_name, fare) values ('Cape Town - Bellville', 14.50);
insert into routes(route_name, fare) values ('Cape Town - Gugulethu', 12.00);
insert into routes(route_name, fare) values ('Cape Town - Langa', 8.00);  
insert into routes(route_name, fare) values ('Sandton - Randburg', 8.50);
insert into routes(route_name, fare) values ('Alexandra - Sandton', 8.50);
insert into routes(route_name, fare) values ('Sandton - Midrand', 20.00);

-- Insert the taxi into taxis table
insert into taxis(reg_number, taxi_region_id) values ('ND 21514', 1);
insert into taxis(reg_number, taxi_region_id) values ('ND 36729', 1);
insert into taxis(reg_number, taxi_region_id) values ('ND 42203', 1);
insert into taxis(reg_number, taxi_region_id) values ('CA 031-021', 2);
insert into taxis(reg_number, taxi_region_id) values ('CA 082-721', 2);
insert into taxis(reg_number, taxi_region_id) values ('CA 691-963', 2);
insert into taxis(reg_number, taxi_region_id) values ('CA 123-456', 2);
insert into taxis(reg_number, taxi_region_id) values ('LGN 418 GP', 3);
insert into taxis(reg_number, taxi_region_id) values ('SOS 971 GP', 3);
insert into taxis(reg_number, taxi_region_id) values ('LOY 202 GP', 3);
insert into taxis(reg_number, taxi_region_id) values ('BBC 123 GP', 3);

-- Insert the trip into trips table
insert into trips(route_id, taxi_id) values (1, 3);
insert into trips(route_id, taxi_id) values (2, 1);
insert into trips(route_id, taxi_id) values (3, 2);
insert into trips(route_id, taxi_id) values (1, 3);
insert into trips(route_id, taxi_id) values (1, 3);
insert into trips(route_id, taxi_id) values (2, 1);
insert into trips(route_id, taxi_id) values (1, 3);
insert into trips(route_id, taxi_id) values (2, 1);
insert into trips(route_id, taxi_id) values (3, 2);
insert into trips(route_id, taxi_id) values (1, 3);
insert into trips(route_id, taxi_id) values (2, 1);
insert into trips(route_id, taxi_id) values (3, 2);

insert into trips(route_id, taxi_id) values (6, 4);
insert into trips(route_id, taxi_id) values (4, 5);
insert into trips(route_id, taxi_id) values (6, 6);
insert into trips(route_id, taxi_id) values (5, 7);
insert into trips(route_id, taxi_id) values (6, 4);
insert into trips(route_id, taxi_id) values (4, 5);
insert into trips(route_id, taxi_id) values (6, 6);
insert into trips(route_id, taxi_id) values (5, 7);
insert into trips(route_id, taxi_id) values (6, 4);
insert into trips(route_id, taxi_id) values (4, 5);
insert into trips(route_id, taxi_id) values (6, 6);
insert into trips(route_id, taxi_id) values (5, 7);
insert into trips(route_id, taxi_id) values (6, 4);
insert into trips(route_id, taxi_id) values (4, 5);
insert into trips(route_id, taxi_id) values (6, 4);
insert into trips(route_id, taxi_id) values (6, 6);

insert into trips(route_id, taxi_id) values (7, 8);
insert into trips(route_id, taxi_id) values (9, 9);
insert into trips(route_id, taxi_id) values (9, 10);
insert into trips(route_id, taxi_id) values (8, 11);
insert into trips(route_id, taxi_id) values (9, 10);
insert into trips(route_id, taxi_id) values (7, 8);
insert into trips(route_id, taxi_id) values (8, 11);
insert into trips(route_id, taxi_id) values (7, 8);
insert into trips(route_id, taxi_id) values (8, 11);
insert into trips(route_id, taxi_id) values (9, 9);
insert into trips(route_id, taxi_id) values (9, 10);
insert into trips(route_id, taxi_id) values (9, 9);
insert into trips(route_id, taxi_id) values (7, 8);
insert into trips(route_id, taxi_id) values (8, 11);
insert into trips(route_id, taxi_id) values (9, 9);
insert into trips(route_id, taxi_id) values (9, 10);
insert into trips(route_id, taxi_id) values (7, 8);


