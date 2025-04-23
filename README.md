# 🪑 Library Table Map

This project displays a 2D seating layout of library tables with interactive features. Tables that already have links turn light green and open in a new tab when clicked. Tables without links display a form for users to submit their own.

---

## 🚀 Running the Project Locally

### Prerequisites
You need **Python 3.x** installed on your system.

### Steps

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/samanpl/seats.git
   cd seats
    ```
2. **Run a local HTTP server using Python:**
    ```bash
    python -m http.server 8000
    ```
3. **Open your browser and navigate to:**
    ```bash
    http://localhost:8000
    ```
> ⚠️ Opening index.html directly with file:// will not work due to browser CORS restrictions.

## 📁 Project Structure
📦 seats/
├── index.html         # Main HTML file
├── links.json         # Contains mapping of table numbers to external links
├── layout.json        # 2D array of table numbers representing layout
├── ./assets
    ├── style.css      # CSS for layout and design
├── ./js
    └── script.js      # JavaScript to generate the grid and handle interaction

## ✨ Features
✅ Linked seats open in new tabs
✅ Unlinked seats show a submission form
✅ Stylish layout using CSS grid
✅ Formspree integration to handle form submissions via email
✅ Mobile-friendly and simple design

## 🧪 Example links.json
```json
{
  "T1": "https://example.com/table1",
  "T2": "https://example.com/table2"
}
```

## 🧾 Example layout.json
```json
[
  ["T1", "T2", "T3"],
  ["T4", "T5", "T6"]
]
```

## 🤝 Contributing
Feel free to fork this project, improve it, and open pull requests. Suggestions, bug reports, and enhancements are all welcome!

## 📝 License
[GPL-3.0 License](./LICENSE) © 2025 [pypi0](https://pypi0.github.io)