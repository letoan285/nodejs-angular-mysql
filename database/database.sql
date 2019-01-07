CREATE DATABASE ng_games_db;

USE ng_games_db;

    CREATE TABLE game(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(180),
        description VARCHAR(255),
        image VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE users(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(180),
        email VARCHAR(100),
        password VARCHAR(100),
        image VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE products(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        slug VARCHAR(255),
        description text(1000),
        category_id INT(11),
        price INT(15),
        image VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE categories(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        slug VARCHAR(255),
        description text(1000),
        parent_id INT(11) DEFAULT 0,
        image VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE orders(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        customer_id INT(11),
        user_id INT(11),
        deliver_id INT(11),
        payment_id INT(11),
        status_id INT(11),
        coupon_id INT(11),
        transaction_date TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE customers(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        role_id INT(11),
        customer_name VARCHAR(255),
        sex VARCHAR(255),
        dob TIMESTAMP,
        phone VARCHAR(255),
        email VARCHAR(255),
        username VARCHAR(255),
        password VARCHAR(255),
        code VARCHAR(255),
        active INT(11),
        city VARCHAR(255),
        district VARCHAR(255),
        commune VARCHAR(255),
        village VARCHAR(255),
        lat INT(11),
        lng INT(11),
        remember_token VARCHAR(255),
        deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO users (username, email, password, image) VALUES ('admin', 'admin@gmail.com', md5('123456'), 'avatar.png');
    INSERT INTO products (name, slug, description, category_id, price, image) VALUES ('The product 1', 'the-product-1', 'the body of product',1, 30000, 'avatar.png');
    INSERT INTO categories (name, slug, description, image) VALUES ('The category 1', 'the-category-1', 'the body of product', 'category.jpg');



INSERT INTO orders(
        customer_id,
        user_id,
        deliver_id,
        payment_id,
        status_id,
        coupon_id,
        transaction_date
    ) VALUES (
        1,
        1,
        1,
        1,
        1,
        2,
        '2018-12-12'
    );


INSERT INTO customers(
        role_id,
        customer_name,
        sex,
        dob,
        phone,
        email,
        username,
        password,
        code,
        active,
        city,
        district,
        commune,
        village,
        lat,
        lng,
        remember_token
    ) VALUES (
        3,
        'customer_name',
        'Male',
        '1989-02-02',
        '090256520',
        'email@gmail.com',
        'username',
        md5('123456'),
        'code',
        1,
        'Hanoi',
        'Hoan kiem',
        'hagn bai',
        'village',
        110,
        120,
        md5('remember_token')
    );



    RENAME TABLE game to games;

    DESCRIBE games;

