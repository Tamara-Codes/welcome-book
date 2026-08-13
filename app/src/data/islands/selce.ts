import type { IslandContent } from '../content'
import type { Localized } from '../../i18n/types'
import { crikvenica } from './crikvenica'

/* ============================================================================
 *  LOCATION: Selce  (id: "selce")
 * ---------------------------------------------------------------------------
 *  A Selce-first guide. It covers the village's own everyday essentials and
 *  holiday highlights before adding only the few Crikvenica options Selce does
 *  not have itself (a large supermarket, sandy beach, aquarium and hospital).
 *  Shared Riviera entries are reused deliberately, so their translations and
 *  checked details stay in one place.
 * ========================================================================== */

function select<T extends { id: string }>(items: T[], ids: string[]): T[] {
  return ids.flatMap((id) => items.find((item) => item.id === id) ?? [])
}

/** Restaurant and activity cards link to Maps only; direct contact details
 * stay exclusively in the useful-contacts section. */
function mapsOnly<T extends { phone?: string; whatsapp?: string; website?: string }>(items: T[]): T[] {
  return items.map(({ phone: _phone, whatsapp: _whatsapp, website: _website, ...item }) => item as T)
}

/** Selce-specific copy is deliberately complete in every guest language. */
function t(en: string, hr: string, de: string, it: string, sl: string, pl: string, cs: string, hu: string, sk: string): Localized {
  return { en, hr, de, it, sl, pl, cs, hu, sk }
}

const sparShop = t('A large SPAR supermarket on Dražica with parking, an ATM, four self-checkouts, fresh fish and hot-food counters — the best Selce stop for a full grocery shop.', 'Veliki SPAR supermarket na Dražici s parkiralištem, bankomatom, četiri samoposlužne blagajne te odjelima svježe ribe i toplih jela — najbolji izbor u Selcu za cjelovitu kupnju.', 'Großer SPAR-Supermarkt in der Dražica mit Parkplatz, Geldautomat, vier Selbstbedienungskassen sowie Frischfisch- und Warmtheke — die beste Adresse in Selce für den kompletten Einkauf.', 'Grande supermercato SPAR in Dražica con parcheggio, bancomat, quattro casse self-service e banchi di pesce fresco e piatti caldi — la scelta migliore a Selce per una spesa completa.', 'Velik supermarket SPAR v Dražici s parkiriščem, bankomatom, štirimi samopostrežnimi blagajnami ter oddelkoma svežih rib in toplih jedi — najboljša izbira v Selcah za celoten nakup.', 'Duży supermarket SPAR przy Dražicy z parkingiem, bankomatem, czterema kasami samoobsługowymi oraz ladami ze świeżymi rybami i gorącymi daniami — najlepszy wybór w Selce na pełne zakupy.', 'Velký supermarket SPAR v Dražici s parkovištěm, bankomatem, čtyřmi samoobslužnými pokladnami a pulty s čerstvými rybami i hotovými teplými jídly — nejlepší volba v Selci pro kompletní nákup.', 'Nagy SPAR szupermarket a Dražicán parkolóval, bankautomatával, négy önkiszolgáló kasszával, friss halas és melegételes pulttal — Selcében ez a legjobb választás nagybevásárláshoz.', 'Veľký supermarket SPAR v Dražici s parkoviskom, bankomatom, štyrmi samoobslužnými pokladňami a pultmi s čerstvými rybami a teplými jedlami — najlepšia voľba v Selciach na kompletný nákup.')
const konzumShop = t('A convenient Konzum on the seafront promenade, useful for daily groceries, drinks and supplies while staying in the village centre.', 'Praktičan Konzum na šetnici uz more, koristan za svakodnevne namirnice, piće i potrepštine tijekom boravka u centru mjesta.', 'Praktischer Konzum an der Uferpromenade für tägliche Lebensmittel, Getränke und Besorgungen während des Aufenthalts im Ortszentrum.', 'Un comodo Konzum sul lungomare per la spesa quotidiana, bevande e necessità durante il soggiorno in centro.', 'Priročen Konzum na obalni promenadi za vsakodnevna živila, pijačo in potrebščine med bivanjem v središču kraja.', 'Wygodny Konzum przy nadmorskiej promenadzie na codzienne zakupy, napoje i najpotrzebniejsze rzeczy podczas pobytu w centrum.', 'Praktický Konzum na pobřežní promenádě pro každodenní nákup potravin, nápojů a potřeb během pobytu v centru.', 'Kényelmes Konzum a tengerparti sétányon mindennapi élelmiszerekhez, italokhoz és alapvető dolgokhoz a központi tartózkodás alatt.', 'Praktický Konzum na prímorskej promenáde na každodenné potraviny, nápoje a potreby počas pobytu v centre.')
const studenacCentre = t('A compact Studenac Market at Trg palih boraca, handy for quick essentials, cold drinks and a top-up shop in the centre of Selce.', 'Manji Studenac Market na Trgu palih boraca, praktičan za brzu kupnju osnovnih namirnica, hladnih pića i nadopunu zaliha u centru Selca.', 'Kompakter Studenac Market am Trg palih boraca — praktisch für das Nötigste, kalte Getränke und einen schnellen Einkauf im Zentrum von Selce.', 'Compatto Studenac Market in Trg palih boraca, pratico per l’essenziale, bevande fredde e una spesa veloce nel centro di Selce.', 'Manjši Studenac Market na Trgu palih boraca, priročen za osnovne potrebščine, hladne pijače in hiter nakup v središču Selc.', 'Niewielki Studenac Market przy Trgu palih boraca, wygodny na podstawowe zakupy, zimne napoje i szybkie uzupełnienie zapasów w centrum Selce.', 'Menší Studenac Market na Trgu palih boraca, vhodný pro základní potřeby, studené nápoje a rychlý nákup v centru Selce.', 'Kisebb Studenac Market a Trg palih boraca téren, praktikus alapvető dolgokhoz, hideg italokhoz és gyors bevásárláshoz Selce központjában.', 'Menší Studenac Market na Trgu palih boraca, praktický na základné potreby, studené nápoje a rýchly nákup v centre Selc.')
const studenacJesenova = t('A second Studenac Market on Jesenova Street, useful when you are staying toward the western side of Selce.', 'Drugi Studenac Market u Ulici Jesenova, praktičan ako boravite prema zapadnom dijelu Selca.', 'Ein zweiter Studenac Market in der Jesenova-Straße, praktisch bei einem Aufenthalt auf der Westseite von Selce.', 'Un secondo Studenac Market in via Jesenova, comodo se soggiornate sul lato occidentale di Selce.', 'Drugi Studenac Market v Ulici Jesenova, priročen, če bivate na zahodnem delu Selc.', 'Drugi Studenac Market przy ulicy Jesenova, wygodny, jeśli mieszkacie po zachodniej stronie Selce.', 'Druhý Studenac Market v ulici Jesenova, praktický při pobytu na západní straně Selce.', 'Egy második Studenac Market a Jesenova utcában, praktikus, ha Selce nyugati részén szállnak meg.', 'Druhý Studenac Market na Jesenovej ulici, praktický, ak bývate na západnej strane Selc.')
const malinaShop = t('A small greengrocer on the promenade for fresh fruit and vegetables — ideal for picking up seasonal produce close to the beach.', 'Mala trgovina voćem i povrćem na šetnici za svježe voće i povrće — idealna za sezonske namirnice blizu plaže.', 'Kleiner Obst- und Gemüseladen an der Promenade für frisches Obst und Gemüse — ideal für saisonale Produkte nahe dem Strand.', 'Piccolo negozio di frutta e verdura sul lungomare, ideale per prodotti freschi e di stagione vicino alla spiaggia.', 'Majhna trgovina s sadjem in zelenjavo na promenadi, idealna za sveže sezonske pridelke blizu plaže.', 'Mały sklep z owocami i warzywami przy promenadzie, idealny na świeże sezonowe produkty blisko plaży.', 'Malý obchod s ovocem a zeleninou na promenádě, ideální pro čerstvé sezónní produkty blízko pláže.', 'Kis zöldség-gyümölcs üzlet a sétányon, ideális friss szezonális termékekhez a strand közelében.', 'Malý obchod s ovocím a zeleninou na promenáde, ideálny na čerstvé sezónne produkty blízko pláže.')
const mlinarShop = t('A bakery in the village centre for fresh bread and pastries, plus sandwiches, wraps and sweet treats for the beach or a day trip.', 'Pekarnica u centru mjesta za svježi kruh i peciva te sendviče, wrapove i slatke zalogaje za plažu ili izlet.', 'Bäckerei im Ortszentrum für frisches Brot und Gebäck sowie Sandwiches, Wraps und Süßes für Strand oder Ausflug.', 'Panetteria nel centro del paese per pane e prodotti da forno freschi, oltre a panini, wrap e dolci per la spiaggia o una gita.', 'Pekarna v središču kraja za svež kruh in pecivo ter sendviče, wrape in sladke prigrizke za plažo ali izlet.', 'Piekarnia w centrum miejscowości ze świeżym pieczywem, kanapkami, wrapami i słodkimi przekąskami na plażę lub wycieczkę.', 'Pekárna v centru obce s čerstvým chlebem a pečivem, sendviči, wrapy a sladkým občerstvením na pláž nebo výlet.', 'Pékség a falu központjában friss kenyérrel és péksüteménnyel, valamint szendvicsekkel, wrapekkel és édes finomságokkal strandoláshoz vagy kiránduláshoz.', 'Pekáreň v centre obce na čerstvý chlieb a pečivo, sendviče, wrapy a sladké občerstvenie na pláž alebo výlet.')
const localActivity = t('A Selce activity option. Check Google Maps for current availability and details.', 'Aktivnost u Selcu. Provjerite Google Maps za aktualnu dostupnost i detalje.', 'Eine Aktivität in Selce. Aktuelle Verfügbarkeit und Details finden Sie auf Google Maps.', 'Un’attività a Selce. Consultate Google Maps per disponibilità e dettagli aggiornati.', 'Dejavnost v Selcah. Za aktualno razpoložljivost in podrobnosti preverite Google Maps.', 'Atrakcja w Selce. Sprawdźcie aktualną dostępność i szczegóły w Google Maps.', 'Aktivita v Selci. Aktuální dostupnost a podrobnosti najdete na Google Maps.', 'Selcei programlehetőség. Az aktuális elérhetőséget és részleteket a Google Térképen ellenőrizze.', 'Aktivita v Selciach. Aktuálnu dostupnosť a podrobnosti nájdete v Google Maps.')

export const selce: IslandContent = {
  name: 'Selce',

  restaurants: [
    ...mapsOnly(select(crikvenica.restaurants, ['ulika', 'riva-selce', 'kantunic'])),
    { id: 'kruh-i-vino', name: 'Kruh i Vino', category: 'restaurant', description: t('A welcoming beachfront restaurant for Croatian and Mediterranean dishes — a reliable choice for fresh fish, calamari, tuna steak, risotto and daily specials, with vegetarian options too.', 'Ugodan restoran uz plažu za hrvatska i mediteranska jela — pouzdan izbor za svježu ribu, lignje, tuna steak, rižoto i dnevne specijalitete, uz vegetarijanske opcije.', 'Ein einladendes Restaurant direkt am Strand mit kroatischen und mediterranen Gerichten — eine verlässliche Wahl für frischen Fisch, Calamari, Thunfischsteak, Risotto und Tagesgerichte, auch mit vegetarischen Optionen.', 'Un accogliente ristorante sulla spiaggia con piatti croati e mediterranei — una scelta affidabile per pesce fresco, calamari, bistecca di tonno, risotto e specialità del giorno, anche con opzioni vegetariane.', 'Prijetna restavracija ob plaži s hrvaškimi in sredozemskimi jedmi — zanesljiva izbira za sveže ribe, lignje, tunin zrezek, rižoto in dnevne posebnosti, tudi z vegetarijanskimi možnostmi.', 'Przyjazna restauracja przy plaży z daniami kuchni chorwackiej i śródziemnomorskiej — pewny wybór na świeże ryby, kalmary, stek z tuńczyka, risotto i dania dnia, także z opcjami wegetariańskimi.', 'Příjemná restaurace u pláže s chorvatskými a středomořskými jídly — spolehlivá volba pro čerstvé ryby, kalamáry, tuňákový steak, rizoto i denní speciality, také s vegetariánskými možnostmi.', 'Barátságos, tengerparti étterem horvát és mediterrán fogásokkal — megbízható választás friss halhoz, tintahalhoz, tonhalsteakhez, rizottóhoz és napi ajánlatokhoz, vegetáriánus opciókkal is.', 'Príjemná reštaurácia pri pláži s chorvátskymi a stredomorskými jedlami — spoľahlivá voľba na čerstvé ryby, kalamáre, tuniakový steak, rizoto a denné špeciality, aj s vegetariánskymi možnosťami.'), maps: 'Restoran Kruh i Vino Selce', tags: ['seafood', 'familyFriendly'], gradient: 'from-sand-300 to-sea-500' },
    { id: 'bazeni-selce', name: 'Bistro Pizzeria Bazeni', category: 'pizzeria', description: t('A well-reviewed, easy-going pizzeria and café in Selce, known for generously topped pizza; a good-value choice for a casual meal, with risotto and calamari on the menu too.', 'Dobro ocijenjena, opuštena pizzerija i kafić u Selcu, poznata po bogato obloženim pizzama; dobar izbor za neformalni obrok, uz rižoto i lignje na jelovniku.', 'Eine gut bewertete, unkomplizierte Pizzeria und ein Café in Selce, bekannt für reichlich belegte Pizza; eine gute Wahl für eine lockere Mahlzeit, mit Risotto und Calamari auf der Karte.', 'Pizzeria e caffè informale e molto apprezzato a Selce, noto per pizze generosamente condite; una buona scelta per un pasto semplice, con risotto e calamari anche nel menu.', 'Dobro ocenjena, sproščena picerija in kavarna v Selcah, znana po bogato obloženih picah; dobra izbira za nezahteven obrok, na meniju pa so tudi rižota in lignji.', 'Dobrze oceniana, swobodna pizzeria i kawiarnia w Selce, znana z obficie dodatkami pokrytych pizz; dobry wybór na niezobowiązujący posiłek, z risotto i kalmarami również w menu.', 'Dobře hodnocená pohodová pizzerie a kavárna v Selci, známá pizzou s bohatou oblohou; dobrá volba pro nenucené jídlo, v nabídce jsou také rizoto a kalamáry.', 'Jól értékelt, laza pizzéria és kávézó Selcében, gazdagon feltétezett pizzáiról ismert; jó ár-értékű választás egy kötetlen étkezéshez, rizottóval és tintahallal is az étlapon.', 'Dobre hodnotená, pohodová pizzéria a kaviareň v Selce, známa bohato obloženou pizzou; dobrá voľba na neformálne jedlo, v ponuke je aj rizoto a kalamáre.'), maps: 'Bistro Pizzeria Bazeni Selce', tags: ['pizzeria', 'familyFriendly'], gradient: 'from-sea-300 to-sand-400' },
    { id: 'la-verde-selce', name: 'Restaurant La Verde', category: 'restaurant', description: t('A relaxed Selce restaurant for an easy Mediterranean dinner, with a friendly atmosphere that works well for couples and families.', 'Opušten restoran u Selcu za jednostavnu mediteransku večeru, s ugodnom atmosferom za parove i obitelji.', 'Ein entspanntes Restaurant in Selce für ein unkompliziertes mediterranes Abendessen, mit angenehmer Atmosphäre für Paare und Familien.', 'Un ristorante rilassato a Selce per una semplice cena mediterranea, con un’atmosfera piacevole per coppie e famiglie.', 'Sproščena restavracija v Selcah za preprosto sredozemsko večerjo, s prijetnim vzdušjem za pare in družine.', 'Spokojna restauracja w Selce na prostą śródziemnomorską kolację, z przyjazną atmosferą dla par i rodzin.', 'Pohodová restaurace v Selci pro nenáročnou středomořskou večeři, s příjemnou atmosférou pro páry i rodiny.', 'Laza étterem Selcében egy könnyed mediterrán vacsorához, kellemes hangulattal pároknak és családoknak.', 'Pohodová reštaurácia v Selce na jednoduchú stredomorskú večeru s príjemnou atmosférou pre páry aj rodiny.'), maps: 'Restaurant La Verde Selce', tags: ['familyFriendly'], gradient: 'from-sea-400 to-sea-600' },
    { id: 'sidro-selce', name: 'Restaurant & Pension Sidro', category: 'restaurant', description: t('A quieter, well-regarded restaurant on the edge of Selce for freshly prepared fish, calamari, pasta and meat dishes — a great option when you want a proper sit-down meal.', 'Mirniji, cijenjeni restoran na rubu Selca za svježe pripremljenu ribu, lignje, tjesteninu i mesna jela — odličan izbor kada želite pravi obrok za stolom.', 'Ein ruhigeres, gut bewertetes Restaurant am Rand von Selce für frisch zubereiteten Fisch, Calamari, Pasta und Fleischgerichte — ideal für ein richtiges Essen am Tisch.', 'Un ristorante tranquillo e apprezzato ai margini di Selce, con pesce fresco, calamari, pasta e piatti di carne preparati al momento — ottimo per una vera cena seduti al tavolo.', 'Mirnejša, dobro ocenjena restavracija na robu Selc za sveže pripravljene ribe, lignje, testenine in mesne jedi — odlična izbira za pravi obrok za mizo.', 'Spokojniejsza, ceniona restauracja na obrzeżach Selce ze świeżo przygotowywanymi rybami, kalmarami, makaronami i daniami mięsnymi — świetna opcja na porządny posiłek przy stole.', 'Klidnější, dobře hodnocená restaurace na okraji Selce s čerstvě připravenými rybami, kalamáry, těstovinami a masovými jídly — skvělá volba pro pořádné posezení u jídla.', 'Nyugodtabb, jól értékelt étterem Selce szélén frissen készített halételekkel, tintahallal, tésztákkal és húsételekkel — kitűnő választás egy igazi, asztalnál elfogyasztott étkezéshez.', 'Pokojnejšia, dobre hodnotená reštaurácia na okraji Selce s čerstvo pripravenými rybami, kalamármi, cestovinami a mäsovými jedlami — skvelá voľba na poriadne posedenie pri jedle.'), maps: 'Restaurant Sidro Selce', tags: ['seafood'], gradient: 'from-sea-500 to-sand-400' },
    { id: 'fiore-di-selce', name: 'Fiore di Selce', category: 'pizzeria', description: t('An Italian-style pizzeria for a slightly more polished pizza dinner, with a broad choice of classic and seafood-topped pizzas and wine to match.', 'Pizzerija u talijanskom stilu za malo profinjeniju večeru uz pizzu, sa širokim izborom klasičnih pizza i pizza s plodovima mora te vinom uz njih.', 'Eine Pizzeria im italienischen Stil für ein etwas eleganteres Pizzaessen, mit einer großen Auswahl an klassischen und Meeresfrüchte-Pizzen sowie passendem Wein.', 'Una pizzeria in stile italiano per una cena con pizza un po’ più curata, con un’ampia scelta di pizze classiche e ai frutti di mare, accompagnate da vino.', 'Picerija v italijanskem slogu za nekoliko bolj prefinjeno večerjo s pico, s široko izbiro klasičnih pic in pic z morskimi sadeži ter vinom.', 'Pizzeria w stylu włoskim na nieco bardziej dopracowaną kolację z pizzą, z szerokim wyborem klasycznych pizz i pizz z owocami morza oraz winem.', 'Pizzerie v italském stylu pro o něco elegantnější pizza večeři, s širokým výběrem klasických pizz i pizz s mořskými plody a vínem.', 'Olasz stílusú pizzéria egy kissé kifinomultabb pizzavacsorához, klasszikus és tengeri herkentyűs pizzák széles választékával, valamint hozzáillő borral.', 'Pizzéria v talianskom štýle na o niečo prepracovanejšiu večeru s pizzou, so širokým výberom klasických pízz aj pízz s morskými plodmi a vínom.'), maps: 'Fiore di Selce Pizzeria Italiana', tags: ['pizzeria'], gradient: 'from-sand-300 to-sea-400' },
    { id: 'palcica-selce', name: 'Pancake House Palčica', category: 'barCafe', description: t('A cheerful stop for big, soft pancakes with custom toppings, ice cream and chocolate treats — especially good for breakfast, brunch or a family dessert break.', 'Veselo mjesto za velike, mekane palačinke s dodacima po izboru, sladoled i čokoladne poslastice — posebno dobro za doručak, brunch ili obiteljski predah uz desert.', 'Ein fröhlicher Stopp für große, weiche Pfannkuchen mit Wunschbelag, Eis und Schokoladenspezialitäten — besonders gut für Frühstück, Brunch oder eine Dessertpause mit der Familie.', 'Una tappa allegra per pancake grandi e soffici con farciture a scelta, gelato e dolci al cioccolato — perfetta per colazione, brunch o una pausa dessert in famiglia.', 'Vesel postanek za velike, mehke palačinke z dodatki po izbiri, sladoled in čokoladne dobrote — posebej primeren za zajtrk, brunch ali družinski postanek za sladico.', 'Wesołe miejsce na duże, puszyste naleśniki z wybranymi dodatkami, lody i czekoladowe przysmaki — szczególnie dobre na śniadanie, brunch lub rodzinny deser.', 'Veselé místo pro velké, měkké palačinky s náplní podle přání, zmrzlinu a čokoládové dobroty — skvělé zejména na snídani, brunch nebo rodinnou zastávku na dezert.', 'Vidám hely nagy, puha, egyéni feltétekkel kérhető palacsintákhoz, fagylalthoz és csokoládés finomságokhoz — különösen jó reggelire, brunchra vagy családi desszertszünetre.', 'Veselé miesto na veľké, mäkké palacinky s náplňou podľa vlastného výberu, zmrzlinu a čokoládové dobroty — výborné najmä na raňajky, brunch alebo rodinnú prestávku na dezert.'), maps: 'Pancake House Palcica Selce', tags: ['familyFriendly'], gradient: 'from-sand-400 to-sea-500' },
    {
      id: 'miau-seafood-bar',
      name: 'MIAU Seafood & Bar',
      category: 'restaurant',
      description: t('A contemporary seaside spot in Selce for seafood, light lunches and drinks by the promenade.', 'Moderan lokal uz more u Selcu za plodove mora, lagani ručak i piće uz šetnicu.', 'Ein modernes Lokal am Meer in Selce für Meeresfrüchte, leichte Mittagessen und Getränke an der Promenade.', 'Un locale moderno sul mare a Selce per frutti di mare, pranzi leggeri e drink sul lungomare.', 'Sodoben lokal ob morju v Selcah za morske sadeže, lahka kosila in pijačo ob promenadi.', 'Nowoczesny lokal nad morzem w Selce, serwujący owoce morza, lekkie lunche i napoje przy promenadzie.', 'Moderní podnik u moře v Selci na mořské plody, lehké obědy a nápoje na promenádě.', 'Modern tengerparti hely Selcében tengeri ételekkel, könnyű ebéddel és italokkal a sétány mellett.', 'Moderné miesto pri mori v Selciach na morské plody, ľahký obed a nápoje pri promenáde.'),
      maps: 'MIAU Seafood & Bar Selce',
      tags: ['seafood'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'tunar-beach-bar-bistro',
      name: 'Tunar Beach & Bar & Bistro',
      category: 'barCafe',
      description: t('Beachside restaurant and bar in Selce — a convenient choice for pizza, grilled dishes, seafood and drinks after a swim.', 'Restoran i bar uz plažu u Selcu — praktičan izbor za pizzu, jela s roštilja, plodove mora i piće nakon kupanja.', 'Restaurant und Bar am Strand in Selce — praktisch für Pizza, Grillgerichte, Meeresfrüchte und ein Getränk nach dem Baden.', 'Ristorante e bar sulla spiaggia a Selce — una scelta comoda per pizza, grigliate, frutti di mare e drink dopo il bagno.', 'Restavracija in bar ob plaži v Selcah — priročna izbira za pico, jedi z žara, morske sadeže in pijačo po kopanju.', 'Restauracja i bar przy plaży w Selce — wygodny wybór na pizzę, dania z grilla, owoce morza i napój po kąpieli.', 'Restaurace a bar u pláže v Selci — praktická volba na pizzu, grilovaná jídla, mořské plody a drink po koupání.', 'Tengerparti étterem és bár Selcében — kényelmes választás pizzára, grillételekre, tengeri fogásokra és fürdés utáni italra.', 'Reštaurácia a bar pri pláži v Selciach — praktická voľba na pizzu, grilované jedlá, morské plody a nápoj po kúpaní.'),
      maps: 'Tunar Beach & Bar & Bistro Selce',
      tags: ['beachBar', 'familyFriendly'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'pizzeria-family-selce',
      name: 'Pizzeria Family',
      category: 'restaurant',
      description: t('A casual Selce pizzeria in the village centre, handy for an uncomplicated family meal.', 'Opuštena pizzerija u centru Selca, zgodna za jednostavan obiteljski obrok.', 'Ungezwungene Pizzeria im Zentrum von Selce — gut für ein unkompliziertes Familienessen.', 'Pizzeria informale nel centro di Selce, ideale per un semplice pasto in famiglia.', 'Sproščena picerija v središču Selc, primerna za preprost družinski obrok.', 'Swobodna pizzeria w centrum Selce, dobra na nieskomplikowany rodzinny posiłek.', 'Nenucená pizzerie v centru Selce, vhodná pro jednoduché rodinné jídlo.', 'Laza pizzéria Selce központjában, ideális egy egyszerű családi étkezéshez.', 'Neformálna pizzeria v centre Selc, vhodná na jednoduché rodinné jedlo.'),
      maps: 'Pizzeria Family Selce',
      tags: ['pizzeria', 'familyFriendly'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'restaurant-bonino-selce',
      name: 'Restaurant Bonino',
      category: 'restaurant',
      description: t('Waterfront restaurant in Selce with pizza, fish and Mediterranean classics on the menu.', 'Restoran uz more u Selcu s pizzom, ribom i mediteranskim klasicima na jelovniku.', 'Restaurant am Wasser in Selce mit Pizza, Fisch und mediterranen Klassikern auf der Speisekarte.', 'Ristorante sul lungomare a Selce con pizza, pesce e classici mediterranei nel menu.', 'Restavracija ob morju v Selcah s pico, ribami in sredozemskimi klasikami na jedilniku.', 'Restauracja nad wodą w Selce z pizzą, rybami i śródziemnomorskimi klasykami w menu.', 'Restaurace u moře v Selci s pizzou, rybami a středomořskou klasikou na jídelním lístku.', 'Vízparti étterem Selcében pizzával, hallal és mediterrán klasszikusokkal az étlapon.', 'Reštaurácia pri mori v Selciach s pizzou, rybami a stredomorskou klasikou v jedálnom lístku.'),
      maps: 'Restaurant Bonino Selce',
      tags: ['seafood', 'pizzeria'],
      gradient: 'from-sea-400 to-sea-700',
    },
    {
      id: 'bistro-polacha-selce',
      name: 'Bistro Polacha',
      category: 'restaurant',
      description: t('Relaxed Selce bistro for pizza, pasta and easy Mediterranean meals.', 'Opušteni bistro u Selcu za pizzu, tjesteninu i jednostavna mediteranska jela.', 'Entspanntes Bistro in Selce für Pizza, Pasta und unkomplizierte mediterrane Gerichte.', 'Bistrot rilassato a Selce per pizza, pasta e semplici piatti mediterranei.', 'Sproščen bistro v Selcah za pico, testenine in preproste sredozemske jedi.', 'Swobodne bistro w Selce na pizzę, makarony i proste dania śródziemnomorskie.', 'Uvolněné bistro v Selci na pizzu, těstoviny a jednoduchá středomořská jídla.', 'Laza bisztró Selcében pizzával, tésztákkal és könnyű mediterrán ételekkel.', 'Uvoľnené bistro v Selciach na pizzu, cestoviny a jednoduché stredomorské jedlá.'),
      maps: 'Bistro Polacha Selce',
      tags: ['pizzeria', 'familyFriendly'],
      gradient: 'from-sand-300 to-sea-500',
    },
    {
      id: 'toch-restaurant',
      name: 'TočH Restaurant',
      category: 'pizzeria',
      description: t('A top choice for Neapolitan-style pizza in a harbour setting, with burgers and pasta that make it easy for families too.', 'Jedan od najboljih izbora za napuljsku pizzu u ambijentu uz luku, uz burgere i tjesteninu koji odgovaraju i obiteljima.', 'Eine Top-Adresse für Pizza im neapolitanischen Stil in Hafenlage, mit Burgern und Pasta, die auch Familien begeistern.', 'Un’ottima scelta per pizza in stile napoletano in una cornice portuale, con burger e pasta adatti anche alle famiglie.', 'Odlična izbira za pico v neapeljskem slogu v pristaniškem ambientu, z burgerji in testeninami tudi za družine.', 'Świetny wybór na pizzę w stylu neapolitańskim w porcie, z burgerami i makaronami, które spodobają się także rodzinom.', 'Skvělá volba pro pizzu v neapolském stylu v přístavním prostředí, s burgery a těstovinami vhodnými i pro rodiny.', 'Kiváló választás nápolyi stílusú pizzára kikötői környezetben, hamburgerekkel és tésztákkal, így családoknak is ideális.', 'Výborná voľba na pizzu v neapolskom štýle v prístavnom prostredí, s burgermi a cestovinami vhodnými aj pre rodiny.'),
      maps: 'TočH Restaurant Selce',
      tags: ['pizzeria', 'familyFriendly'],
      gradient: 'from-sand-400 to-sea-500',
    },
    {
      id: 'kavana-anka',
      name: 'Kavana Anka',
      category: 'barCafe',
      description: t('A Selce highlight for family-made artisan gelato — their strawberry gelato won Croatia’s Grand Prix Gelato — as well as morning coffee, cakes and evening drinks.', 'Poseban selčki izbor za obiteljski, ručno rađeni gelato — njihov gelato od jagode osvojio je hrvatski Grand Prix Gelato — te za jutarnju kavu, kolače i večernje piće.', 'Ein Selce-Highlight für hausgemachtes handwerkliches Gelato — ihr Erdbeergelato gewann den kroatischen Grand Prix Gelato — sowie für Morgenkaffee, Kuchen und Abendgetränke.', 'Un punto forte di Selce per il gelato artigianale a conduzione familiare — il loro gelato alla fragola ha vinto il Grand Prix Gelato croato — oltre a caffè del mattino, dolci e drink serali.', 'Poseben selški izbor za družinski obrtni gelato — njihov jagodni gelato je osvojil hrvaški Grand Prix Gelato — pa tudi za jutranjo kavo, pecivo in večerne pijače.', 'Jedno z najciekawszych miejsc w Selce na rodzinne, rzemieślnicze gelato — ich truskawkowe gelato zdobyło chorwackie Grand Prix Gelato — a także poranną kawę, ciasta i wieczorne drinki.', 'Jedno z nejlepších míst v Selci na rodinné řemeslné gelato — jejich jahodové gelato získalo chorvatskou cenu Grand Prix Gelato — i na ranní kávu, zákusky a večerní drinky.', 'Selce egyik különlegessége a családi készítésű kézműves gelato — epres gelatójuk elnyerte a horvát Grand Prix Gelato díjat — valamint reggeli kávéhoz, süteményhez és esti italokhoz is remek.', 'Jedno z výnimočných miest v Selciach na rodinné remeselné gelato — ich jahodové gelato získalo chorvátsku cenu Grand Prix Gelato — aj na rannú kávu, koláče a večerné nápoje.'),
      maps: 'Kavana Anka Selce',
      tags: ['familyFriendly'],
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'caffe-bar-libero',
      name: 'Caffe Bar Libero',
      category: 'barCafe',
      description: t('A relaxed central spot for coffee, cocktails or a break after exploring Selce on foot.', 'Opušteno mjesto u centru za kavu, koktele ili predah nakon šetnje Selcem.', 'Entspannter Ort im Zentrum für Kaffee, Cocktails oder eine Pause nach einem Spaziergang durch Selce.', 'Un locale rilassato in centro per caffè, cocktail o una pausa dopo una passeggiata per Selce.', 'Sproščen lokal v središču za kavo, koktajle ali odmor po sprehodu po Selcah.', 'Spokojne miejsce w centrum na kawę, koktajle lub przerwę po spacerze po Selce.', 'Pohodové místo v centru na kávu, koktejly nebo odpočinek po procházce Selcí.', 'Laza, központi hely kávéra, koktélokra vagy egy pihenőre Selce felfedezése után.', 'Pohodové miesto v centre na kávu, koktaily alebo oddych po prechádzke po Selciach.'),
      maps: 'Caffe Bar Libero Selce',
      gradient: 'from-sea-300 to-sand-400',
    },
  ],

  beaches: [
    ...select(crikvenica.beaches, ['selce-bay']),
    { id: 'polaca-beach', name: t('Polača Beach', 'Plaža Polača', 'Strand Polača', 'Spiaggia di Polača', 'Plaža Polača', 'Plaża Polača', 'Pláž Polača', 'Polača strand', 'Pláž Polača'), category: 'barCafe', description: t('A smaller beach in Selce, close to the village centre.', 'Manja plaža u Selcu, blizu centra mjesta.', 'Ein kleinerer Strand in Selce, nahe dem Ortszentrum.', 'Una spiaggia più piccola a Selce, vicina al centro.', 'Manjša plaža v Selcah blizu središča kraja.', 'Mniejsza plaża w Selce, blisko centrum miejscowości.', 'Menší pláž v Selci blízko centra obce.', 'Kisebb strand Selcében, a településközpont közelében.', 'Menšia pláž v Selciach blízko centra obce.'), maps: 'Selce Beach Polača', tags: ['pebble'], gradient: 'from-sea-300 to-sea-500' },
    {
      id: 'poli-mora',
      name: t('Poli Mora Beach', 'Plaža Poli Mora', 'Strand Poli Mora', 'Spiaggia Poli Mora', 'Plaža Poli Mora', 'Plaża Poli Mora', 'Pláž Poli Mora', 'Poli Mora strand', 'Pláž Poli Mora'),
      category: 'barCafe',
      description: t('Selce’s best-known central pebble beach, with easy sea access, watersports and plenty of places for refreshments nearby.', 'Najpoznatija središnja šljunčana plaža u Selcu, s lakim ulazom u more, vodenim sportovima i brojnim mjestima za osvježenje u blizini.', 'Der bekannteste zentrale Kiesstrand von Selce mit leichtem Zugang zum Meer, Wassersport und vielen Möglichkeiten für Erfrischungen in der Nähe.', 'La più nota spiaggia centrale di ciottoli di Selce, con facile accesso al mare, sport acquatici e molti punti di ristoro nei dintorni.', 'Najbolj znana osrednja prodnata plaža v Selcah z enostavnim vstopom v morje, vodnimi športi in številnimi lokali v bližini.', 'Najsłynniejsza centralna kamienista plaża w Selce, z łatwym wejściem do morza, sportami wodnymi i licznymi miejscami na przekąskę w pobliżu.', 'Nejznámější centrální oblázková pláž v Selci se snadným vstupem do moře, vodními sporty a mnoha možnostmi občerstvení v okolí.', 'Selce legismertebb központi kavicsos strandja, könnyű tengeri bejutással, vízi sportokkal és sok közeli frissítőhellyel.', 'Najznámejšia centrálna kamienková pláž v Selciach s ľahkým vstupom do mora, vodnými športmi a množstvom občerstvenia v okolí.'),
      maps: 'Plaža Poli Mora Selce',
      tags: ['pebble', 'familyFriendly', 'parkingNearby'],
      gradient: 'from-sea-300 to-sea-600',
    },
    {
      id: 'rokan-beach',
      name: t('Rokan Beach', 'Plaža Rokan', 'Strand Rokan', 'Spiaggia Rokan', 'Plaža Rokan', 'Plaża Rokan', 'Pláž Rokan', 'Rokan strand', 'Pláž Rokan'),
      category: 'barCafe',
      description: t('Pebble beach just south of the centre, close to Poli Mora and the promenade — a good alternative when the main beach is busy.', 'Šljunčana plaža južno od centra, blizu Poli More i šetnice — dobra alternativa kada je glavna plaža puna.', 'Kiesstrand südlich des Zentrums, nahe Poli Mora und der Promenade — eine gute Alternative, wenn der Hauptstrand voll ist.', 'Spiaggia di ciottoli appena a sud del centro, vicino a Poli Mora e al lungomare — una buona alternativa quando la spiaggia principale è affollata.', 'Prodnata plaža južno od središča, blizu Poli More in promenade — dobra alternativa, ko je glavna plaža polna.', 'Kamienista plaża na południe od centrum, blisko Poli Mora i promenady — dobra alternatywa, gdy główna plaża jest zatłoczona.', 'Oblázková pláž jižně od centra, blízko Poli Mora a promenády — dobrá alternativa, když je hlavní pláž plná.', 'Kavicsos strand a központtól délre, Poli Mora és a sétány közelében — jó alternatíva, ha a főstrand zsúfolt.', 'Kamienková pláž južne od centra, blízko Poli Mora a promenády — dobrá alternatíva, keď je hlavná pláž plná.'),
      maps: 'Plaža Rokan Selce',
      tags: ['pebble', 'familyFriendly'],
      gradient: 'from-sea-400 to-sea-700',
    },
    {
      id: 'uvala-slana',
      name: t('Uvala Slana Beach', 'Plaža Uvala Slana', 'Strand Uvala Slana', 'Spiaggia Uvala Slana', 'Plaža Uvala Slana', 'Plaża Uvala Slana', 'Pláž Uvala Slana', 'Uvala Slana strand', 'Pláž Uvala Slana'),
      category: 'barCafe',
      description: t('A smaller Selce cove with clear water, close to the diving centre and the western end of the promenade.', 'Manja uvala u Selcu s bistrim morem, blizu ronilačkog centra i zapadnog dijela šetnice.', 'Eine kleinere Bucht in Selce mit klarem Wasser, nahe dem Tauchzentrum und dem westlichen Ende der Promenade.', 'Una piccola baia di Selce dall’acqua limpida, vicina al centro immersioni e all’estremità occidentale del lungomare.', 'Manjši zaliv v Selcah s čisto vodo, blizu potapljaškega centra in zahodnega konca promenade.', 'Mniejsza zatoka w Selce z czystą wodą, blisko centrum nurkowego i zachodniego końca promenady.', 'Menší záliv v Selci s čistou vodou, blízko potápěčského centra a západního konce promenády.', 'Kisebb, tiszta vizű öböl Selcében, a búvárközpont és a sétány nyugati vége közelében.', 'Menšia zátoka v Selciach s čistou vodou, blízko potápačského centra a západného konca promenády.'),
      maps: 'https://www.google.com/maps/place/Selce+-+Beach+Uvala+Slana/@45.1512238,14.721478,766m/data=!3m1!1e3!4m10!1m2!2m1!1sUvala+Slana+Selce!3m6!1s0x47637bdbd06ca16d:0x1a2b312895911ce9!8m2!3d45.1515301!4d14.7215141!15sChFVdmFsYSBTbGFuYSBTZWxjZZIBEXN1cGVyX3B1YmxpY19iYXRo4AEA!16s%2Fg%2F11cmczr5fy?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D',
      tags: ['pebble', 'crystalWater'],
      gradient: 'from-sea-500 to-sea-700',
    },
  ],

  activities: [
    ...mapsOnly(
      select(crikvenica.activities, [
        'watersport-selce',
        'mihuric-diving',
        'nb-sailing',
        'promenade-cycling',
      ]).map((activity) => {
        if (activity.id === 'watersport-selce') return { ...activity, name: 'Centar vodenih sportova' }
        if (activity.id === 'mihuric-diving') return { ...activity, name: 'Diving Center Mihurić' }
        if (activity.id === 'nb-sailing') return { ...activity, name: 'NB Sailing — najam plovila' }
        if (activity.id === 'promenade-cycling') return { ...activity, name: 'Šetnica uz more — šetnja i biciklizam' }
        return activity
      }),
    ),
    {
      id: 'terme-selce',
      name: 'Terme Selce',
      category: 'excursion',
      description: t('A well-known Selce centre for physical medicine, rehabilitation and sports medicine — useful for booked treatments or wellness-focused stays.', 'Poznati centar u Selcu za fizikalnu medicinu, rehabilitaciju i sportsku medicinu — koristan za dogovorene tretmane ili odmor usmjeren na wellness.', 'Ein bekanntes Zentrum in Selce für physikalische Medizin, Rehabilitation und Sportmedizin — praktisch für gebuchte Behandlungen oder einen Wellnessaufenthalt.', 'Un noto centro a Selce per medicina fisica, riabilitazione e medicina dello sport — utile per trattamenti prenotati o soggiorni orientati al benessere.', 'Znano središče v Selcah za fizikalno medicino, rehabilitacijo in športno medicino — uporabno za dogovorjene tretmaje ali wellness oddih.', 'Znane centrum w Selce medycyny fizykalnej, rehabilitacji i medycyny sportowej — przydatne przy zaplanowanych zabiegach lub pobycie wellness.', 'Známé centrum v Selci pro fyzikální medicínu, rehabilitaci a sportovní medicínu — vhodné pro objednané procedury nebo wellness pobyt.', 'Ismert selcei központ fizikoterápiára, rehabilitációra és sportorvoslásra — előre foglalt kezelésekhez vagy wellnessközpontú tartózkodáshoz.', 'Známe centrum v Selciach pre fyzikálnu medicínu, rehabilitáciu a športovú medicínu — užitočné pri objednaných procedúrach alebo wellness pobyte.'),
      maps: 'Terme Selce',
      gradient: 'from-sea-300 to-sand-400',
    },
    ...select(crikvenica.activities, ['aquarium-crikvenica', 'playground-promenade']).map((activity) => {
      if (activity.id === 'aquarium-crikvenica') return { ...activity, name: 'Akvarij Crikvenica' }
      return activity
    }),
    {
      id: 'pasa-selce',
      name: 'm/b PAŠA Selce',
      category: 'excursion',
      description: t(
        'A characterful 18-metre wooden excursion vessel, built in 1950 and based in Selce. Look for day trips, panoramic and night cruises, or arrange a private group charter with food and drinks on board.',
        'Karakteran drveni izletnički brod dug 18 metara, izgrađen 1950. godine i stacioniran u Selcu. Potražite dnevne izlete, panoramske i noćne vožnje ili dogovorite privatni najam za grupu uz hranu i piće na brodu.',
        'Ein charaktervolles 18 Meter langes hölzernes Ausflugsschiff aus dem Jahr 1950 mit Heimathafen Selce. Angeboten werden Tagesausflüge, Panorama- und Nachtfahrten sowie private Gruppencharter mit Essen und Getränken an Bord.',
        'Un caratteristico battello da escursione in legno di 18 metri, costruito nel 1950 e con base a Selce. Cercate gite diurne, crociere panoramiche e notturne, oppure organizzate un noleggio privato per gruppi con cibo e bevande a bordo.',
        'Značilna 18-metrska lesena izletniška ladja, zgrajena leta 1950 in zasidrana v Selcah. Na voljo so dnevni izleti, panoramske in nočne vožnje ali zasebni najem za skupine s hrano in pijačo na krovu.',
        'Klimatyczny, 18-metrowy drewniany statek wycieczkowy, zbudowany w 1950 roku i stacjonujący w Selce. Szukajcie rejsów dziennych, panoramicznych i nocnych albo zorganizujcie prywatny czarter dla grupy z jedzeniem i napojami na pokładzie.',
        'Charakteristická 18metrová dřevěná výletní loď, postavená v roce 1950 a kotvící v Selci. Nabízí denní výlety, panoramatické a noční plavby i soukromý pronájem pro skupiny s jídlem a nápoji na palubě.',
        'Egy hangulatos, 18 méteres fa kirándulóhajó, amely 1950-ben épült és Selcében állomásozik. Keressen nappali, panorámás és éjszakai hajókirándulásokat, vagy szervezzen privát csoportos bérlést étellel és itallal a fedélzeten.',
        'Charakteristická 18-metrová drevená výletná loď, postavená v roku 1950 a kotviaca v Selciach. Nájdete tu denné výlety, panoramatické a nočné plavby aj súkromný prenájom pre skupiny s jedlom a nápojmi na palube.',
      ),
      maps: 'm/b PAŠA Selce',
      gradient: 'from-sea-400 to-sea-600',
    },
    { id: 'jet-ski-selce', name: 'Najam jet-skija Selce', category: 'waterRental', description: localActivity, maps: 'Rent a Jet Ski Selce', gradient: 'from-sea-500 to-sea-700' },
    {
      id: 'mini-golf-selce',
      name: 'Mini golf — plaža Rokan',
      category: 'excursion',
      description: t(
        'A small, seasonal outdoor mini-golf course by Hotel and Paviljoni Slaven, near Rokan Beach. An easy family activity, with table tennis and children’s play facilities nearby.',
        'Mali sezonski vanjski mini-golf uz Hotel i Paviljone Slaven, blizu plaže Rokan. Jednostavna obiteljska aktivnost, uz stolni tenis i dječje sadržaje u blizini.',
        'Ein kleiner saisonaler Outdoor-Minigolfplatz bei Hotel und Paviljoni Slaven nahe dem Strand Rokan. Eine unkomplizierte Familienaktivität; Tischtennis und Spielangebote für Kinder sind in der Nähe.',
        'Un piccolo minigolf stagionale all’aperto presso Hotel e Paviljoni Slaven, vicino alla spiaggia di Rokan. Un’attività semplice per famiglie, con ping-pong e aree gioco per bambini nelle vicinanze.',
        'Majhen sezonski zunanji mini golf pri Hotelu in Paviljonih Slaven, blizu plaže Rokan. Preprosta družinska dejavnost z namiznim tenisom in otroškimi igrali v bližini.',
        'Niewielkie sezonowe pole do minigolfa na świeżym powietrzu przy Hotelu i Pawilonach Slaven, blisko plaży Rokan. Prosta atrakcja dla rodzin; w pobliżu są tenis stołowy i miejsca zabaw dla dzieci.',
        'Malé sezónní venkovní minigolfové hřiště u hotelu a pavilonů Slaven, blízko pláže Rokan. Nenáročná rodinná aktivita; poblíž je stolní tenis a dětské herní prvky.',
        'Kis szezonális szabadtéri minigolfpálya a Slaven Hotel és Pavilonok mellett, a Rokan strand közelében. Könnyed családi program, a közelben asztalitenisz és gyerekjátékok is vannak.',
        'Malé sezónne vonkajšie minigolfové ihrisko pri Hoteli a Pavilónoch Slaven, blízko pláže Rokan. Nenáročná rodinná aktivita; v blízkosti je stolný tenis a detské ihriská.',
      ),
      maps: 'Zabavni park Mini Golf Selce',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'love-path-crikvenica',
      name: 'Ljubavna cestica',
      category: 'excursion',
      description: t('An 8 km scenic walking route above Crikvenica, created in the 1930s, with natural views and cultural-historical landmarks along the way. A rewarding nearby excursion from Selce.', 'Slikovita šetnica duga 8 km iznad Crikvenice, izgrađena tridesetih godina 20. stoljeća, s prirodnim prizorima i kulturno-povijesnim znamenitostima uz put. Iz Selca je odličan izlet u blizini.', 'Ein 8 km langer malerischer Wanderweg oberhalb von Crikvenica aus den 1930er Jahren, mit Naturausblicken und kulturhistorischen Sehenswürdigkeiten. Ein lohnender Ausflug von Selce.', 'Un panoramico sentiero di 8 km sopra Crikvenica, realizzato negli anni Trenta, con scorci naturali e monumenti storico-culturali lungo il percorso. Una bella escursione da Selce.', 'Slikovita 8-kilometrska sprehajalna pot nad Crikvenico iz tridesetih let prejšnjega stoletja z naravnimi razgledi in kulturnozgodovinskimi znamenitostmi. Odličen bližnji izlet iz Selc.', 'Malownicza, 8-kilometrowa trasa spacerowa nad Crikvenicą, zbudowana w latach 30., z widokami na przyrodę i zabytkami kulturowo-historycznymi po drodze. Warto wybrać się tu z Selce.', 'Malebná 8 km dlouhá pěší trasa nad Crikvenicí, vybudovaná ve 30. letech, s přírodními výhledy a kulturně-historickými památkami po cestě. Příjemný výlet ze Selce.', 'Egy 8 km-es, Crikvenica feletti festői sétaút az 1930-as évekből, természeti látványosságokkal és kulturális-történelmi emlékekkel. Érdemes közeli kirándulás Selcéből.', 'Malebná 8 km dlhá pešia trasa nad Crikvenicou z 30. rokov 20. storočia s prírodnými výhľadmi a kultúrno-historickými pamiatkami. Príjemný blízky výlet zo Selc.'),
      maps: 'Ljubavna cestica Crikvenica',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'frankopan-routes',
      name: 'Putovima Frankopana',
      category: 'excursion',
      description: t('Explore the castles, towns and heritage of the Frankopan family, whose influence shaped Kvarner’s political, economic and cultural history for more than five centuries.', 'Istražite kaštele, gradove i baštinu Frankopana, plemićke obitelji koja je više od pet stoljeća oblikovala političku, gospodarsku i kulturnu povijest Kvarnera.', 'Entdecken Sie die Burgen, Orte und das Erbe der Familie Frankopan, deren Einfluss die politische, wirtschaftliche und kulturelle Geschichte von Kvarner über mehr als fünf Jahrhunderte prägte.', 'Scoprite castelli, città e patrimonio della famiglia Frankopan, la cui influenza ha plasmato per oltre cinque secoli la storia politica, economica e culturale del Quarnero.', 'Raziščite gradove, kraje in dediščino rodbine Frankopan, ki je več kot pet stoletij oblikovala politično, gospodarsko in kulturno zgodovino Kvarnerja.', 'Odkryjcie zamki, miasta i dziedzictwo rodu Frankopanów, którego wpływ przez ponad pięć stuleci kształtował polityczną, gospodarczą i kulturalną historię Kvarneru.', 'Prozkoumejte hrady, města a dědictví rodu Frankopanů, jehož vliv utvářel politické, hospodářské a kulturní dějiny Kvarneru více než pět století.', 'Fedezze fel a Frankopan család várainak, településeinek és örökségének világát, amely több mint öt évszázadon át formálta Kvarner politikai, gazdasági és kulturális történetét.', 'Objavte hrady, mestá a dedičstvo rodu Frankopanovcov, ktorého vplyv viac ako päť storočí formoval politické, hospodárske a kultúrne dejiny Kvarneru.'),
      maps: 'Putovima Frankopana Crikvenica',
      gradient: 'from-sand-400 to-sea-500',
    },
    {
      id: 'gradina-badanj',
      name: 'Gradina Badanj',
      category: 'excursion',
      description: t('A small but strategically positioned medieval fortification above the Dubračina stream near Crikvenica — the oldest monument of medieval fortification architecture in Vinodol.', 'Mala, ali strateški izvrsno smještena srednjovjekovna gradina uz tok Dubračine kraj Crikvenice — najstariji spomenik srednjovjekovnoga fortifikacijskog graditeljstva u Vinodolu.', 'Eine kleine, aber strategisch hervorragend gelegene mittelalterliche Befestigung oberhalb des Bachs Dubračina bei Crikvenica — das älteste Denkmal mittelalterlicher Befestigungsarchitektur in Vinodol.', 'Una piccola ma strategicamente eccellente fortificazione medievale sopra il torrente Dubračina vicino a Crikvenica — il più antico monumento dell’architettura fortificata medievale del Vinodol.', 'Majhna, vendar strateško odlično umeščena srednjeveška utrdba nad potokom Dubračina pri Crikvenici — najstarejši spomenik srednjeveške obrambne arhitekture v Vinodolu.', 'Niewielka, lecz strategicznie położona średniowieczna warownia nad potokiem Dubračina koło Crikvenicy — najstarszy zabytek średniowiecznej architektury obronnej w Vinodolu.', 'Malé, ale strategicky výborně položené středověké opevnění nad potokem Dubračina u Crikvenice — nejstarší památka středověké fortifikační architektury ve Vinodolu.', 'Kicsi, de stratégiailag kiváló helyen álló középkori erődítmény a Crikvenica melletti Dubračina-patak felett — Vinodol legrégebbi középkori erődítészeti emléke.', 'Malé, no strategicky výborne umiestnené stredoveké opevnenie nad potokom Dubračina pri Crikvenici — najstaršia pamiatka stredovekej fortifikačnej architektúry vo Vinodole.'),
      maps: 'Gradina Badanj Crikvenica',
      gradient: 'from-sand-500 to-sea-600',
    },
    {
      id: 'vinodol-hiking',
      name: 'Planinarske i pješačke staze',
      category: 'excursion',
      description: t('Choose a marked trail such as the Wave Trail, Karst and Stone Trail, Cliff Trail, Green Trail, Sky Trail, Roman Trail or Degenia Trail to explore the coast and Vinodol hinterland on foot.', 'Odaberite označenu stazu poput Staze valova, Staze krša i kuša, Staze litica, Zelene staze, Nebeske staze, Staze Rimljana ili Staze degenije te pješice istražite obalu i vinodolsko zaleđe.', 'Wählen Sie einen markierten Weg wie den Wellenweg, Karst- und Steinweg, Klippenweg, Grünen Weg, Himmelsweg, Römerweg oder Degenienweg und erkunden Sie die Küste und das Vinodol-Hinterland zu Fuß.', 'Scegliete un sentiero segnalato come il Sentiero delle onde, del Carso e della pietra, delle scogliere, verde, celeste, romano o della degenia per esplorare a piedi la costa e l’entroterra di Vinodol.', 'Izberite označeno pot, kot so Pot valov, Pot krasa in kamna, Pot klifov, Zelena pot, Nebeška pot, Rimska pot ali Pot degenije, ter peš raziščite obalo in vinodolsko zaledje.', 'Wybierzcie oznakowany szlak, taki jak Szlak Fal, Szlak Krasu i Kamienia, Szlak Klifów, Zielony Szlak, Niebiański Szlak, Szlak Rzymian lub Szlak Degenii, aby pieszo odkrywać wybrzeże i zaplecze Vinodolu.', 'Vyberte si značenou trasu, například Stezku vln, Stezku krasu a kamene, Stezku útesů, Zelenou stezku, Nebeskou stezku, Římskou stezku nebo Stezku degenie, a prozkoumejte pěšky pobřeží i vinodolské vnitrozemí.', 'Válasszon kijelölt útvonalat, például a Hullámok ösvényét, a Karszt és kő ösvényét, a Sziklafalak ösvényét, a Zöld ösvényt, az Ég ösvényét, a Rómaiak ösvényét vagy a Degenia ösvényt, és fedezze fel gyalog a partvidéket és Vinodol hátországát.', 'Vyberte si značenú trasu, napríklad Cestu vĺn, Cestu krasu a kameňa, Cestu útesov, Zelenú cestu, Nebeskú cestu, Cestu Rimanov alebo Cestu degenie, a pešo preskúmajte pobrežie i vinodolské vnútrozemie.'),
      maps: 'Planinarske staze Crikvenica',
      gradient: 'from-sea-500 to-sand-400',
    },
    {
      id: 'vinodol-cycling',
      name: 'Biciklizam oko Crikvenice i Vinodola',
      category: 'bikeRental',
      description: t('Road, trekking and mountain-bike routes run from the beaches to medieval villages, Frankopan castles and the cliffs above Vinodol — with a route for every pace.', 'Cestovne, trekking i brdske biciklističke rute vode od plaža do srednjovjekovnih naselja, frankopanskih kaštela i litica iznad Vinodola — za svaki tempo vožnje.', 'Rennrad-, Trekking- und Mountainbike-Routen führen von den Stränden zu mittelalterlichen Dörfern, Frankopan-Burgen und den Klippen oberhalb von Vinodol — für jedes Tempo gibt es eine passende Strecke.', 'Percorsi su strada, trekking e mountain bike portano dalle spiagge ai borghi medievali, ai castelli dei Frankopan e alle scogliere sopra Vinodol — un itinerario per ogni ritmo.', 'Cestne, treking in gorskokolesarske poti vodijo od plaž do srednjeveških vasi, frankopanskih gradov in pečin nad Vinodolom — za vsak tempo je na voljo primerna pot.', 'Trasy szosowe, trekkingowe i górskie prowadzą od plaż do średniowiecznych wiosek, zamków Frankopanów i klifów nad Vinodolem — każdy znajdzie trasę dla swojego tempa.', 'Silniční, trekkingové i horské cyklotrasy vedou od pláží ke středověkým vesnicím, frankopanským hradům a útesům nad Vinodolem — pro každé tempo se najde vhodná trasa.', 'Országúti, trekking- és hegyikerékpáros útvonalak vezetnek a strandoktól a középkori falvakig, a Frankopan-várakig és a Vinodol feletti sziklákig — minden tempóhoz akad útvonal.', 'Cestné, trekingové aj horské cyklotrasy vedú od pláží k stredovekým dedinám, frankopanským hradom a útesom nad Vinodolom — pre každé tempo sa nájde vhodná trasa.'),
      maps: 'Biciklističke staze Crikvenica',
      gradient: 'from-sea-400 to-sand-500',
    },
  ],

  shops: [
    {
      id: 'spar-selce', name: 'SPAR Supermarket', category: 'supermarket', description: sparShop,
      maps: 'SPAR Supermarket Selce', website: 'https://www.spar.hr/lokacije/spar-supermarket-selce-51266-draice-2', gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'konzum-selce',
      name: 'Konzum Selce',
      category: 'supermarket',
      description: konzumShop,
      maps: 'Konzum Selce',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'studenac-centre-selce',
      name: 'Studenac Market',
      category: 'supermarket',
      description: studenacCentre,
      maps: 'Studenac Market Trg palih boraca 4 Selce',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'studenac-jesenova-selce',
      name: 'Studenac Market',
      category: 'supermarket',
      description: studenacJesenova,
      maps: 'Studenac Market Jesenova 15 Selce',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'malina-selce',
      name: 'Malina — svježe voće i povrće',
      category: 'grocery',
      description: malinaShop,
      maps: 'Fresh fruits and vegetables Malina Selce',
      gradient: 'from-sand-400 to-sea-500',
    },
    {
      id: 'mlinar-selce',
      name: 'Mlinar',
      category: 'bakery',
      description: mlinarShop,
      maps: 'Mlinar Selce Trg Palih Boraca',
      website: 'https://mlinar.hr/',
      gradient: 'from-sand-300 to-sea-400',
    },
  ],

  contacts: [
    ...select(crikvenica.contacts, ['emergency', 'ambulance']).map((contact, index) => ({
      ...contact,
      section: index === 0
        ? t('Emergency', 'Hitno', 'Notfall', 'Emergenza', 'Nujno', 'Nagłe przypadki', 'Nouzové případy', 'Vészhelyzet', 'Núdzové prípady')
        : undefined,
    })),
    {
      id: 'pharmacy-selce',
      labelKey: 'contacts.pharmacy',
      label: 'Ljekarna Škunca',
      phone: '+385 91 785 8625',
      maps: 'Ljekarna Škunca Selce',
      icon: 'pill',
      section: t('In Selce', 'U Selcu', 'In Selce', 'A Selce', 'V Selcah', 'W Selce', 'V Selci', 'Selcében', 'V Selciach'),
    },
    {
      id: 'terme-selce-contact',
      labelKey: 'contacts.medical',
      label: 'Poliklinika Terme Selce – Fizikalna Terapija i Rehabilitacija',
      phone: '+385 51 764 055',
      maps: 'Poliklinika Terme Selce Fizikalna Terapija i Rehabilitacija',
      icon: 'ambulance',
    },
    { id: 'info-centre-selce', labelKey: 'contacts.touristOffice', label: 'Turistički informativni centar Selce', phone: '+385 51 765 165', maps: 'Info centre Selce', website: 'https://www.rivieracrikvenica.com/', icon: 'compass' },
    {
      id: 'taxi-selce',
      labelKey: 'contacts.taxi',
      label: 'Taxi Crikvenica — usluga za Selce',
      phone: '+385 92 360 0085',
      maps: 'Taxi Selce',
      website: 'https://www.crikvenicataxi.com/EN/',
      icon: 'taxi',
    },
    ...select(crikvenica.contacts, ['thalassotherapia', 'tz-crikvenica']).map((contact, index) => ({
      ...contact,
      section: index === 0
        ? t('Nearby in Crikvenica', 'U blizini, u Crikvenici', 'In der Nähe in Crikvenica', 'Nelle vicinanze, a Crikvenica', 'V bližnji Crikvenici', 'W pobliskiej Crikvenicy', 'Nedaleko v Crikvenici', 'A közeli Crikvenicában', 'V neďalekej Crikvenici')
        : undefined,
      phone: contact.id === 'thalassotherapia'
        ? '+385 51 407 666'
        : '+385 51 241 051',
    })),
  ],

  arrival: {
    ...crikvenica.arrival,
    subtitle: t('Getting to Selce & around', 'Kako doći u Selce i kretati se', 'Anreise nach Selce & unterwegs', 'Come arrivare a Selce e spostarsi', 'Kako priti v Selce in se gibati po okolici', 'Jak dotrzeć do Selce i poruszać się po okolicy', 'Jak se dostat do Selce a pohybovat se po okolí', 'Utazás Selcébe és közlekedés', 'Ako sa dostať do Selc a pohybovať sa po okolí'),
    description: t('Selce is on the mainland coast, just south of Crikvenica. The nearest airport is Rijeka Airport on Krk, around 45 minutes away by car. The seafront promenade connects Selce with Crikvenica, and Arriva buses run along the coast.', 'Selce je na kopnu, južno od Crikvenice. Najbliža zračna luka je Zračna luka Rijeka na Krku, otprilike 45 minuta vožnje automobilom. Šetnica uz more povezuje Selce i Crikvenicu, a Arriva autobusi voze uz obalu.', 'Selce liegt an der Festlandküste südlich von Crikvenica. Der nächste Flughafen ist der Flughafen Rijeka auf Krk, etwa 45 Minuten mit dem Auto entfernt. Die Strandpromenade verbindet Selce mit Crikvenica, und Arriva-Busse fahren entlang der Küste.', 'Selce si trova sulla costa continentale, a sud di Crikvenica. L’aeroporto più vicino è quello di Rijeka sull’isola di Krk, a circa 45 minuti d’auto. Il lungomare collega Selce a Crikvenica e gli autobus Arriva percorrono la costa.', 'Selce leži na celinski obali južno od Crikvenice. Najbližje je letališče Rijeka na Krku, približno 45 minut vožnje z avtomobilom. Obalna promenada povezuje Selce in Crikvenico, avtobusi Arriva pa vozijo vzdolž obale.', 'Selce leży na wybrzeżu kontynentalnym, na południe od Crikvenicy. Najbliższe lotnisko to Rijeka na Krku, około 45 minut jazdy samochodem. Nadmorska promenada łączy Selce z Crikvenicą, a autobusy Arriva kursują wzdłuż wybrzeża.', 'Selce leží na pevninském pobřeží jižně od Crikvenice. Nejbližší je letiště Rijeka na Krku, asi 45 minut autem. Pobřežní promenáda spojuje Selce s Crikvenicí a autobusy Arriva jezdí podél pobřeží.', 'Selce a szárazföldi parton, Crikvenicától délre fekszik. A legközelebbi repülőtér a krki Rijekai repülőtér, autóval körülbelül 45 perc. A tengerparti sétány összeköti Selcét Crikvenicával, az Arriva buszok pedig a part mentén közlekednek.', 'Selce leží na pevninskom pobreží južne od Crikvenice. Najbližšie letisko je letisko Rijeka na Krku, asi 45 minút autom. Prímorská promenáda spája Selce s Crikvenicou a autobusy Arriva jazdia pozdĺž pobrežia.'),
  },

  arrivalLinks: crikvenica.arrivalLinks,
}
