$(document).ready(function() {

  // Fill array of bear quotes:
  var quotesArray = [{
    quote: "'Bears,' I muttered, adding a new fear to the pile. 'That would be just her luck, wouldn't it? Stray bear in town. Of course it would head straight for Bella.'",
    name: "Stephenie Meyer"
  }, {
    quote: "Always respect Mother Nature. Especially when she weighs 400 pounds and is guarding her baby.",
    name: "James Rollins"
  }, {
    quote: "The best way of being kind to bears is not to be very close to them.",
    name: "Margaret Atwood"
  }, {
    quote: "Some days you go bear hunting and you get eaten. Some days you come home with a nice rug to roll around on, and bear steaks. What they don't tell you as a kid is that sometimes you get the rug and steaks, but you also get some nice scars to go with them. As a child you don't understand that you can win, but that's it's not always worth the price. Once you understand and accept that possibility you become a real grown up, and the world becomes a much more serious place. Not less fun, but once you realize what can go wrong, it's a lot scarier to go hunting 'bears'.",
    name: "Laurell K. Hamilton"
  }, {
    quote: "I think he just loved being with the bears because they didn't make him feel bad. I get it too. When he was with the bears, they didn't care that he was kind of weird, or that he'd gotten into trouble for drinking too much and using drugs(which apparently he did a lot of). They didn't ask him a bunch of stupid questions about how he felt, or why he did what he did. They just let him be who he was.",
    name: "Michael Thomas Ford"
  }, {
    quote: "A man screaming is not a dancing bear. Life is not a spectacle.",
    name: "Aime Cesaire"
  }, {
    quote: "And maybe... you are a little fat bear cub with no wings, and no feathers.",
    name: "Else Holmelund Minarik"
  }, {
    quote: "Be cautious of bears at all times, even when being mauled by a tiger.",
    name: "Craig Benzine"
  }, {
    quote: "When you are where wild bears live, you learn to pay attention to the rhythm of the land and yourself. Bears not only make the habitate rich, they enrich us just by being.",
    name: "Linda Jo Hunter"
  }, {
    quote: "When I was a little boy, say 17 months old, I lived in the forest. I was raised by bears. We had a good time. We laughed a lot. At least I think we laughed a lot. I can't really say, because I was too young to remember.",
    name: "Jarod Kintz"
  }, {
    quote: "I'll dine on apple flesh and cinnamon, while feeding you one line after another. Some lines will have salmon hooked on the end. Then we'll make love like two bears who've just discovered honey.",
    name: "Jarod Kintz"
  }, {
    quote: "So this was her kingdom: an octagonal house, a roomful of books, and a bear.",
    name: "Marian Engel"
  }, {
    quote: "He admired bears because everyone was afraid to disturb them while they slept and fish were so in love with bears that they jumped right into their mouths.",
    name: "Robb Todd"
  }];

  var quoteText = "This is a bear quote!";

  $("#bearBtn").click(function(evt) {

    // define containers
    var quote = $('#quotespace p').text();
    var source = $('#quotesource').text();

    // prevent browser's default action
    evt.preventDefault();

    // find random number
    var l = quotesArray.length;
    var r = Math.floor(Math.random() * l);

    // set a new quote
    for (var i = 0; i < l; i++) {
      var newQuoteText = quotesArray[r].quote;
      var newQuoteSource = quotesArray[r].name;
      quoteText = newQuoteText;

      // animation
      var timeAnimation = 500;
      var quoteContainer = $('#quotespace');
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>\" ' + newQuoteText + ' \"</p>' + '<p id="quotesource">' + '- ' + newQuoteSource + '</p>');
        quoteContainer.fadeIn(timeAnimation);
      });

      break;
    };
  });

  // Change URL of twitter button then go to tweet
  $("#tweetBearQuote").click(function() {

    //add quotation marks
    quoteText = '"' + quoteText + '"';

    //keep within 140-char limit
    if (quoteText.length > 126)
      quoteText = quoteText.substring(0, 125) + "...";

    var msg = encodeURI(quoteText);
    $('#workaroundBtn').attr("href", "https://twitter.com/intent/tweet?button_hashtag=BearQuotes&text=" + msg);
    $('#workaroundBtn').get(0).click();
  });

});