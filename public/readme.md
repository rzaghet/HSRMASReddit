#HSR Redit Clone MAS-SE 2013 - 2015

##Authors

+ Robin Hauser
+ Benjamin Mahr
+ Raffael Zaghet


###Folgende Informationen haben uns im Projekt unterstützt
- HSR Unterlagen
- [AngularJS Style Guide von John Papa](https://github.com/johnpapa/angularjs-styleguide)
- [Pluralsight](http://www.pluralsight.com) -> AngularJS Clean Code von John Papa


###Tools
- VS 2013 for Development
- newest version of Web Essentials
- SideWaffle
- Html
- Javascript
    - JQuery
    - Angular JS
    - Angular Translate JS 
    - Blocks -> Clean Code von John Papa (Erweiterungen für: exception/logger/router)
    - Require JS
    - Bootstrap JS
    - Nodes JS
    - Moment JS
    
- Source Code System -> github with git

###Project-Setup
- node server aufgesetzt gemäss Installations-Anleitung -> localhost:4730 ist hardcodiert
- aufsetzen der Applikation nach Clean-Code-Angular-JS von John Papa (Verzeichnisse Feature-basiert)
- trennen der Domainen durch templates/view-models/models (beliefert durch dataservice)
    - app -> Hauptapplikation
    - entries -> Funktionen/Templates für das Anzeigen/Bearbeiten von Entries
    - core -> Core-Funktionen für die Applikation (dataservice, exception/log-handling (blocks))
    - accounts -> login und account Registrierung

###Funktionen

- Registrierung neuer Benutzer
- Login eines Benutzers
- Abmelden eines eingeloggten Benutzers
- Aktivieren/Deaktivieren ob der Benutzer eingeloggt ist oder nicht
- Anzeigen eines Über-Dialog
- Ändern der Anzeige-Sprache (Deutsch/English)
- Ändern der Sortierung für Entries (Links) und Comments (Kommentare)
- Eingabe neuer Kommentare
- Eingabe neuer Links
- Up/Down-Votes von Links (nur einmal möglich pro Benutzer)
- Up/Down-Votes von Kommentaren (nur einmal möglich pro Benutzer)
- Anzeigen des Links in einem neuen Browser-Fenster
- Asynchrone Kommunikation und Auto-Updates über mehrere Fenster (via dataservice.js / socket.io)
- Hierarchische Darstellung von Kommentaren
- Responsive Design mit Bootstrap



###Zeit-Aufwendungen

ALLE (wir haben gemeinsam mit Tripple-Programming am Projekt gearbeitet)
Besonders viel Aufwand hat bei uns allen das Erlernen und Anwenden der JavaScript-Frameworks verursacht.

Zeiten pro Person:

- Technologien erlernen
    - Javascript        1 Stunden
    - AngularJs lernen: 5 Stunden
    - AngularJS Clean Code: 1 Stunden
    - Bootstrap:        2 Stunden
    - MomentJS:         1 Stunden
    - Translation:      1 Stunden
    - Git:              1 Stunden
    - HTML/CSS          2 Stunden
    - Socket.IO         1 Stunden
    - TypeScript        2 Stunden (aus Zeitgründen leider gestrichen)
    - Node.JS           1 Stunden

- ca. Aufwand nach Funktionalität
    - Projekt aufsetzen 1 Stunden
    - Navigationsbar:   2 Stunden
    - About:            .5 Stunden
    - I18N              2 Stunden
    - Hierarchische Kommentare 8 Stunden
        - Baum-Darstellung
        - Reply-Dialog
        - Sortierung
        - Asynchrone Kommunikation mit dem Server (Auto-Update)
        - Unterscheidung Kommentare für Links/Kommentare
    - Node Server.JS Erweiterungen 1 Stunde (für Austausch der Informationen mit socket.io)
    - Registrierung und Login 4 Stunden
        - 2 Dialoge (Login/Registrierung) mit Validierung
        - Ein- und ausschalten von Funktionen (isAuthenticatedUser) 
    - Templating:   2 Stunden
    - Refactoring:  2 Stunden
    - Testing und Bugfixing:    2 Stunden
    - Dokumenation:     1 Stunden
    - Research:     1 Stunden
    - Adminstration: 1 Stunden



###Learnings
- HTML/CSS/Javascript/Angular/MomentJS/Angular-CleanCode/socket.io
- always add VisualStudio.ignore to .gitignore before first commit! :D
- Folder structure for angular.js is feature based (AngularJS clean code):
    app\core (reddit app engine)
    app\accounts (user registration / user login, logout)
    app\entires (query, create, upvote, downvote, create comments)
- TypeScript (leider nicht mehr berücksichtigt im Project)
    -> .ts = TypeScript file
    -> .d.ts = Javascript to TypeScript Definition File
    -> .ts.map = Debugging information (Symbol file)
    -> because of issues with Angular we didn't solve the application with typescript

###Browser compatibility
Die Applikation haben wir mit folgenden Internet-Browsern getestet (22.02.2015):

- Chrome (neueste Version)
- Firefox (neueste Version)
