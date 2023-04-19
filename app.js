$("#submit").on("click", () => {
  $.get({
    url: `https://zenquotes.io/api/random`,
    success: parseQuote,
    error: function (err) {
      console.log("Something Bad Happenned");
    },
  });
});

//---------------------------------------------------------------------------------------//

function parseQuote(data) {
  console.log(data);
  $(".card").empty();
  $.get(
    "https://random.dog/woof.json",
    function (dogData) {
      const imageUrl = dogData.url;
      const zenQuote = data[0].h;
      const newCard = createQuoteCard(zenQuote, imageUrl);
      $(".card").append(newCard);
    },
    "json"
  );
}

function createQuoteCard(zenQuote, imageUrl) {
  const html = `
<div class="card" style="width: 18rem">
  <img src="${imageUrl}" class="card-img-top" alt="#" />
    <div class="card-body">
      <h5 class="card-title">Your Quote Is:</h5>
        <p class="card-text">
          ${zenQuote}
        </p>
    </div>
</div>
`;
  return html;
}
