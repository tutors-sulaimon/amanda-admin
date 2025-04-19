Amanda's Admin Dashboard
========================

This project integrates **Strapi** as the backend CMS for managing content such as workshops and events for the Kiosco-Amanda application. The admin dashboard provides a user-friendly interface to create, update, and manage content.


🚀 Getting Started with Strapi
------------------------------

Strapi is a headless CMS framework that allows you to manage and expose content through APIs. This setup integrates Strapi with a **PostgreSQL** database.

### Requirements

*   **Node.js**: [Download Node.js](https://nodejs.org/)
    
*   **PostgreSQL**: [Download PostgreSQL](https://www.postgresql.org/)
    
*   A **Cloud Hosting Platform** (e.g., AWS, Heroku, DigitalOcean, or Strapi Cloud)
    

### 1\. Install Dependencies

In the /backend directory, run the following command to install all dependencies:

```npm install```


### 2\. Set Up PostgreSQL Database (Through homebrew)

1.  Install PostgreSQL

```brew install postgresql```


2.  Install PostgreSQL Dependencies for Strapi
Strapi needs the pg library to connect to PostgreSQL. Run the following command to install it:

```npm install pg --save```


3.  Start PostgreSQL Service

```brew services start postgresql```


4.  Access PostgreSQL:

```psql postgres```


5.  Verify the Database:

```\l```


7.  Create the Database User and Database:

```CREATE DATABASE kioscoamanda```

```CREATE USER postgres WITH PASSWORD 'your_password'```

```ALTER ROLE postgres SET client_encoding TO 'utf8'```

```ALTER ROLE postgres SET default_transaction_isolation TO 'read committed'```

```ALTER ROLE postgres SET timezone TO 'UTC'```

```GRANT ALL PRIVILEGES ON DATABASE kioscoamanda TO postgres```


8.  Exit PostgreSQL

```\q```


8.  Set the Database Client to PostgreSQL:
Update the DATABASE_CLIENT environment variable in .env file to postgres.


9.  Update .env File: 
Ensure the .env file matches the credentials for PostgreSQL setup


10. Push Prisma Schema to Database
If Prisma is used, apply the schema:
```npx prisma db push```


11.  Restart Strapi / Test the Database Connection in Strapi:

```npm run develop```
    

### 3\. Every Time You Want to Run Strapi:


1.  Ensure PostgreSQL is running.

Check if PostgreSQL service is running:

```brew services list```

If it says "started," PostgreSQL is running. If it says "stopped," you'll need to start it.


If PostgreSQL is running as a service and starts automatically when you boot, you can skip this step. 
Otherwise, run the following command to run PostgreSQL

macOS/Linux:

```brew services start postgresql```

or use system commands:

```sudo service postgresql start```

Windows:

```net start postgresql```


2.  Navigate to Amanda's Admin Dashboard Directory
Move to the project directory where the Strapi application is located:

```cd admin```

3.  Run Strapi Admin Dashboard
Run the Strapi application:

```npm run develop```


4.  Access Strapi Admin Dashboard
Once the server is running, you can access the admin panel in your browser by navigating to:

http://localhost:1337/admin

### Set Up PostgreSQL Database (PostgreSQL website)

```bash
1.  https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. Setting PostgresSQL path in mac
   - /Library/PostgreSQL/17/bin (in mac PostgreSQL is downloaded here)
   Terminal:
   - nano ~/.zshrc
   - press "i key" and add:
   - export PATH=$PATH:/Library/PostgreSQL/17/bin
   - press "ESC key"
   - press ":" + wq
   - source ~/.zshrc
   - ls -l /usr/local/bin/PostgreSQL/17/bin/psql
   - source ~/.zshrc
   - Launch pgAdmin 4 and connect with project password

3. Setting PostgresSQL path in windows
   - C:\Program Files\PostgreSQL\17\bin
   - Add path to system environment variable
   - Launch pgAdmin 4 and connect with project password
```

⚙️ Deployment
-------------

You can deploy the Strapi application on a cloud hosting platform like **Strapi Cloud**, **Heroku**, **AWS**, or **DigitalOcean**.

### Deployment Steps

1.  Ensure the following:
    
    *   Your hosting platform supports **Node.js**.
        
    *   A **PostgreSQL** instance is available (hosted or managed).
        
2.  Update the .env file to reflect production settings:
    
    *   Point the DATABASE\_URL to the hosted PostgreSQL instance.
        
    *   envCopyEditDATABASE\_URL=postgresql://username:password@host:port/kioscoamanda?schema=publicNODE\_ENV=production
        
3.  Build the Strapi admin panel for production:bashCopyEditnpm run build
    
4.  Use the following command to start the Strapi server:bashCopyEditnpm run start
    
5.  Use a process manager like **PM2** for better production reliability:bashCopyEditnpm install -g pm2pm2 start npm --name "strapi" -- run start
    
6.  Use **Nginx** or another proxy server to expose the application securely. Refer to the [Strapi Deployment Documentation](https://docs.strapi.io/dev-docs/deployment) for configuration tips.
    

Key Commands
------------

```npm run dev```
    
```npm run build```
    
```npm run start```
    

📚 Learn More
-------------

*   [Strapi Documentation](https://docs.strapi.io) - Official Strapi documentation.
    
*   [Strapi Deployment Guide](https://docs.strapi.io/dev-docs/deployment) - Learn how to deploy Strapi applications.
    
*   Prisma Documentation - Prisma ORM documentation.
    

✨ Community
-----------

*   [Strapi Discord](https://discord.strapi.io) - Connect with the Strapi community.
    
*   [Strapi GitHub](https://github.com/strapi/strapi) - Contribute or explore the Strapi codebase.