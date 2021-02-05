# Projekt

Kuressaare Ametikooli tarkvaraarenduse õpilaste projektipäevade raames 3.-5.veebruar 2021.a valminud töö. 

**Ülesande kirjeldus:** 
Etteantud Node.js ja Socket.io koodi peale luua edasiarendatud klient-server rakendus. 

## Tiim: IO2

**Tiimi liikmed:**
- Andrus Pajuniit
- Erki Leemet
- Gen Vikat
- Karl Jäme
- Mare Sepaste
- Lelet Hollo

**Lingid:**

Figma: </br>
Rakendus: </br>

**Tiimiliikmete eneseanalüüs:**
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas
- Üks pehme oskus, mida õppisin ja endas arendasin
- Üks tehniline oskus, mida õppisin ja endas arendasin

**Andrus:**
1.
2.
3.

**Erki:** </br>
 1.Ei </br>
 2.Meeskonnatöö </br>
 3.Socket.io ja javascript

**Gen:**
1.
2.
3.

**Karl:**
1.
2.
3.

**Mare:**
1. Ei.
2. Meeskonnatöö.
3. Javascript, guugeldamine.

**Lelet:**
1. Ei. 
2. Hirmude ületamine.
3. Github, VS Code, CSS.

--------------------------------

**Stack**
- Node JS / JS / npm
- Express (Node JS framework)
- Socket.io
- Redis

--------------------------------

**How to run**

This how to explains how to run this project on Ubuntu server.

1. Update your system
```
sudo apt update && sudo apt -y upgrade
```
2. Install the most recent version of Nodejs and npm (node packet manager). We use this repository because the normal Ubuntu repository has very old version.
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Test Nodejs
```
node -v
```
4. Test npm
```
npm -v
```
5. Install nodemon globally
```
sudo npm install -g nodemon
```
6. Install Redis
```
sudo apt install redis-server
```
7. Update redis.conf file. Find `supervised no` line and change to `supervised systemd` since Ubuntu uses the systemd init system.
```
sudo nano /etc/redis/redis.conf
```
8. Start Redis
```
sudo service redis-server start
```
9. Clone the repository
```
git clone https://github.com/kuressaareametikool/node-project
```
10. Change directory to project folder
```
cd node-project
```
11. Install modules
```
npm install
```
12. Run server
```
nodemon server.js
```
