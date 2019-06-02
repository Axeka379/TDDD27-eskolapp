# Eskolapp

### Screencast link

**Link:** https://drive.google.com/open?id=1ztNQFg3gtzgIxFmC718Aap1lcLCiF5u6 (Will be updated since youtube was down when this was supposed to be uploadaed)

The screencast show the basic functionality that is available in the client.

The user can register/sign up and then create a chat room to communicate in. An invitaiton link can also be created in order to invite other users to the room. The chat room supports live chatting with all other users in the room in a similar fashion to how discord is used. If the user logs out and logs in again at a later time the messages previous messages will be loaded and displayed. A user can be part of several servers and a server can of course support many users.  

**Link** https://drive.google.com/open?id=1Beb2OaSRUYaPmiQuxAykjh4dsTeyxgY7
This second screencast shows a code example of how the server creation funcions. First the server modell is shown and how it is created in the views in the backend using django. Then it is also shown how it is called from in the frontend with angular.

#### Private live online teaching system prototype for _TDDD27_
**LIU-ID: _axeka379_**

### Functional specification
Eskolapp is designing a web application that aims at increasing collaboration and engagement among teachers and students.
The idea for this course is building a prototype that allows teachers and students to communicate via a live chat and if possible via voice calls. It will also provide a whiteboard that the teacher can use in the tutoring, by drawing figures for example.

Users can create an account and join a session started by a teacher. The teachers and students communicate via chatmessages or voice calls. There can be several teachers and users having sessions at the same time. For starters the focus will be to have sessions where one teacher tutors one student but in the future this will be expanded so that a teacher can have several students in a session, i.e a classroom.

Communication via a live chat will be prioritized first and then extend this to include live voice communication and possibly live video as well.

The application can be seen as something similar to **Twitch** with the addition that there exists a whiteboard as well.

### Technical specification
The **backend** of the system will be using **_Django_** and will also be complemented with **_Bootstrap_** and such. Testing can be done inside **_Django_** unless no other, more suitable, option comes up.

For the **frontend**, the framwork that is considered for the moment is **_Electron_**. Since it has been used previousley to develope similar apps like **Skype**, **Slack** and **Discord** for example, it seems most efficient. Other framworks that have been considered are **_Angular_** and **_Vue_**.

### Setup
```
virtualenv venv -p python3.6
source venv/bin/activate
pip install -r requirements.txt

sudo docker run -p 6379:6379 -d redis:2.8

python eskolapp/manange.py runserver
```

### Testing
```
python eskolapp/manange.py test
```
Websocket testing requires Chromedriver. Download from https://sites.google.com/a/chromium.org/chromedriver/downloads and save as /eskolapp/live/chromedriver.
