CREATE TABLE pictures (
	id SERIAL PRIMARY KEY,
	path varchar(300) NOT NULL,
	description varchar(75) NOT NULL,
	likes INT DEFAULT 0,
	showingimage BOOLEAN DEFAULT TRUE
);

INSERT INTO pictures ("path", "description", "likes", "showingimage") 
VALUES ('https://upload.wikimedia.org/wikipedia/commons/4/43/Gold_star_on_blue.gif', 'Star I found online.', 0, true),
('https://s1.piq.land/2011/11/11/SzeBd4LeVj3I8H7Ynwh18PHU_400x400.png', 'Mario Shroom', 0, true),
('https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg', 'coffee... mmm', 0, true)
;