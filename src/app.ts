// Importáld be a HumanHero és TransformerHero osztályokat.
import {HumanHero} from "./hero";
import {TransformerHero} from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {id: 1, name: "A", sex: "male", age: 30, health: 15, },
    {id: 2, name: "B", sex: "female", age: 30, health: 25, },
    {id: 3, name: "C", sex: "male", age: 40, health: 35, },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {id: 1, name: "Mittomen", wings: 0, wheels: 4, clan: "Transformers" },
    {id: 2, name: "Izeke", wings: 2, wheels: 4, clan: "Transformers" },
    {id: 3, name: "Hogyishivjak", wings: 2, wheels: 0, clan: "Transformers" },
];