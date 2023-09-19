const cardsContainer = document.getElementById("cards-container");
const projects = [
  {
    img: "../img/yardsale.jpg",
    linkApp: "https://yard-sale-tan.vercel.app/",
    title: "Yardsale",
    description: "A simple online website for sales",
    linkButton: "https://github.com/ariannagutirrzz/YardSale",
    id: 1,
  },
  {
    img: "../img/mokepon.png",
    linkApp: "https://mokepon-one.vercel.app/",
    title: "Mokepon",
    description: "A battle game based on pokemon",
    linkButton: "https://github.com/ariannagutirrzz/mokepon",
    id: 2,
  },
  {
    img: "../img/to-do.jpg",
    linkApp: "https://to-do-beta-five.vercel.app",
    title: "to-do",
    description: " A todo list app",
    linkButton: "https://github.com/ariannagutirrzz/To-do-list",
    id: 3,
  }
  
];

function htmlWork() {
  const recorrido = projects.map((project) => {
    return `  
    <div class="cards">
        <a href=${project.linkApp}>
            <img src=${project.img} alt="project image" class="presentation">
        </a>

        <h2>${project.title}</h2>
        <p>${project.description}</p>
        
        <button>
            <img src="../img/github-white.svg" alt="project image" class="button-icon">
            <a href=${project.linkButton} target="_blank">Check this repository</a>
        </button>
    </div> `;
  });
  cardsContainer.innerHTML += recorrido.join('');
}

htmlWork();
