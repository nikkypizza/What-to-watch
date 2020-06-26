const filmsArr = [{
  title: `Moonrise Kingdom`,
  genre: `Drama`,
  themeColor: `gold`,
  mainPosterUrl: `img/moonrise-kingdom.jpg`,
  backdropPosterUrl: `https://www.placecage.com/1000/355`,
  releaseYear: 2012,
  rating: 1.9,
  ratingsAmount: 1,
  plot: [`On the New England island of New Penzance, 12-year-old orphan Sam Shakusky is attending Camp Ivanhoe, a Khaki Scout summer camp led by Scout Master Randy Ward. Suzy Bishop, also 12, lives on the island with her parents Walt and Laura, both attorneys, and her three younger brothers in a house called Summer's End. Sam and Suzy, both introverted, intelligent, and mature for their age, meet in the summer of 1964 during a church performance of Noye's Fludde and became pen pals. The relationship becomes romantic over the course of their correspondence and they make a secret pact to reunite and run away together. In September 1965, they execute their plan. Sam escapes from Camp Ivanhoe while Suzy runs away from Summer's End. The pair meet at their rendezvous, hike, camp, and fish in the wilderness with the goal of reaching a secluded cove on the island.`],
  director: `Wes Anderson`,
  actors: [`Bill Murray`, `Jude Law`, `Willem Dafoe`]
},
{
  title: `Seven Years in Tibet`,
  genre: `Drama`,
  themeColor: `seagreen`,
  mainPosterUrl: `img/seven-years-in-tibet.jpg`,
  backdropPosterUrl: `https://www.placecage.com/900/555`,
  releaseYear: 1997,
  rating: 10,
  ratingsAmount: 30000,
  plot: [`The book covers the escape of Harrer and his companion, Peter Aufschnaiter, from a British internment camp in India.[1] Harrer and Aufschnaiter then traveled across Tibet to Lhasa, the capital. Here they spent several years, and Harrer describes the contemporary Tibetan culture in detail. Harrer subsequently became a tutor and friend of the 14th Dalai Lama.`, `It has been said that the book "provided the world with a final glimpse of life in an independent Tibetan state prior to the Chinese invasion.`],
  director: `	Jean-Jacques Annaud`,
  actors: [`Brad Pitt`, `David Thewlis`]
},
{
  title: `Midnight Special`,
  genre: `sci-fi`,
  themeColor: `rebeccapurple`,
  mainPosterUrl: `img/midnight-special.jpg`,
  backdropPosterUrl: `https://www.placecage.com/1000/555`,
  releaseYear: 2016,
  rating: 5.1,
  ratingsAmount: 240000,
  plot: [`In a motel, Roy Tomlin and his friend Lucas watch an AMBER Alert for 8-year-old Alton Meyer and his reported abductor, Roy, while the boy reads on the floor.`],
  director: `Jeff Nichol`,
  actors: [`Bill Murray`]
},
{
  title: `War of the Worlds`,
  genre: `Drama`,
  themeColor: `firebrick`,
  mainPosterUrl: `img/war-of-the-worlds.jpg`,
  backdropPosterUrl: `https://www.placecage.com/555/555`,
  releaseYear: 2005,
  rating: 2.9,
  ratingsAmount: 20,
  plot: [`Divorced longshoreman Ray Ferrier works at a dock in Brooklyn, New York, and is estranged from his children: 10-year-old daughter Rachel, and teenage son Robbie. Ray's pregnant former wife, Mary Ann, drops them off at his house in Bayonne, New Jersey, on her way to visit her parents in Boston.`],
  director: `Steven Spielberg`,
  actors: [`Tom Cruise`]
},
{
  title: `Dardjeeling Limited`,
  genre: `Comedy-drama`,
  themeColor: `lime`,
  mainPosterUrl: `img/dardjeeling-limited.jpg`,
  backdropPosterUrl: `https://www.placecage.com/1000/156`,
  releaseYear: 2007,
  rating: 0,
  ratingsAmount: 0,
  plot: [`A businessman in India fails to catch his train—called "The Darjeeling Limited"—as it pulls out of a station; he is beaten to it by a younger man, Peter Whitman. Peter reunites with brothers Francis and Jack on board, the three having not seen each other since their father's funeral a year earlier.`, `Francis has recently survived a near-fatal motorcycle accident (leaving his face and head covered in bandages), and thus wishes to reconnect with his brothers on a journey of spiritual self-discovery. He is also secretly searching for their mother, whom the brothers have not seen in many years. With the help of his assistant Brendan, Francis draws up a strict itinerary for the trip and takes his brothers' passports to prevent them from getting off the train too early. The three also continue to grieve over their father's death: carrying bags and suitcases marked with his initials, along with other personal items that belonged to him.`],
  director: `Wes Anderson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
},
{
  title: `Orlando`,
  genre: `Drama`,
  themeColor: `brown`,
  mainPosterUrl: `img/orlando.jpg`,
  backdropPosterUrl: `https://www.placecage.com/400/300`,
  releaseYear: 1992,
  rating: 9.9,
  ratingsAmount: 21230,
  plot: [`The story begins in the Elizabethan era, shortly before the death of Queen Elizabeth I in 1603. On her deathbed, the Queen promises an androgynous young nobleman named Orlando a large tract of land and a castle built on it, along with a generous monetary gift; both Orlando and his heirs would keep the land and inheritance forever, but Elizabeth will bequeath it to him only if he assents to an unusual command: "Do not fade. Do not wither. Do not grow old." Orlando acquiesces and reposes in splendid isolation in the castle for a couple of centuries, during which time he dabbles in poetry and art. His attempts to befriend a celebrated poet, however, backfire when the poet ridicules his verse. Orlando then travels to Constantinople as English ambassador to the Ottoman Empire, and is almost killed in a diplomatic fracas. Waking up seven days later, he learns something startling: he has transformed into a woman.`],
  director: `Wes Anderson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
},
{
  title: `Mindhunter`,
  genre: `Crime thriller`,
  themeColor: `silver`,
  mainPosterUrl: `img/mindhunter.jpg`,
  backdropPosterUrl: `https://www.placecage.com/1000/555`,
  releaseYear: 2019,
  rating: 7,
  ratingsAmount: 340,
  plot: [`Mindhunter revolves around FBI agents Holden Ford (Jonathan Groff) and Bill Tench (Holt McCallany), along with psychologist Wendy Carr (Anna Torv), who operate the FBI's Behavioral Science Unit within the Training Division at the FBI Academy in Quantico, Virginia. They interview imprisoned serial killers to understand how they think, with the hope of applying this knowledge to solve ongoing cases.`],
  director: `Wes Anderson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
},
{
  title: `Snatch`,
  genre: `Drama`,
  themeColor: `skyblue`,
  mainPosterUrl: `img/snatch.jpg`,
  backdropPosterUrl: `https://www.stevensegallery.com/1000/500`,
  releaseYear: 2014,
  rating: 4,
  ratingsAmount: 240,
  plot: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Wes Anderson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
}
];

export default filmsArr;
