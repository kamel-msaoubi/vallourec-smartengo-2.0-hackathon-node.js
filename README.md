
# Node.js – JWT Authentication & Authorization example with JSONWebToken & Sequelize

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)

You may need to implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

## Prerequisites
1. Install the [wsl update for Windows 10](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
2. Install [Docker](https://docs.docker.com/desktop/windows/install/) for Windows 10
3. Launch Docker as administrator in order to start you Docker Host
4. Launch PowerShell as administrator in order to start a MySQL container
```powershell
PS #> docker pull mysql:8.0
PS #> docker run --name my-mysql -p 127.0.0.1:3306:3306 -e MYSQL_ROOT_PASSWORD=password_01 -v $HOME/mysql-data:/var/lib/mysql -d mysql:8.0
```
5. Connect to your SQL Instance : "localhost:3306"
6. Create a database nammed "smartengo"
7.  Insert roles
```sql
create table `smartengo`.roles(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY ( id )
);
insert into `smartengo`.roles (`id`, `name`, `createdAt`, `updatedAt`) values
	(1, 'user', NOW(3), NOW(3)),
	(2, 'admin', NOW(3), NOW(3));
```
## Project setup
```
npm install
```

### Run
```
node server.js
```

### Test
An Postman JSON library is available in this repo :
1. Open [Postman](https://www.postman.com/downloads/)
2. Import the file named: NodeJS.postman_collection.json
3. Launch POST Request Signin
4. Launch POST Request Signup
5. Copy-Paste you access token from the response in the token variable of the Postman Collection
6. Test further requests as : Test All (public content), Test User, Test Admin.
