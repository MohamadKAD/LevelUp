const games = [
{
  id: 1,
  title: "Elden Ring",
  category: "Spring Sale",
  image: "https://imgs.search.brave.com/88WmQgZsdJamcp0Aa0-RXFyhsnBi6w1XgH66ceJp7bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8yMDAyMjQwOF9B/TFQwMi9Cb3JkZXJs/YW5kcy00LUNvdmVy/LUFydC1VbmlzZXgt/VC1TaGlydC1HYW1l/U3RvcC1FeGNsdXNp/dmU_JHBkcCQ_dz0x/MjU2Jmg9NjY0JmZt/dD1hdXRv",
  cover: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/07/elden-ring-shadow-of-the-erdtree-cover-art.jpg",
  trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
  screenshots: ["https://tse1.mm.bing.net/th/id/OIP.Km91qAk7eTyg_U9u6BUa9QHaEI?rs=1&pid=ImgDetMain&o=7&rm=3","https://tse4.mm.bing.net/th/id/OIP.ZMv0kNNC7pamMOL0BM4cgwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse2.mm.bing.net/th/id/OIP.NoDYrqDgCeL8d7ImOS5w6wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
  description: "An open-world action RPG set in the Lands Between.",
  price: "$59.99",
  releaseDate: "February 25, 2022",
  developer: "FromSoftware",
  publisher: "Bandai Namco",
  genre: "Action RPG",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-8400",
      memory: "12 GB RAM",
      graphics: "GTX 1060",
      storage: "60 GB"
    },
    recommended: {
      os: "Windows 10/11",
      processor: "Intel i7-8700K",
      memory: "16 GB RAM",
      graphics: "GTX 1070",
      storage: "60 GB"
    }
  }
},

{
  id: 2,
  title: "Red Dead Redemption 2",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A cinematic open-world western adventure.",
  price: "$59.99",
  releaseDate: "October 26, 2018",
  developer: "Rockstar Games",
  publisher: "Rockstar Games",
  genre: "Action Adventure",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5-2500K",
      memory: "8 GB",
      graphics: "GTX 770",
      storage: "150 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7-4770K",
      memory: "12 GB",
      graphics: "GTX 1060",
      storage: "150 GB"
    }
  }
},

{
  id: 3,
  title: "Call of Duty: Black Ops 7",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A fast-paced FPS with campaign, multiplayer, and zombies.",
  price: "$69.99",
  releaseDate: "2025",
  developer: "Activision",
  publisher: "Activision",
  genre: "FPS",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 960",
      storage: "120 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "120 GB"
    }
  }
},

{
  id: 4,
  title: "FC 26",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Football simulation with realistic gameplay and teams.",
  price: "$69.99",
  releaseDate: "2025",
  developer: "EA Sports",
  publisher: "EA",
  genre: "Sports",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 1050 Ti",
      storage: "50 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "50 GB"
    }
  }
},

{
  id: 5,
  title: "ARC Raiders",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Co-op shooter fighting robotic enemies.",
  price: "$39.99",
  releaseDate: "2024",
  developer: "Embark Studios",
  publisher: "Embark Studios",
  genre: "Shooter",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5-8400",
      memory: "8 GB",
      graphics: "GTX 1060",
      storage: "60 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 3060",
      storage: "60 GB"
    }
  }
},

{
  id: 6,
  title: "Minecraft",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Sandbox game for building and survival.",
  price: "$29.99",
  releaseDate: "2011",
  developer: "Mojang",
  publisher: "Microsoft",
  genre: "Sandbox",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel Celeron",
      memory: "4 GB",
      graphics: "Intel HD",
      storage: "1 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "8 GB",
      graphics: "GTX 1050",
      storage: "2 GB"
    }
  }
},

{
  id: 7,
  title: "Gran Turismo",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Realistic racing simulator.",
  price: "$49.99",
  releaseDate: "2022",
  developer: "Polyphony Digital",
  publisher: "Sony",
  genre: "Racing",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 970",
      storage: "80 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2070",
      storage: "80 GB"
    }
  }
},

{
  id: 8,
  title: "Counter-Strike 2",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Competitive tactical shooter.",
  price: "Free",
  releaseDate: "2023",
  developer: "Valve",
  publisher: "Valve",
  genre: "FPS",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 1050",
      storage: "30 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "30 GB"
    }
  }
},

{
  id: 9,
  title: "Cyberpunk 2077",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Futuristic open-world RPG.",
  price: "$49.99",
  releaseDate: "2020",
  developer: "CD Projekt Red",
  publisher: "CD Projekt",
  genre: "RPG",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 780",
      storage: "70 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "70 GB"
    }
  }
},

{
  id: 10,
  title: "The Witcher 3",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "Story-driven fantasy RPG.",
  price: "$39.99",
  releaseDate: "2015",
  developer: "CD Projekt Red",
  publisher: "CD Projekt",
  genre: "RPG",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5",
      memory: "6 GB",
      graphics: "GTX 660",
      storage: "50 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "8 GB",
      graphics: "GTX 770",
      storage: "50 GB"
    }
  }
},
{
  id: 11,
  title: "Assassin’s Creed Mirage",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A stealth-focused Assassin’s Creed experience set in Baghdad.",
  price: "$49.99",
  releaseDate: "October 5, 2023",
  developer: "Ubisoft Bordeaux",
  publisher: "Ubisoft",
  genre: "Action Adventure",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i7-4790K",
      memory: "8 GB",
      graphics: "GTX 1060",
      storage: "40 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7-8700K",
      memory: "16 GB",
      graphics: "RTX 2070",
      storage: "40 GB"
    }
  }
},

{
  id: 12,
  title: "Death Stranding 2",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A cinematic open-world delivery adventure sequel.",
  price: "$69.99",
  releaseDate: "2025",
  developer: "Kojima Productions",
  publisher: "Sony Interactive Entertainment",
  genre: "Action Adventure",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5-8400",
      memory: "8 GB",
      graphics: "GTX 1060",
      storage: "80 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7-9700",
      memory: "16 GB",
      graphics: "RTX 3060",
      storage: "80 GB"
    }
  }
},

{
  id: 13,
  title: "Grand Theft Auto V",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A massive open-world crime game with multiple protagonists.",
  price: "$29.99",
  releaseDate: "September 17, 2013",
  developer: "Rockstar North",
  publisher: "Rockstar Games",
  genre: "Action Adventure",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5-3470",
      memory: "8 GB",
      graphics: "GTX 660",
      storage: "72 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7-4770",
      memory: "16 GB",
      graphics: "GTX 1060",
      storage: "72 GB"
    }
  }
},

{
  id: 14,
  title: "Crimson Desert",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "An open-world action RPG with intense combat and storytelling.",
  price: "$59.99",
  releaseDate: "2025",
  developer: "Pearl Abyss",
  publisher: "Pearl Abyss",
  genre: "Action RPG",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 1060",
      storage: "70 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 3070",
      storage: "70 GB"
    }
  }
},

{
  id: 15,
  title: "Just Cause 3",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "An explosive open-world game focused on chaos and destruction.",
  price: "$19.99",
  releaseDate: "December 1, 2015",
  developer: "Avalanche Studios",
  publisher: "Square Enix",
  genre: "Action",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5-2500K",
      memory: "8 GB",
      graphics: "GTX 670",
      storage: "54 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "GTX 970",
      storage: "54 GB"
    }
  }
},

{
  id: 16,
  title: "Borderlands 4",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A chaotic looter-shooter with humor and co-op gameplay.",
  price: "$69.99",
  releaseDate: "2025",
  developer: "Gearbox Software",
  publisher: "2K Games",
  genre: "FPS RPG",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 1060",
      storage: "80 GB"
    },
    recommended: {
      os: "Windows 11",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 3060",
      storage: "80 GB"
    }
  }
},

{
  id: 17,
  title: "Detroit Become Human",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A narrative-driven story about AI and human choices.",
  price: "$39.99",
  releaseDate: "May 25, 2018",
  developer: "Quantic Dream",
  publisher: "Sony",
  genre: "Interactive Drama",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5-2300",
      memory: "8 GB",
      graphics: "GTX 780",
      storage: "55 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "12 GB",
      graphics: "GTX 1080",
      storage: "55 GB"
    }
  }
},

{
  id: 18,
  title: "Plants vs Zombies Garden Warfare 2",
  category: "Spring Sale",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A fun third-person shooter featuring plants vs zombies battles.",
  price: "$19.99",
  releaseDate: "February 23, 2016",
  developer: "PopCap Games",
  publisher: "EA",
  genre: "Shooter",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5",
      memory: "4 GB",
      graphics: "GTX 650",
      storage: "40 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "8 GB",
      graphics: "GTX 970",
      storage: "40 GB"
    }
  }
},

{
  id: 19,
  title: "Plants vs Zombies Battle for Neighborville",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A colorful multiplayer shooter with quirky characters.",
  price: "$29.99",
  releaseDate: "October 18, 2019",
  developer: "PopCap Games",
  publisher: "EA",
  genre: "Shooter",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB",
      graphics: "GTX 970",
      storage: "50 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "50 GB"
    }
  }
},

{
  id: 20,
  title: "Days Gone",
  category: "New Releases",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "An open-world survival game set in a post-apocalyptic world.",
  price: "$49.99",
  releaseDate: "May 18, 2021",
  developer: "Bend Studio",
  publisher: "Sony",
  genre: "Action Adventure",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 10",
      processor: "Intel i5-2500K",
      memory: "8 GB",
      graphics: "GTX 780",
      storage: "70 GB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "16 GB",
      graphics: "RTX 2060",
      storage: "70 GB"
    }
  }
},

{
  id: 21,
  title: "Dead Cells",
  category: "Top Rated",
  image: "",
  cover: "",
  trailer: "",
  screenshots: [],
  description: "A fast-paced roguelike platformer with challenging combat.",
  price: "$24.99",
  releaseDate: "August 7, 2018",
  developer: "Motion Twin",
  publisher: "Motion Twin",
  genre: "Roguelike",
  languages: "English, French, Arabic",
  requirements: {
    minimum: {
      os: "Windows 7",
      processor: "Intel i5",
      memory: "2 GB",
      graphics: "Any GPU",
      storage: "500 MB"
    },
    recommended: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "4 GB",
      graphics: "Any modern GPU",
      storage: "500 MB"
    }
  }
}];

let selectedGameId = localStorage.getItem("selectedGameId");
let selectedGame = games.find(g => g.id == selectedGameId);

if (selectedGame) {
  document.getElementById("GameTitle").textContent = selectedGame.title;
  document.getElementById("GameDescription").textContent = selectedGame.description;
  document.getElementById("GamePrice").textContent = selectedGame.price;

  document.querySelector(".G-media img").src = selectedGame.cover || selectedGame.image;
  document.getElementById("gameTrailer").src = selectedGame.trailer;

  document.querySelector(".game-meta").innerHTML = `
    <p><strong>Release Date:</strong> ${selectedGame.releaseDate}</p>
    <p><strong>Developer:</strong> ${selectedGame.developer}</p>
    <p><strong>Publisher:</strong> ${selectedGame.publisher}</p>
    <p><strong>Genre:</strong> ${selectedGame.genre}</p>
    <p><strong>Languages:</strong> ${selectedGame.languages}</p>
  `;

  const min = selectedGame.requirements.minimum;
  const rec = selectedGame.requirements.recommended;

  document.getElementById("GameSpecific").innerHTML = `
    <li><strong>OS:</strong> ${min.os}</li>
    <li><strong>Processor:</strong> ${min.processor}</li>
    <li><strong>Memory:</strong> ${min.memory}</li>
    <li><strong>Graphics:</strong> ${min.graphics}</li>
    <li><strong>Storage:</strong> ${min.storage}</li>
  `;

  document.getElementById("GameRecommended").innerHTML = `
    <li><strong>OS:</strong> ${rec.os}</li>
    <li><strong>Processor:</strong> ${rec.processor}</li>
    <li><strong>Memory:</strong> ${rec.memory}</li>
    <li><strong>Graphics:</strong> ${rec.graphics}</li>
    <li><strong>Storage:</strong> ${rec.storage}</li>
  `;
}

const gallery = document.querySelector(".game-gallery");
gallery.innerHTML = "<h2>Gallery</h2>";

if (selectedGame.screenshots && selectedGame.screenshots.length > 0) {
  selectedGame.screenshots.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gameplay Screenshot";

    img.addEventListener("click", function () {
      document.getElementById("lightboxImg").src = src;
      document.getElementById("lightbox").style.display = "flex";
    });

    gallery.appendChild(img);
});
}

document.getElementById("lightbox").addEventListener("click", function () {
  this.style.display = "none";
});