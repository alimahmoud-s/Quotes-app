var quotes = [
  `“Be yourself; everyone else is already taken.”<br>
― Oscar Wilde `,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br>
― Marilyn Monroe `,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br>
― Albert Einstein `,
  `“So many books, so little time.”<br>
― Frank Zappa `,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br>
― Bernard M. Baruch `,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”<br>
― William W. Purkey `,
];
function queteGen() {
  var randomQoute = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-container").innerHTML = quotes[randomQoute];
}
