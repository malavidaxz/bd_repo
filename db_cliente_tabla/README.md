# dp6SoloRayder [ ![Codeship Status for apprunn/dp6SoloRyder](https://app.codeship.com/projects/1b92d950-b46d-0135-0cca-4ad9978aa83b/status?branch=master)](https://app.codeship.com/projects/258321)

> Servicios web para Solo Ryder app de entrenadores.

### Ambitos del Proyecto

Leer archivo **ambitos.md**

### Requisitos

1. NodeJs 8.9.x (instalar node usando nvm)

2. Npm 5.5.x (se instala automaticamente en el paso 1)

3. Docker container con mysql

### Tecnologías usadas

1. HapiJs - [web framework](https://hapijs.com/api)
2. Objection - [ORM](http://vincit.github.io/objection.js/)
3. Knex - [Migraciones BD](http://knexjs.org/#Migrations)
4. Tape e Instabul - [Testing y code coverage](https://github.com/substack/tape)
5. Semantic Release -
	[automatizacion de commits y nuevas versiones](https://github.com/semantic-release/semantic-release)
6. Nodemon -
	[monitor changes for development only](https://github.com/remy/nodemon)
7. Eslint y Prettier - [code styling](https://eslint.org/)
8. Husky - [Git hooks](https://github.com/typicode/husky)
9. Joi - [validations](https://www.npmjs.com/package/joi)

### Development

1. Antes de empezar a desarrollar tenemos que instalar las dependencias de
	nuestro proyecto usando npm

```bash
npm install
```

2. Una vez instaladas tenemos que crear nuestro archivo .env para manejar
	variables de entorno, escribir en la terminal

```bash
touch .env
```

3. Se creará un archivo .env en el root del proyecto, llenar ese archivo con las
	siguientes variables

```
NODE_ENV=development

HOST=localhost
PORT=4100

OFFSET_DEFAULT=10

DB_HOST_DEV=192.168.1.20
DB_NAME_DEV=c_bd
DB_PORT_DEV=32768
DB_PASS_DEV=c_user
DB_USER_DEV=c_password

DB_HOST_TEST=192.168.1.20
DB_PORT_TEST=32768
DB_PASS_TEST=c_user_test
DB_NAME_TEST=c_bd
DB_USER_TEST=c_password_test

DB_TABLE_MIGRATIONS=c_migrations

REDIS_HOST=192.168.1.20
REDIS_PORT=32769
REDIS_DB=''
USER_MAIL=jgfdkjfpsd@mail.com
USER_PASS=Mkfdok49ijjdgkd
FIREBASE_URL=https://fcm.googleapis.com/fcm/send
FIREBASE_TOKEN=key=KDJG039FJkcs0er90rdfjdskjf
SEND_INTERVAL=1000
SEND_INTERVAL_FAIL=10000
MAIL_HOST=server.mail.com
MAIL_PORT=123
```

Sientanse en la libertad de agregar cualquier valor que consideren importante
para el proyecto, pero en caso agreguen algo actualizar este archivo.

SIEMPRE INDICAR **VALORES DE EJEMPLO** DEL .env Y NO LOS REALES POR EL AMOR A
AARON SWARTZ

### Commit y Push

Antes de realizar un commit es importante poner el NODE_ENV a test ya que antes
de un commit y push se correran los tests para verificar que nuestros cambios no
rompan ninguna funcionalidad. El proyecto cuenta con herramientas muy geniales
para la automatización de commits, releases y changelos, por lo que ciertos
tareas se manejan de manera distinta, una de ellas es la forma como se hace un
commit. Normalmente usamos **git commit -m "Da bes mesach in da guor"**, pero en
este proyecto usaremos el siguiente script

```bash
npm run commit
```

Ahora tendremos que responder las preguntas que nos aparecen, cada pregunta irá
armando nuestro commit message bajo una plantilla de manera que todos los
commits manejen una misma estructura y sea mucho más sencillo generar
**CHANGELOGS** cada vez que lanzemos una nueva versión de nuestro proyecto.

Una vez terminado el commit pasamos a realizar un push como lo hemos venido
haciendo desde el inicio de los tiempos, nada que un buen **git push** no pueda
resolver

```bash
git push origin branch-name
```

### Testing

Antes de correr los tests se deben verificar 2 cosas importantes en el archivo
**.env**

1. La variable **NODE_ENV** debe tener como valor **test**
2. Las variables de la BD que terminan en _TEST deben estar configuradas
	correctamente.

La importancia de estos 2 pasos es vital ya que normalmente el testing siempre
ejecutará como primer proceso un script que deje la BD en un estado inicial de
testing, normalmente esto significa borrar completamente toda la data de las
tablas, de esta manera nos aseguramos que las pruebas siempre sigan todos los
flujos de nuestro proyecto, además de poder detectar si algún cambio afecta
dichos flujos.c
