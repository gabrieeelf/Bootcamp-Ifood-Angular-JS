//Primeiro exemplo de Component
// class CardNews extends HTMLElement {
//   constructor() {
//     super();

//     const shadow = this.attachShadow({ mode: "open" });
//     shadow.innerHTML = "<H1>Hello World</H1>";
//   }
// }

// customElements.define("card-news", CardNews);

class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    // ----- Component Root -----
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // ----- Card Left -----
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // ----- Card Right -----
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    cardRight.appendChild(newsImage);
    newsImage.src =
      this.getAttribute("photo") || "../desafio.01/assets/default_photo.jpg";
    newsImage.alt = "Foto da Noticia";
    newsImage.width = 300;

    // ----- Component Root -----
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = 
    `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card{
            width: 80%;
            display: flex;
            flex-direction: row;
            box-shadow: 9px 9px 27px 0px black;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span{
            font-weight: 400;
        }
        
        .card_left > h1, a{
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: 400;
        }
        
        .card_left > p{
            color: gray;
        }
    `
        ;

    return style;
  }
}

customElements.define("card-news", CardNews);
