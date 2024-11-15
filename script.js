document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    { text: "Expect the best, prepare for the worst.", author: "Jinnah" },
    {
      text: "A smooth sea never made a skilled sailor.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "To see the border of possibility, got to try the impossible.",
      author: "Sultan Mehmed Fatih II",
    },
    {
      text: "Give me six hours to chop down a tree and I will spend the first four sharpening the ax.",
      author: "Abraham Lincoln",
    },
    {
      text: "Intelligent individuals learn from everything and everyone; average people, from their experiences. The stupid already have all the answers.",
      author: "Socrates",
    },
    {
      text: "It is far better to live like a lion for a day than to live like a jackal for a hundred years.",
      author: "Tipu Sultan",
    },
    { text: "Failure is a word unknown to me.", author: "Jinnah" },
    {
      text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
      author: "Bruce Lee",
    },
  ];

  const quoteText = document.querySelector("blockquote");
  const quoteAuthor = document.querySelector("span");
  const newQuoteButton = document.querySelector(
    ".quote-box button:nth-child(1)"
  );
  const shareButton = document.querySelector(".quote-box button:nth-child(2)");

  let currentIndex = 0;
  function showNextQuote() {
    const currentQuote = quotes[currentIndex];
    quoteText.textContent = `"${currentQuote.text}"`;
    quoteAuthor.textContent = ` ${currentQuote.author}`;
    currentIndex = (currentIndex + 1) % quotes.length;
  }

  function shareQuote() {
    const currentQuote = quoteText.textContent;
    const currentAuthor = quoteAuthor.textContent;
    const tweetText = encodeURIComponent(`${currentQuote}\n${currentAuthor}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  }

  newQuoteButton.addEventListener("click", showNextQuote);
  shareButton.addEventListener("click", shareQuote);

  showNextQuote();
});
