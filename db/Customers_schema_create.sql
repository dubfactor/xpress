-- Last modification date: 2019-06-18 17:40:34.963

-- role for xpressapp
create role xpress with login password 'xpress_rocks_2019';

-- schema for xpressapp
drop schema xpressSchema cascade;
create schema xpressSchema;
alter user xpress set search_path = xpressSchema, public;


REVOKE CONNECT ON DATABASE accsoftwarebootcamp FROM xpress;
GRANT CONNECT ON DATABASE accsoftwarebootcamp TO xpress;

-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA xpressSchema TO xpress;
-- above grant only provides privs on existing tables.  See default privs below
ALTER DEFAULT PRIVILEGES 
    FOR ROLE xpress 
    IN SCHEMA xpressSchema
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO xpress;
-- ALTER DEFAULT PRIVILEGES 
--     FOR ROLE xpress 
--     GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xpressSchema TO xpress;

ALTER DEFAULT PRIVILEGES
    -- [ FOR { ROLE | USER } target_role [, ...] ]
    FOR ROLE xpress
    -- [ IN SCHEMA schema_name [, ...] ]
    IN SCHEMA xpressSchema
GRANT 
    -- { { USAGE | SELECT | UPDATE }
    -- [, ...] | ALL [ PRIVILEGES ] }
    ALL PRIVILEGES
    ON SEQUENCES
    TO 
    -- { [ GROUP ] role_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]
    xpress;

-- tables
-- Table: appointments
CREATE TABLE xpressSchema.appointments (
    appointment_id serial  NOT NULL,
    user_id serial  NOT NULL,
    vehicle_id varchar(17)  NOT NULL,
    date date  NOT NULL,
    time time  NOT NULL,
    status varchar(30)  NOT NULL,
    completed_by varchar(50)  NULL,
    CONSTRAINT appointments_pk PRIMARY KEY (appointment_id)
);

GRANT ALL ON TABLE xpressSchema.appointments to xpress;

-- Table: membership_type
CREATE TABLE xpressSchema.membership_type (
    membership_type varchar(50)  NOT NULL,
    discount_fraction int  NULL,
    discount_amount int  NULL,
    valid_until date  NULL,
    CONSTRAINT membership_type_pk PRIMARY KEY (membership_type)
);

GRANT ALL ON TABLE xpressSchema.membership_type to xpress;

-- Table: users
CREATE TABLE xpressSchema.users (
    user_id serial  NOT NULL,
    registration_date date  NOT NULL,
    first_name varchar(50)  NOT NULL,
    last_name varchar(50)  NOT NULL,
    address varchar(100)  NOT NULL,
    city varchar(100)  NOT NULL,
    zipcode varchar(10)  NOT NULL,
    email varchar(100)  NOT NULL,
    password varchar(20)  NOT NULL,
    birth_date date  NOT NULL,
    promotional_reward_points int  NOT NULL,
    membership_type varchar(50) DEFAULT 'general' NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (user_id)
);

GRANT ALL ON TABLE xpressSchema.users to xpress;

-- Table: user_reward_point_log
CREATE TABLE xpressSchema.user_reward_point_log (
    rewards_id serial  NOT NULL,
    user_id int  NOT NULL,
    reward_points int  NOT NULL,
    create_date timestamp  NOT NULL,
    expiry_date date  NULL,
    CONSTRAINT user_reward_point_log_pk PRIMARY KEY (rewards_id)
);

GRANT ALL ON TABLE xpressSchema.user_reward_point_log to xpress;

-- Table: user_vehicle
CREATE TABLE xpressSchema.user_vehicle (
    user_vehicle_id serial  NOT NULL,
    vehicle_id varchar(17)  NOT NULL,
    user_id int  NOT NULL,
    CONSTRAINT user_vehicle_pk PRIMARY KEY (user_vehicle_id)
);

GRANT ALL ON TABLE xpressSchema.user_vehicle to xpress;

-- Table: vehicle
CREATE TABLE xpressSchema.vehicle (
    vehicle_id varchar(17)  NOT NULL,
    car_type varchar(50)  NOT NULL,
    make varchar(50)  NOT NULL,
    model varchar(50)  NOT NULL,
    year int  NOT NULL,
    nickname varchar(50)  NOT NULL,
    CONSTRAINT vehicle_pk PRIMARY KEY (vehicle_id)
);

GRANT ALL ON TABLE xpressSchema.vehicle to xpress;

-- foreign keys
-- Reference: appointments_user (table: appointments)
ALTER TABLE xpressSchema.appointments ADD CONSTRAINT appointments_user
    FOREIGN KEY (user_id)
    REFERENCES xpressSchema.users (user_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: appointments_vehicle (table: appointments)
ALTER TABLE xpressSchema.appointments ADD CONSTRAINT appointments_vehicle
    FOREIGN KEY (vehicle_id)
    REFERENCES xpressSchema.vehicle (vehicle_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: user_membership_type (table: user)
ALTER TABLE xpressSchema.users ADD CONSTRAINT user_membership_type
    FOREIGN KEY (membership_type)
    REFERENCES xpressSchema.membership_type (membership_type)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: user_reward_point_log_user (table: user_reward_point_log)
ALTER TABLE xpressSchema.user_reward_point_log ADD CONSTRAINT user_reward_point_log_user
    FOREIGN KEY (user_id)
    REFERENCES xpressSchema.users (user_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: user_vehicle_user (table: user_vehicle)
ALTER TABLE xpressSchema.user_vehicle ADD CONSTRAINT user_vehicle_user
    FOREIGN KEY (user_id)
    REFERENCES xpressSchema.users (user_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: user_vehicle_vehicle (table: user_vehicle)
ALTER TABLE xpressSchema.user_vehicle ADD CONSTRAINT user_vehicle_vehicle
    FOREIGN KEY (vehicle_id)
    REFERENCES xpressSchema.vehicle (vehicle_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- appointments_appointment_id_seq     
-- appointments_user_id_seq            
-- user_reward_point_log_rewards_id_seq
-- GRANT SELECT ON user_user_id_seq                    
-- user_vehicle_user_vehicle_id_seq    

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA xpressSchema TO xpress;
GRANT 
    -- { { USAGE | SELECT | UPDATE }
    -- [, ...] | ALL [ PRIVILEGES ] }
    ALL PRIVILEGES
    ON ALL SEQUENCES IN SCHEMA xpressSchema
    -- { SEQUENCE sequence_name [, ...]
        --  | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
    TO 
    -- role_specification [, ...] [ WITH GRANT OPTION ]
    xpress;

-- permissions to the xpress user
grant all privileges on schema xpressSchema to xpress;

--
--        TEST DATA          --
--

-- MEMBERSHIP_TYPE
INSERT INTO xpressschema.membership_type (membership_type, discount_fraction, discount_amount, valid_until) VALUES ('general', 0, 0, null);

-- USERS
INSERT INTO xpressschema.users (user_id, registration_date, first_name, last_name, address, city, zipcode, email, password, birth_date, promotional_reward_points) VALUES (DEFAULT, '2019-06-24', 'Piyush', 'Mehta', '5930 Middle Fiskville Road', 'Austin', '78752', 'pmehta@austincc.edu', 'whatever',
'1972-02-29', 1000);

-- VEHICLE
INSERT INTO xpressschema.vehicle (vehicle_id, car_type, make, model, year, nickname) VALUES ('1FD8W3HT5BEB32433', 'sedan', 'Honda', 'Accord', 1992, 'work horse');

-- USER_VEHICLE
INSERT INTO xpressschema.user_vehicle (user_vehicle_id, vehicle_id, user_id) VALUES (2, '1FD8W3HT5BEB32433', 1);

-- End of file.

