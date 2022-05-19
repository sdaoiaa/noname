var Level = require('../models/level');
var mongoose = require('mongoose');
const game = require('../models/game');
const user = require('../models/user');
const level = require('../models/level');
const trophy = require('../models/trophy');
const userc = require('../controllers/User');

/**
 * @method
 * @description Afegeix tots els nivells a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var startAdd = async (req, res, next) => {
    //Afegir nivells al joc 1
    let level01 = new Level({
        nLevel: 1,
        completed: false,
        difficulty: 'easy',
        gameInf: "<p>function greaterNum() {<br>&nbsp; &nbsp; var alcadaObstacle = 3;<br>&nbsp; &nbsp; var impulsSalt = 5;<br>&nbsp; &nbsp; if (<input type='text' name='userAnswer'>) {<br>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;Pots saltar!!&quot;;<br>&nbsp; &nbsp; } else {<br>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;Enano!!!&quot;;<br>&nbsp; &nbsp; }<br>}<br><br></p>",
        theory: "<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba. En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript. Donem-li un cop d&apos;ull a la sintaxi if...else m&eacute;s b&agrave;sica. </p> <p>if(condicio){ </p> <p>&nbsp;&nbsp;&nbsp;resultat que mostrar&agrave; si la condici&oacute; es verdadera. </p> <p>}else{ </p> <p>&nbsp;&nbsp;&nbsp;resultat que mostrar&agrave; si la condici&oacute; es falsa </p> <p>}</p><p>Anem analitzar la sintaxi de dalt! El primer que es veu &eacute;s la paraula if seguidament d&apos;uns par&egrave;ntesis. Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p> <ul> <li>&nbsp;== &rarr; igual&nbsp;</li> <li>!= &rarr; diferent&nbsp;</li> <li>&lt; &rarr; menor a&nbsp;</li> <li>&gt; &rarr; major a&nbsp;</li> <li>&lt;= &rarr; menor o igual a&nbsp;</li> <li>&gt;= &rarr; major o igual a&nbsp;</li> </ul> <p>Un conjunt de claus, en les quals tenim algun codi. La paraula else Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte. Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, si (if) la condici&oacute; retorna true, llavors executarem el codi A, sin&oacute; (else) executara el codi B.&nbsp;</p> <p>Sembla f&agrave;cil no?&nbsp;</p> <p>Posem-ho a prova!&nbsp;</p>",
        answer: ['alcadaObstacle<impulsSalt', 'impulsSalt>alcadaObstacle'],
    })
    await level01.save();

    let level02 = new Level({
        nLevel: 2,
        completed: false,
        difficulty: 'easy',
        gameInf: '<p>function isEvenorOdd(num) {<br>&nbsp; &nbsp; var attack = 6;</p><p>&nbsp; &nbsp; if(<input type="text" name="userAnswer">){<br>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;Pots saltar!!&quot;;<br>&nbsp; &nbsp; }else{<br>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;Enano!!!&quot;;<br>&nbsp; &nbsp; }<br>}</p>',
        theory: '<p>Has vist que no era tan dif&iacute;cil solucionar el primer codi, enhorabona!</p><p>No et preocupis que no augmentarem la dificultat en aquest nivell, sin&oacute; que anirem a assolir una mica m&eacute;s els coneixements que has pogut posar a prova en el nivell 1.</p><p>Com anem de matem&agrave;tiques?</p><p>Se&apos;t donen b&eacute;?</p><p>Esperem que si perqu&egrave; en aquest exercici no incrementarem la dificultat de codi, sin&oacute; que necessitar&agrave;s coneixements de matem&agrave;tiques.</p><p>Et proposo en el seg&uuml;ent exercici que em puguis dir si un n&uacute;mero &eacute;s parell o no!, si aconsegueixes que el n&uacute;mero sigui parell, passar&agrave;s al seg&uuml;ent nivell!</p><p>Per aquest exercici necessitarem de l&apos;operador %.</p><p>Sabem que si un n&uacute;mero dividit(%) entre dos, i el seu resultat &eacute;s 0, &eacute;s parell... M&eacute;s clar que l&apos;aigua impossible!!</p><p>Posem-ho a prova!</p>',
        answer: ['attack%2==0'],
        requiredLevels: [level01._id]
    })
    await level02.save();

    let level03 = new Level({
        nLevel: 3,
        completed: false,
        difficulty: 'easy',
        gameInf: '<p>function isValidNumber() {<br>&nbsp; &nbsp; var num = 3;</p> <p>&nbsp; &nbsp; if(<input type="text" name="userAnswer">){</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &ldquo;es un numero!&rdquo;;</p> <p>&nbsp; &nbsp; }else{</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &ldquo;no es un numero!!&rdquo;;</p> <p>&nbsp; &nbsp; }</p> <p>}</p>',
        theory: '<p>Anem a validar un numero!!&nbsp;</p> <p>com podem saber si una variable t&eacute; un valor numeric. Per aix&ograve; necessitem la funci&oacute; isNan(), que et comprova si una variable es numero o no. Anem a mirar un par d&rsquo;exemples abans de llen&ccedil;ar-nos a la piscina.</p> <ul> <li>isNaN(2); //False</li> <li>isNaN(&ldquo;3&rdquo;); //False</li> <li>isNaN(&ldquo;hola&rdquo;); // True</li> <li>!isNaN(2); // True</li> </ul> <p>En aquest &nbsp;exemples d&rsquo;adalt podem veure que quan conte un numero el resultat de la funci&oacute; es false, en canvi quan li posem una String, com es el &ldquo;hola&rdquo;, el resultat &eacute;s true. I si li posem una exclamaci&oacute; davant de la funci&oacute; tindra el valor contrari! es a dir, si ha de retornar true, retornara false, i viceversa.&nbsp;</p> <p>Intenta resoldre el seg&uuml;ent exercici que et proposem.</p>',
        answer: ['!isNaN(num)'],
        requiredLevels: [level01._id, level02._id]
    })
    await level03.save();

    let level04 = new Level({
        nLevel: 4,
        completed: false,
        difficulty: 'easy',
        gameInf: '<p>function maxNumber (a, b) {&nbsp;</p><p>&nbsp; &nbsp; const a = 6;&nbsp;</p><p>&nbsp; &nbsp; const b = 6;</p><p>&nbsp; &nbsp; &nbsp;if (<input type="text" name="text1">) { </p><p>&nbsp; &nbsp; &nbsp; &nbsp; return &ldquo;a &eacute;s m&eacute;s gran!!&rdquo;;&nbsp;</p><p>&nbsp; &nbsp; } else if (<input type="text" name="text2">) { </p><p>&nbsp; &nbsp; &nbsp; &nbsp; return &ldquo;b &eacute;s m&eacute;s gran!!&rdquo;;&nbsp;</p><p>&nbsp; &nbsp; } else {&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; return &ldquo;s&oacute;n iguals!!&rdquo;;&nbsp;</p><p>&nbsp; &nbsp; }&nbsp;</p><p>}</p>',
        theory: '<p>Us recordeu que fa un parell de nivells vam jugar amb els comparadors? Mir&agrave;vem quin dels dos n&uacute;meros era m&eacute;s gran i decid&iacute;em si pod&iacute;em saltar o no, heu pensat que passaria si les dues al&ccedil;ades s&oacute;n iguals?<br>En aquest nivell tenint dos n&uacute;meros, comprovarem quin dels dos &eacute;s el m&eacute;s gran i per conseq&uuml;&egrave;ncia quin &eacute;s el petit... O si s&oacute;n iguals.<br>Fins ara hem vist els if i els else, aix&ograve; vol dir que les coses seran blanques o negres, per&ograve; a la vida tenim grisos, per aix&ograve; existeixen els else if, que s&oacute;n un recurs on si no s&apos;ha complert la condici&oacute; anterior, comprovaran la seva pr&ograve;pia, i decidiran si entra o segueix cap al proper else if, o else.</p>',
        answer: ['a>bb>a', 'b<ab>a', 'a>ba<b', 'b<aa<b'],
        requiredLevels: [level01._id, level02._id, level03._id]
    })
    await level04.save();

    let level05 = new Level({
        nLevel: 5,
        completed: false,
        difficulty: 'easy',
        gameInf: '<p>function conduccio (majorEdat, carnetCaducat) {<br>&nbsp; &nbsp; &nbsp; const majorEdat = true;<br>&nbsp; &nbsp; &nbsp; const carnetVigent = false;<br>&nbsp; &nbsp; if (<input type="text" name="text1">) {<br>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;Pots conduir!!&quot;;<br>&nbsp; &nbsp; &nbsp; } else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return &quot;No pots conduir!!&quot;;<br>&nbsp; &nbsp; &nbsp; }<br>}</p>',
        theory: '<p>Els operadors l&ograve;gics comparen valors i retornen respostes booleanes (es a dir true o flase). Hi ha dos tipus d&apos;operadors l&ograve;gics AND i OR. Aquests operadors es representen amb &amp;&amp; (AND) i || (OR).<br><br>l&rsquo;AND compara dues expressions, &nbsp;i es retorna true si les dues expressions s&oacute;n true. Si una o totes dues expressions s&oacute;n false, la sent&egrave;ncia completa es retornar&agrave; com a false.<br><br>true &amp;&amp; true // retorna true<br>true &amp;&amp; false //retorna false<br>false &amp;&amp; false //retorna false<br><br>l&rsquo;OR es retorna com true si qualsevol de les dues expressions s&oacute;n true. Poden ser-ho totes dues, per&ograve; com que nom&eacute;s hi hagi una true, ja es suficient perqu&egrave; el resultat sigui true.<br><br>true || true // retorna true<br>true || false // retorna true<br>false || false // retorna false</p>',
        answer: ['majorEdat&&carnetVigent', 'carnetVigent&&majorEdat'],
        requiredLevels: [level01._id, level02._id, level03._id, level04._id]
    })
    await level05.save();

    let level06 = new Level({
        nLevel: 6,
        completed: false,
        difficulty: 'easy',
        gameInf: '<p>var Animal = &apos;Lle&oacute;&apos;;</p> <p>&nbsp;switch (Animal) {&nbsp;</p> <p>case &apos;<input type="text" name="text1">&rsquo;:</p> <p>&nbsp; &nbsp; return &lsquo;L&rsquo;elefant &eacute;s molt gran&rsquo;;</p> <p>break;&nbsp;</p> <p>case &lsquo;<input type="text" name="text2">&rsquo;:</p> <p>&nbsp; &nbsp; return &lsquo;Quin coll m&eacute;s llarg t&eacute; la girafa&rsquo;;&nbsp;</p> <p>break;&nbsp;</p> <p>case &apos;<input type="text" name="text3">&apos;:</p> <p>&nbsp; &nbsp; return &lsquo;el rinoceront pesa molt&rsquo;;</p> <p><input type="text" name="text4">;</p> <p>default:&nbsp;</p> <p>&nbsp; &nbsp; console.log(&apos;El rei Julien es un lemur.&apos;);&nbsp;</p> <p>}</p>',
        theory: '<p>La paraula switch es una forma d&rsquo;expressi&oacute; d&rsquo;un anidament multiple de instruccions if&hellip; else.<br>El seu us no pot considerarse, per tant, estrictament necessari, donat que sempre podra ser sustituida per l&rsquo;us de if. No obstant, a vegades resulta util al introduir eficencia i major claretat en el codi.<br>La sintaxi del switch sera:<br><br>switch (expressi&oacute;) {<br>&nbsp; &nbsp; case valor1:<br>&nbsp; &nbsp; &nbsp; &nbsp; instruccions;<br>&nbsp; &nbsp; &nbsp; &nbsp; break;<br>&nbsp; &nbsp; case valor 2:<br>&nbsp; &nbsp; &nbsp; &nbsp; instruccions;<br>&nbsp; &nbsp; &nbsp; &nbsp; break;<br>&nbsp; &nbsp; default:<br>&nbsp; &nbsp; &nbsp; &nbsp; sentencia;<br>}<br><br>Cada case sera l&rsquo;if de l&rsquo;expressi&oacute; introduida, i a dins dels cases podr&aacute;s introduir codi que es mostrara quan el valor de l&rsquo;expressi&oacute; i del case coincideixin.<br>Per exemple:</p><p><br>fruita = &lsquo;platan&rsquo;;<br>switch(fruita){<br>&nbsp; &nbsp; case &lsquo;poma&rsquo;:<br>&nbsp; &nbsp; &nbsp; &nbsp; return &lsquo;&Eacute;s una poma!!&rsquo;;<br>&nbsp; &nbsp; &nbsp; &nbsp; break;<br>&nbsp; &nbsp; case &lsquo;platan&rsquo;:<br>&nbsp; &nbsp; &nbsp; &nbsp; return &rsquo;&Eacute;s un platan!!&rsquo;;<br>&nbsp; &nbsp; &nbsp; &nbsp; break;<br>&nbsp; &nbsp; default:<br>&nbsp; &nbsp; &nbsp; &nbsp; return &lsquo;No es una fruita&rsquo;;<br>}</p><p><br>Podem veure que tenim una variable d&rsquo;una fruita, que la inicialitzem amb l&rsquo;String Platan. En el switch, passarem per cada case proposat, fins que hi trobi una coincidencia. Si coincideix l&rsquo;expressi&oacute; i el case, llavors entrar&agrave; dintre i executara les instruccions introduides, en aquest cas, &lsquo;&Eacute;s un platan!!&rsquo;<br><br>Despres d&rsquo;aquesta petita demostraci&oacute; &eacute;s hora de que et preparis per fer un case!!</p>',
        answer: 'elefantgirafarinocerontbreak',
        requiredLevels: [level01._id, level02._id, level03._id, level04._id, level05._id]
    })
    await level06.save();

    //Afegir nivells al joc 2
    let level11 = new Level({
        nLevel: 1,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
    })
    await level11.save();

    let level12 = new Level({
        nLevel: 2,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level11._id]
    })
    await level12.save();

    let level13 = new Level({
        nLevel: 3,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level11._id, level12._id]
    })
    await level13.save();

    let level14 = new Level({
        nLevel: 4,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level11._id, level12._id, level13._id]
    })
    await level14.save();

    //Afegir nivells al joc 3
    let level21 = new Level({
        nLevel: 1,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
    })
    await level21.save();

    let level22 = new Level({
        nLevel: 2,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level21._id]
    })
    await level22.save();

    let level23 = new Level({
        nLevel: 3,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level21._id, level22._id]
    })
    await level23.save();

    let level24 = new Level({
        nLevel: 4,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level21._id, level22._id, level23._id]
    })
    await level24.save();

    let level25 = new Level({
        nLevel: 5,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level21._id, level22._id, level23._id, level24._id]
    })
    await level25.save();

    //Afegir nivells al joc 4
    let level31 = new Level({
        nLevel: 1,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
    })
    await level31.save();

    let level32 = new Level({
        nLevel: 2,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level31._id]
    })
    await level32.save();

    let level33 = new Level({
        nLevel: 3,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level31._id, level32._id]
    })
    await level33.save();

    let level34 = new Level({
        nLevel: 4,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level31._id, level32._id, level33._id]
    })
    await level34.save();

    let level35 = new Level({
        nLevel: 5,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level31._id, level32._id, level33._id, level34._id]
    })
    await level35.save();

    //Afegir nivells al joc 5
    let level41 = new Level({
        nLevel: 1,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
    })
    await level41.save();

    let level42 = new Level({
        nLevel: 2,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level41._id]
    })
    await level42.save();

    let level43 = new Level({
        nLevel: 3,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level41._id, level42._id]
    })
    await level43.save();

    let level44 = new Level({
        nLevel: 4,
        completed: false,
        difficulty: 'easy',
        gameInf: 'if(<input name=\'userAnswer\' type=\'text\'>) {<br>resultat que mostrarà si la condicio es verdadera.<br>}else{<br>resultat que mostrarà si la condició es falsa.<br>}',
        theory: '<p>En qualsevol llenguatge de programaci&oacute;, el codi necessita realitzar decisions i portar a terme diferents accions depenen de diferents entrades. Per exemple, en un joc, si el n&uacute;mero de vides del jugador &eacute;s 0, llavors el joc s&apos;acaba.En aquests simples exercicis que et proposarem m&eacute;s endavant, explorarem com funcionen les declaracions condicionals en el llenguatge de JavaScript.</p><p>Donem-li un cop d&apos;ull a la sintaxi <b>if...else </b> m&eacute;s b&agrave;sica.</p><div class=\'border border-dark bg-dark text-light mx-5 mx-5 p-4\'><p>if ( condicio ) {</p><p> resultat que mostrar&agrave; si la condici&oacute; es verdadera.</p><p>} else {</p><p>resultat que mostrar&agrave; si la condici&oacute; es falsa</p><p>}</p></div><p>Anem analitzar la sintaxi de dalt!</p><ol><li><p>El primer que es veu &eacute;s la paraula <b>if</b> seguidament d&apos;uns par&egrave;ntesis.</p></li><li><p>Una condici&oacute; a provar, posada a dins dels par&egrave;ntesis. Aquesta condici&oacute; far&agrave; servir els operadors de comparaci&oacute; i retornar&agrave; un valor true o false</p></li><li><p>Un conjunt de claus, en les quals tenim algun codi.</p></li><li><p>La paraula <b>else</b></p></li><li><p>Un altre conjunt de claus, dintre de les quals tindr&agrave;s l&apos;altre codi si la primera condici&oacute; &eacute;s incorrecte.</p></li><li><p>Aquest codi &eacute;s f&agrave;cil de llegir, est&agrave; dient que, <b>si (if) </b>la condici&oacute; retorna <b>true</b>, llavors executarem el codi A, sin&oacute; <b>(else)</b> executara el codi B.</p></li></ol><p>Sembla f&agrave;cil no?<br>Posem-ho a prova!<br><br><br><br></p>',
        answer: '0',
        requiredLevels: [level41._id, level42._id, level43._id]
    })
    await level44.save();

    next();
}

/**
 * @method
 * @description Afegeix un Level amb l'informació dels inputs
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @returns {*} next redireccio
 */
var add = async (req, res) => {
    console.log(req.body)
    let error = false;
    let level, answer;
    let requiredLevels = new Array();
    let isValidForm = req.body.nLevel != "" && req.body.dif != undefined &&
        req.body.theory != "" && req.body.answer != "" && req.body.gameInf != "";
    if (!isValidForm) {
        error = true;
        res.render('./admin/addLevels', { error: error });
    } else {
        error = false;

        if (req.body.levels == undefined) {
            req.body.levels = [];
        }  

        if (req.body.levels.length == 24) {
            req.body.levels = [req.body.levels];
        }
        
        for (let i = 0; i < req.body.levels.length; i++) {
            console.log(req.body.levels)
            requiredLevels.push(await Level.findOne({ _id:req.body.levels[i]}).exec());
        }
        answer = req.body.answer.split('#');
        level = new Level({
            nLevel: req.body.nLevel,
            difficulty: req.body.dif,
            gameInf: req.body.gameInf,
            theory: req.body.theory,
            requiredLevels: requiredLevels,
            answer: answer
        })
        level.save()
        res.render('./admin/infoAdd', { error: error });
    }
}

/**
 * @method
 * @description Retorna tots els Nivells de la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var list = async (req, res, next) => {
    req.params.lista = await Level.find({});
    next();
}
/**
 * @method
 * @description Retorna el Levels de la base de dades amb l'id pasada per params
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var findLevel = async (req, res, next) => {
    try {
        let levelId = mongoose.Types.ObjectId(req.params.levelId);
        let actualLevel = await Level.findById(levelId);
        req.params.actualLevel = actualLevel;
        req.session.actualLevel = actualLevel;
        next();
    } catch (error) {
        res.render('error');
    }
}


/**
 * @method
 * @description Comprova que la resposta del usuari i la de la base de dades son iguals
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @returns {*} redireccio a playGame
 */
var checkAnswer = (req, res) => {
    // como comprovar si es correcto cuando hay mas de 1 input ?? como se cuantos inputs hay
    let resultUser = '';
    let answer = req.session.actualLevel.answer;
    let correctAnswer;

    Object.values(req.body).forEach(val => resultUser += val);
    resultUser = resultUser.trim();
    resultUser = resultUser.replace(/\s/g, '');

    // comprovar que el usuari ha afegit algo al input
    if (answer == undefined) {
        answer = ' ';
    }

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == resultUser) {
            res.render('playGame', {
                name: req.session.name,
                last: req.session.surname,
                image: req.session.image,
                error: false,
                level: req.session.actualLevel,
                correctAnswer: true,
                game: req.session.actualGame,
                games: req.params.games,
                gif: "/images/saltar.gif"
            })
            correctAnswer = true;
        }
    }

    if (!correctAnswer) {
        res.render('playGame', {
            name: req.session.name,
            last: req.session.surname,
            image: req.session.image,
            error: true,
            level: req.session.actualLevel,
            correctAnswer: false,
            game: req.session.actualGame,
            games: req.params.games,
            gif: "/images/NO.gif"
        })
    }
}

/**
 * @method
 * @description Pasar al proxim nivell
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var nextLevel = async (req, res, next) => {
    let actualLevel = parseInt(req.session.actualLevel.nLevel);
    //actualLevel += 1;
    let actualGame = req.session.actualGame;
    // let nextLevel = await Level.find({ nLevel: actualLevel }).exec()
    let nextLevel = actualGame.levels[actualLevel];
    let actTrophy, actUser;

    // comprovem si esta aquell nivell
    if (nextLevel == undefined) {
        req.session.lastLevel = { isLast: true, gameName: actualGame.name };

        actTrophy = await trophy.findOne({ game: mongoose.Types.ObjectId(actualGame._id) }).exec();
        actUser = await user.findOne({ email: req.session.email }).exec();

        await user.updateOne({ 'email': actUser.email }, { '$push': { 'trophies': actTrophy } })

        res.redirect('/games');
    } else {
        res.redirect('/play/' + actualGame._id + '/' + String(nextLevel._id));
    }
}

module.exports = {
    startAdd,
    add,
    list,
    findLevel,
    checkAnswer,
    nextLevel
}