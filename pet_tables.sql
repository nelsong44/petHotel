CREATE TABLE "owners" (
    id SERIAL PRIMARY KEY,
    "first_name" character varying(60),
    "last_name" character varying(80)
);

CREATE TABLE "pets" (
    id SERIAL PRIMARY KEY,
    "name" varchar(45),
    "breed" varchar(45),
    "color" varchar(20),
    "owner_id" integer REFERENCES "owners"
);
CREATE TABLE "visits"(
	id SERIAL PRIMARY KEY,
	"check_in_date" date,
	"check_out_date" date,
	"check_in_status" BOOLEAN DEFAULT TRUE,
	"pets_id" integer REFERENCES "pets"
);

INSERT INTO owners ("first_name", "last_name") VALUES ('Miles', 'Nelson');
INSERT INTO pets ("name", "breed", "color", "owner_id") VALUES ('Superman', 'Kryptonian Beagle', 'green', 1);
INSERT INTO visits ("check_in_date", "check_out_date", "pets_id", "check_in_status") VALUES ('05/09/2017','05/15/2017', 1, FALSE);
