# HSR MAS Reddit-Clone

Informationen zur Vorgabe:

Der Server-Teil der Anwendung ist komplett.
Hier mŸssen keine Anpassungen gemacht werden.
Die Server-Files liegen im Top-Level Directory zusammen mit diesem
ReadMe und dem Folder "public" mit allen Files des Clients.
Der Server basiert auf Node.js.
Daher ist die Installation von NodeJS der erste Schritt.
Nach der Installation von NodeJS kann der Server schon laufen gelassen werden.

Die Aufgabe/Herausforderung besteht darin den Client zu entwickeln
Hierzu mŸssen die Files init.js, dataservice.js und ui.js im 
Unter-Directory public erweitert werden (siehe Abschnitt Client)


Installation und Starten des Server
1. Download und installieren vom node.js (Windows / Mac) : http://nodejs.org/download/
   (soweit nštig als super-user)
2. Zip File entpacken
3. Command Line: "npm install" (ohne Anfuehrungszeichen) im Verzeichnis vom entpackten Zip aufrufen 
   (soweit nštig als super-user)
4. Starten vom Node-Server: Command Line: "node server.js"
5. Browser: http://localhost:4730/client.html

Server: 

- Es gibt einen default User: a mit Password: a
- Es gibt einen default Eintrag mit einem Kommentar.
- Es gibt die folgenden Rest Methoden
 - GET / => Gibt alle Entries zurueck
 - GET /login => Username falls eingeloggt 
 - POST /login => Sich einloggen
 - POST /register => sich neu registrieren
 - GET /users => gibt alle registrierten Users auf dem Server zurueck
 - GET /entries => gibt alle Entries zurueck
 - POST /entry => neuen Eintrag erstellen
 - POST /entry/:id/up & down => up or down-rating von einem Link
 - POST /entry/:id/comment => erzeugt einen neuen Kommentar fuer den Link
 - POST /comment/:id/up b& down => up or down-rating von einem comment
 - POST /logout => loggt den User aus. 

- Bei andern Requests wird versucht ein File im  Ordner /Public zu finden

Client:
- core.js enthaelt util functionen z.B. string.format()
- init.js enthaelt init functionen z.B. cross site scrippting aktivieren und ajax cache abschalten (fuer IE notwendig) 
- dataservice.js sollte alle Kommunikation zum Server kappseln
- ui.js sollte die User Interface logik beinhalten
- ui.js und dataservice.js sollen als Module mithilfe des Revealing Module Pattern eingebunden werden.
