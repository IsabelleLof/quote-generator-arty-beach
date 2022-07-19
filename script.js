const quotes = [
    '"Kiss me and you will see how important I am."', 
    '"There is so much hurt in this game of searching for a mate, of testing, trying. And you realize suddenly that you forgot it was a game, and turn away in tears."', 
    '"I love people. Everybody. I love them, I think, as a stamp collector loves his collection. Every story, every incident, every bit of conversation is raw material for me."',
    '"I took a deep breath and listened to the old bray of my heart. I am. I am. I am."', 
    '"Wear your heart on your skin in this life."', 
    '"What a man is is an arrow into the future, and what a woman is a place the arrow shoots off from."', 
    '"How frail the human heart must be \- a mirrored pool of thought."', 
    '"Perfection is terrible; it cannot have children.', '"I am a victim of introspection."', 
    '"If you expect nothing from anybody, you\'re never disappointed."', 
    '"Perhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing."', 
    '"I have a visual imagination."', '"I talk to God but the sky is empty."', 
    '"My childhood landscape was not land but the end of the land \- the cold, salt, running hills of the Atlantic. I sometimes think my vision of the sea is the clearest thing I own."', 
    '"I shut my eyes and all the world drops dead; I lift my eyes and all is born again."'
    ]
    
    function newQuote() {
        const randomNumber = Math.floor(Math.random() * (quotes.length));
    
    document.getElementById('quote').innerHTML = quotes[randomNumber];
    }