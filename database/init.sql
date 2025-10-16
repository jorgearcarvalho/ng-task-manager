CREATE TABLE user_account {
    id SERAIL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};

CREATE TABLE tasklist {
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    tasks_todo INT NOT NULL,
    tasks_done INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};

CREATE TABLE task {
    id SERIAL PRIMARY KEY,
    tasklist_id INT NOT NULL REFERENCES tasklist(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT false,
    expiration_date TIMESTAMP,
    priority SMALLINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};