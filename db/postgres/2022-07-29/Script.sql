-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION xiesrjiqdcduot;

-- DROP SEQUENCE public.waterlevel_id_seq;

CREATE SEQUENCE public.waterlevel_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.waterlevel definition

-- Drop table

-- DROP TABLE waterlevel;

CREATE TABLE waterlevel (
	id int8 NOT NULL GENERATED ALWAYS AS IDENTITY,
	value int4 NOT NULL,
	"time" timestamp NULL
);
