-- db name: react_gallery

CREATE TABLE pictures (
	id SERIAL PRIMARY KEY,
	path varchar(300) NOT NULL,
	description varchar(175) NOT NULL,
	likes INT DEFAULT 0,
	showingimage BOOLEAN DEFAULT TRUE
);

INSERT INTO pictures ("path", "description", "likes", "showingimage") 
VALUES ('https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80', 'Beautiful lake with mountain backdrop.', 25, true),
('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=', 'A beautiful sunset on the grassy hills.', 22, true),
('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg', 'The calm during the storm...', 105, true), 
('https://tulsamissionmovement.files.wordpress.com/2014/10/breathtaking-picture-of-london-city-at-night.jpg', 'City at night but still lively.', 3, true), 
('https://i.insider.com/5d91fdb36f24eb3da40c3e29?width=1000&format=jpeg&auto=webp', 'Pink sunset on mirror like lake.', 35, true), 
('https://i.insider.com/5c7578ebeb3ce80be35e9725?width=1136&format=jpeg', 'A hidden paradise in the Grand Canyon. Havasu Falls is truly beautiful.', 14, true)
;