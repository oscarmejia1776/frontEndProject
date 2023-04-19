//-------------------------------------Mouse Ripple----------------------------------------------//
$("body").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.01,
});

// $("body").ripples("drop", x, y, radius, strength);
//-----------------------------------Submit Button------------------------------------------------//
$("#submit").on("click", () => {
  $.get({
    url: `https://zenquotes.io/api/random`,
    success: parseQuote,
    error: function (err) {
      console.log("Something Bad Happenned");
    },
  });
});

//------------------------------------Data Parsing---------------------------------------------------//

function parseQuote(data) {
  console.log(data);
  $(".card").empty();
  $.get(
    "https://random.dog/woof.json",
    function (dogData) {
      const imageUrl = dogData.url;
      console.log(imageUrl);
      const zenQuote = data[0].h;
      const newCard = createQuoteCard(zenQuote, imageUrl);
      $(".card").append(newCard);
    },
    "json"
  );
}

function createQuoteCard(zenQuote, imageUrl) {
  const extension = imageUrl.split(".").pop();
  let mediaHtml;
  if (extension === "mp4") {
    mediaHtml = `<video controls><source src="${imageUrl}" type="video/mp4"></video>`;
  } else {
    mediaHtml = `<img src="${imageUrl}" class="card-img-top" alt="#" />`;
  }
  const html = `
<div class="card" style="width: 18rem">
  ${mediaHtml}
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
