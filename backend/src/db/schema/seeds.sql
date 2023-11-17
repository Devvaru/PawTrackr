INSERT INTO users (names, email)
VALUES 
  (ARRAY['John', 'Jane'], 'test@test.com');

INSERT INTO pets (user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment)
VALUES  
  (1, 'Fido', 'images/chocolate_lab.jpg', '2000-04-05', 'Chocolate Lab', ARRAY['15000'], 'IAMS Fur Care', 'Spills water dish a lot!'),
  (1, 'Maple', 'images/shire_horse.jpg', '1995-03-25', 'Shire Horse', ARRAY['1500000'], 'Hay', 'Likes his blanket'),
  (1, 'Mocha', 'images/cat.jpg', '2020-08-01', 'Abyssinian Cat', ARRAY['12000', '12300'], 'IAMS Anti Hairball', 'Will do tricks for treats'),
  (1, 'Morsel', 'images/gecko.jpg', '2022-09-24', 'Crested Gecko', ARRAY['15000'], 'Pangea Gecko Diet', 'Very shy'),
  (1, 'Swampy', 'images/frog.jpg', '2015-06-10', 'Frog', ARRAY['250'], 'Flies', 'Hops a lot!'),
  (1, 'Mischief', 'images/tabby_cat.jpg', '2018-10-31', 'Tabby', ARRAY['4500'], 'IAMS Hairball Remedy', 'Shy but friendly'),
  (1, 'Princess', 'images/dachshund.jpg', '2000-04-05', 'Long-haired Dachshund', ARRAY['4000'], 'Raw Meat Diet', '');

INSERT INTO reminders (pet_id, title, date, comment)
VALUES
  (2, 'Feed Maple', '2023-12-09 15:00:00', 'Mix food with some water'),
  (1, 'Feed Fido', '2023-12-12 14:00:00', 'Mix food with some water'),
  (4, 'Feed Morsel', '2023-12-15 16:00:00', 'Mix food with some water');

INSERT INTO contacts (user_id, name, phone_number, email, website)
VALUES
  (1, 'Dr. Goodvet', '123-456-7890', 'vet@goodvet.com', 'http://google.com'),
  (1, 'Dr. Lamba', '555-456-7890', 'vet@lamba.com', 'http://google.com'),
  (1, 'Pet Sitter', '123-444-7890', 'vet@smith.com', 'http://google.com'),
  (1, 'PetSmart', '123-333-7890', 'petsmart@shop.com', 'http://google.com');
