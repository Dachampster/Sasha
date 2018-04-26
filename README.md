# Sasha
text based RPG game

CHARACTER
    ADAM {
        SHOP: {
        DIALOGUE: "Here's what's for sale",
        ITEMS: [
            {name: "Apple", price: 1, stock: 5, desc: "Restores some health."},
            {name: "Bandaid", price: 5, stock: 3, desc: "Heals KO."},
            {name: "Cowboy Hat", price: 99, stock: 1},
        ],
        SOLD: `That'll be ${x} of your human dollars.`
        },
        TALK: [`Hello.`,`If you want easy EXP, try fighting Shels`],
    }
    
FIGHTER
PARTY
    {PLAYER: Marcus, FOLLOWERS: [Caeley]}

ENCOUNTER (char, type)
    BATTLE (Shel)
        GET ENEMIES (Shel)
        { PARTY: PARTY, ENEMIES: ENEMIES } 
    TALK (Maggie)
        { DIALOGUE: MAGGIE.dialogue }
    SHOP (Adam)
        { DIALOGUE: ADAM.dialogue,
          ITEMS: ADAM.items }

SCENARIO
