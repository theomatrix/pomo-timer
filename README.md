
# 🌱 **Focus Timer — A Modern Pomodoro Productivity App**

A clean, elegant, and fully functional **Pomodoro timer** designed with glassmorphism, animated backgrounds, smooth transitions, and customizable focus/break sessions.
This lightweight app helps you stay productive, build discipline, and visualize progress with lap tracking and a circular progress indicator.

🔥 **Live Demo:**
👉 **[https://pomodoro-timer-tiaa.onrender.com](https://pomodoro-timer-tiaa.onrender.com)**

---

## 📖 **Table of Contents**

* [✨ Features](#-features)
* [📂 Project Structure](#-project-structure)
* [🌐 Live Deployment](#-live-deployment)
* [⚙️ Installation](#️-installation)
* [🚀 Usage](#-usage)
* [🎨 Design & UI](#-design--ui)
* [🧩 Configuration](#-configuration)
* [📦 Dependencies](#-dependencies)
* [🔧 Troubleshooting](#-troubleshooting)
* [🤝 Contributors](#-contributors)
* [📄 License](#-license)

---

## ✨ **Features**

✔ **Focus & Break Modes**
✔ **Customizable session durations**
✔ **Animated circular progress ring**
✔ **Glassmorphism UI & ambient background animations**
✔ **Lap tracking (focus & break)**
✔ **Smooth transitions**
✔ **Motivational quote display**
✔ **Responsive on all screens**

---

## 📂 **Project Structure**

```
📁 pomodoro-timer
│
├── index.html        # Structure & UI  :contentReference[oaicite:0]{index=0}
├── style.css         # Styling & animations  :contentReference[oaicite:1]{index=1}
└── script.js         # Timer logic & interactions
```

---

## 🌐 **Live Deployment**

This app is fully deployed and live on **Render**:

➡️ **[https://pomodoro-timer-tiaa.onrender.com](https://pomodoro-timer-tiaa.onrender.com)**

You can share this link directly — no installation needed.

---

## ⚙️ Installation (Local Development)

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/pomodoro-timer.git
   ```
2. Open the project folder.
3. Launch `index.html` in any browser.

No build steps — it's a pure static site.

---

## 🚀 Usage

* Click **Start** to begin your focus session.
* Toggle **Focus** / **Break** mode.
* Use **Skip** to jump to the next session.
* Adjust session lengths with the input fields.
* Watch the animated circular progress ring update in real time.

---

## 🎨 Design & UI

* Glassmorphism container
* Smooth pulses & ambient drifting background
* SVG circular timer
* Neon-accent focus/break colors
* Inter Google font
* Mobile-first responsive layout

---

## 🧩 Configuration

Settings (editable at the bottom of the app):

| Setting        | Default | Range |
| -------------- | ------- | ----- |
| Focus Duration | 25 min  | 1–60  |
| Break Duration | 5 min   | 1–60  |

---

## 📦 Dependencies

The app uses **no JS frameworks**.

Only external resources:

* Google Fonts: *Inter*
* Native browser APIs
* Pure CSS animations

---

## 🔧 Troubleshooting

| Issue                | Explanation                                          |
| -------------------- | ---------------------------------------------------- |
| Timer stops at 00:00 | Reset and ensure valid input numbers.                |
| Ring not animating   | JS must update the `stroke-dashoffset` correctly.    |
| Inputs disabled      | The script may lock inputs during an active session. |

---

## 🤝 Contributors

Designed & developed by **theomatrix**, deployed on Render.

