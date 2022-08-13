CREATE TABLE pictures (
	id SERIAL PRIMARY KEY,
	path varchar(300) NOT NULL,
	description varchar(75) NOT NULL,
	likes INT DEFAULT 0,
	showingimage BOOLEAN DEFAULT TRUE
);

INSERT INTO pictures ("path", "description", "likes", "showingimage") 
VALUES ('https://upload.wikimedia.org/wikipedia/commons/4/43/Gold_star_on_blue.gif', 'Star I found online.', 0, true),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oBLvehO1C6ZTVS4NPq7Mw1soj5NB0JI-Vk--J6Vdq3QXAxhI1blBZTzU97jc62b3&usqp=CAU', 'Some dumb dragon', 0, true),
('https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg', 'coffee... mmm', 0, true)
;