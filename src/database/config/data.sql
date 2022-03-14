BEGIN;

INSERT INTO users (username , email , password) VALUES
  ('Eman','Eman@gmail.com' , '22222'),
  ('Yousra','yousra@gmail.com' , '11111'),
  ('Hamed','Hamed@gmail.com' , '33333'),
  ('Hla','Hla@gmail.com' , '44444');

INSERT INTO blogs (title , content , user_id) VALUES
  ('title1','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.' , '1'),
  ('title2','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores' , '2'),
  ('title3','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '3'),
  ('title4','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '4');

COMMIT;