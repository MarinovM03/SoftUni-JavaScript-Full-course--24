const validFaces = new Set([
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
]);

const suits = {
    'C': '\u2663',
    'D': '\u2666',
    'H': '\u2665',
    'S': '\u2660',
};

function playingCards(face, suit) {
    if (!validFaces.has(face)) {
        throw new Error('Invalid face');
    }

    if (!suits.hasOwnProperty(suit)) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        }
    };
}

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());

try {
    console.log(playingCards('1', 'C').toString());
} catch (err) {
    console.log('Error creating card:', err.message);
}
