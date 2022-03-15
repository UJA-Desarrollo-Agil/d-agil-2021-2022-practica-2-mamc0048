// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>El comienzo de un nuevo d&iacute;a</h1>\
        <p>Suena el despertador, las 7:30 de la\
        ma&ntildeana. </p>\
        <p>Piensas &laquoDios, otro d &iacutea m&aacutes en este\
        mundo de locos... Seguro que si le cuentas a alguien hace unos\
        a&ntildeos que el mundo iba a acabar as&iacute\
        te tildar&iacutea de loco en todas sus redes sociales.&raquo</p >\
        \
        <p>Han pasado cinco largos a&ntildeos desde que ocurri&oacute\
        &quotel incidente&quot en aquel centro comercial de Willamette,\
        Colorado. &laquoDe no ser por ese reportero, Frank West, vete a\
        saber d&oacutende estar&iacuteamos ahora.&raquo</p>\
        &nbsp;\
        <p>&laquo&iexclAl menos hoy es el gran d&iacutea, tengo tantas\
        ganas de ver el &quotT.I.R.&quot que de solo pensarlo me\
        tiemblan las piernas&excl; Espero que esta maldita herida del hombro\
        no me d&eacute demasiado la tabarra...&raquo</p>\
        <p>Te preparas para salir afuera, as&iacute que\
        <a href='./desayuno' class='once'>te haces el desayuno</a>, \
        <a href='./ducha' class='once'>te duchas</a> y \
        <a href='eleccion-ropa' class='once sticky'>eliges la ropa para hoy</a>.</p>",
        {
            actions: {
                "ducha": "<p>Vas con tu ropa limpia al ba&ntildeo, te quitas el\
                pijama y lo echas a lavar. De camino a la ducha pasas por delante\
                del espejo, &iquest<a href='mirarse' class='once'>te miras</a> o vas\
                <a href='directo-ducha' class='once'>directo a la ducha</a>&quest;</p>"
                ,
                "desayuno": "<p>Sigues tu rutina habitual: una caf&eacute y un par de tostadas.\
                            &laquoY ahora un cigarro&raquo, dices despu&eacutes de tom&aacutertelos, \
                            &laquoesto es lo que yo llamo un buen desayuno&raquo.</p>"
                ,
            }
        }
    ),

    "mirarse": new undum.SimpleSituation(
        "<p>&laquoJoder, &iquesthay alguien que se ves mejor que yo \
        hoy&quest; Lo dudo&raquo</p>\
        <p>Te pasas un rato mir&aacutendote en el espejo y al verte el \
        hombro exclamas &laquo&iexclMierda, estoy tan emocionado por el \
        &quotT.I.R.&quot que caso lo olvido&excl; Esta puta herida...\
        &quotTranqui, ser&aacute un trabajo seguro&quot dijo mi jefe y \
        ahora tengo que inyectarme Zombrex todos los d&iacuteas si no \
        quiero acabar como uno de esos podridos engendros.&raquo</p>",
        {
            enter: function (character, system, from) {
                system.setQuality("medicado", 1);
            }
        }
    ),

    "directo-ducha": new undum.SimpleSituation(
        "<p>Una buena ducha fr&iacutea por la ma&ntildeana te despeja\
        de golpe.</p>"
    ),

    "ropa-opcion1": new undum.SimpleSituation(
        "<p>Abres el armario y lo primero que ves es una sudadera y un vaquero colgados de una percha\
        &laquoLa vieja confiable&raquo, piensas. Sin embargo, hoy es el gran d&iacutea, deber&iacuteas\
        ponerte algo mejor.</p>",
        {
            tags: ["ropa"],
            enter: function (character, system, from) {
                system.doLink('eleccion-ropa');
            },
            optionText: "Sudadera y vaqueros",
            displayOrder: 1
        }
    ),
    "ropa-opcion2": new undum.SimpleSituation(
        "<p>&laquoDadas las dimensiones del evento de hoy no estar&iacutea mal ir hecho un pincel...\
        Pero dar&iacutea bastante el cante, mejor elijo otra cosa.&raquo</p>",
        {
            tags: ["ropa"],
            enter: function (character, system, from) {
                system.doLink('eleccion-ropa');
            },
            optionText: "Ropa elegante",
            displayOrder: 2
        }
    ),
    "ropa-opcion3": new undum.SimpleSituation(
        "<p>Hoy es EL d&iacutea, as&iacute que decides ponerte lo mejor que tienes en el armario.\
        &laquo&iexclAs&iacute s&iacute&excl; Con este ch&aacutendal llevo tremendo rollazo.&raquo</p>",
        {
            tags: ["ropa"],
            enter: function (character, system, from) {
                system.doLink('ir-a-evento');
            },
            optionText: "Chandal Adimas",
            displayOrder: 3
        },
    ),

    "ir-a-evento": new undum.SimpleSituation(
        "<p>Con la ropa puesta ya solo queda <a href='llegada-evento'>dirigirse al evento</a>.\
        No debe haber ning&uacuten problema por el camino, despu&eacutes de todo Nevada es \
        el estado donde m&aacutes controlado se tiene el tema de los zombis.</p>"
    ),

    "llegada-evento": new undum.SimpleSituation(
        "<h1>Llegada al evento</h1>\
        <p>Por fin has llegado, el estadio de Fortune City.</p>\
        <p>Las gradas est&aacuten llenas, pero no parece haber \
        nada en el centro del estadio.\
        <br></br>\
        &laquoNo puedo creer que est&eacute aqu&iacute, estoy ansioso porque empiece de una vez.\
        Adem&aacutes, mira qu&eacute ambiente, &iexclno cabe ni un alma&excl;&raquo\
        <br></br>\
        De repente se apagan las luces, indicativo de que <a href='evento'>empieza el\
        espect&aacuteculo</a></p>"
    ),

    "evento": new undum.SimpleSituation(
        "<h1>Terror Is Reallity</h1>\
        <p>En medio de la oscuridad se escucha una voz por los altavoces:\
        <i>&laquoLos zombis tomaron Willamette, tomaron Las Vegas...\
        Pero esta noche, Am&eacuterica, &iexclnos tomaremos una\
        peque&ntildea revencha&excl;&raquo</i></p>\
        <p>Se encienden unas tenues luces que enfocan el estadio y,\
        de repente, el suelo en el centro de este se empieza a abrir.\
        Poco a poco se puede ver como se eleva una pista llena de zombis\
        mientras todos los presentes gritan emocionados ante la \
        espectaci&oacuten del show que van a presenciar.</p>\
        <p><i>&laquo&iexclBienvenidos a Fortune City, Nevada. La \
        meca de la diversi&oacuten y el entretenimiento de\
        Am&eacuterica&excl;&raquo</i></p>\
        <p>Al fondo de la pista puedes ver a los cuatro participantes\
        del evento. &laquo&iexclDios t&iacuteo, mira eso,\
        esos t&iacuteos llevan motosierras enganchadas a\
        las motos&excl;&raquo, gritas.</p>\
        <p><i>&laquo&iexclDemos comienzo al evento m&aacutes peligroso\
        del pa&iacutes&excl; Es la hora de...\
        &iexcl&quotTerror Is Reality&quot&excl;&raquo</i></p>\
        <p>En cuanto se dijeron esas palabras los cuatro motoristas \
        se lanzaron a la pista directos a por los caminantes\
        y dio comienzo el espect&aacuteculo.</p>\
        <br></br>\
        <p>Cuando todo acab&oacute era hora de \
        <a href='vuelta-a-casa'>volver a casa</a>.</p>"
    ),

    "vuelta-medicado": new undum.SimpleSituation(
        "<h1>Vuelta a casa</h1>\
        <p>Finalmente est&aacutes de vuelta en casa, tienes \
        el m&oacutevil repleto de v&iacutedeos del show\
        e incluso conseguiste hacerte una foto con Chuck Greene\
        tu concursante favorito.</p>\
        <p>Ha sido un evento incre&iacuteble y te lo has pasado\
        genial, sin duda un d&iacutea que recordar&aacutes para\
        el resto de tu vida.</p>\
        <h1>FIN</h1>",
        {
            tags: ["final"],
            optionText: "Volver a casa",
            displayOrder: 1,
            canView: function (character, system, host) {
                return character.qualities.medicado > 0;
            }
        }
    ),

    "vuelta-no-medicado": new undum.SimpleSituation(
        "<h1>Un final inesperado</h1>\
        <p>Finalmente est&aacutes de vuelta en casa, tienes \
        el m&oacutevil repleto de v&iacutedeos del show\
        e incluso conseguiste hacerte una foto con Chuck Greene\
        tu concursante favorito.</p>\
        <p>Sin embargo, algo no va bien, estabas en la cama \
        cont&aacutendole a todos lo espectacular que ha sido \
        tu d&iacutea cuando, de repente, empiezas a sentir\
        un dolor tremendamente agudo que empieza en tu hombro \
        y se extiende a todo tu cuerpo.</p>\
        Finalmente te das cuenta: &laquo&iexclOh nol&excl;\
        &iexclHe estado tan nervioso con lo de hoy que he olvidado\
        inyectarme el Zombrexl&excl;&raquo\
        <p>La herida de tu hombro fue causada por una mordedura de zombi \
        hace medio a&ntildeo. Hasta ahora hab&iacuteas podido hacer vida \
        normal gracias al Zombrex, un medicamento que para el \
        proceso de &quotzombificaci&oacuten&quot. Sin embargo, \
        necesitas inyect&aacutertela cada 24h o si no, no hay vuelta \
        atr&aacutes.</p>\
        <p>Este es el fin, notas c&oacutemo poco a poco vas perdiendo \
        el control sobre tu cuerpo, te est&aacutes convirtiendo</p>\
        &laquoMe queda el saber que al menos he disfrutado mi \
        &uacuteltimo d&iacutea como &quotno no muerto&quot\
        &iquestQui&eacuten sabe&quest; Quiz&aacutes hasta \
        termine participando en el &quotT.I.R.&quot el a&ntildeo \
        que viene.&raquo\
        <img src='media/games/tutorial/zombie.png' class='float_right' width='50%' height='50%'>\
        <h1>FIN.</h1>",
        {
            tags: ["final"],
            optionText: "Volver a casa",
            displayOrder: 2,
            canView: function (character, system, host) {
                return character.qualities.medicado < 1;
            }
        }
    )    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    medicado: new undum.OnOffQuality(
        "Medicado", { priority: "0004", group: 'progress', onDisplay: "&#10003;" }
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    progress: new undum.QualityGroup('Progress', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.medicado = 0;
    system.setCharacterText("<p>Aqu&iacute aparecer&aacuten los atributos de tu personaje.</p>");
};
