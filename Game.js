const games = [
{
  id: 1,
  title: "Elden Ring",
  category: "Spring Sale",
  image: "https://imgs.search.brave.com/88WmQgZsdJamcp0Aa0-RXFyhsnBi6w1XgH66ceJp7bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8yMDAyMjQwOF9B/TFQwMi9Cb3JkZXJs/YW5kcy00LUNvdmVy/LUFydC1VbmlzZXgt/VC1TaGlydC1HYW1l/U3RvcC1FeGNsdXNp/dmU_JHBkcCQ_dz0x/MjU2Jmg9NjY0JmZt/dD1hdXRv",
  cover: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/07/elden-ring-shadow-of-the-erdtree-cover-art.jpg",
  trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
  screenshots: ["https://tse1.mm.bing.net/th/id/OIP.Km91qAk7eTyg_U9u6BUa9QHaEI?rs=1&pid=ImgDetMain&o=7&rm=3","https://tse4.mm.bing.net/th/id/OIP.ZMv0kNNC7pamMOL0BM4cgwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse2.mm.bing.net/th/id/OIP.NoDYrqDgCeL8d7ImOS5w6wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://th.bing.com/th/id/OIP.g4QfzirPC1U3JGiVTC0s0AHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", "https://th.bing.com/th/id/OIP.KDDroQtesWSDC2ukVLqhbgHaEK?w=271&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"],
  description: "An open-world action RPG set in the Lands Between.",
  price: "$59.99",
  discount: 50,
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
  image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/red-dead-redemption-2-key-art.jpg?q=49&fit=crop&w=825&dpr=2",
  cover: "https://wallpapercave.com/wp/wp3770437.jpg",
  trailer: "https://www.youtube.com/embed/gmA6MrX81z4",
  screenshots: ["https://tecnogaming.com/wp-content/uploads/2018/08/Red-Dead-Redemption-2-Official-Gameplay-Video.jpg", "https://th.bing.com/th/id/R.73f0a65b232428b1aaab04c5876f6eeb?rik=vYcHYglYLy36cA&pid=ImgRaw&r=0", "https://fextralife.com/wp-content/uploads/2018/08/03_RDR2-2048x1152.jpg", "https://i.pinimg.com/originals/b3/97/87/b397871f751c7d430ac7a31db34a1870.jpg", "https://www.pcgamesn.com/wp-content/uploads/2018/08/red-dead-redemption-2-campfire.jpg"],
  description: "A cinematic open-world western adventure.",
  price: "$59.99",
  discount: 0,
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
  image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/call-of-duty-black-ops-7-key-art-from-teaser-trailer.jpg",
  cover: "https://4kwallpapers.com/images/wallpapers/call-of-duty-black-1920x1080-23674.jpg",
  trailer: "https://www.youtube.com/embed/8Ry41LBsSuQ",
  screenshots: ["https://flowgames.gg/wp-content/uploads/2025/09/Call-of-Duty-Black-Ops-7-Multiplayer-Gameplay-Reveal-Trailer-00-01-09.jpg", "https://insider-gaming.com/wp-content/uploads/2025/09/BlackOps7MP-1.jpg", "https://www.hd-tecnologia.com/imagenes/articulos/2025/09/Call-of-Duty-Black-Ops-7-muestra-su-gameplay-multijugador-en-un-nuevo-trailer-1.jpg", "https://th.bing.com/th/id/OIP.j9ObPMat0wa9OkBoEdpdIwHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", "https://static.beebom.com/wp-content/uploads/2025/09/Black-Ops-7-Zombies-Fighting-the-Zursa.jpg?quality=75&strip=all"],
  description: "A fast-paced FPS with campaign, multiplayer, and zombies.",
  price: "$69.99",
  discount: 30,
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
  image: "https://www.allkeyshop.com/blog/wp-content/uploads/EA-SPORTS-FC-26-Launch-Allkeyshop-Deals-2025-Sept_Banner.webp",
  cover: "https://futcoin.net/uploads/blog/20250411_1744351747_medium.jpg",
  trailer: "https://www.youtube.com/embed/TSi0iJYSQ24",
  screenshots: ["https://tse4.mm.bing.net/th/id/OIP.sPPuu60QqU0_ea2H5p4VeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://refifa.com/wp-content/uploads/2025/09/FC-Mobile-26-Gameplay-Deep-Dive.webp", "https://img.xboxachievements.com/images/monthly_2025_07/screenshots/13237/med_fc26_musiala_gameplay_hires_wm_16x9_d5b6d01f-2e39-4cb5-8dea-a9dc5d566184.jpg", "https://static.deltiasgaming.com/2025/07/EA-FC-26-Reveal-Trailer-Highlights.jpg", "https://www.operationsports.com/wp-content/uploads/2025/10/All-EA-FC-26-Pre-Season-Rewards-And-How-To-Claim-Them.jpg?fit=1200%2C675"],
  description: "Football simulation with realistic gameplay and teams.",
  price: "$69.99",
  discount: 0,
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
  image: "https://media.rawg.io/media/games/5af/5af62b2725a440cf6858ce66b30151e5.jpg",
  cover: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/ARC-Raiders-Key-Art.jpg",
  trailer: "https://www.youtube.com/embed/_GZpjgRy35o",
  screenshots: ["https://www.gematsu.com/wp-content/uploads/2024/11/ARC-Raiders-Gameplay_11-12-24.jpg", "https://game.dazepuzzle.com/wp-content/uploads/ARC-Raiders-gameplay-screenshot-PS5-4.webp", "https://mp1st.com/wp-content/uploads/2024/11/ARC-Raiders.jpg.webp", "https://boosting-ground.com/uploads/images/guide/arc-raiders-getting-started-guide-gameplay.jpg", "https://i.gadgets360cdn.com/large/arc_raiders_4_1761312343960.png"],
  description: "Co-op shooter fighting robotic enemies.",
  price: "$39.99",
  discount: 0,
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
  image: "https://tse1.mm.bing.net/th/id/OIP.eyRo_SP8EGVg5jfGqeN64wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  cover: "https://cdn.mobygames.com/covers/9056432-minecraft-nintendo-switch-front-cover.jpg",
  trailer: "https://www.youtube.com/embed/7A5YWn33eps",
  screenshots: ["https://minecraft.wiki/images/thumb/Survival.png/854px-Survival.png?b8898", "https://i.pinimg.com/originals/76/15/1a/76151af8aa2da57c33c9c5874207199b.jpg", "https://uploads-ssl.webflow.com/63cd496ff1e5b4371aaa2e28/63cd67743f5ddf9354936e22_ruby-castle-01.jpg", "https://tse2.mm.bing.net/th/id/OIP.yjBkyG6Hyepoy-x2x_GCIgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://staticg.sportskeeda.com/editor/2024/09/7cb67-17271325691039-1920.jpg"],
  description: "Sandbox game for building and survival.",
  price: "$29.99",
  discount: 0,
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
  image: "https://tse3.mm.bing.net/th/id/OIP.xcP-eGMm7wLk4zbrUh4nRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  cover: "https://static1.millenium.org/articles/9/38/77/39/@/1570759-gran-turismo-7-article_cover_bd-1.jpg",
  trailer: "https://www.youtube.com/embed/ecUQE-sDUtk",
  screenshots: ["https://i.ytimg.com/vi/EJCX-RMtNt0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDSNV7JB5aLDx-FqrQrY3_RSyy4_w", "https://www.gamebyte.com/wp-content/uploads/2021/12/d2e6e87c-gran-turismo-7-deep-forest.jpg", "https://www.gran-turismo.com/images/c/i1NV9IVoZx3lNEE.jpg", "https://i.ytimg.com/vi/GAz94TtFWAQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEogZSgjMA8=&rs=AOn4CLDZCoCHgaRXo2aWuduG-8xs-7QusA", "https://th.bing.com/th/id/R.6fdb459b0d233b4ac4ae27d141c99878?rik=CWzxTiMxTtcHmg&pid=ImgRaw&r=0"],
  description: "Realistic racing simulator.",
  price: "$49.99",
  discount: 70,
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
  image: "https://th.bing.com/th/id/OIP.UdnicE24I7N3ooW1nkZP3wHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  cover: "https://en.shiftdelete.net/wp-content/uploads/2023/09/cs2-1.jpg",
  trailer: "https://www.youtube.com/embed/c80dVYcL69E",
  screenshots: ["https://mp1st.com/wp-content/uploads/2023/03/counter-strike-2-gameplay.png.webp", "https://www.jaxon.gg/wp-content/uploads/2024/06/CS2_fps.jpg", "https://staticg.sportskeeda.com/editor/2023/03/9fc20-16795223930857-1920.jpg", "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/cs2-cropped-1.jpg", "https://gocsgo.net/wp-content/uploads/2023/06/cs2-data-vyhoda.jpg"],
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
  image: "https://gamingbolt.com/wp-content/uploads/2023/09/cyberpunk-2077-key-art-1024x577.jpg",
  cover: "https://wallpaperaccess.com/full/12782740.jpg",
  trailer: "https://www.youtube.com/embed/qIcTM8WXFjk",
  screenshots: ["https://www.pcinvasion.com/wp-content/uploads/2023/08/cyberpunk-2077-gameplay-phantom-liberty-trailer-abilties-cyberware-mods.jpg", "https://sm.ign.com/ign_jp/gallery/u/updated-92/updated-92-cyberpunk-2077-gameplay-details_tj4a.jpg", "https://thecinemaholic.com/wp-content/uploads/2019/09/2019-09-15-image-2.jpg", "https://www.techpowerup.com/img/YwSfZOJ0dtljHGIf.jpg", "https://cdn.mos.cms.futurecdn.net/wU73Dq8qJ8Jqrza2eHDgo6-1200-80.jpg"],
  description: "Futuristic open-world RPG.",
  price: "$49.99",
  discount: 25,
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
  image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
  cover: "https://static.cdprojektred.com/cms.cdprojektred.com/8db4cdb9ccdd8fe03a546723d30a41cb8567034a.png",
  trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
  screenshots: ["https://th.bing.com/th/id/R.c980a568faa98680a25d96d8cb5d5b24?rik=vdZhy%2bhWM9ch5A&pid=ImgRaw&r=0", "https://cdn.wccftech.com/wp-content/uploads/2015/04/Witcher-3-14-1030x579.jpg", "https://th.bing.com/th/id/R.d06e5781db13a791eb2d533e16b629bf?rik=zKDMnDXXAs6%2brg&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2015%2f05%2fWitcher3-11.jpg&ehk=uCW8C6FCuNBLcBwODtyhTJIaUy%2fg5XrKgb4y%2biOMxA4%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.c5017c6d4cb4086ad170b936ec7c1cf9?rik=0JHyhiT166f5lw&riu=http%3a%2f%2fimages.gamersyde.com%2fimage_the_witcher_3_wild_hunt-27433-2651_0008.jpg&ehk=z7b%2brbewro7YYzWLAAFItqeB%2f2EW707eQXrLTeq9%2fNs%3d&risl=&pid=ImgRaw&r=0", "https://tse2.mm.bing.net/th/id/OIP.MNY0mr6PuMcNI26Sf3_XygHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
  description: "Story-driven fantasy RPG.",
  price: "$39.99",
  discount: 0,
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
  image: "https://cdnb.artstation.com/p/assets/covers/images/075/167/577/large/sina-pakzx-kasra-sina-pakzx-kasra-assassins-creed-mirage-cover.jpg?1713905121",
  cover: "https://tse3.mm.bing.net/th/id/OIP.S8hneAkMAl5fU8u1qfb7ngHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  trailer: "https://www.youtube.com/embed/x55lAlFtXmw",
  screenshots: ["https://www.theloadout.com/wp-content/sites/theloadout/2023/06/assassins-creed-mirage-gameplay-new-features-parry-kill-550x309.jpg", "https://images.gamersyde.com/image_stream-44937-5058_0002.jpg", "https://64.media.tumblr.com/0e7b4c936bd545437e96fb37a9293818/42e121e5855e37de-11/s2048x3072/4a2a3ddb695801e767483bc17af0100bf7931328.jpg", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/assassin-s-creed-mirage-gameplay-trailer-basim-assassinating-enemy.jpg", "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/assassins-creed-mirage-gameplay-trailer-screenshot-basim-avoiding-arrow-pre-jump.jpg"],
  description: "A stealth-focused Assassin’s Creed experience set in Baghdad.",
  price: "$49.99",
  discount: 0,
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
  image: "https://tse2.mm.bing.net/th/id/OIP.wzTdibgonX89CC0I5m-RoQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  cover: "https://tse4.mm.bing.net/th/id/OIP.GwvxZjae2OBo4XdpjUcbfAHaD3?rs=1&pid=ImgDetMain&o=7&rm=3",
  trailer: "https://www.youtube.com/embed/F79oEkMXElU",
  screenshots: ["https://news-cdn.softpedia.com/images/news2/death-stranding-comprehensive-gameplay-footage-reveals-everything-about-the-game-527402-2.jpg", "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2019/09/death-stranding-gameplay-explained.original-e1568339531439.jpg", "https://images.cgames.de/images/gamestar/287/death-stranding-gameplay-trailer_6067644.jpg", "https://th.bing.com/th/id/R.da0479450a5b00bc8775de28a794b2f7?rik=OfHuTSpEtdgwrw&riu=http%3a%2f%2fwww.ungeek.ph%2fwp-content%2fuploads%2f2018%2f06%2fe3_2018_death_stranding_makes_sense_image_2.jpg&ehk=GArJZY5rZ2K6oDuPtrCaWxcrzP%2bWZbO49%2bmVbnjSYgM%3d&risl=&pid=ImgRaw&r=0", "https://i.pinimg.com/originals/cf/34/de/cf34de512d116b74413459aaec56feeb.jpg"],
  description: "A cinematic open-world delivery adventure sequel.",
  price: "$69.99",
  discount: 0,
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
  image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/gta-5-cover.jpg",
  cover: "https://w0.peakpx.com/wallpaper/513/15/HD-wallpaper-gta-v-cover-cover-gta-v-rockstar-grand-theft-auto.jpg",
  trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
  screenshots: ["https://tse2.mm.bing.net/th/id/OIP.wFSFEs4othlTvrOp4_4oWwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://s2.dmcdn.net/v/U_tj31aWj5eOclsji/x1080", "https://tse1.mm.bing.net/th/id/OIP.565GkJYNWnQFrqnDEMof9wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://th.bing.com/th/id/OIP.CXYq3gTuCJVlDAwn4LD6ZgHaEK?w=271&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", "https://img.gta5-mods.com/q95/images/past-gen-map-and-hud-3d-models-converted/18e81b-GTA5%202018-08-14%2016-31-59-460.jpg"],
  description: "A massive open-world crime game with multiple protagonists.",
  price: "$29.99",
  discount: 0,
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
  image: "https://imgs.search.brave.com/5bpLkHSYowf-H3u3watyYgHmmpGEFJ7l86NRiFZFClM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ3JhbmQtdGhl/ZnQtYXV0by12LXBp/Y3R1cmVzLW5hZWo0/eWlhcDRnbnhoMm8u/anBn",
  cover: "https://gamecover.fr/wp-content/uploads/Crimson-Desert-mise-en-avant-scaled.jpg",
  trailer: "https://www.youtube.com/embed/oveOw84tUVU",
  screenshots: ["https://flowgames.gg/wp-content/uploads/2025/07/Crimson-Desert_SGF-2025_Screenshot.jpg", "https://static.deltiasgaming.com/2025/10/Crimson_Desert-1.jpg", "https://www.gematsu.com/wp-content/uploads/2024/12/Crimson-Desert_2024_12-12-24_009-1920x1150.jpg", "https://media.altchar.com/prod/images/gm_featured_image/805d24d4448a-ss653759c43cbc7900686a917d4b165f33b8cd334f1920x1080.jpg", "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2024/09/Crimson-Desert-Profile-Art.jpg"],
  description: "An open-world action RPG with intense combat and storytelling.",
  price: "$59.99",
  discount: 0,
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
  image: "https://imgs.search.brave.com/BNi4IWmWQuvO25z2Si4OT8gSZ_t3krgYWSQY3qRLz6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTUvMTAv/MjYvanVzdC1jYXVz/ZS0zLWJ1dHRvbmpw/Zy05OTZkODAuanBn/P2Nyb3A9MToxLHNt/YXJ0JmZvcm1hdD1q/cGcmYXV0bz13ZWJw/JnF1YWxpdHk9ODA",
  cover: "https://th.bing.com/th/id/R.80e421f634478599b53c517ae0aaf837?rik=tb7P4Hql63gxvg&pid=ImgRaw&r=0",
  trailer: "https://www.youtube.com/embed/n49TPURRn38",
  screenshots: ["https://wallpaper-house.com/data/out/10/wallpaper2you_405976.jpg", "https://tse2.mm.bing.net/th/id/OIP.agOu1nTsJO-QGMehwRGlswHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://wallpapercave.com/wp/wp1879170.jpg", "https://static1.srcdn.com/wordpress/wp-content/uploads/Just-Cause-3-Review.jpg", "https://www.10wallpaper.com/wallpaper/1280x960/1605/Just_cause_3_sky_fortress-Game_Posters_HD_Wallpaper_1280x960.jpg"],
  description: "An explosive open-world game focused on chaos and destruction.",
  price: "$19.99",
  discount: 10,
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
  image: "https://imgs.search.brave.com/88WmQgZsdJamcp0Aa0-RXFyhsnBi6w1XgH66ceJp7bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8yMDAyMjQwOF9B/TFQwMi9Cb3JkZXJs/YW5kcy00LUNvdmVy/LUFydC1VbmlzZXgt/VC1TaGlydC1HYW1l/U3RvcC1FeGNsdXNp/dmU_JHBkcCQ_dz0x/MjU2Jmg9NjY0JmZt/dD1hdXRv",
  cover: "https://4kwallpapers.com/images/walls/thumbs_2t/22446.jpg",
  trailer: "https://www.youtube.com/embed/NtSRtcXcCnk",
  screenshots: ["https://sm.ign.com/t/ign_nl/video/b/borderland/borderlands-4-vault-boss-gameplay-on-rtx-5090-4k-max-setting_8kfp.1200.jpg", "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2020/10/borderlands-3.jpg", "https://assets.2k.com/1a6ngf98576c/5N9yywP5Gb9eZRJqVrlED3/1aa7b99ba23184aca8b1fa96618acfb7/BL4_Vault-Hunters.jpg", "https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2025/09/borderlands-4-boss-fight.jpg?q=49&fit=crop&w=825&dpr=2", "https://i.ytimg.com/vi/hAy6EPRaQlI/maxresdefault.jpg"],
  description: "A chaotic looter-shooter with humor and co-op gameplay.",
  price: "$69.99",
  discount: 60,
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
  image: "https://upload.wikimedia.org/wikipedia/en/e/ee/Detroit_Become_Human.jpg",
  cover: "https://images6.alphacoders.com/920/thumb-1920-920991.jpg",
  trailer: "https://www.youtube.com/embed/MkmVsCj1xEQ",
  screenshots: ["https://th.bing.com/th/id/R.a8a3fa2c3c5a070b5db54caaac3039b5?rik=cxQyA4jmsyim1w&riu=http%3a%2f%2fsm.pcmag.com%2fpcmag_me%2fphoto%2fdefault%2fdetroit-become-humantm-20180524191633_k55c.jpg&ehk=mplNQIjjWjAn3%2bDg3c6Mbb9l3AtJwBw2JTZJOapOdpI%3d&risl=&pid=ImgRaw&r=0", "https://i.ytimg.com/vi/p19Mi7I8wlQ/maxresdefault.jpg", "https://tse3.mm.bing.net/th/id/OIP.oGEdHf9cv2OZef6JLEBQwgHaEE?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse2.mm.bing.net/th/id/OIP.GEKEmtrzBoS1rHReftQNkgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://i.ytimg.com/vi/8Omo6sAED04/maxresdefault.jpg"],
  description: "A narrative-driven story about AI and human choices.",
  price: "$39.99",
  discount: 0,
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
  image: "https://imgs.search.brave.com/7Cr8XjlefuH0vz7JQeZ0Ls9iKGUXkYcsi9OizCBnezs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvODcxLzYxNngz/NTMvcGxhbnRzLXZz/LXpvbWJpZXMtZ2Fy/ZGVuLXdhcmZhcmUt/Mi1wYy1nYW1lLWVh/LWFwcC1jb3Zlci5q/cGc_dj0xNzMwMTA0/NzU1",
  cover: "https://cdn.mobygames.com/covers/17447848-plants-vs-zombies-garden-warfare-2-deluxe-edition-windows-front-.jpg",
  trailer: "https://www.youtube.com/embed/9_0gZFfqK3w",
  screenshots: ["https://tse4.mm.bing.net/th/id/OIP.QAO5bMFrQgpnacnEraVjVgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://i.ytimg.com/vi/ppVdj8zmhVY/maxresdefault.jpg", "https://i.ytimg.com/vi/T9lmKNu4M1k/maxresdefault.jpg", "https://tse1.mm.bing.net/th/id/OIP.WCLf74UxZaHvbhywZic8kwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse2.mm.bing.net/th/id/OIP.c4OzGDOAFK58q2Cf6QmldgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
  description: "A fun third-person shooter featuring plants vs zombies battles.",
  price: "$19.99",
  discount: 20,
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
  image: "https://imgs.search.brave.com/MarszSQK6febqRwN4KTKeowcMBZhOUk53P3o1gtuKM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTkvMDkv/MDQvcGxhbnRzLXZz/LXpvbWJpZXMtd2Vs/Y29tZS10by1uZWln/aGJvcnZpbGxlLS0t/YnV0dG9uLTAxLTE1/Njc2MTkxMjk1ODQu/anBnP2Nyb3A9MTox/LHNtYXJ0JmZvcm1h/dD1qcGcmYXV0bz13/ZWJwJnF1YWxpdHk9/ODA",
  cover: "https://gaming-cdn.com/images/products/11752/orig-fallback-v1/plants-vs-zombies-battle-for-neighborville-deluxe-edition-deluxe-edition-xbox-one-spel-microsoft-store-united-states-cover.jpg?v=1741775928",
  trailer: "https://www.youtube.com/embed/RwYjx4VPzx0",
  screenshots: ["https://th.bing.com/th/id/R.6c0553f58f98d2a1aace0e2c9845b34c?rik=DwRh1ab5vgtGZg&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.6226601875690a6cfccef2509c8c8bea?rik=6bv3lx1LVVMAQQ&pid=ImgRaw&r=0", "https://tse4.mm.bing.net/th/id/OIP.__r_2vlCRxyHxyKD3KF_AAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse4.mm.bing.net/th/id/OIP.JLTGKLCbjeurqPDdWs7RtgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/10/Plants-vs-zombies-battle-for-neighborville-screen-1.jpg"],
  description: "A colorful multiplayer shooter with quirky characters.",
  price: "$29.99",
  discount: 0,
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
  image: "https://imgs.search.brave.com/dBSUSlJ4RJC7igmWlNwcstbvqQuqQZDH1IG2FQqYhds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80a3dh/bGxwYXBlcnMuY29t/L2ltYWdlcy93YWxs/cy90aHVtYnMvMTQ0/MzgucG5n",
  cover: "https://tse2.mm.bing.net/th/id/OIP.1DDYR5ZjQ8pH_AptmYabVgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  trailer: "https://www.youtube.com/embed/p9XlSvnRk3E",
  screenshots: ["https://i.ytimg.com/vi/o-5dUQZhQwA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXyhOMA8=&rs=AOn4CLCrt-YXYtNPOPFxFoI2zqEHU-0PIw", "https://fs5.mojevideo.sk/imgfb/236055.jpg", "https://static.deltiasgaming.com/2025/01/days-gone.jpg", "https://tse4.mm.bing.net/th/id/OIP.yguSmQUJMKSVMr-_Sa--lwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse3.mm.bing.net/th/id/OIP.pptv_BUFCPwSovZUGPlpHQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
  description: "An open-world survival game set in a post-apocalyptic world.",
  price: "$49.99",
  discount: 0,
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
  image: "https://imgs.search.brave.com/AniaK-TicG6FKRabHuqYTv1TuqlX23IJVYHEgi080H4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9ieWdhbWVzLmNv/bS9jb3ZlcnMvMzg1/ODM3OC1kZWFkLWNl/bGxzLW5pbnRlbmRv/LXN3aXRjaC1mcm9u/dC1jb3Zlci5qcGc",
  cover: "https://cdna.artstation.com/p/assets/covers/images/081/495/778/large/david-thor-fjalarsson-david-thor-fjalarsson-deadcells-artcover.jpg?1730404800",
  trailer: "https://www.youtube.com/embed/Hcq376tJRJk",
  screenshots: ["https://i.ytimg.com/vi/etwy_Jw5Cv8/maxresdefault.jpg", "https://th.bing.com/th/id/R.18c2b2b982e48a5312b5b6854df2ac33?rik=8FoKn8t0ujogBw&pid=ImgRaw&r=0", "https://tse4.mm.bing.net/th/id/OIP.SNIivUM9mlQBf-LJ2nEDoQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse1.mm.bing.net/th/id/OIP.TNIsGvyHA49qdqfHDL90wwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse4.mm.bing.net/th/id/OIP.gzbmijXZPM9olpN5RjlW7QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
  description: "A fast-paced roguelike platformer with challenging combat.",
  price: "$24.99",
  discount: 0,
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
  const pricing = getFinalPrice(selectedGame);

document.getElementById("GamePrice").innerHTML = `
  $${pricing.final}
  ${pricing.discount > 0 ? `
    <span class="old-price">$${pricing.original}</span>
    <span class="discount-tag">-${pricing.discount}%</span>
  ` : ""}
`;

  document.querySelector(".G-media img").src = selectedGame.cover || selectedGame.image;
  document.getElementById("gameTrailer").src = selectedGame.trailer;

  document.querySelector(".game-meta").innerHTML = `
    <p><strong>Release Date:</strong> ${selectedGame.releaseDate}</p>
    <p><strong>Developer:</strong> ${selectedGame.developer}</p>
    <p><strong>Publisher:</strong> ${selectedGame.publisher}</p>
    <p><strong>Genre:</strong> ${selectedGame.genre}</p>
    <p><strong>Languages:</strong> ${selectedGame.languages}</p>
  `;

  let min = selectedGame.requirements.minimum;
  let rec = selectedGame.requirements.recommended;

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

let gallery = document.querySelector(".game-gallery");
gallery.innerHTML = "<h2>Gallery</h2>";

if (selectedGame.screenshots && selectedGame.screenshots.length > 0) {
  selectedGame.screenshots.forEach(src => {
    let img = document.createElement("img");
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

let buyBtn = document.getElementById("buy-btn");

if (buyBtn && selectedGame) {
  buyBtn.onclick = function () {
    localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
    window.location.href = "Payment.html";
  };
}

document.getElementById("addToWishlist").addEventListener("click", function () {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  let exists = wishlist.some(g => g.title === selectedGame.title);

  if (exists) {
    alert("Already in wishlist");
    return;
  }

  wishlist.push(selectedGame);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Added to wishlist!");

  this.textContent = "Wishlisted";
  this.disabled = true;
});

function isWishlisted(game) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist.some(g => g.title === game.title);
}

function isOwned(game) {
  let library = JSON.parse(localStorage.getItem("library")) || [];
  return library.some(g => g.title === game.title);
}

let wishlistBtn = document.getElementById("addToWishlist");

buyBtn.onclick = null;

if (selectedGame && isOwned(selectedGame)) {
  buyBtn.textContent = "Play";

  buyBtn.onclick = function () {
    alert("Launching " + selectedGame.title + "...");
  };

} else {
  buyBtn.textContent = "Buy Now";

  buyBtn.onclick = function () {
    localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
    window.location.href = "Payment.html";
  };
}

function getFinalPrice(game) {
  let price = parseFloat(game.price.replace("$", ""));
  let discount = game.discount || 0;

  let finalPrice = price - (price * discount) / 100;

  return {
    original: price.toFixed(2),
    final: finalPrice.toFixed(2),
    discount: discount
  };
}