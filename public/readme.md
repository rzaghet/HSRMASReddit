#HSR Redit Clone MAS-SE 2013 - 2015

##Authors

+ Robin Hauser
+ Benjamin Mahr
+ Raffael Zaghet


###Useful information for us for this project
- Documents from HSR
- [AngularJS Style Guide from John Papa](https://github.com/johnpapa/angularjs-styleguide)
- [Pluralsight](http://www.pluralsight.com)


###Tools and Languages
- VS 2013 for Development
- newest version of Web Essentials
- SideWaffle
- Definitely Typed for d.ts files
- Html
- Javascript
    - JQuery
    - Angular JS
    - Require JS
    - Bootstrap JS
    - Nodes JS
- Typescript
- TSLint for TypeScript validation
- Source Code System -> github with git


###Tasks

- Robin
    ####Account
    - Login / Logout
    - Registrierung

- Raffael
    ####Entry
    - Submit new Link
    - Add Comment   
    - Up and downvote
    - Show All entries
        - 

App.CurrentUser.IsAuthenticated
App.AuthenticateUser(username, password)
App.Logout() --> CurrentUser => AnonymousUser (Authenticated = false)



###Time investments

ALLE (wir haben gemeinsam mit Tripple-Programming am Projekt gearbeitet)

Zeiten pro Person:

- Technologien erlernen
    - AngularJs lernen: 5 Stunden
    - Bootstrap:        2 Stunden
    - MomentJS:         1 Stunden
    - Translation:      1 Stunden
    - Git:              1 Stunden
    - HTML/CSS          2 Stunden
    - Socket.IO         1 Stunden
    - TypeScript        2 Stunden (aus Zeitgründen gestrichen)
    - Node.JS           1 Stunden

- Aufwand nach Funktionalität
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
    - Node Server.JS Korrekturen 1 Stunde (damit socket.io überhaupt möglich war)
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
- always add VisualStudio.ignore to .gitignore before first commit! :D
- Folder structure for angular.js is feature based:
    app\core (reddit app engine)
    app\authentication (user registration / user login, logout)
    app\entry (query, create, upvote, downvote, create comments)
- TypeScript 
    -> .ts = TypeScript file
    -> .d.ts = Javascript to TypeScript Definition File
    -> .ts.map = Debugging information (Symbol file)
    -> because of issues with Angular we didn't solve 

###Browser compatibility
We tested the application with the newest browsers for (15.02.2015):

- Chrome
- Firefox


####Readme.md information

To learn more about the markdown syntax, refer to these links:

 - [Markdown Syntax Guide](http://daringfireball.net/projects/markdown/syntax)
 - [Markdown Basics](http://daringfireball.net/projects/markdown/basics)
 - [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) 
 - [markdown at wikipedia](https://secure.wikimedia.org/wikipedia/en/wiki/Markdown)


