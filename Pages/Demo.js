function Pokemon(props) {
  return (
    React.createElement("div", { class: "pokemonDiv" },      
    React.createElement("h1", null, props.type),
    React.createElement("h1", null, props.name),      
    React.createElement("img", {class: "img" , src: props.image },),
    React.createElement("p", null, props.fact),
    React.createElement("p", null, "Height: ", props.height),
    React.createElement("p", null, " Weight: ", props.weight),
    React.createElement("p", null, "Weakness: ", props.weakness)
    )
  );
}

var pokemonInfo =
React.createElement("div", {class: "container",id: 'Demo'},
  
  React.createElement(Pokemon, { 
    name: "Pikachu - ピカチュウ", 
    type: "Electric", 
    image: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/900px-025Pikachu.png", 
    fact: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    gender: "Male/Female",
    height: "1 Foot 4 Inch",
    weight: "13.2 lbs",
    weakness: "Ground"
  }),
  React.createElement(Pokemon, { 
    name: "Eevee - イーブイ", 
    type: "Normal", 
    image: "https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/900px-133Eevee.png",
    fact: "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    gender: "Male/Female",
    height: "1 Foot",
    weight: "14.3 lbs",
    weakness: "Fighting"
  }),
  React.createElement(Pokemon, { 
    name: "Gengar - ゲンガー", 
    type: "Ghost & Poison", 
    image: "https://cdn.bulbagarden.net/upload/c/c6/094Gengar.png",
    fact: "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
    gender: "Male/Female",
    height: "4 Feet 11 Inch",
    weight: "89.3 lbs",
    weakness: "Dark, Ghost & Psychic"
  }),
  React.createElement(Pokemon, { 
    name: "Charizard - リザードン", 
    type: "Fire & Flying", 
    image: "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/900px-006Charizard.png",
    fact: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    gender: "Male/Female",
    height: "5 Feet 7 Inch",
    weight: "199.5 lbs",
    weakness: "Rock, Electric & Water "
  }),
  React.createElement(Pokemon, { 
    name: "Lucario - ルカリオ", 
    type: "Fighting & Steel", 
    image: "https://cdn.bulbagarden.net/upload/thumb/d/d7/448Lucario.png/900px-448Lucario.png",
    fact: "By catching the aura emanating from others, it can read their thoughts and movements.",
    gender: "Male/Female",
    height: "3 Feet 11 Inch",
    weight: "119.0 lbs",
    weakness: "Fighting, Fire & Ground"
  })
);

ReactDOM.render(pokemonInfo, document.querySelector('#Page3'));