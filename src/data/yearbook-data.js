const people = {
  staff: [
    {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
    {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},
    {id: 3, name: 'Khalid', quote: 'Don\'t put the world on your shoulders.', superlative: 'Most Likely to Save the Planet from Alien Invasion', photo: './khalid.png'},
    {id: 4, name: 'Travis', quote: 'You do you.', superlative: 'Most Likely to Win a Grammy', photo: './travis.jpg'},
    {id: 5, name: 'Leta', quote: 'It\'s okay to be kind of a mess.', superlative: 'Most Likely to Go to the Moon', photo: './leta.jpg'},
    {id: 6, name: 'Christie', quote: 'Every journey begins with a single step. So take the damn step!', superlative: 'Most Likely to Be President', photo: './christie.jpg'},
    {id: 7, name: 'Brittany', quote: 'It was Robbie.', superlative: 'Most Likely to Get Away with Murder', photo: './brittany.jpg'},
    {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'},
    {id: 9, name: 'Will', quote: 'Stop worrying and just do the thing.', superlative: 'Most Likely to Invent Cold Fusion', photo: './will.jpg'},
    {id: 10, name: 'Pam', quote: 'Shit!', superlative: 'Most Likely to Win a Gold Medal', photo: './pam.jpg'},
    {id: 11, name: 'David', quote: 'I love git.', superlative: 'Most Likely to Be Eaten by a Shark', photo: './david.JPG'},
    {id: 12, name: 'Louisa', quote: 'YOLO', superlative: 'Most Likely to Win a Knife Fight', photo: './louisa.jpg'},
    {id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'},
  ],
  students: [
    {id: 21, name: 'Abigail', quote: 'If I were a rich man, I\'d be rich, and a man!?', superlative: 'Most likely to swim with sharks', photo: 'https://placekitten.com/200/300'},
    {id: 22, name: 'Brian', quote: 'One ring to rule them all', superlative: 'Most likely to do 15-20 at Rikers', photo: 'https://placekitten.com/200/300'},
    {id: 23, name: 'Charlotte', quote: 'Don\'t drink and drive - you might hit a bump and spill your drink!', superlative: 'Most likely to fly', photo: 'https://placekitten.com/200/300'},
    {id: 24, name: 'Danesh', quote: 'I think, therefore I don\'t Trump', superlative: 'Most likely to win the \"Nailed It\" trophy', photo: 'https://placekitten.com/200/300'},
    {id: 25, name: 'Evelyn', quote: 'What happens when you put instant coffee in the microwave?', superlative: 'Most likely to circumnavigate the globe on an electric scooter', photo: 'https://placekitten.com/200/300'},
    {id: 26, name: 'Fatima', quote: 'Whatever happened to that 5th dentist? Did he cave to peer pressure?', superlative: 'Most likely to watch Rocky Horror Picture Show sober', photo: 'https://placekitten.com/200/300'},
    {id: 27, name: 'Glen', quote: 'In this life or the next, Pluto will get revenge!', superlative: 'Most likely to take on the Tide Pod Challenge', photo: 'https://placekitten.com/200/300'},
    {id: 28, name: 'Harriet', quote: 'Tell me why I don\'t like Mondays', superlative: 'Most likely Zombify', photo: 'https://placekitten.com/200/300'},
    {id: 29, name: 'Isabella', quote: 'Wait, what?', superlative: 'Most likely to play the Geico Camel on Broadway', photo: 'https://placekitten.com/200/300'},
    {id: 210, name: 'Jorge', quote: 'Falafel forever!', superlative: 'Most likely to water lawn on non-approved days', photo: 'https://placekitten.com/200/300'},
    {id: 211, name: 'Kelly', quote: 'Don\'t hate me \'cause I\'m beautiful!', superlative: 'Most likely to live in a yurt', photo: 'https://placekitten.com/200/300'},
    {id: 212, name: 'Lucia', quote: 'I\'m with stupid =>', superlative: 'Most likely to eat thier young', photo: 'https://placekitten.com/200/300'},
    {id: 213, name: 'Mei', quote: 'I am who am not', superlative: 'Most Likely to Balloon to the Moon', photo: 'https://placekitten.com/200/300'},
    {id: 214, name: 'Nina', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 215, name: 'Ophus', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 216, name: 'Parker', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 217, name: 'Quin', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 218, name: 'Rosa', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 219, name: 'Sam', quote: 'I just love green eggs and ham!', superlative: 'Most likely to Star in Seussical', photo: 'https://placekitten.com/200/300'},
    {id: 220, name: 'Tyrese', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 221, name: 'Ursula', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 222, name: 'Vic', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 223, name: 'Whitney', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 224, name: 'Xavier', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 225, name: 'Yolanda', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
    {id: 226, name: 'Zach', quote: '', superlative: 'Most likely to', photo: 'https://placekitten.com/200/300'},
  ]
}

module.exports = people;
