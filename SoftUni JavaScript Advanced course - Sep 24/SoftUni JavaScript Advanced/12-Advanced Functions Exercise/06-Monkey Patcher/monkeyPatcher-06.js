function monkeyPatcher(action) {
    let result = [];

    switch(action) {
        case 'upvote': this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score': result = getScore.call(this); break;
    }

    function getScore() {
        let positiveVotes = this.upvotes;
        let negativeVotes = this.downvotes;
        const total = positiveVotes + negativeVotes;
        const score = positiveVotes - negativeVotes;

        if (total > 50) {
            const roundedNum = Math.ceil(Math.max(positiveVotes, negativeVotes) * 0.25);
            positiveVotes += roundedNum;
            negativeVotes += roundedNum;
        }
        
        let rating = 'new';

        if (total < 10) {
            rating = 'new';
        } else if (this.upvotes > total * 0.66) {
            rating = 'hot';
        } else if (score >= 0 && total > 100) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }

        return [positiveVotes, negativeVotes, score, rating];
    }

    return result;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score');
console.log(score);
monkeyPatcher.call(post, 'downvote');
score = monkeyPatcher.call(post, 'score');
console.log(score);