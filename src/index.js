function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
