const MOVIES = [
  { id: "dhurandhar", title: "Dhurandhar", year: 2025, genre: "Action", language: "Hindi", duration: "3h 34m", rating: 8.2, certificate: "A", category: "Bollywood", synopsis: "An undercover agent slips into Karachi's underworld to dismantle a terror network from the inside." },
  { id: "sanju", title: "Sanju", year: 2018, genre: "Biopic", language: "Hindi", duration: "2h 39m", rating: 7.7, certificate: "UA", category: "Bollywood", synopsis: "A father and a son walk through the scandals, addictions and comebacks of a film star's life." },
  { id: "dangal", title: "Dangal", year: 2016, genre: "Sports", language: "Hindi", duration: "2h 41m", rating: 8.3, certificate: "U", category: "Bollywood", synopsis: "A former wrestler trains his daughters to fight for a gold medal on the world stage." },
  { id: "pk", title: "PK", year: 2014, genre: "Comedy", language: "Hindi", duration: "2h 33m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "An alien stranded in India asks the questions everyone else is too polite to ask." },
  { id: "12th-fail", title: "12th Fail", year: 2023, genre: "Drama", language: "Hindi", duration: "2h 27m", rating: 8.7, certificate: "UA", category: "Bollywood", synopsis: "A student from a small town starts again from zero to crack the civil services exam." },
  { id: "ramayana-part-one", title: "Ramayana: Part One", year: 2026, genre: "Mythology", language: "Hindi", duration: "2h 45m", rating: 7.9, certificate: "UA", category: "Bollywood", synopsis: "The first chapter of the epic, from the birth of Rama to the road to Lanka." },
  { id: "sooryavansham", title: "Sooryavansham", year: 1999, genre: "Drama", language: "Hindi", duration: "2h 58m", rating: 6.5, certificate: "U", category: "Bollywood", synopsis: "A village patriarch and his son clash over duty, pride and the family name." },
  { id: "kis-kisko-pyaar-karoon", title: "Kis Kisko Pyaar Karoon", year: 2015, genre: "Comedy", language: "Hindi", duration: "2h 15m", rating: 5.7, certificate: "UA", category: "Bollywood", synopsis: "One man, three wives and a fourth girlfriend try to survive the same building." },
  { id: "hera-pheri", title: "Hera Pheri", year: 2000, genre: "Comedy", language: "Hindi", duration: "2h 36m", rating: 8.2, certificate: "U", category: "Bollywood", synopsis: "Three broke tenants answer a wrong number and land in a kidnapping plot." },
  { id: "3-idiots", title: "3 Idiots", year: 2009, genre: "Comedy", language: "Hindi", duration: "2h 50m", rating: 8.4, certificate: "U", category: "Bollywood", synopsis: "Three engineering students take on a college that rewards memory over curiosity." },
  { id: "sholay", title: "Sholay", year: 1975, genre: "Action", language: "Hindi", duration: "3h 24m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "A retired policeman hires two small time crooks to end a dacoit's rule." },
  { id: "ddlj", title: "Dilwale Dulhania Le Jayenge", year: 1995, genre: "Romance", language: "Hindi", duration: "3h 09m", rating: 8.0, certificate: "U", category: "Bollywood", synopsis: "A Europe trip turns into a quiet battle to win a girl's family over." },
  { id: "andaz-apna-apna", title: "Andaz Apna Apna", year: 1994, genre: "Comedy", language: "Hindi", duration: "2h 40m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "Two lazy heirs chase the same heiress and a bag of stolen money." },
  { id: "lagaan", title: "Lagaan", year: 2001, genre: "Drama", language: "Hindi", duration: "3h 44m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "A village stakes its land tax on a cricket match against the British officers." },
  { id: "gangs-of-wasseypur", title: "Gangs of Wasseypur", year: 2012, genre: "Crime", language: "Hindi", duration: "2h 40m", rating: 8.2, certificate: "A", category: "Bollywood", synopsis: "Coal, revenge and three generations of family rivalry in a small Bihar town." },
  { id: "queen", title: "Queen", year: 2013, genre: "Drama", language: "Hindi", duration: "2h 26m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "A jilted bride takes her honeymoon alone and finds her own opinions." },
  { id: "znmd", title: "Zindagi Na Milegi Dobara", year: 2011, genre: "Drama", language: "Hindi", duration: "2h 35m", rating: 8.2, certificate: "UA", category: "Bollywood", synopsis: "Three friends take a road trip across Spain and face the fears they packed." },
  { id: "barfi", title: "Barfi!", year: 2012, genre: "Romance", language: "Hindi", duration: "2h 31m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "A deaf and mute charmer and two women share a story told almost without words." },
  { id: "gully-boy", title: "Gully Boy", year: 2019, genre: "Drama", language: "Hindi", duration: "2h 33m", rating: 7.9, certificate: "UA", category: "Bollywood", synopsis: "A Dharavi student writes rap verses about the life around his street." },
  { id: "uri", title: "Uri: The Surgical Strike", year: 2019, genre: "War", language: "Hindi", duration: "2h 18m", rating: 8.2, certificate: "UA", category: "Bollywood", synopsis: "A special forces officer plans a measured reply to an attack across the border." },
  { id: "article-15", title: "Article 15", year: 2019, genre: "Crime", language: "Hindi", duration: "2h 10m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "A city cop is posted to a village where two girls have gone missing." },
  { id: "drishyam-hindi", title: "Drishyam", year: 2015, genre: "Thriller", language: "Hindi", duration: "2h 43m", rating: 8.2, certificate: "UA", category: "Bollywood", synopsis: "A cable operator builds an alibi for his family while the police close in." },
  { id: "tumbbad", title: "Tumbbad", year: 2018, genre: "Horror", language: "Hindi", duration: "1h 44m", rating: 8.2, certificate: "A", category: "Bollywood", synopsis: "A family guards a buried treasure that demands a price in every generation." },
  { id: "andhadhun", title: "Andhadhun", year: 2018, genre: "Thriller", language: "Hindi", duration: "2h 19m", rating: 8.2, certificate: "UA", category: "Bollywood", synopsis: "A blind pianist becomes the only witness to a murder he was never meant to see." },
  { id: "badhaai-ho", title: "Badhaai Ho", year: 2018, genre: "Comedy", language: "Hindi", duration: "2h 04m", rating: 7.9, certificate: "UA", category: "Bollywood", synopsis: "A grown son is mortified to learn his parents are expecting again." },
  { id: "stree", title: "Stree", year: 2018, genre: "Horror", language: "Hindi", duration: "2h 08m", rating: 7.5, certificate: "UA", category: "Bollywood", synopsis: "A town folklore about a spirit becomes a problem the men must solve together." },
  { id: "bhool-bhulaiyaa", title: "Bhool Bhulaiyaa", year: 2007, genre: "Comedy", language: "Hindi", duration: "2h 39m", rating: 7.4, certificate: "UA", category: "Bollywood", synopsis: "A psychiatrist arrives at a palace where a locked room is said to be haunted." },
  { id: "munna-bhai", title: "Munna Bhai M.B.B.S.", year: 2003, genre: "Comedy", language: "Hindi", duration: "2h 36m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "A street don joins medical college and treats patients with kindness instead of files." },
  { id: "taare-zameen-par", title: "Taare Zameen Par", year: 2007, genre: "Drama", language: "Hindi", duration: "2h 45m", rating: 8.3, certificate: "U", category: "Bollywood", synopsis: "A teacher notices what everyone else missed in a struggling eight year old." },
  { id: "swades", title: "Swades", year: 2004, genre: "Drama", language: "Hindi", duration: "3h 09m", rating: 8.2, certificate: "U", category: "Bollywood", synopsis: "A NASA engineer returns to his village and is asked to stay for a while." },
  { id: "chak-de-india", title: "Chak De! India", year: 2007, genre: "Sports", language: "Hindi", duration: "2h 33m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "A disgraced player coaches a women's hockey team nobody believes in." },
  { id: "bajrangi-bhaijaan", title: "Bajrangi Bhaijaan", year: 2015, genre: "Drama", language: "Hindi", duration: "2h 39m", rating: 8.0, certificate: "UA", category: "Bollywood", synopsis: "A kind hearted man walks a lost child back across a closed border." },
  { id: "k3g", title: "Kabhi Khushi Kabhie Gham", year: 2001, genre: "Drama", language: "Hindi", duration: "3h 30m", rating: 7.4, certificate: "U", category: "Bollywood", synopsis: "A family split by pride spends years waiting for one son to come home." },
  { id: "kal-ho-naa-ho", title: "Kal Ho Naa Ho", year: 2003, genre: "Romance", language: "Hindi", duration: "3h 06m", rating: 7.9, certificate: "U", category: "Bollywood", synopsis: "A cheerful neighbour quietly arranges a love story he cannot be part of." },
  { id: "jab-we-met", title: "Jab We Met", year: 2007, genre: "Romance", language: "Hindi", duration: "2h 18m", rating: 7.9, certificate: "U", category: "Bollywood", synopsis: "A runaway bride and a tired businessman get off the train at the wrong stop." },
  { id: "yjhd", title: "Yeh Jawaani Hai Deewani", year: 2013, genre: "Romance", language: "Hindi", duration: "2h 40m", rating: 7.2, certificate: "UA", category: "Bollywood", synopsis: "Four friends on a Himalayan trek grow apart and meet again years later." },
  { id: "dil-chahta-hai", title: "Dil Chahta Hai", year: 2001, genre: "Drama", language: "Hindi", duration: "3h 03m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "Three friends leave college with different ideas about love and loyalty." },
  { id: "rockstar", title: "Rockstar", year: 2011, genre: "Romance", language: "Hindi", duration: "2h 39m", rating: 7.7, certificate: "UA", category: "Bollywood", synopsis: "A musician chases heartbreak because that is where the songs come from." },
  { id: "devdas", title: "Devdas", year: 2002, genre: "Drama", language: "Hindi", duration: "3h 04m", rating: 7.5, certificate: "UA", category: "Bollywood", synopsis: "A man who cannot choose between two women drinks his way through both." },
  { id: "mughal-e-azam", title: "Mughal-e-Azam", year: 1960, genre: "Drama", language: "Hindi", duration: "3h 17m", rating: 8.1, certificate: "U", category: "Bollywood", synopsis: "An emperor and his son stand on opposite sides of a courtship." },
  { id: "anand", title: "Anand", year: 1971, genre: "Drama", language: "Hindi", duration: "2h 03m", rating: 8.6, certificate: "U", category: "Bollywood", synopsis: "A doctor befriends a terminally ill patient who refuses to be sad." },
  { id: "pyaasa", title: "Pyaasa", year: 1957, genre: "Drama", language: "Hindi", duration: "2h 26m", rating: 8.4, certificate: "U", category: "Bollywood", synopsis: "A rejected poet becomes famous only when everyone thinks he is dead." },
  { id: "chhichhore", title: "Chhichhore", year: 2019, genre: "Comedy", language: "Hindi", duration: "2h 23m", rating: 8.3, certificate: "UA", category: "Bollywood", synopsis: "A father tells his son about the losers who never stayed losers." },
  { id: "hindi-medium", title: "Hindi Medium", year: 2017, genre: "Comedy", language: "Hindi", duration: "2h 12m", rating: 7.8, certificate: "UA", category: "Bollywood", synopsis: "Parents try every trick to get their daughter into a school for the wealthy." },
  { id: "vicky-donor", title: "Vicky Donor", year: 2012, genre: "Comedy", language: "Hindi", duration: "2h 06m", rating: 7.8, certificate: "UA", category: "Bollywood", synopsis: "A young man is talked into a donation programme by a persuasive doctor." },
  { id: "piku", title: "Piku", year: 2015, genre: "Comedy", language: "Hindi", duration: "2h 03m", rating: 7.6, certificate: "UA", category: "Bollywood", synopsis: "A road trip with an ageing father argues its way from Delhi to Kolkata." },
  { id: "raazi", title: "Raazi", year: 2018, genre: "Thriller", language: "Hindi", duration: "2h 18m", rating: 7.7, certificate: "UA", category: "Bollywood", synopsis: "A young bride is sent across the border as a listener in a family at war." },
  { id: "talvar", title: "Talvar", year: 2015, genre: "Crime", language: "Hindi", duration: "2h 12m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "Two investigations of the same double murder reach two different conclusions." },
  { id: "masaan", title: "Masaan", year: 2015, genre: "Drama", language: "Hindi", duration: "1h 49m", rating: 8.1, certificate: "A", category: "Bollywood", synopsis: "Four lives meet on the ghats of Varanasi and look for a way forward." },
  { id: "special-26", title: "Special 26", year: 2013, genre: "Thriller", language: "Hindi", duration: "2h 24m", rating: 7.6, certificate: "UA", category: "Bollywood", synopsis: "A team poses as tax officers until a real raid starts asking questions." },
  { id: "jawan", title: "Jawan", year: 2023, genre: "Action", language: "Hindi", duration: "2h 49m", rating: 7.0, certificate: "UA", category: "Bollywood", synopsis: "A jailer and a soldier strike the same target from two different directions." },
  { id: "pathaan", title: "Pathaan", year: 2023, genre: "Action", language: "Hindi", duration: "2h 26m", rating: 5.9, certificate: "UA", category: "Bollywood", synopsis: "An exiled agent returns to stop a group from taking the whole country hostage." },
  { id: "war", title: "War", year: 2019, genre: "Action", language: "Hindi", duration: "2h 34m", rating: 6.5, certificate: "UA", category: "Bollywood", synopsis: "An agent is ordered to hunt down the mentor who trained him." },
  { id: "shershaah", title: "Shershaah", year: 2021, genre: "War", language: "Hindi", duration: "2h 15m", rating: 8.3, certificate: "UA", category: "Bollywood", synopsis: "The story of a Kargil officer and the girl he promised to come back to." },
  { id: "sardar-udham", title: "Sardar Udham", year: 2021, genre: "Drama", language: "Hindi", duration: "2h 44m", rating: 8.2, certificate: "A", category: "Bollywood", synopsis: "A revolutionary waits years in London for the one act he came to perform." },
  { id: "kahaani", title: "Kahaani", year: 2012, genre: "Thriller", language: "Hindi", duration: "2h 02m", rating: 8.1, certificate: "UA", category: "Bollywood", synopsis: "A pregnant woman searches Kolkata for a husband nobody else remembers." },

  { id: "rrr", title: "RRR", year: 2022, genre: "Action", language: "Telugu", duration: "3h 07m", rating: 7.8, certificate: "UA", category: "Regional", synopsis: "Two revolutionaries from different worlds become friends before they become enemies." },
  { id: "baahubali-the-beginning", title: "Baahubali: The Beginning", year: 2015, genre: "Action", language: "Telugu", duration: "2h 39m", rating: 8.0, certificate: "UA", category: "Regional", synopsis: "A young man raised by a waterfall climbs up to find the kingdom he came from." },
  { id: "baahubali-2", title: "Baahubali 2: The Conclusion", year: 2017, genre: "Action", language: "Telugu", duration: "2h 47m", rating: 8.2, certificate: "UA", category: "Regional", synopsis: "The answer to why a commander betrayed the king he once served." },
  { id: "kalki-2898-ad", title: "Kalki 2898 AD", year: 2024, genre: "Sci-Fi", language: "Telugu", duration: "3h 00m", rating: 7.0, certificate: "UA", category: "Regional", synopsis: "In a dying future city, a prophecy pulls a bounty hunter into an old myth." },
  { id: "pushpa-the-rise", title: "Pushpa: The Rise", year: 2021, genre: "Action", language: "Telugu", duration: "2h 59m", rating: 7.6, certificate: "UA", category: "Regional", synopsis: "A labourer builds a smuggling empire from the bottom of the red sandalwood trade." },
  { id: "vikram", title: "Vikram", year: 2022, genre: "Action", language: "Tamil", duration: "2h 55m", rating: 8.2, certificate: "UA", category: "Regional", synopsis: "A black ops investigation keeps finding the same unremarkable old man." },
  { id: "jailer", title: "Jailer", year: 2023, genre: "Action", language: "Tamil", duration: "2h 48m", rating: 7.0, certificate: "UA", category: "Regional", synopsis: "A retired jailer picks up his old methods when his son disappears." },
  { id: "96-tamil", title: "96", year: 2018, genre: "Romance", language: "Tamil", duration: "2h 38m", rating: 8.5, certificate: "U", category: "Regional", synopsis: "Two school sweethearts meet at a reunion and talk about the years between." },
  { id: "asuran", title: "Asuran", year: 2019, genre: "Action", language: "Tamil", duration: "2h 21m", rating: 8.4, certificate: "A", category: "Regional", synopsis: "A farmer hides his violent past to keep his youngest son out of it." },
  { id: "ponniyin-selvan", title: "Ponniyin Selvan: Part I", year: 2022, genre: "Historical", language: "Tamil", duration: "2h 47m", rating: 7.6, certificate: "UA", category: "Regional", synopsis: "Messengers, princes and rivals move across a Chola empire on the edge of a succession." },
  { id: "super-deluxe", title: "Super Deluxe", year: 2019, genre: "Drama", language: "Tamil", duration: "2h 56m", rating: 8.2, certificate: "A", category: "Regional", synopsis: "Four unrelated stories collide over one long day in Chennai." },
  { id: "kgf-chapter-1", title: "KGF: Chapter 1", year: 2018, genre: "Action", language: "Kannada", duration: "2h 35m", rating: 8.2, certificate: "UA", category: "Regional", synopsis: "A boy who promised his mother wealth grows up inside a gold mine." },
  { id: "kgf-chapter-2", title: "KGF: Chapter 2", year: 2022, genre: "Action", language: "Kannada", duration: "2h 48m", rating: 8.2, certificate: "UA", category: "Regional", synopsis: "The mine's new owner discovers that the throne comes with enemies." },
  { id: "kantara", title: "Kantara", year: 2022, genre: "Action", language: "Kannada", duration: "2h 28m", rating: 8.2, certificate: "UA", category: "Regional", synopsis: "A Kambala champion stands between his forest village and the forest department." },
  { id: "minnal-murali", title: "Minnal Murali", year: 2021, genre: "Action", language: "Malayalam", duration: "2h 40m", rating: 7.9, certificate: "UA", category: "Regional", synopsis: "Lightning gives a tailor extraordinary abilities and his rival an equal share." },
  { id: "manjummel-boys", title: "Manjummel Boys", year: 2024, genre: "Thriller", language: "Malayalam", duration: "2h 15m", rating: 8.3, certificate: "UA", category: "Regional", synopsis: "A group of friends fight to rescue one of their own from a cave." },
  { id: "premam", title: "Premam", year: 2015, genre: "Romance", language: "Malayalam", duration: "2h 36m", rating: 8.2, certificate: "U", category: "Regional", synopsis: "A young man falls in love at three very different ages." },
  { id: "drishyam-malayalam", title: "Drishyam", year: 2013, genre: "Thriller", language: "Malayalam", duration: "2h 40m", rating: 8.3, certificate: "U", category: "Regional", synopsis: "A cinema loving father protects his family with a story of his own." },

  { id: "the-dark-knight", title: "The Dark Knight", year: 2008, genre: "Action", language: "English", duration: "2h 32m", rating: 9.0, certificate: "UA", category: "Hollywood", synopsis: "A city's protector is tested by an opponent who wants nothing but chaos." },
  { id: "inception", title: "Inception", year: 2010, genre: "Sci-Fi", language: "English", duration: "2h 28m", rating: 8.8, certificate: "UA", category: "Hollywood", synopsis: "A thief enters dreams to plant an idea instead of stealing one." },
  { id: "interstellar", title: "Interstellar", year: 2014, genre: "Sci-Fi", language: "English", duration: "2h 49m", rating: 8.7, certificate: "UA", category: "Hollywood", synopsis: "A father flies through a wormhole to find a home for the people he left behind." },
  { id: "oppenheimer", title: "Oppenheimer", year: 2023, genre: "Biopic", language: "English", duration: "3h 00m", rating: 8.3, certificate: "A", category: "Hollywood", synopsis: "The physicist who built the bomb spends the rest of his life explaining it." },
  { id: "the-prestige", title: "The Prestige", year: 2006, genre: "Thriller", language: "English", duration: "2h 10m", rating: 8.5, certificate: "UA", category: "Hollywood", synopsis: "Two stage magicians turn a friendly rivalry into a lifelong war." },
  { id: "fight-club", title: "Fight Club", year: 1999, genre: "Drama", language: "English", duration: "2h 19m", rating: 8.8, certificate: "A", category: "Hollywood", synopsis: "An office worker and a soap salesman start a club with two rules." },
  { id: "the-matrix", title: "The Matrix", year: 1999, genre: "Sci-Fi", language: "English", duration: "2h 16m", rating: 8.7, certificate: "A", category: "Hollywood", synopsis: "A programmer learns the world is a simulation and someone built an exit." },
  { id: "the-terminator", title: "The Terminator", year: 1984, genre: "Sci-Fi", language: "English", duration: "1h 47m", rating: 8.1, certificate: "A", category: "Hollywood", synopsis: "A machine arrives from the future to erase a waitress from history." },
  { id: "terminator-2", title: "Terminator 2: Judgment Day", year: 1991, genre: "Sci-Fi", language: "English", duration: "2h 17m", rating: 8.6, certificate: "A", category: "Hollywood", synopsis: "A reprogrammed machine protects the boy the future is afraid of." },
  { id: "titanic", title: "Titanic", year: 1997, genre: "Romance", language: "English", duration: "3h 14m", rating: 7.9, certificate: "UA", category: "Hollywood", synopsis: "Two passengers from different decks fall in love on a ship with a deadline." },
  { id: "arrival", title: "Arrival", year: 2016, genre: "Sci-Fi", language: "English", duration: "1h 56m", rating: 7.9, certificate: "UA", category: "Hollywood", synopsis: "A linguist is asked to translate for visitors before the world loses patience." },
  { id: "transformers-rise-of-the-beasts", title: "Transformers: Rise of the Beasts", year: 2023, genre: "Sci-Fi", language: "English", duration: "2h 07m", rating: 6.0, certificate: "UA", category: "Hollywood", synopsis: "A new team of machines joins the fight for a device that can end the war." },
  { id: "avatar", title: "Avatar", year: 2009, genre: "Sci-Fi", language: "English", duration: "2h 42m", rating: 7.9, certificate: "UA", category: "Hollywood", synopsis: "A marine learns the language of a forest moon before he is sent to clear it." },
  { id: "avatar-the-way-of-water", title: "Avatar: The Way of Water", year: 2022, genre: "Sci-Fi", language: "English", duration: "3h 12m", rating: 7.5, certificate: "UA", category: "Hollywood", synopsis: "A family of Na'vi seeks shelter with the reef people and brings the war along." },
  { id: "avengers-endgame", title: "Avengers: Endgame", year: 2019, genre: "Action", language: "English", duration: "3h 01m", rating: 8.4, certificate: "UA", category: "Hollywood", synopsis: "The survivors go back through time to undo a snap." },
  { id: "avengers-doomsday", title: "Avengers: Doomsday", year: 2026, genre: "Action", language: "English", duration: "2h 45m", rating: 7.8, certificate: "UA", category: "Hollywood", synopsis: "The Avengers face a ruler who believes one world is not enough." },
  { id: "daredevil", title: "Daredevil", year: 2003, genre: "Action", language: "English", duration: "2h 13m", rating: 5.3, certificate: "UA", category: "Hollywood", synopsis: "A blind lawyer hears what the city is hiding and answers with his fists." },
  { id: "insidious", title: "Insidious", year: 2010, genre: "Horror", language: "English", duration: "1h 43m", rating: 6.8, certificate: "A", category: "Hollywood", synopsis: "A family discovers their son's sleep is not the problem." },
  { id: "manchester-by-the-sea", title: "Manchester by the Sea", year: 2016, genre: "Drama", language: "English", duration: "2h 17m", rating: 7.8, certificate: "A", category: "Hollywood", synopsis: "A handyman returns to the town and the accident he has been avoiding." },
  { id: "the-odyssey", title: "The Odyssey", year: 2026, genre: "Adventure", language: "English", duration: "2h 50m", rating: 8.0, certificate: "UA", category: "Hollywood", synopsis: "A soldier with a long way home meets monsters, weather and his own crew." },
  { id: "the-godfather", title: "The Godfather", year: 1972, genre: "Crime", language: "English", duration: "2h 55m", rating: 9.2, certificate: "A", category: "Hollywood", synopsis: "The youngest son of a crime family is drawn into the business he refused." },
  { id: "shawshank-redemption", title: "The Shawshank Redemption", year: 1994, genre: "Drama", language: "English", duration: "2h 22m", rating: 9.3, certificate: "A", category: "Hollywood", synopsis: "Two prisoners build a friendship across decades behind the same wall." },
  { id: "pulp-fiction", title: "Pulp Fiction", year: 1994, genre: "Crime", language: "English", duration: "2h 34m", rating: 8.9, certificate: "A", category: "Hollywood", synopsis: "Hitmen, a boxer and a diner robbery tell three stories out of order." },
  { id: "forrest-gump", title: "Forrest Gump", year: 1994, genre: "Drama", language: "English", duration: "2h 22m", rating: 8.8, certificate: "UA", category: "Hollywood", synopsis: "A man with no plan keeps walking into the middle of history." },
  { id: "gladiator", title: "Gladiator", year: 2000, genre: "Action", language: "English", duration: "2h 35m", rating: 8.5, certificate: "UA", category: "Hollywood", synopsis: "A betrayed general fights his way back to Rome with a sword and a name." },
  { id: "lotr-fellowship", title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genre: "Adventure", language: "English", duration: "2h 58m", rating: 8.9, certificate: "UA", category: "Hollywood", synopsis: "Nine companions leave the Shire carrying a ring that wants to be found." },
  { id: "lotr-return-of-the-king", title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Adventure", language: "English", duration: "3h 21m", rating: 9.0, certificate: "UA", category: "Hollywood", synopsis: "The last battle for Middle earth is fought while two hobbits climb a mountain." },
  { id: "jurassic-park", title: "Jurassic Park", year: 1993, genre: "Adventure", language: "English", duration: "2h 07m", rating: 8.2, certificate: "UA", category: "Hollywood", synopsis: "A preview weekend at a dinosaur park goes wrong exactly as warned." },
  { id: "the-lion-king", title: "The Lion King", year: 1994, genre: "Animation", language: "English", duration: "1h 28m", rating: 8.5, certificate: "U", category: "Hollywood", synopsis: "A young lion runs from his father's death and returns to claim the rock." },
  { id: "top-gun-maverick", title: "Top Gun: Maverick", year: 2022, genre: "Action", language: "English", duration: "2h 11m", rating: 8.2, certificate: "UA", category: "Hollywood", synopsis: "A test pilot trains the next batch for a mission with no margin." },
  { id: "mad-max-fury-road", title: "Mad Max: Fury Road", year: 2015, genre: "Action", language: "English", duration: "2h 00m", rating: 8.1, certificate: "A", category: "Hollywood", synopsis: "A truck, a desert and a chase that barely stops for two hours." },
  { id: "whiplash", title: "Whiplash", year: 2014, genre: "Drama", language: "English", duration: "1h 47m", rating: 8.5, certificate: "A", category: "Hollywood", synopsis: "A drummer and a teacher test how far practice can go before it breaks someone." },
  { id: "la-la-land", title: "La La Land", year: 2016, genre: "Romance", language: "English", duration: "2h 09m", rating: 8.0, certificate: "UA", category: "Hollywood", synopsis: "A jazz pianist and an actress choose between each other and the work." },
  { id: "parasite", title: "Parasite", year: 2019, genre: "Thriller", language: "Korean", duration: "2h 12m", rating: 8.5, certificate: "A", category: "World", synopsis: "One family slowly moves into the house and lives of another." },
  { id: "spider-man-no-way-home", title: "Spider-Man: No Way Home", year: 2021, genre: "Action", language: "English", duration: "2h 28m", rating: 8.2, certificate: "UA", category: "Hollywood", synopsis: "A spell to hide his identity brings visitors from other worlds instead." },
  { id: "dune", title: "Dune", year: 2021, genre: "Sci-Fi", language: "English", duration: "2h 35m", rating: 8.0, certificate: "UA", category: "Hollywood", synopsis: "A duke's son is handed a desert planet and a war over spice." },
  { id: "dune-part-two", title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", language: "English", duration: "2h 46m", rating: 8.5, certificate: "UA", category: "Hollywood", synopsis: "An exile joins the desert people and becomes the figure they were promised." },
  { id: "deadpool-and-wolverine", title: "Deadpool & Wolverine", year: 2024, genre: "Action", language: "English", duration: "2h 08m", rating: 7.6, certificate: "A", category: "Hollywood", synopsis: "Two heroes with a history are pulled into a cleanup of the multiverse." },
  { id: "john-wick", title: "John Wick", year: 2014, genre: "Action", language: "English", duration: "1h 41m", rating: 7.4, certificate: "A", category: "Hollywood", synopsis: "A retired hitman returns for one car and one dog." },
  { id: "the-batman", title: "The Batman", year: 2022, genre: "Action", language: "English", duration: "2h 56m", rating: 7.8, certificate: "A", category: "Hollywood", synopsis: "A detective in a cape follows a trail of riddles through a flooded city." },
  { id: "joker", title: "Joker", year: 2019, genre: "Drama", language: "English", duration: "2h 02m", rating: 8.4, certificate: "A", category: "Hollywood", synopsis: "A failed comedian finds an audience that finally laughs at the same things." },
  { id: "se7en", title: "Se7en", year: 1995, genre: "Crime", language: "English", duration: "2h 07m", rating: 8.6, certificate: "A", category: "Hollywood", synopsis: "Two detectives count down a killer's list of sins." },
  { id: "goodfellas", title: "Goodfellas", year: 1990, genre: "Crime", language: "English", duration: "2h 25m", rating: 8.7, certificate: "A", category: "Hollywood", synopsis: "A boy who always wanted to be a gangster learns what the job costs." },
  { id: "schindlers-list", title: "Schindler's List", year: 1993, genre: "Drama", language: "English", duration: "3h 15m", rating: 9.0, certificate: "A", category: "Hollywood", synopsis: "A factory owner spends his fortune buying people out of a list." },
  { id: "saving-private-ryan", title: "Saving Private Ryan", year: 1998, genre: "War", language: "English", duration: "2h 49m", rating: 8.6, certificate: "A", category: "Hollywood", synopsis: "A squad crosses occupied France to bring one soldier home." },
  { id: "the-green-mile", title: "The Green Mile", year: 1999, genre: "Drama", language: "English", duration: "3h 09m", rating: 8.6, certificate: "A", category: "Hollywood", synopsis: "A prison guard meets an inmate who can take pain out of the room." },
  { id: "silence-of-the-lambs", title: "The Silence of the Lambs", year: 1991, genre: "Thriller", language: "English", duration: "1h 58m", rating: 8.6, certificate: "A", category: "Hollywood", synopsis: "A trainee agent asks one killer for help catching another." },
  { id: "alien", title: "Alien", year: 1979, genre: "Horror", language: "English", duration: "1h 57m", rating: 8.5, certificate: "A", category: "Hollywood", synopsis: "A salvage crew answers a distress call and brings something aboard." },
  { id: "blade-runner-2049", title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", language: "English", duration: "2h 44m", rating: 8.0, certificate: "A", category: "Hollywood", synopsis: "A replicant hunter finds a record that should not exist." },
  { id: "everything-everywhere", title: "Everything Everywhere All at Once", year: 2022, genre: "Sci-Fi", language: "English", duration: "2h 19m", rating: 7.8, certificate: "A", category: "Hollywood", synopsis: "A laundromat owner audits her taxes and every version of her life." },
  { id: "into-the-spider-verse", title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation", language: "English", duration: "1h 57m", rating: 8.4, certificate: "UA", category: "Hollywood", synopsis: "A teenager learns that anyone can wear the mask, including several of them." },
  { id: "across-the-spider-verse", title: "Spider-Man: Across the Spider-Verse", year: 2023, genre: "Animation", language: "English", duration: "2h 20m", rating: 8.6, certificate: "UA", category: "Hollywood", synopsis: "A young hero disagrees with the rules that keep every world together." },
  { id: "wolf-of-wall-street", title: "The Wolf of Wall Street", year: 2013, genre: "Crime", language: "English", duration: "3h 00m", rating: 8.2, certificate: "A", category: "Hollywood", synopsis: "A stockbroker turns a garage firm into a party with a share price." },
  { id: "django-unchained", title: "Django Unchained", year: 2012, genre: "Western", language: "English", duration: "2h 45m", rating: 8.4, certificate: "A", category: "Hollywood", synopsis: "A freed slave and a bounty hunter ride south for one rescue." },
  { id: "shutter-island", title: "Shutter Island", year: 2010, genre: "Thriller", language: "English", duration: "2h 18m", rating: 8.2, certificate: "A", category: "Hollywood", synopsis: "Two marshals investigate a disappearance at a hospital for the criminally insane." },
  { id: "the-departed", title: "The Departed", year: 2006, genre: "Crime", language: "English", duration: "2h 31m", rating: 8.5, certificate: "A", category: "Hollywood", synopsis: "A cop inside the mob and a mole inside the police try to unmask each other." },
  { id: "skyfall", title: "Skyfall", year: 2012, genre: "Action", language: "English", duration: "2h 23m", rating: 7.8, certificate: "UA", category: "Hollywood", synopsis: "An agent presumed dead comes back to defend the people who wrote him off." },
  { id: "mission-impossible-fallout", title: "Mission: Impossible - Fallout", year: 2018, genre: "Action", language: "English", duration: "2h 27m", rating: 7.7, certificate: "UA", category: "Hollywood", synopsis: "A missing package sends a field team across three capitals in one week." },

  { id: "spirited-away", title: "Spirited Away", year: 2001, genre: "Fantasy", language: "Japanese", duration: "2h 05m", rating: 8.6, certificate: "U", category: "Anime", synopsis: "A girl takes a job in a bathhouse for spirits to bring her parents back." },
  { id: "your-name", title: "Your Name", year: 2016, genre: "Romance", language: "Japanese", duration: "1h 46m", rating: 8.4, certificate: "U", category: "Anime", synopsis: "Two teenagers keep waking up in each other's lives and bodies." },
  { id: "a-silent-voice", title: "A Silent Voice", year: 2016, genre: "Drama", language: "Japanese", duration: "2h 10m", rating: 8.1, certificate: "U", category: "Anime", synopsis: "A former bully looks for the classmate he once made life impossible for." },
  { id: "weathering-with-you", title: "Weathering with You", year: 2019, genre: "Romance", language: "Japanese", duration: "1h 52m", rating: 7.5, certificate: "U", category: "Anime", synopsis: "A runaway meets a girl who can clear the sky for a price." },
  { id: "my-neighbor-totoro", title: "My Neighbor Totoro", year: 1988, genre: "Fantasy", language: "Japanese", duration: "1h 26m", rating: 8.1, certificate: "U", category: "Anime", synopsis: "Two sisters move to the countryside and meet the forest's large quiet neighbour." },
  { id: "princess-mononoke", title: "Princess Mononoke", year: 1997, genre: "Fantasy", language: "Japanese", duration: "2h 13m", rating: 8.3, certificate: "UA", category: "Anime", synopsis: "A cursed prince walks into a war between an iron town and the gods of the forest." },
  { id: "howls-moving-castle", title: "Howl's Moving Castle", year: 2004, genre: "Fantasy", language: "Japanese", duration: "1h 59m", rating: 8.2, certificate: "U", category: "Anime", synopsis: "A girl turned old by a witch keeps house for a wizard who cannot stay still." },
  { id: "grave-of-the-fireflies", title: "Grave of the Fireflies", year: 1988, genre: "Drama", language: "Japanese", duration: "1h 29m", rating: 8.5, certificate: "U", category: "Anime", synopsis: "A brother and sister try to survive the last months of the war alone." },
  { id: "demon-slayer-mugen-train", title: "Demon Slayer: Mugen Train", year: 2020, genre: "Action", language: "Japanese", duration: "1h 57m", rating: 8.2, certificate: "UA", category: "Anime", synopsis: "A night train full of sleeping passengers is the perfect hunting ground." },
  { id: "demon-slayer-infinity-castle", title: "Demon Slayer: Infinity Castle", year: 2025, genre: "Action", language: "Japanese", duration: "2h 35m", rating: 8.6, certificate: "UA", category: "Anime", synopsis: "The demon hunters step into a fortress that rearranges itself at will." },
  { id: "jujutsu-kaisen-0", title: "Jujutsu Kaisen 0", year: 2021, genre: "Action", language: "Japanese", duration: "1h 45m", rating: 7.7, certificate: "UA", category: "Anime", synopsis: "A student haunted by a curse enrols in a school that teaches him to use it." },
  { id: "suzume", title: "Suzume", year: 2022, genre: "Fantasy", language: "Japanese", duration: "2h 02m", rating: 7.6, certificate: "U", category: "Anime", synopsis: "A girl closes doors across Japan before what is behind them gets out." },
  { id: "perfect-blue", title: "Perfect Blue", year: 1997, genre: "Thriller", language: "Japanese", duration: "1h 21m", rating: 8.0, certificate: "A", category: "Anime", synopsis: "A pop idol turns actress and loses track of which life is hers." },
  { id: "akira", title: "Akira", year: 1988, genre: "Sci-Fi", language: "Japanese", duration: "2h 04m", rating: 8.0, certificate: "A", category: "Anime", synopsis: "A biker gang in a rebuilt Tokyo meets a military experiment gone loose." },
  { id: "ghost-in-the-shell", title: "Ghost in the Shell", year: 1995, genre: "Sci-Fi", language: "Japanese", duration: "1h 23m", rating: 8.0, certificate: "A", category: "Anime", synopsis: "A cyborg officer hunts a hacker who edits human memories." },
  { id: "paprika", title: "Paprika", year: 2006, genre: "Sci-Fi", language: "Japanese", duration: "1h 30m", rating: 7.7, certificate: "A", category: "Anime", synopsis: "A therapist enters her patients' dreams and finds a stolen machine loose in them." },
  { id: "the-girl-who-leapt-through-time", title: "The Girl Who Leapt Through Time", year: 2006, genre: "Romance", language: "Japanese", duration: "1h 38m", rating: 7.7, certificate: "U", category: "Anime", synopsis: "A schoolgirl uses her new trick to fix small things until it stops being small." },
  { id: "wolf-children", title: "Wolf Children", year: 2012, genre: "Drama", language: "Japanese", duration: "1h 57m", rating: 8.1, certificate: "U", category: "Anime", synopsis: "A mother raises two half wolf children in a house at the edge of a forest." },
  { id: "the-boy-and-the-beast", title: "The Boy and the Beast", year: 2015, genre: "Fantasy", language: "Japanese", duration: "1h 59m", rating: 7.7, certificate: "U", category: "Anime", synopsis: "An orphan becomes the apprentice of a bear like fighter in another world." },
  { id: "end-of-evangelion", title: "The End of Evangelion", year: 1997, genre: "Sci-Fi", language: "Japanese", duration: "1h 27m", rating: 8.6, certificate: "A", category: "Anime", synopsis: "The last defence of the world ends inside the minds of the people defending it." },
  { id: "one-piece-film-red", title: "One Piece Film: Red", year: 2022, genre: "Action", language: "Japanese", duration: "1h 55m", rating: 7.0, certificate: "UA", category: "Anime", synopsis: "A singer with a worldwide audience turns her concert into a battlefield." },
  { id: "dragon-ball-super-broly", title: "Dragon Ball Super: Broly", year: 2018, genre: "Action", language: "Japanese", duration: "1h 40m", rating: 8.0, certificate: "UA", category: "Anime", synopsis: "A quiet stranger with the same blood as the heroes is pushed into a fight." },
  { id: "chainsaw-man-reze-arc", title: "Chainsaw Man - The Movie: Reze Arc", year: 2025, genre: "Action", language: "Japanese", duration: "1h 40m", rating: 8.3, certificate: "A", category: "Anime", synopsis: "A devil hunter falls for a girl from a bakery with a very sharp secret." },
  { id: "violet-evergarden-movie", title: "Violet Evergarden: The Movie", year: 2020, genre: "Drama", language: "Japanese", duration: "2h 20m", rating: 8.4, certificate: "U", category: "Anime", synopsis: "A letter writer searches for the person she has been writing to all along." },
  { id: "i-want-to-eat-your-pancreas", title: "I Want to Eat Your Pancreas", year: 2018, genre: "Romance", language: "Japanese", duration: "1h 48m", rating: 8.0, certificate: "UA", category: "Anime", synopsis: "A quiet boy becomes the only person who knows a classmate's secret." },
  { id: "maquia", title: "Maquia: When the Promised Flower Blooms", year: 2018, genre: "Fantasy", language: "Japanese", duration: "1h 55m", rating: 7.9, certificate: "U", category: "Anime", synopsis: "A long lived girl raises a human child she knows she will outlive." }
];

const POSTER_THEMES = [
  { bg: "#151b2b", ink: "#f2ead8", accent: "#c98a4b" },
  { bg: "#241416", ink: "#f4e7dd", accent: "#d1604a" },
  { bg: "#12211b", ink: "#eaf0e4", accent: "#8aa87a" },
  { bg: "#231430", ink: "#f0e6f2", accent: "#b47ad0" },
  { bg: "#1b1c1e", ink: "#eeeee8", accent: "#c7b071" },
  { bg: "#221c12", ink: "#f3ecdb", accent: "#d9a441" },
  { bg: "#101f27", ink: "#e6f0f2", accent: "#69a9b5" },
  { bg: "#2a1410", ink: "#f5e6d8", accent: "#d07a4a" },
  { bg: "#171a33", ink: "#e9e9f5", accent: "#7c86c9" },
  { bg: "#231a1a", ink: "#f2e5e0", accent: "#c4736d" },
  { bg: "#14201f", ink: "#e9f1ed", accent: "#7fb8a0" },
  { bg: "#1e1a15", ink: "#f1e9dc", accent: "#bfa07c" }
];

const POSTER_MOTIFS = [
  '<circle cx="322" cy="140" r="128" fill="none" stroke="ACC" stroke-width="1.4" opacity="0.34"/><circle cx="322" cy="140" r="82" fill="ACC" opacity="0.12"/>',
  '<rect x="252" y="0" width="118" height="600" fill="ACC" opacity="0.11"/><rect x="252" y="0" width="118" height="600" fill="none" stroke="ACC" opacity="0.24"/>',
  '<path d="M0 600 L400 0" stroke="ACC" stroke-width="1" opacity="0.22"/><path d="M70 600 L470 0" stroke="ACC" stroke-width="1" opacity="0.16"/><path d="M-70 600 L330 0" stroke="ACC" stroke-width="1" opacity="0.16"/>',
  '<path d="M190 600 V250 A150 150 0 0 1 340 100" fill="none" stroke="ACC" stroke-width="1.4" opacity="0.3"/><circle cx="340" cy="100" r="26" fill="ACC" opacity="0.2"/>',
  '<circle cx="200" cy="616" r="268" fill="ACC" opacity="0.09"/><circle cx="200" cy="616" r="206" fill="none" stroke="ACC" opacity="0.16"/>',
  '<g stroke="ACC" opacity="0.16"><path d="M300 0 V600"/><path d="M330 0 V600"/><path d="M360 0 V600"/><path d="M390 0 V600"/></g>',
  '<rect x="248" y="76" width="132" height="196" fill="none" stroke="ACC" opacity="0.3"/><rect x="270" y="98" width="132" height="196" fill="none" stroke="ACC" opacity="0.18"/>',
  '<path d="M0 470 Q200 330 400 470 L400 600 L0 600 Z" fill="ACC" opacity="0.14"/><path d="M0 470 Q200 330 400 470" fill="none" stroke="ACC" opacity="0.28"/>'
];

function escapeXML(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrapTitle(title, maxChars) {
  const words = String(title).split(" ");
  const lines = [];
  let line = "";

  words.forEach(function (word) {
    if (!line) {
      line = word;
    } else if ((line + " " + word).length <= maxChars) {
      line = line + " " + word;
    } else {
      lines.push(line);
      line = word;
    }
  });

  if (line) {
    lines.push(line);
  }

  return lines.slice(0, 4);
}

function buildPoster(movie, index) {
  const theme = POSTER_THEMES[(index * 5 + 3) % POSTER_THEMES.length];
  const motif = POSTER_MOTIFS[(index * 3 + 1) % POSTER_MOTIFS.length].replace(/ACC/g, theme.accent);
  const lines = wrapTitle(movie.title, 13);
  const longest = lines.reduce(function (max, line) {
    return Math.max(max, line.length);
  }, 1);
  const fontSize = Math.max(23, Math.min(45, Math.floor(330 / (longest * 0.52))));
  const lineHeight = Math.round(fontSize * 1.16);
  const blockTop = 268 - (lines.length * lineHeight) / 2;
  const titleMarkup = lines
    .map(function (line, lineIndex) {
      return (
        '<text x="34" y="' + Math.round(blockTop + lineIndex * lineHeight + fontSize * 0.78) + '" fill="' + theme.ink +
        '" font-family="Georgia, \'Times New Roman\', serif" font-size="' + fontSize + '" font-weight="700" letter-spacing="-0.5">' +
        escapeXML(line) + "</text>"
      );
    })
    .join("");

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">' +
    '<rect width="400" height="600" fill="' + theme.bg + '"/>' +
    motif +
    '<text x="34" y="52" fill="' + theme.accent + '" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="2.6">' +
    escapeXML(movie.language.toUpperCase()) + " &#183; " + movie.year + "</text>" +
    titleMarkup +
    '<path d="M34 512 H366" stroke="' + theme.ink + '" stroke-opacity="0.22" stroke-width="1"/>' +
    '<text x="34" y="540" fill="' + theme.ink + '" fill-opacity="0.72" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="2.2">' +
    escapeXML(movie.genre.toUpperCase()) + "</text>" +
    '<text x="34" y="564" fill="' + theme.ink + '" fill-opacity="0.38" font-family="Helvetica, Arial, sans-serif" font-size="10" letter-spacing="2">' +
    escapeXML(movie.certificate) + " &#183; CINEPASS CINEMAS</text>" +
    "</svg>";

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

MOVIES.forEach(function (movie, index) {
  const saved = typeof POSTERS !== "undefined" ? POSTERS[movie.id] : null;
  movie.poster = saved || buildPoster(movie, index);
});

const THEATRES = [
  "PVR Select City Walk, Saket",
  "INOX Nehru Place",
  "Cinepolis DLF Avenue, Saket",
  "MovieMax Rohini"
];

const SHOW_TIMES = ["10:30 AM", "01:15 PM", "04:40 PM", "07:20 PM", "10:00 PM"];

const SEAT_ROWS = ["A", "B", "C", "D", "E", "F"];
const SEATS_PER_ROW = 10;
const MAX_SEATS = 8;
const CONVENIENCE_FEE = 30;

const SEAT_TIERS = [
  { name: "Silver", rows: ["A", "B"], price: 200 },
  { name: "Gold", rows: ["C", "D"], price: 280 },
  { name: "Platinum", rows: ["E", "F"], price: 350 }
];

const STORAGE = {
  bookings: "cinepass_bookings",
  pending: "cinepass_pending",
  seats: "cinepass_seats"
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getMovie(movieId) {
  return MOVIES.find(function (movie) {
    return movie.id === movieId;
  });
}

function formatCurrency(amount) {
  return "\u20B9" + Number(amount).toLocaleString("en-IN");
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function formatDateLong(isoDate) {
  const parts = isoDate.split("-").map(Number);
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  return DAY_NAMES[date.getDay()] + ", " + parts[2] + " " + MONTH_NAMES[parts[1] - 1] + " " + parts[0];
}

function getBookings() {
  return readJSON(STORAGE.bookings, []);
}

function saveBookings(list) {
  writeJSON(STORAGE.bookings, list);
}

function getBookedMap() {
  return readJSON(STORAGE.seats, {});
}

function saveBookedMap(map) {
  writeJSON(STORAGE.seats, map);
}

function getShowKey(movieId, date, theatre, time) {
  return [movieId, date, theatre, time].join("::");
}

function hashString(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) % 1000003;
  }
  return hash;
}

function getSeededSeats(showKey) {
  const booked = [];
  SEAT_ROWS.forEach(function (row) {
    for (let seat = 1; seat <= SEATS_PER_ROW; seat++) {
      const seatId = row + seat;
      const hash = hashString(showKey + "::" + seatId);
      if (hash % 100 < 22) {
        booked.push(seatId);
      }
    }
  });
  return booked;
}

function getBookedSeats(movieId, date, theatre, time) {
  const showKey = getShowKey(movieId, date, theatre, time);
  const saved = getBookedMap()[showKey] || [];
  const seeded = getSeededSeats(showKey);
  return Array.from(new Set(seeded.concat(saved)));
}

function getSeatTier(seatId) {
  const row = seatId.charAt(0);
  return SEAT_TIERS.find(function (tier) {
    return tier.rows.indexOf(row) > -1;
  });
}

function getSeatPrice(seatId) {
  const tier = getSeatTier(seatId);
  return tier ? tier.price : 0;
}

function buildMovieCard(movie, index) {
  const card = document.createElement("article");
  card.className = "movie-card reveal";

  const posterLink = document.createElement("a");
  posterLink.className = "poster-wrap";
  posterLink.href = "booking.html?movie=" + encodeURIComponent(movie.id);
  posterLink.setAttribute("aria-label", "Book tickets for " + movie.title);

  const poster = document.createElement("img");
  poster.src = movie.poster;
  poster.alt = movie.title + " poster";
  poster.loading = "lazy";

  const rating = document.createElement("span");
  rating.className = "rating-badge";
  rating.textContent = "\u2605 " + movie.rating.toFixed(1);

  const cert = document.createElement("span");
  cert.className = "cert-badge";
  cert.textContent = movie.certificate;

  const overlay = document.createElement("span");
  overlay.className = "poster-cta";
  overlay.textContent = "Book tickets";

  posterLink.appendChild(poster);
  posterLink.appendChild(rating);
  posterLink.appendChild(cert);
  posterLink.appendChild(overlay);

  const body = document.createElement("div");
  body.className = "movie-body";

  const title = document.createElement("h3");
  title.textContent = movie.title;

  const meta = document.createElement("div");
  meta.className = "movie-meta";
  const parts = [String(movie.year), movie.language, movie.duration];
  parts.forEach(function (value, partIndex) {
    if (partIndex > 0) {
      const dot = document.createElement("i");
      dot.className = "dot";
      meta.appendChild(dot);
    }
    meta.appendChild(document.createTextNode(value));
  });

  const foot = document.createElement("div");
  foot.className = "movie-foot";

  const genre = document.createElement("span");
  genre.className = "genre-tag";
  genre.textContent = movie.genre;

  const bookLink = document.createElement("a");
  bookLink.className = "book-link";
  bookLink.href = "booking.html?movie=" + encodeURIComponent(movie.id);
  bookLink.textContent = "Book";

  foot.appendChild(genre);
  foot.appendChild(bookLink);

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(foot);

  card.appendChild(posterLink);
  card.appendChild(body);
  return card;
}

function showToast(message, type) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.className = "toast show " + (type || "");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(function () {
    toast.className = "toast " + (type || "");
  }, 2800);
}
