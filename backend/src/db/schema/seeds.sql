INSERT INTO users (names, email)
VALUES 
  (ARRAY['John', 'Jane'], 'test@test.com');

INSERT INTO pets (user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment)
VALUES  
  (1, 'Fido', 'backend/public/images/dog_photo.jpg', '2000-04-05', 'Chocolate Lab', ARRAY['15000'], 'IAMS Fur Care', 'Spills water dish a lot!');

INSERT INTO reminders (pet_id, title, date, comment)
VALUES
  (1, 'Feed Fido', '2023-11-13 14:00:00', 'Mix food with some water');


INSERT INTO contacts (user_id, name, phone_number, email, website)
VALUES
  (1, 'Dr. Goodvet', '123-456-7890', 'vet@goodvet.com', 'http://goodvet.com');
