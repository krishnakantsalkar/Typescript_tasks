interface superpower {
  name: string;
  flight: string;
  superhuman_strength: string;
  shapeshifting?: string;
  human: true;
  rank: number;
}

let hero: superpower = {
  name: "All Might",
  flight: "no",
  superhuman_strength: "yes",
  human: true,
  rank: 1
};

console.log(hero.name);
console.log(hero.rank);
