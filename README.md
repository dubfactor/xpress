# Xpress

git pull repository

Using VS: open folder /crudExpress-api

Open another new window of VS and open folder: crudExpress-user_info/users_info-frontend

The API folder is the backend and all data is on tables in ACCBootcamp server.
With the API folder in VS, open New Terminal and type: node server (it should open on port 3000)

The users_info-frontend folder is the frontend.
With the users_info folder in second open VS window, open New Terminal and type: npm start (it should error at 3000 and ask if you want another port and just hit 'y'. The frontend will launch on port 3001 and open a browser window that displays current users table. You can click Add or Edit buttons and a form comes up that you can fill. The Submit button isn't working and that's my problem. It's done with Reactstrap and is generating a CORS error. The Delete button works but please don't delete all the entries.)

You can also successfully download a *.csv file of the data in the table. This is a spreadsheet file for Excel or Google Sheets.

