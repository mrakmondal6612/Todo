# To-Do App

A simple, modern **To-Do App** built with **React** and styled using **Tailwind CSS**.

## 🛠 Features

- ✅ Add, edit, and delete tasks
- 🎨 Beautiful background image support
- 📱 Responsive design

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

## 📂 Project Structure

```
📦 todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 Todo.js
 ┃ ┣ 📂 assets
 ┃ ┃ ┗ 📜 image.png
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 main.js
 ┃ ┗ 📜 index.css
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┗ 📜 README.md
```

## 🎨 Using Background Image

The background image is set dynamically in `App.js`:

```jsx
import bgImg from "./assets/image.png";

<div
  style={{ backgroundImage: `url(${bgImg})` }}
  className="bg-cover bg-center min-h-screen grid py-4"
>
  <Todo />
</div>;
```

## 🌟 Contributing

Feel free to fork this repo and submit a pull request. Any contributions are welcome! 🎉

## 📜 License

This project is open-source and available under the **MIT License**.

---

Made with ❤️ by [Ajay Mondal](https://todo-v405.vercel.app/)
