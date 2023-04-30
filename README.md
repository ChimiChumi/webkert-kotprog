## Pár hasznos infó
### A választott témám egy orvos-páciens adminisztrációs felület, ahol a rendszerben vezethetjük az orvosok és páciens adatait, illetve orvosokat tudunk páciensekhez rendelni.

Belépés az adminisztrációs felülethez:
- Email: `admin@email.com`
- Jelszó: `admin123`


### Itt egy általam készített javítási vázlat, hátha segít átlátni:
- Fordítási hiba nincs - NINCS
- Futtatási hiba nincs - NINCS (van egy olyan ami az első refresh (F5) után eltűnik. Szerintem nem a kliens oldalról jelenik meg.)
- Firebase Hosting URL - OK (https://hospital-management-e25d5.web.app)
- Adatmodell definiálása - 2db typescript Interface (patient, doctor)
- Alkalmazás felbontása megfelelő számú komponensre - OK
- Reszponzív, mobile-first felület - telefonon nem
- Legalább 2 különböző attribútum direktíva használata - OK (FontWeightDirective, UnderlineDirective)
- Legalább 2 különböző strukturális direktíva használata - OK (*ngIf, *ngFor)
- Adatátadás szülő és gyermek komponensek között - pár @Input
- Legalább 10 különböző Material elem helyes használata - OK (17 db)
- Adatbevitel Angular form-ok segítségével megvalósítva - OK
- Legalább 1 saját Pipe osztály írása és használata - OK (telefonszámformatra pipeline osztály)
- Legalább 2 különböző Lifecycle Hook használata a teljes projektben - 1 (ngOnInit)
- CRUD műveletek mindegyike megvalósult (Promise, Observable használattal) - observable féléből csak a subscribe van több helyen
- CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek - OK
- Firestore adatbázis használata az adatokhoz - OK
- Legalább 2 komplex Firestore lekérdezés megvalósítása - NINCS
- Legalább 4 különböző route a különböző oldalak eléréséhez - OK (4-nél több)
- Legalább 2 route levédése azonosítással (AuthGuard) - OK (kilépés után nem tudunk átváltani egy bizonyos oldalra ha tudjuk az útvonalát. pl. `/dashboard/doctor` vagy `/dashboard/patient`)
