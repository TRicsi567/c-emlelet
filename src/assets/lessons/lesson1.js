import images from 'assets/images/lesson1';

export default {
  id: 0,
  title: 'Pointers',
  difficulty: 'beginner',
  length: 3,
  description: 'Ebben a tutorialban belenézünk a függvényekbe',
  exampleCode: `
  int multiply(int a, int b)
  {
    return a * b;
  }`,
  textExplanations: [
    `Procedurális programozás: egy probléma részfeladatait megoldó
    tevékenységeket önálló egységekbe, ún. procedurákba (részprogram,
    makró, eljárás, függvény) szervezzük. A problémát megoldó folyamatot
    ezen procedurák közötti vezérlés-átadások (eljárások, függvények
    esetében hívások) láncolata mutatja meg.
    `,
    `Objektumelvű programozás: egy probléma megoldáshoz szükséges
    adatok egy-egy részét a hozzájuk kapcsolódó tevékenységekkel (az ún.
    metódusokkal) együtt egységekbe, ún. objektumokba zárjuk. A
    problémát megoldó folyamatot ezen objektumok metódusai közötti
    vezérlés-átadások (hívások vagy szignálok) jelöli ki.
    `,
    'Igen, ezek nem normális tutorialok :('
  ],
  visualExplanation: images
};
