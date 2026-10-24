/* ------------------------------------------------------------------
 * Language picker: EN / IT / NL / FR
 * Paste this block at the very top of js/script.js. Nothing else changes:
 * the picker adds itself to the menu, and each row below swaps one
 * English text for its translation. To translate a new text, add a row:
 * [English, Italiano, Nederlands, Français]
 * ------------------------------------------------------------------ */
(function () {
  'use strict';

  var ROWS = [
    ["Home", "Home", "Home", "Accueil"],
    ["About", "Chi sono", "Over mij", "À propos"],
    ["About me", "Il mio profilo", "Mijn profiel", "Mon profil"],
    ["How I work", "Come lavoro", "Hoe ik werk", "Ma méthode"],
    ["Portfolio", "Portfolio", "Portfolio", "Portfolio"],
    ["Contact", "Contatti", "Contact", "Contact"],
    ["Toggle navigation", "Apri il menu", "Menu openen", "Ouvrir le menu"],
    ["Open menu", "Apri il menu", "Menu openen", "Ouvrir le menu"],
    ["Elisa Maria Bertucci, home", "Elisa Maria Bertucci, pagina iniziale", "Elisa Maria Bertucci, startpagina", "Elisa Maria Bertucci, accueil"],
    ["Elisa Maria Bertucci | Space & Service Designer", "Elisa Maria Bertucci | Designer di spazi e servizi", "Elisa Maria Bertucci | Ruimte- en servicedesigner", "Elisa Maria Bertucci | Designer d’espaces et de services"],
    ["About | Elisa Maria Bertucci", "Chi sono | Elisa Maria Bertucci", "Over mij | Elisa Maria Bertucci", "À propos | Elisa Maria Bertucci"],
    ["How I work | Elisa Maria Bertucci", "Come lavoro | Elisa Maria Bertucci", "Hoe ik werk | Elisa Maria Bertucci", "Ma méthode | Elisa Maria Bertucci"],
    ["Contact | Elisa Maria Bertucci", "Contatti | Elisa Maria Bertucci", "Contact | Elisa Maria Bertucci", "Contact | Elisa Maria Bertucci"],
    ["CiLAB case study | Elisa Maria Bertucci", "CiLAB, caso studio | Elisa Maria Bertucci", "CiLAB, casestudy | Elisa Maria Bertucci", "CiLAB, étude de cas | Elisa Maria Bertucci"],
    ["Zilvermeer case study | Elisa Maria Bertucci", "Zilvermeer, caso studio | Elisa Maria Bertucci", "Zilvermeer, casestudy | Elisa Maria Bertucci", "Zilvermeer, étude de cas | Elisa Maria Bertucci"],
    ["Gutsy case study | Elisa Maria Bertucci", "Gutsy, caso studio | Elisa Maria Bertucci", "Gutsy, casestudy | Elisa Maria Bertucci", "Gutsy, étude de cas | Elisa Maria Bertucci"],
    ["MaterialData case study | Elisa Maria Bertucci", "MaterialData, caso studio | Elisa Maria Bertucci", "MaterialData, casestudy | Elisa Maria Bertucci", "MaterialData, étude de cas | Elisa Maria Bertucci"],
    ["I design", "Progetto", "Ik ontwerp", "Je conçois"],
    ["Service systems.", "Sistemi di servizio.", "Servicesystemen.", "Des systèmes de services."],
    ["User journeys.", "Percorsi utente.", "Gebruikersreizen.", "Des parcours utilisateurs."],
    ["Community spaces.", "Spazi per la comunità.", "Gemeenschapsruimtes.", "Des espaces partagés."],
    ["Space and service designer based in Ghent. I connect physical spaces and digital tools", "Designer di spazi e servizi con base a Gand. Collego spazi fisici e strumenti digitali", "Ruimte- en servicedesigner in Gent. Ik verbind fysieke ruimtes en digitale tools", "Designer d’espaces et de services basée à Gand. Je relie espaces physiques et outils numériques"],
    ["into services that are easy to find, use and run. Open to full-time roles.", "in servizi facili da trovare, usare e gestire. Disponibile per ruoli a tempo pieno.", "tot diensten die makkelijk te vinden, te gebruiken en te beheren zijn. Beschikbaar voor een voltijdse job.", "pour créer des services faciles à trouver, à utiliser et à gérer. Disponible pour un poste à temps plein."],
    ["All Projects", "Tutti i progetti", "Alle projecten", "Tous les projets"],
    ["Service Design", "Service design", "Servicedesign", "Service design"],
    ["Product & Space", "Prodotto e spazio", "Product & ruimte", "Produit & espace"],
    ["Visual", "Grafica", "Visueel", "Visuel"],
    ["Year-round park hub", "Un parco vivo tutto l'anno", "Parkhub voor het hele jaar", "Un parc vivant toute l’année"],
    ["Digital material library", "Materioteca digitale", "Digitale materialenbibliotheek", "Matériauthèque numérique"],
    ["City game & lanterns", "Gioco urbano e lanterne", "Stadsspel & lantaarns", "Jeu urbain & lanternes"],
    ["Circular textile service", "Servizio tessile circolare", "Circulaire textieldienst", "Service textile circulaire"],
    ["Side projects", "Altri progetti", "Andere projecten", "Autres projets"],
    ["Sketches & product studies", "Schizzi e studi di prodotto", "Schetsen & productstudies", "Croquis & études de produit"],
    ["Unboxing journey", "Esperienza di unboxing", "Unboxing-ervaring", "Expérience d’unboxing"],
    ["What I do.", "Cosa faccio.", "Wat ik doe.", "Ce que je fais."],
    ["A background in product, communication and UX design, now focused on services that connect people, places and digital tools.", "Una formazione in product, communication e UX design, oggi rivolta a servizi che collegano persone, luoghi e strumenti digitali.", "Een achtergrond in product-, communicatie- en UX-design, nu gericht op diensten die mensen, plekken en digitale tools verbinden.", "Une formation en design produit, communication et UX, aujourd’hui tournée vers des services qui relient les personnes, les lieux et les outils numériques."],
    ["Spatial Design", "Progettazione degli spazi", "Ruimtelijk ontwerp", "Design d’espace"],
    ["Spatial audits, zoning and storage logic that make a place easy to use.", "Analisi degli spazi, zonizzazione e logiche di stoccaggio che rendono un luogo facile da usare.", "Ruimte-analyses, zonering en opberglogica die een plek makkelijk bruikbaar maken.", "Audits spatiaux, zonage et logique de rangement pour qu’un lieu soit simple à utiliser."],
    ["Visual Communication", "Comunicazione visiva", "Visuele communicatie", "Communication visuelle"],
    ["Identities, packaging content and campaigns that say one thing clearly.", "Identità visive, contenuti per il packaging e campagne che dicono una cosa con chiarezza.", "Huisstijlen, verpakkingsinhoud en campagnes die één ding helder zeggen.", "Identités visuelles, contenus d’emballage et campagnes qui disent une chose clairement."],
    ["Service Blueprinting", "Service blueprint", "Service blueprints", "Service blueprint"],
    ["Journeys and blueprints that line up what visitors see with what staff do.", "Journey e blueprint che allineano ciò che vedono i visitatori con ciò che fa il personale.", "Journeys en blueprints die afstemmen wat bezoekers zien op wat medewerkers doen.", "Parcours et blueprints qui alignent ce que voient les visiteurs et ce que fait l’équipe."],
    ["User Research & Co-design", "Ricerca utente e co-design", "Gebruikersonderzoek & co-design", "Recherche utilisateur & co-design"],
    ["Interviews, observation and workshops with the people a service depends on.", "Interviste, osservazione e workshop con le persone da cui dipende un servizio.", "Interviews, observatie en workshops met de mensen van wie een dienst afhangt.", "Entretiens, observation et ateliers avec les personnes dont dépend un service."],
    ["Concept Visualisation", "Visualizzazione dei concept", "Conceptvisualisatie", "Visualisation de concepts"],
    ["Sketches, illustrations and 3D models that make an idea easy to discuss.", "Schizzi, illustrazioni e modelli 3D che rendono un'idea facile da discutere.", "Schetsen, illustraties en 3D-modellen die een idee makkelijk bespreekbaar maken.", "Croquis, illustrations et modèles 3D qui rendent une idée facile à discuter."],
    ["UX/UI Design", "UX/UI design", "UX/UI-design", "Design UX/UI"],
    ["User flows, wireframes and Figma prototypes, tested with real users.", "User flow, wireframe e prototipi in Figma, testati con utenti reali.", "User flows, wireframes en Figma-prototypes, getest met echte gebruikers.", "User flows, wireframes et prototypes Figma, testés avec de vrais utilisateurs."],
    ["© 2026 Elisa Maria Bertucci. Template by", "© 2026 Elisa Maria Bertucci. Template di", "© 2026 Elisa Maria Bertucci. Template door", "© 2026 Elisa Maria Bertucci. Template par"],
    ["Zilvermeer: concept illustration of the Glinstering garden and workshop tent", "Zilvermeer: illustrazione di concept del giardino e della tenda per i workshop di Glinstering", "Zilvermeer: conceptillustratie van de tuin en de workshoptent van Glinstering", "Zilvermeer : illustration de concept du jardin et de la tente d’ateliers de Glinstering"],
    ["MaterialData: material information sheet in the digital material library", "MaterialData: scheda di un materiale nella materioteca digitale", "MaterialData: materiaalfiche in de digitale materialenbibliotheek", "MaterialData : fiche matériau dans la matériauthèque numérique"],
    ["OrientME: orienteering game app for the Molo district of Genoa", "OrientME: app di orienteering per il quartiere del Molo a Genova", "OrientME: oriëntatiespel-app voor de Molo-wijk in Genua", "OrientME : application de course d’orientation pour le quartier du Molo à Gênes"],
    ["CiLAB: digital inventory interface on a laptop among donated textiles", "CiLAB: interfaccia dell'inventario digitale su un portatile tra tessuti donati", "CiLAB: interface van de digitale inventaris op een laptop tussen gedoneerd textiel", "CiLAB : interface de l’inventaire numérique sur un ordinateur portable parmi des textiles donnés"],
    ["Side projects: pencil perspective study of vases", "Altri progetti: studio prospettico di vasi a matita", "Andere projecten: perspectiefstudie van vazen in potlood", "Autres projets : étude en perspective de vases au crayon"],
    ["Gutsy: feeding guides and diet transition tracker designed for first orders", "Gutsy: guide all'alimentazione e diario di transizione pensati per i primi ordini", "Gutsy: voedingsgidsen en overgangsschema voor de eerste bestellingen", "Gutsy : guides d’alimentation et suivi de transition alimentaire conçus pour les premières commandes"],
    ["Portrait of Elisa Maria Bertucci", "Ritratto di Elisa Maria Bertucci", "Portret van Elisa Maria Bertucci", "Portrait d’Elisa Maria Bertucci"],
    ["Space & service designer, based in Ghent", "Designer di spazi e servizi, con base a Gand", "Ruimte- en servicedesigner, gevestigd in Gent", "Designer d’espaces et de services, basée à Gand"],
    ["I design services that connect physical spaces and digital tools. I studied Product & Communication Design at the University of Genoa, then Space & Service Design at Thomas More. I'm drawn to circular materials and community projects.", "Progetto servizi che collegano spazi fisici e strumenti digitali. Ho studiato Design del Prodotto e della Comunicazione all'Università di Genova, poi Space & Service Design alla Thomas More. Mi interessano in particolare i materiali circolari e i progetti di comunità.", "Ik ontwerp diensten die fysieke ruimtes en digitale tools verbinden. Ik studeerde Product & Communication Design aan de Universiteit van Genua en daarna Space & Service Design aan Thomas More. Circulaire materialen en buurtprojecten trekken me aan.", "Je conçois des services qui relient espaces physiques et outils numériques. J’ai étudié le design produit et communication à l’Université de Gênes, puis le Space & Service Design à Thomas More. Les matériaux circulaires et les projets de quartier m’attirent particulièrement."],
    ["Service design", "Service design", "Servicedesign", "Service design"],
    ["Spatial design", "Progettazione degli spazi", "Ruimtelijk ontwerp", "Design d’espace"],
    ["UX/UI design", "UX/UI design", "UX/UI-design", "Design UX/UI"],
    ["Visual communication", "Comunicazione visiva", "Visuele communicatie", "Communication visuelle"],
    ["View CV (PDF)", "Vedi il CV (PDF)", "Bekijk mijn cv (PDF)", "Voir mon CV (PDF)"],
    ["Experience & education.", "Esperienza e formazione.", "Ervaring & opleiding.", "Expérience & formation."],
    ["Experience", "Esperienza", "Ervaring", "Expérience"],
    ["Education", "Formazione", "Opleiding", "Formation"],
    ["Service design intern", "Tirocinante in service design", "Stagiair servicedesign", "Stagiaire en service design"],
    ["Designed a service system for a circular textile atelier: blueprint, QR-coded storage zones and a digital inventory, tested with staff.", "Ho progettato un sistema di servizio per un atelier tessile circolare: blueprint, zone di stoccaggio con codici QR e un inventario digitale, testati con il personale.", "Ontwierp een servicesysteem voor een circulair textielatelier: blueprint, opslagzones met QR-codes en een digitale inventaris, getest met het team.", "Conception d’un système de services pour un atelier textile circulaire : blueprint, zones de stockage avec QR codes et inventaire numérique, testés avec l’équipe."],
    ["2026, two months", "2026, due mesi", "2026, twee maanden", "2026, deux mois"],
    ["Design intern", "Tirocinante in design", "Stagiair design", "Stagiaire en design"],
    ["Gutsy, Antwerp", "Gutsy, Anversa", "Gutsy, Antwerpen", "Gutsy, Anvers"],
    ["Mapped the post-purchase journey for a pet-food start-up and designed unboxing content for first orders through subscriptions.", "Ho mappato il percorso post-acquisto di una start-up di cibo per animali e progettato i contenuti di unboxing, dal primo ordine agli abbonamenti.", "Bracht de klantreis na aankoop in kaart voor een start-up in dierenvoeding en ontwierp unboxing-inhoud, van eerste bestelling tot abonnement.", "Cartographie du parcours après achat pour une start-up d’alimentation pour animaux et conception des contenus d’unboxing, de la première commande à l’abonnement."],
    ["Postgraduate, Space & Service Design", "Corso post-laurea in Space & Service Design", "Postgraduaat Space & Service Design", "Postgraduat en Space & Service Design"],
    ["Team project with Zilvermeer park in Mol: personas, co-creation sessions and service blueprints for a year-round social hub.", "Progetto di gruppo con il parco Zilvermeer a Mol: personas, sessioni di co-creazione e service blueprint per un punto d'incontro attivo tutto l'anno.", "Teamproject met het Zilvermeer in Mol: persona's, cocreatiesessies en service blueprints voor een sociale ontmoetingsplek die het hele jaar leeft.", "Projet d’équipe avec le parc Zilvermeer à Mol : personas, sessions de co-création et service blueprints pour un lieu de rencontre vivant toute l’année."],
    ["Until 2024", "Fino al 2024", "Tot 2024", "Jusqu’en 2024"],
    ["BSc Product & Communication Design", "Laurea triennale in Design del Prodotto e della Comunicazione", "Bachelor Product & Communication Design", "Bachelier en design produit et communication"],
    ["University of Genoa", "Università di Genova", "Universiteit van Genua", "Université de Gênes"],
    ["Thesis: MaterialData, a digital material library for students, from interviews to user flows, wireframes and visual identity.", "Tesi: MaterialData, una materioteca digitale per studenti, dalle interviste ai user flow, ai wireframe e all'identità visiva.", "Bachelorproef: MaterialData, een digitale materialenbibliotheek voor studenten, van interviews tot user flows, wireframes en visuele identiteit.", "Travail de fin d’études : MaterialData, une matériauthèque numérique pour étudiants, des entretiens aux user flows, wireframes et identité visuelle."],
    ["I start", "Comincio", "Ik begin", "Je commence"],
    ["with the people.", "dalle persone.", "bij de mensen.", "par les personnes."],
    ["in the space.", "dallo spazio.", "in de ruimte.", "dans l’espace."],
    ["with one question.", "da una domanda.", "met één vraag.", "par une question."],
    ["Then I design the service.", "Poi progetto il servizio.", "Dan ontwerp ik de dienst.", "Puis je conçois le service."],
    ["I observe how a place works today and talk to the people who run it. Then I map it, as journeys, blueprints and zones, and test concepts with the people who will use them. At CiLAB, staff tried three prototypes on real tasks.", "Osservo come funziona oggi un luogo e parlo con chi lo gestisce. Poi lo mappo, con journey, blueprint e zone, e testo i concept con le persone che li useranno. Da CiLAB, il personale ha provato tre prototipi su compiti reali.", "Ik observeer hoe een plek vandaag werkt en praat met de mensen die ze runnen. Dan breng ik ze in kaart, als journeys, blueprints en zones, en test ik concepten met de mensen die ze zullen gebruiken. Bij CiLAB testte het team drie prototypes op echte taken.", "J’observe comment un lieu fonctionne aujourd’hui et je parle avec celles et ceux qui le font vivre. Ensuite, je le cartographie, en parcours, blueprints et zones, et je teste les concepts avec les personnes qui les utiliseront. Chez CiLAB, l’équipe a testé trois prototypes sur des tâches réelles."],
    ["Observe first", "Prima osservare", "Eerst observeren", "D’abord observer"],
    ["Workflows, interviews and site visits before any concept.", "Flussi di lavoro, interviste e sopralluoghi prima di qualsiasi concept.", "Werkprocessen, interviews en plaatsbezoeken vóór elk concept.", "Flux de travail, entretiens et visites de terrain avant tout concept."],
    ["Map the whole system", "Mappare l'intero sistema", "Het hele systeem in kaart brengen", "Cartographier tout le système"],
    ["Visitors, staff, space and tools in one blueprint.", "Visitatori, personale, spazio e strumenti in un unico blueprint.", "Bezoekers, medewerkers, ruimte en tools in één blueprint.", "Visiteurs, équipe, espace et outils dans un seul blueprint."],
    ["Test with real users", "Testare con utenti reali", "Testen met echte gebruikers", "Tester avec de vrais utilisateurs"],
    ["Prototypes tried by the people who will run them.", "Prototipi provati da chi li dovrà gestire.", "Prototypes uitgetest door de mensen die ermee zullen werken.", "Des prototypes essayés par les personnes qui les feront fonctionner."],
    ["Figma · Wireframes", "Figma · Wireframe", "Figma · Wireframes", "Figma · Wireframes"],
    ["Blueprints · Journeys", "Blueprint · Journey", "Blueprints · Journeys", "Blueprints · Parcours"],
    ["Illustration · Identity", "Illustrazione · Identità", "Illustratie · Huisstijl", "Illustration · Identité"],
    ["User research", "Ricerca utente", "Gebruikersonderzoek", "Recherche utilisateur"],
    ["Interviews · Co-design", "Interviste · Co-design", "Interviews · Co-design", "Entretiens · Co-design"],
    ["Questions I've worked on.", "Le domande su cui ho lavorato.", "Vragen waaraan ik werkte.", "Les questions sur lesquelles j’ai travaillé."],
    ["How might CiLAB make circular textiles visible, findable and usable without creating extra work for its team?", "Come potrebbe CiLAB rendere i tessuti circolari visibili, reperibili e utilizzabili senza creare lavoro in più per il suo team?", "Hoe kan CiLAB circulair textiel zichtbaar, vindbaar en bruikbaar maken zonder extra werk voor het team?", "Comment CiLAB pourrait-il rendre les textiles circulaires visibles, trouvables et utilisables sans alourdir le travail de son équipe ?"],
    ["Service design internship, 2026", "Tirocinio in service design, 2026", "Stage servicedesign, 2026", "Stage en service design, 2026"],
    ["How might Gutsy make the first unboxing feel personal and reassuring, and keep that feeling even after repeated orders and subscriptions?", "Come potrebbe Gutsy rendere il primo unboxing personale e rassicurante, e mantenere quella sensazione anche dopo ordini ripetuti e abbonamenti?", "Hoe kan Gutsy de eerste unboxing persoonlijk en geruststellend maken, en dat gevoel behouden bij herhaalde bestellingen en abonnementen?", "Comment Gutsy pourrait-il rendre le premier unboxing personnel et rassurant, et garder ce sentiment même après des commandes répétées et des abonnements ?"],
    ["Design internship, 2026", "Tirocinio in design, 2026", "Designstage, 2026", "Stage en design, 2026"],
    ["Does the University of Genoa provide students with everything they need to make their education as complete as possible?", "L'Università di Genova offre agli studenti tutto ciò di cui hanno bisogno per rendere la loro formazione il più completa possibile?", "Biedt de Universiteit van Genua studenten alles wat ze nodig hebben om hun opleiding zo volledig mogelijk te maken?", "L’Université de Gênes offre-t-elle aux étudiants tout ce dont ils ont besoin pour que leur formation soit la plus complète possible ?"],
    ["Bachelor's thesis, 2024", "Tesi di laurea triennale, 2024", "Bachelorproef, 2024", "Travail de fin d’études, 2024"],
    ["Get in touch", "Contattami", "Contacteer me", "Contactez-moi"],
    ["I'm looking for a full-time role in service, UX/UI or product design. Email is the fastest way to reach me.", "Cerco un ruolo a tempo pieno in service design, UX/UI o product design. L'email è il modo più rapido per raggiungermi.", "Ik ben op zoek naar een voltijdse job in service-, UX/UI- of productdesign. Mailen is de snelste manier om me te bereiken.", "Je cherche un poste à temps plein en service design, UX/UI ou design produit. L’e-mail est le moyen le plus rapide de me joindre."],
    ["Project details", "Dettagli del progetto", "Projectdetails", "Détails du projet"],
    ["Context", "Contesto", "Context", "Contexte"],
    ["Year", "Anno", "Jaar", "Année"],
    ["My role", "Il mio ruolo", "Mijn rol", "Mon rôle"],
    ["Full case study (PDF)", "Caso studio completo (PDF)", "Volledige casestudy (PDF)", "Étude de cas complète (PDF)"],
    ["More case studies", "Altri casi studio", "Meer casestudy's", "Autres études de cas"],
    ["Previous", "Precedente", "Vorige", "Précédent"],
    ["Next", "Successivo", "Volgende", "Suivant"],
    ["Previous: CiLAB", "Precedente: CiLAB", "Vorige: CiLAB", "Précédent : CiLAB"],
    ["Previous: Zilvermeer", "Precedente: Zilvermeer", "Vorige: Zilvermeer", "Précédent : Zilvermeer"],
    ["Previous: Gutsy", "Precedente: Gutsy", "Vorige: Gutsy", "Précédent : Gutsy"],
    ["Previous: MaterialData", "Precedente: MaterialData", "Vorige: MaterialData", "Précédent : MaterialData"],
    ["Next: CiLAB", "Successivo: CiLAB", "Volgende: CiLAB", "Suivant : CiLAB"],
    ["Next: Zilvermeer", "Successivo: Zilvermeer", "Volgende: Zilvermeer", "Suivant : Zilvermeer"],
    ["Next: Gutsy", "Successivo: Gutsy", "Volgende: Gutsy", "Suivant : Gutsy"],
    ["Next: MaterialData", "Successivo: MaterialData", "Volgende: MaterialData", "Suivant : MaterialData"],
    ["Making circular textile services easier to access", "Rendere più accessibili i servizi tessili circolari", "Circulaire textieldiensten toegankelijker maken", "Rendre les services textiles circulaires plus accessibles"],
    ["CiLAB prototype screens: the Open Atelier page in front of the inventory with its add-item form", "Schermate del prototipo CiLAB: la pagina Open Atelier davanti all'inventario con il modulo per aggiungere un capo", "Prototypeschermen van CiLAB: de Open Atelier-pagina voor de inventaris met het formulier om een stuk toe te voegen", "Écrans du prototype CiLAB : la page Open Atelier devant l’inventaire et son formulaire d’ajout d’article"],
    ["CiLAB is a circular textile atelier in Mechelen where people repair, upcycle, swap and donate clothes. Staff found fabrics and tools by memory, and visitors couldn't easily see what was available before they came. My mentor asked me to design a service system to fix that.", "CiLAB è un atelier tessile circolare a Mechelen dove le persone riparano, trasformano, scambiano e donano vestiti. Il personale trovava tessuti e attrezzi a memoria, e i visitatori non vedevano facilmente cosa fosse disponibile prima di arrivare. Il mio mentore mi ha chiesto di progettare un sistema di servizio per risolvere il problema.", "CiLAB is een circulair textielatelier in Mechelen waar mensen kleding herstellen, upcyclen, ruilen en doneren. Medewerkers vonden stoffen en gereedschap op geheugen, en bezoekers zagen moeilijk wat er beschikbaar was voor ze langskwamen. Mijn mentor vroeg me een servicesysteem te ontwerpen om dat op te lossen.", "CiLAB est un atelier textile circulaire à Malines où l’on répare, transforme, échange et donne des vêtements. L’équipe retrouvait tissus et outils de mémoire, et les visiteurs voyaient difficilement ce qui était disponible avant de venir. Mon mentor m’a demandé de concevoir un système de services pour y remédier."],
    ["I observed daily workflows, interviewed the team and mapped the service in a blueprint. The concept links the atelier to a digital inventory through numbered, QR-coded storage zones and an online catalogue. Staff tested three prototypes on real tasks.", "Ho osservato il lavoro quotidiano, intervistato il team e mappato il servizio in un blueprint. Il concept collega l'atelier a un inventario digitale attraverso zone di stoccaggio numerate con codici QR e un catalogo online. Il personale ha testato tre prototipi su compiti reali.", "Ik observeerde de dagelijkse werking, interviewde het team en bracht de dienst in kaart in een blueprint. Het concept koppelt het atelier aan een digitale inventaris via genummerde opslagzones met QR-codes en een online catalogus. Het team testte drie prototypes op echte taken.", "J’ai observé le travail quotidien, interrogé l’équipe et cartographié le service dans un blueprint. Le concept relie l’atelier à un inventaire numérique grâce à des zones de stockage numérotées avec QR codes et à un catalogue en ligne. L’équipe a testé trois prototypes sur des tâches réelles."],
    ["Internship at CiLAB, Mechelen", "Tirocinio presso CiLAB, Mechelen", "Stage bij CiLAB, Mechelen", "Stage chez CiLAB, Malines"],
    ["Service research, service blueprint, inventory and UX/UI concept", "Ricerca sul servizio, service blueprint, concept di inventario e UX/UI", "Serviceonderzoek, service blueprint, inventaris- en UX/UI-concept", "Recherche de service, service blueprint, concept d’inventaire et UX/UI"],
    ["Reimagining a recreational park experience", "Ripensare l'esperienza di un parco ricreativo", "De beleving van een recreatiepark herdenken", "Réinventer l’expérience d’un parc de loisirs"],
    ["Line illustration of the redesigned Glinstering interior, with tables, plants and large garden windows", "Illustrazione a linee dell'interno ripensato di Glinstering, con tavoli, piante e grandi vetrate sul giardino", "Lijntekening van het vernieuwde interieur van Glinstering, met tafels, planten en grote tuinramen", "Illustration au trait de l’intérieur repensé de Glinstering, avec tables, plantes et grandes baies vitrées sur le jardin"],
    ["Zilvermeer, a recreational park in Mol, is busy in summer and quiet the rest of the year. In a team of five, we redesigned Glinstering, a mid-century tavern between the playground, lake and forest, as a year-round social hub.", "Zilvermeer, un parco ricreativo a Mol, è affollato d'estate e tranquillo il resto dell'anno. In un team di cinque persone abbiamo ripensato Glinstering, una taverna di metà Novecento tra il parco giochi, il lago e il bosco, come punto d'incontro attivo tutto l'anno.", "Zilvermeer, een recreatiepark in Mol, zit in de zomer vol en is de rest van het jaar rustig. Met een team van vijf herdachten we Glinstering, een taverne uit het midden van de vorige eeuw tussen de speeltuin, het meer en het bos, als sociale ontmoetingsplek voor het hele jaar.", "Zilvermeer, un parc de loisirs à Mol, est très fréquenté l’été et calme le reste de l’année. En équipe de cinq, nous avons repensé Glinstering, une taverne du milieu du siècle dernier entre l’aire de jeux, le lac et la forêt, pour en faire un lieu de rencontre vivant toute l’année."],
    ["We worked with personas, future journeys and service blueprints. I designed co-creation tools, including a Good, Bad and Wish wall and game cards, and drew concept illustrations. The proposal adds an indoor play zone, garden workshops with local partners and social employment.", "Abbiamo lavorato con personas, journey future e service blueprint. Ho progettato strumenti di co-creazione, tra cui un muro Good, Bad and Wish e delle carte da gioco, e disegnato illustrazioni di concept. La proposta aggiunge un'area gioco al coperto, workshop in giardino con partner locali e inserimento lavorativo sociale.", "We werkten met persona's, toekomstige journeys en service blueprints. Ik ontwierp cocreatietools, waaronder een Good, Bad and Wish-muur en spelkaarten, en tekende conceptillustraties. Het voorstel voegt een overdekte speelzone toe, tuinworkshops met lokale partners en sociale tewerkstelling.", "Nous avons travaillé avec des personas, des parcours futurs et des service blueprints. J’ai conçu des outils de co-création, dont un mur Good, Bad and Wish et des cartes de jeu, et dessiné des illustrations de concept. La proposition ajoute une aire de jeux couverte, des ateliers de jardinage avec des partenaires locaux et de l’insertion socioprofessionnelle."],
    ["Postgraduate team project for Zilvermeer, Mol", "Progetto di gruppo post-laurea per Zilvermeer, Mol", "Teamproject binnen het postgraduaat, voor Zilvermeer in Mol", "Projet d’équipe en postgraduat pour Zilvermeer, Mol"],
    ["Co-creation tools, concept illustration, service blueprint", "Strumenti di co-creazione, illustrazione di concept, service blueprint", "Cocreatietools, conceptillustratie, service blueprint", "Outils de co-création, illustration de concept, service blueprint"],
    ["Designing a memorable unboxing journey", "Progettare un'esperienza di unboxing memorabile", "Een onvergetelijke unboxing-ervaring ontwerpen", "Concevoir une expérience d’unboxing mémorable"],
    ["Gutsy feeding guides and diet transition tracker designed for first orders", "Guide all'alimentazione e diario di transizione di Gutsy pensati per i primi ordini", "Voedingsgidsen en overgangsschema van Gutsy voor de eerste bestellingen", "Guides d’alimentation et suivi de transition alimentaire de Gutsy conçus pour les premières commandes"],
    ["During a two-month internship at a young pet-food start-up in Antwerp, I explored how packaging and post-purchase touchpoints could make the first order feel personal, and keep that feeling through repeat orders and subscriptions.", "Durante un tirocinio di due mesi in una giovane start-up di cibo per animali ad Anversa, ho esplorato come il packaging e i punti di contatto dopo l'acquisto potessero rendere personale il primo ordine, e mantenere quella sensazione con gli ordini successivi e gli abbonamenti.", "Tijdens een stage van twee maanden bij een jonge start-up in dierenvoeding in Antwerpen onderzocht ik hoe verpakking en contactmomenten na aankoop de eerste bestelling persoonlijk konden maken, en dat gevoel konden vasthouden bij herhaalbestellingen en abonnementen.", "Pendant un stage de deux mois dans une jeune start-up d’alimentation pour animaux à Anvers, j’ai exploré comment l’emballage et les points de contact après l’achat pouvaient rendre la première commande personnelle, et garder ce sentiment au fil des commandes et des abonnements."],
    ["I analysed the brand and its competitors, supported a survey of loyal customers and mapped what arrives at each stage. Weekly feedback with my tutor shaped the final journey map, packaging content and a print-cost template for the team.", "Ho analizzato il brand e i suoi concorrenti, supportato un sondaggio tra i clienti fedeli e mappato cosa arriva in ogni fase. Il confronto settimanale con il mio tutor ha dato forma alla journey map finale, ai contenuti del packaging e a un modello dei costi di stampa per il team.", "Ik analyseerde het merk en zijn concurrenten, ondersteunde een bevraging bij trouwe klanten en bracht in kaart wat er in elke fase aankomt. Wekelijkse feedback van mijn begeleider vormde de uiteindelijke journey map, de verpakkingsinhoud en een sjabloon voor drukkosten voor het team.", "J’ai analysé la marque et ses concurrents, participé à une enquête auprès de clients fidèles et cartographié ce qui arrive à chaque étape. Les retours hebdomadaires de mon tuteur ont façonné la journey map finale, les contenus de l’emballage et un modèle de coûts d’impression pour l’équipe."],
    ["Internship at Gutsy, Antwerp", "Tirocinio presso Gutsy, Anversa", "Stage bij Gutsy, Antwerpen", "Stage chez Gutsy, Anvers"],
    ["Research, journey mapping, packaging content", "Ricerca, journey mapping, contenuti per il packaging", "Onderzoek, journey mapping, verpakkingsinhoud", "Recherche, journey mapping, contenus d’emballage"],
    ["A digital material library for students and teachers", "Una materioteca digitale per studenti e docenti", "Een digitale materialenbibliotheek voor studenten en docenten", "Une matériauthèque numérique pour étudiants et enseignants"],
    ["MaterialData screens: material database, comparison graph, material sheet and personal area", "Schermate di MaterialData: database dei materiali, grafico di confronto, scheda materiale e area personale", "Schermen van MaterialData: materialendatabank, vergelijkingsgrafiek, materiaalfiche en persoonlijke ruimte", "Écrans de MaterialData : base de données des matériaux, graphique comparatif, fiche matériau et espace personnel"],
    ["My bachelor's thesis started with a question: does the University of Genoa give design students every tool they need? The answer was a digital material library for the Department of Architecture and Design, built to make a wide range of materials easy to search.", "La mia tesi triennale è partita da una domanda: l'Università di Genova offre agli studenti di design tutti gli strumenti di cui hanno bisogno? La risposta è stata una materioteca digitale per il Dipartimento di Architettura e Design, pensata per rendere facile la ricerca tra un'ampia gamma di materiali.", "Mijn bachelorproef begon met een vraag: geeft de Universiteit van Genua designstudenten alle tools die ze nodig hebben? Het antwoord werd een digitale materialenbibliotheek voor het Departement Architectuur en Design, gebouwd om een breed gamma aan materialen makkelijk doorzoekbaar te maken.", "Mon travail de fin d’études est parti d’une question : l’Université de Gênes donne-t-elle aux étudiants en design tous les outils dont ils ont besoin ? La réponse a été une matériauthèque numérique pour le Département d’architecture et de design, conçue pour rendre facile la recherche parmi un large éventail de matériaux."],
    ["I benchmarked existing material libraries, reviewed the university's online services and interviewed potential users. User-flow studies and sketched wireframes shaped four core areas: database, material search, technical sheets and a personal workspace.", "Ho analizzato le materioteche esistenti, valutato i servizi online dell'università e intervistato i potenziali utenti. Studi sui flussi e wireframe disegnati a mano hanno definito quattro aree principali: database, ricerca dei materiali, schede tecniche e uno spazio di lavoro personale.", "Ik vergeleek bestaande materialenbibliotheken, bekeek de online diensten van de universiteit en interviewde potentiële gebruikers. Studies van user flows en geschetste wireframes vormden vier kernonderdelen: databank, materialen zoeken, technische fiches en een persoonlijke werkruimte.", "J’ai comparé les matériauthèques existantes, étudié les services en ligne de l’université et interrogé des utilisateurs potentiels. Des études de user flows et des wireframes esquissés ont défini quatre espaces principaux : base de données, recherche de matériaux, fiches techniques et espace de travail personnel."],
    ["Bachelor's thesis, University of Genoa (individual)", "Tesi triennale, Università di Genova (individuale)", "Bachelorproef, Universiteit van Genua (individueel)", "Travail de fin d’études, Université de Gênes (individuel)"],
    ["Research, user flows, wireframes, visual identity", "Ricerca, user flow, wireframe, identità visiva", "Onderzoek, user flows, wireframes, visuele identiteit", "Recherche, user flows, wireframes, identité visuelle"],
    ["Language", "Lingua", "Taal", "Langue"]
  ];

  var LANGS = ['en', 'it', 'nl', 'fr'];
  var NAMES = { en: 'English', it: 'Italiano', nl: 'Nederlands', fr: 'Français' };
  var TITLE = document.title;
  var norm = function (s) { return String(s).replace(/\s+/g, ' ').trim(); };

  // any known text, in any language, points back to its row; English wins ties
  var row = {};
  ROWS.forEach(function (r) { for (var i = 1; i < r.length; i++) row[norm(r[i])] = r; });
  ROWS.forEach(function (r) { row[norm(r[0])] = r; });

  function translate(text, lang) {
    var r = row[norm(text)];
    if (!r) return null;
    var out = r[LANGS.indexOf(lang)];
    return text.match(/^\s*/)[0] + out + text.match(/\s*$/)[0];   // keep surrounding spaces
  }

  function apply(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), node, out;
    while ((node = walker.nextNode())) {
      if (/^(SCRIPT|STYLE)$/.test(node.parentNode.nodeName) || node.parentNode.closest('.lang-pick')) continue;
      node._en = node._en || node.nodeValue;                       // remember the original once
      out = translate(node._en, lang) || translate(node.nodeValue, lang);
      if (out !== null && out !== node.nodeValue) node.nodeValue = out;
    }
    ['alt', 'aria-label', 'placeholder'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        el._en = el._en || {};
        if (!(attr in el._en)) el._en[attr] = el.getAttribute(attr);
        out = translate(el._en[attr], lang);
        if (out !== null) el.setAttribute(attr, out);
      });
    });
    out = translate(TITLE, lang);
    if (out !== null) document.title = out;
    document.documentElement.lang = lang;
    document.querySelectorAll('.cd-words-wrapper').forEach(function (w) { w.style.width = ''; });  // headline box fits the new word
    var pick = document.querySelector('.lang-pick');
    if (pick) {
      pick.querySelector('.lang-pick-btn span').textContent = lang.toUpperCase();
      pick.querySelectorAll('.lang-pick-menu button').forEach(function (b) {
        if (b.getAttribute('lang') === lang) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      });
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  // the picker: a quiet "EN" at the end of the menu, opening a small list on click
  var css = '' +
    '.lang-pick{position:relative;display:flex;align-items:center;margin-left:10px}' +
    '.lang-pick-btn{display:inline-flex;align-items:center;gap:5px;padding:20px 4px;background:none;border:0;cursor:pointer;' +
      'font:600 11px/1 "Work Sans",sans-serif;letter-spacing:1px;color:#8F8478;opacity:.75;transition:opacity .2s,color .2s}' +
    '.lang-pick-btn:hover,.lang-pick-btn[aria-expanded="true"]{opacity:1;color:var(--walnut,#7A5C44)}' +
    '.lang-pick-btn:focus{outline:0}.lang-pick-btn:focus-visible{outline:2px solid var(--oak,#C4A88A);outline-offset:2px}' +
    '.lang-pick-btn i{width:5px;height:5px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:translateY(-2px) rotate(45deg)}' +
    '.lang-pick-menu{position:absolute;right:0;top:calc(100% - 8px);z-index:20;min-width:132px;margin:0;padding:6px 0;list-style:none;' +
      'background:var(--paper,#FBF8F4);box-shadow:0 10px 24px rgba(46,40,35,.12)}' +
    '.lang-pick-menu[hidden]{display:none}' +
    '.lang-pick-menu button{display:block;width:100%;padding:7px 16px;background:none;border:0;text-align:left;cursor:pointer;' +
      'font:13px/1.4 "Lato",sans-serif;color:var(--espresso,#2E2823)}' +
    '.lang-pick-menu button:hover{color:var(--walnut,#7A5C44)}' +
    '.lang-pick-menu button:focus{outline:0}.lang-pick-menu button:focus-visible{color:var(--walnut,#7A5C44);text-decoration:underline}' +
    '.lang-pick-menu button[aria-current]{color:var(--walnut,#7A5C44);font-weight:700}' +
    '@media (max-width:991px){.lang-pick{display:block;margin-left:0}.lang-pick-btn{padding:14px 15px}.lang-pick-menu{left:15px;right:auto;top:100%}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var menu = document.querySelector('.navbar-nav');
  if (menu) {
    var item = document.createElement('li');
    item.className = 'nav-item lang-pick';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-pick-btn';
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Language');
    btn.innerHTML = '<span>EN</span><i aria-hidden="true"></i>';
    var list = document.createElement('ul');
    list.className = 'lang-pick-menu';
    list.hidden = true;
    LANGS.forEach(function (lang) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('lang', lang);
      b.textContent = NAMES[lang];
      b.addEventListener('click', function (e) { apply(lang); close(); if (e.detail === 0) btn.focus(); });
      li.appendChild(b);
      list.appendChild(li);
    });
    var close = function () { list.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = list.hidden;
      list.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      // keyboard users land on the current language; mouse users see no focus ring
      if (open && e.detail === 0) (list.querySelector('[aria-current]') || list.querySelector('button')).focus();
    });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !list.hidden) { close(); btn.focus(); } });
    item.appendChild(btn);
    item.appendChild(list);
    menu.appendChild(item);
  }

  var start = 'en';
  try { start = localStorage.getItem('lang') || 'en'; } catch (e) {}
  apply(LANGS.indexOf(start) > -1 ? start : 'en');
})();

/**
 * Elisa Maria Bertucci, portfolio
 * Based on Thomson by Themefisher (https://themefisher.com), MIT licence.
 *
 * Every block only runs when its plugin is loaded and its element is on the
 * page, so one page's missing gallery can no longer stop the rest of the script.
 */
(function ($) {
  'use strict';

  // Scroll-in animations
  if (window.AOS) {
    AOS.init({ once: true });
  }

  // Skill bars (How I work page)
  $(window).on('load', function () {
    if (!$.fn.appear) return;
    $('.progress-bar').each(function () {
      var $bar = $(this);
      var width = $bar.data('percent');
      $bar.css({ transition: 'width 3s' });
      $bar.appear(function () {
        $bar.css('width', width + '%');
        if ($.fn.countTo) {
          $bar.find('.count').countTo({ from: 0, to: width, speed: 3000, refreshInterval: 50 });
        }
      });
    });
  });

  // CiLAB hero: the image shows for 5 s, then each video plays to its end and the next one slides in
  var $slides = $('.case-slides');
  if ($.fn.owlCarousel && $slides.length) {
    var wait;
    var next = function () { $slides.trigger('next.owl.carousel'); };
    var show = function (i) {
      clearTimeout(wait);
      $slides.find('video').each(function () { this.pause(); });
      var video = $slides.find('.owl-item').eq(i).find('video')[0];
      if (!video) {
        if ($slides.find('video').filter(function () { return !this.error; }).length) wait = setTimeout(next, 5000);
        return;   // no playable video left: the image simply stays
      }
      video.currentTime = 0;
      video.play().catch(function () { if (video.error) next(); });   // blocked autoplay keeps the play button
    };
    $slides.find('video').on('ended error', function () {
      if ($(this).closest('.owl-item').hasClass('active')) next();
    });
    $slides.on('changed.owl.carousel', function (e) {
      if (e.property.name === 'position') show(e.item.index);
    });
    $slides.owlCarousel({ items: 1, rewind: true, mouseDrag: false, touchDrag: false, pullDrag: false, smartSpeed: 600 });
    $slides.find('.owl-dot').each(function (i) { this.setAttribute('aria-label', 'Slide ' + (i + 1)); });
    show(0);
  }

  // Project grid filter (home page)
  var grid = document.querySelector('.shuffle-wrapper');
  if (window.Shuffle && grid) {
    var shuffle = new window.Shuffle(grid, { itemSelector: '.shuffle-item', buffer: 1 });
    $('input[name="shuffle-filter"]').on('change', function (evt) {
      if (evt.currentTarget.checked) shuffle.filter(evt.currentTarget.value);
    });
  }
})(jQuery);

// Case-study PDFs follow the site language: cilab.pdf → cilab-it.pdf / -nl / -fr
(function () {
  var PDF = /(^|\/)(cilab|gutsy|zilvermeer|materialdata|orientme|side-projects)(-(it|nl|fr))?\.pdf$/i;
  function lang() {
    var l = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    return /^(it|nl|fr)$/.test(l) ? l : 'en';
  }
  function sync() {
    var suffix = lang() === 'en' ? '' : '-' + lang();
    document.querySelectorAll('a[href$=".pdf"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (PDF.test(h)) a.setAttribute('href', h.replace(PDF, '$1$2' + suffix + '.pdf'));
    });
  }
  sync();
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();