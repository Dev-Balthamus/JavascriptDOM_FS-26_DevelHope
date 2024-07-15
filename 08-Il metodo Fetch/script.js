const button = document.getElementById("btn");

async function fetchCard() {
  const cardCode = document.getElementById("card-code").value;
  try {
    const response = await fetch(`https://ringsdb.com/api/public/card/${cardCode}`);

    const cardData = await response.json();

    const cardTitle = cardData.name;
    const cardImageUrl = cardData.imagesrc;

    document.getElementById("my-title").innerHTML = cardTitle;
    document.getElementById("my-image").setAttribute("src", `https://ringsdb.com/${cardImageUrl}`);
  } catch (error) {
    console.error("Impossibile visualizzare la carta voluta perché: ", error);
  }
}

button.addEventListener("click", fetchCard);
