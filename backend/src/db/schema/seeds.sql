INSERT INTO users (names, email)
VALUES 
  (ARRAY['John', 'Jane'], 'test@test.com');

INSERT INTO pets (user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment)
VALUES  
-- 1 dog -- 2 horse -- 3 cat -- 4 gecko -- 5 frog -- 6 cat -- 7 dog
  (1, 'Fido', 'images/chocolate_lab.jpg', '2000-04-05', 'Chocolate Lab', ARRAY['6'], 'IAMS Fur Care', 'Spills water dish a lot!'),
  (1, 'Maple', 'images/shire_horse.jpg', '1995-03-25', 'Shire Horse', ARRAY['1025'], 'Hay', 'Likes his blanket'),
  (1, 'Mocha', 'images/cat.jpg', '2020-08-01', 'Abyssinian Cat', ARRAY['10'], 'IAMS Anti Hairball', 'Will do tricks for treats'),
  (1, 'Morsel', 'images/gecko.jpg', '2022-09-24', 'Crested Gecko', ARRAY['0.09'], 'Pangea Gecko Diet', 'Very shy'),
  (1, 'Swampy', 'images/frog.jpg', '2015-06-10', 'Frog', ARRAY['0.25'], 'Flies', 'Hops a lot!'),
  (1, 'Mischief', 'images/tabby_cat.jpg', '2018-10-31', 'Tabby', ARRAY['4.5'], 'IAMS Hairball Remedy', 'Shy but friendly'),
  (1, 'Princess', 'images/dachshund.jpg', '2000-04-05', 'Long-haired Dachshund', ARRAY['6'], 'Raw Meat Diet', 'Very energetic'),
  (1, 'Daizy', 'images/shepherd.jpg', '2020-11-02', 'German Shepherd', ARRAY['6'], 'Fresh Chicken and Chicken Meal', 'Loves food'),
  (1, 'Tuffy', 'images/collie.jpg', '2019-06-05', 'Afollie', ARRAY['6'], 'Feed him with quality dry dog food', 'Likes the seesaw'),
  (1, 'Avocado', 'images/parakeet.jpg', '2020-02-24', 'Parakeet', ARRAY['0.2'], 'Seeds and veggies', 'Likes to watch TV'),
  (1, 'Pebble', 'images/tortoise.jpg', '1980-05-17', 'Tortoise', ARRAY['10'], 'Leafy greens', 'Walks around the house'),
  (1, 'Fluffy', 'images/angora.jpg', '2022-11-13', 'Turkish Angora', ARRAY['4'], 'Chicken & Fish Kitten Mix', 'Loves to snuggle on the sofa!');
 
INSERT INTO reminders (pet_id, title, date, comment)
VALUES
-- 1 dog -- 2 horse -- 3 cat -- 4 gecko -- 5 frog -- 6 cat -- 7 dog
  (2, 'Vet', '2023-12-09 15:00:00', 'No food before scans'),
  (4, 'Feed', '2023-12-12 14:00:00', 'Give crickets'),
  (4, 'Medication', '2023-12-15 16:00:00', 'Give with a treat'),
  (2, 'Feed', '2023-12-26 16:00:00', 'Add carrots'),
  (3, 'Feed', '2023-12-13 12:00:00', 'Add salmon'),
  (6, 'Groomer visit', '2023-12-16 13:00:00', 'Ask for claw trim'),
  (5, 'Medication', '2023-12-22 17:00:00', 'Give with a treat'),
  (1, 'Feed', '2023-12-28 19:00:00', 'Add raw meat'),
  (4, 'Buy food', '2024-01-03 18:00:00', 'Visit PetSmart - use coupons!'),
  (7, 'Medication', '2024-02-25 20:00:00', 'Give with a treat'),
  (5, 'Feed', '2023-12-19 21:00:00', 'Mix food with some water'),
  (1, 'Dog sitting', '2023-12-15 22:00:00', 'Give instructions to petsitter'),
  (7, 'Walk', '2023-12-22 23:00:00', 'Visit the pond'),
  (1, 'Walk', '2023-12-15 18:00:00', 'Go to dog park'),
  (2, 'Clean stable', '2023-12-15 11:30:00', ''),
  (3, 'Buy cat tree', '2024-01-05 13:00:00', 'At petsmart'),
  (4, 'Clean glass walls', '2024-02-02 15:00:00', 'Use vinegar'),
  (5, 'Change water', '2023-12-09 14:00:00', 'Filtered water'),
  (6, 'Trim claws', '2023-12-20 17:00:00', ''),
  (7, 'Get chew toy', '2023-12-21 15:00:00', ''),
  (2, 'Horseshoe', '2024-03-11 12:00:00', 'Call farrier'),
  (4, 'Buy woodchips', '2024-03-11 13:00:00', 'Get 2 packs'),
  (6, 'Buy new brush', '2023-12-13 18:00:00', 'Also get litter'),
  (2, 'Vet visit', '2024-04-02 19:00:00', ''),
  (4, 'Add more climbing branches', '2023-12-20 11:30:00', ''),
  (7, 'Playdate', '2024-01-13 10:25:00', 'Bring coat for cold weather'),
  (5, 'Clean enclosure', '2024-07-12 14:15:00', 'Make sure to rinse well'),
  (1, 'Claw trim', '2023-12-28 17:45:00', 'Try at home, may need to book grooming appointment'),
  (7, 'Obedience lessons', '2023-12-22 23:00:00', 'Bring the training clicker'),
  (6, 'Deep clean pet bed', '2024-01-08 08:00:00', 'Unscented soap, no fabric softener!'),
  (4, 'Vet checkup', '2024-02-23 15:30:00', 'Refill vitamin supplements prescription'),
  (7, 'Frisbee lessons', '2024-03-14 14:25:00', 'Bring a few frisbees to share with the group');

INSERT INTO reminders (pet_id, title, date, comment, done)
VALUES
  -- 1 dog -- 2 horse -- 3 cat -- 4 gecko -- 5 frog -- 6 cat -- 7 dog
  (6, 'Feed', '2023-09-15 07:00:00', 'Try new chicken flavour wet food', true),
  (7, 'Feed', '2023-08-14 16:00:00', 'Dislikes the turkey flavour', true),
  (6, 'Change water', '2023-11-13 19:00:00', 'Filtered water', true),
  (1, 'Buy dog toy', '2023-08-13 16:00:00', 'Use coupon!', true),
  (3, 'Brush fur', '2023-05-15 15:00:00', 'Try new brush', true),
  (2, 'Braid tail', '2023-07-15 07:00:00', 'Take photos!', true),
  (3, 'Clean ears', '2023-08-14 19:00:00', 'Give a treat after', true),
  (1, 'Give bath', '2023-06-12 17:00:00', 'Use new shampoo', true),
  (5, 'Feed crickets', '2023-08-03 20:00:00', '', true),
  (2, 'Brush fur', '2023-03-15 11:30:00', 'Do it outside', true),
  (7, 'Vet', '2023-12-03 12:15:00', 'Routine checkup', true),
  (6, 'Obedience lessons', '2023-09-09 09:45:00', 'Ask about recall training', true),
  (2, 'Boarding visit', '2023-06-10 10:45:00', 'Check if transport to & from stables included in the price', true),
  (6, 'Feed', '2023-03-30 10:30:00', 'Prefers the chicken flavour dry food', true),
  (7, 'Small dogs event', '2023-05-10 08:30:00', 'Wear the navy collar', true);

INSERT INTO contacts (user_id, name, phone_number, email, website)
VALUES
  (1, 'Dr. Goodvet', '555-456-7890', 'vet@goodvet.com', 'http://google.com'),
  (1, 'Dr. Lamba', '555-123-7890', 'vet@lamba.com', 'http://google.com'),
  (1, 'Pet Sitter', '555-444-7890', 'pet@sitter.com', 'http://google.com'),
  (1, 'PetSmart', '555-333-7890', 'petsmart@shop.com', 'http://google.com'),
  (1, 'Mr. Smith', '123-456-7890', 'john@smith.com', 'http://google.com'),
  (1, 'Dr. Jones', '555-444-7890', 'vet@jones.com', 'http://google.com');