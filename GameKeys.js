const games = [
  {
    id: 1,
    title: "Elden Ring",
    category: "Spring Sale",
    image:
      "https://th.bing.com/th/id/R.0c97e85926652e895f4a5ad36bc89cbc?rik=15NhUK566GC8lA&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    category: "Top Rated",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/red-dead-redemption-2-key-art.jpg?q=49&fit=crop&w=825&dpr=2",
  },
  {
    id: 3,
    title: "Call of Duty: BO7",
    category: "Spring Sale",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/call-of-duty-black-ops-7-key-art-from-teaser-trailer.jpg",
  },
  {
    id: 4,
    title: "FC 26",
    category: "New Releases",
    image:
      "https://www.allkeyshop.com/blog/wp-content/uploads/EA-SPORTS-FC-26-Launch-Allkeyshop-Deals-2025-Sept_Banner.webp",
  },
  {
    id: 5,
    title: "Ark Raiders",
    category: "New Releases",
    image:
      "https://media.rawg.io/media/games/5af/5af62b2725a440cf6858ce66b30151e5.jpg",
  },
  {
    id: 6,
    title: "Minecraft",
    category: "Top Rated",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.eyRo_SP8EGVg5jfGqeN64wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    title: "Gran Turismo",
    category: "Spring Sale",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.xcP-eGMm7wLk4zbrUh4nRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    title: "Counter-Strike 2",
    category: "Top Rated",
    image:
      "https://th.bing.com/th/id/OIP.UdnicE24I7N3ooW1nkZP3wHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 9,
    title: "Cyberpunk 2077",
    category: "Spring Sale",
    image:
      "https://gamingbolt.com/wp-content/uploads/2023/09/cyberpunk-2077-key-art-1024x577.jpg",
  },
  {
    id: 10,
    title: "The Witcher 3",
    category: "Top Rated",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
  },
  {
    id: 11,
    title: "Assassin’s Creed Mirage",
    category: "New Releases",
    image:
      "https://cdnb.artstation.com/p/assets/covers/images/075/167/577/large/sina-pakzx-kasra-sina-pakzx-kasra-assassins-creed-mirage-cover.jpg?1713905121",
  },
  {
    id: 12,
    title: "Death Stranding 2",
    category: "New Releases",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.wzTdibgonX89CC0I5m-RoQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 13,
    title: "Grand Theft Auto V",
    category: "Top Rated",
    image:
      "https://imgs.search.brave.com/5bpLkHSYowf-H3u3watyYgHmmpGEFJ7l86NRiFZFClM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ3JhbmQtdGhl/ZnQtYXV0by12LXBp/Y3R1cmVzLW5hZWo0/eWlhcDRnbnhoMm8u/anBn",
  },
  {
    id: 14,
    title: "Crimson Desert",
    category: "New Releases",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/73/Crimson_Desert_Steam_Cover.jpg",
  },
  {
    id: 15,
    title: "Just Cause 3",
    category: "Spring Sale",
    image:
      "https://imgs.search.brave.com/BNi4IWmWQuvO25z2Si4OT8gSZ_t3krgYWSQY3qRLz6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTUvMTAv/MjYvanVzdC1jYXVz/ZS0zLWJ1dHRvbmpw/Zy05OTZkODAuanBn/P2Nyb3A9MToxLHNt/YXJ0JmZvcm1hdD1q/cGcmYXV0bz13ZWJw/JnF1YWxpdHk9ODA",
  },
  {
    id: 16,
    title: "Border Lands 4",
    category: "Spring Sale",
    image:
      "https://imgs.search.brave.com/88WmQgZsdJamcp0Aa0-RXFyhsnBi6w1XgH66ceJp7bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8yMDAyMjQwOF9B/TFQwMi9Cb3JkZXJs/YW5kcy00LUNvdmVy/LUFydC1VbmlzZXgt/VC1TaGlydC1HYW1l/U3RvcC1FeGNsdXNp/dmU_JHBkcCQ_dz0x/MjU2Jmg9NjY0JmZt/dD1hdXRv",
  },
  {
    id: 17,
    title: "Detroit Become Human",
    category: "Top Rated",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Detroit_Become_Human.jpg",
  },
  {
    id: 18,
    title: "Plant vs Zombies Gardan Warefare 2",
    category: "Spring Sale",
    image:
      "https://imgs.search.brave.com/7Cr8XjlefuH0vz7JQeZ0Ls9iKGUXkYcsi9OizCBnezs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvODcxLzYxNngz/NTMvcGxhbnRzLXZz/LXpvbWJpZXMtZ2Fy/ZGVuLXdhcmZhcmUt/Mi1wYy1nYW1lLWVh/LWFwcC1jb3Zlci5q/cGc_dj0xNzMwMTA0/NzU1",
  },
  {
    id: 19,
    title: "Pland vs Zombies Battle for Neighborville",
    category: "New Releases",
    image:
      "https://imgs.search.brave.com/MarszSQK6febqRwN4KTKeowcMBZhOUk53P3o1gtuKM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTkvMDkv/MDQvcGxhbnRzLXZz/LXpvbWJpZXMtd2Vs/Y29tZS10by1uZWln/aGJvcnZpbGxlLS0t/YnV0dG9uLTAxLTE1/Njc2MTkxMjk1ODQu/anBnP2Nyb3A9MTox/LHNtYXJ0JmZvcm1h/dD1qcGcmYXV0bz13/ZWJwJnF1YWxpdHk9/ODA",
  },
  {
    id: 20,
    title: "Days Gone",
    category: "New Releases",
    image:
      "https://imgs.search.brave.com/dBSUSlJ4RJC7igmWlNwcstbvqQuqQZDH1IG2FQqYhds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80a3dh/bGxwYXBlcnMuY29t/L2ltYWdlcy93YWxs/cy90aHVtYnMvMTQ0/MzgucG5n",
  },
  {
    id: 21,
    title: "Dead Cells",
    category: "Top Rated",
    image:
      "https://imgs.search.brave.com/AniaK-TicG6FKRabHuqYTv1TuqlX23IJVYHEgi080H4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9ieWdhbWVzLmNv/bS9jb3ZlcnMvMzg1/ODM3OC1kZWFkLWNl/bGxzLW5pbnRlbmRv/LXN3aXRjaC1mcm9u/dC1jb3Zlci5qcGc",
  },
];

function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";

  for (let i = 0; i < 15; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];

    if ((i + 1) % 5 === 0 && i !== 14) {
      key += "-";
    }
  }
  return key;
}

const generatedSet = new Set();

function generateUniqueKey() {
  let key;

  do {
    key = generateKey();
  } while (generatedSet.has(key));

  generatedSet.add(key);
  return key;
}

function generateKeysWithGames(amount) {
  const result = [];
  let availableGames = [...games];

  for (let i = 0; i < amount; i++) {
    // If requested keys exceed catalog size, start a new cycle.
    if (availableGames.length === 0) {
      availableGames = [...games];
    }

    const randomIndex = Math.floor(Math.random() * availableGames.length);
    const randomGame = availableGames.splice(randomIndex, 1)[0];

    const key = generateUniqueKey();

    result.push({
      game: randomGame,
      code: key,
      used: false,
    });
  }
  return result;
}
