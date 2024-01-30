
CREATE TABLE materias(
  id_materia SERIAL PRIMARY KEY NOT NULL,
  nombre_materia VARCHAR(100) NOT NULL,
);

CREATE TABLE alumnos(
  id_alumno SERIAL PRIMARY KEY NOT NULL,
  nombre_alumno VARCHAR(255) NOT NULL,
  apellido_alumno VARCHAR(255) NOT NULL,
  cucorreo_alumno VARCHAR(255) NOT NULL,
  telefono_alumno VARCHAR(255) NOT NULL,
);

CREATE TABLE alumnos_materias(
  id_alumno_materia SERIAL PRIMARY KEY NOT NULL,
  id_materia INT NOT NULL,
  id_alumno INT NOT NULL,
  FOREIGN KEY (id_materia)  REFERENCES materias(id_materia),
  FOREIGN KEY (id_alumno)  REFERENCES alumnos(id_alumno)
);
