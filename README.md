# 🏏 BPL Dream Team — Bangladesh

> Build your ultimate Bangladesh Premier League fantasy cricket squad — pick your players, manage your budget, and assemble the perfect XI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=netlify)](https://bpl-dream-team-bangladesh.netlify.app/)


---

## 📌 Project Overview

**BPL Dream Team** is an interactive web application that lets cricket fans create their ideal Bangladesh Premier League squad. Users can browse available players, filter by category (batsman, bowler, all-rounder, wicketkeeper), and build a balanced team within a fixed coin budget — bringing the fantasy cricket experience right to the browser.

---

## ✨ Features

- 🧑‍🤝‍🧑 **Player Selection** — Browse the full BPL player roster with stats and details
- 💰 **Budget / Coin System** — Each player has a price; manage your wallet smartly
- ✅ **Team Validation** — Enforces squad size limits and prevents duplicate picks
- 🔄 **Add & Remove Players** — Easily modify your selected squad at any time
- 📊 **Player Stats View** — See key cricket stats before making your pick
- 📱 **Responsive Design** — Fully functional on mobile, tablet, and desktop
- 🔔 **Toast Notifications** — Real-time feedback for player add/remove actions

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://reactjs.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) / CSS Modules |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) |
| **Data Source** | Local JSON / Static Data |
| **Deployment** | [Netlify](https://netlify.com/) |
| **Language** | JavaScript (ES6+) |

---

## 📁 Project Structure

```
bpl-dream-team/
├── public/
│   └── players.json          # BPL player data
├── src/
│   ├── assets/               # Images, icons
│   ├── components/
│   │   ├── Banner/           # Hero banner component
│   │   ├── PlayerCard/       # Individual player card
│   │   ├── PlayerGallery/    # Player listing grid
│   │   ├── SelectedPlayers/  # Selected squad view
│   │   └── Navbar/           # Top navigation & coin display
│   ├── App.jsx               # Root component & state management
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RS-Arafath/bpl-dream-team-bangladesh.git

# 2. Navigate into the project directory
cd bpl-dream-team-bangladesh

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🎮 How to Use

1. **Start with your coin balance** — You begin with a fixed budget (e.g. 10,000,000 coins)
2. **Browse players** — View all available BPL players with their category, country, and price
3. **Add to squad** — Click a player card to add them to your dream team
4. **Stay within budget** — The app deducts coins on each pick; manage wisely
5. **Review your XI** — Switch to the "Selected" tab to see your assembled squad
6. **Remove players** — Change your mind? Remove and swap any time

---

## 🧩 Key React Concepts Used

- **Component-based architecture** with reusable React components
- **Lifting state up** — shared state managed at the `App` level
- **Props drilling** for passing handlers and data down the tree
- **Conditional rendering** for empty states and tab switching
- **Array methods** (`filter`, `find`, `map`) for player data manipulation
- **Toast notifications** for real-time user feedback

---

## 🌐 Live Demo

🔗 **[https://bpl-dream-team-bangladesh.netlify.app/](https://bpl-dream-team-bangladesh.netlify.app/)**

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
# Open a Pull Request
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Arafath**
- 🌐 GitHub: [@RS-Arafath](https://github.com/RS-Arafath)
- 💼 LinkedIn: [rs-arafath](https://linkedin.com/in/rs-arafath-6347733b3/)
- 📧 Email: [contact.arafath.bd@gmail.com](mailto:contact.arafath.bd@gmail.com)
- 📍Dhaka, Bangladesh

---

> ⭐ If you found this project helpful, consider giving it a star on GitHub — it means a lot!