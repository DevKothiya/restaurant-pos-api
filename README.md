# 🍽️ Restaurant POS API

A Node.js + Express backend for managing restaurants, menu items, and customer orders. Built for POS (Point of Sale) systems in restaurants.

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Deployed on Render or Railway

---

## 📁 Folder Structure

```
Restaurant-order-api/
│
├── controllers/         # Controller logic
│
├── models/              # Mongoose models
│
├── routes/              # API routes
│
├── .env                 # Environment config (not committed)
├── app.js               # App entry point
└── README.md
```

---

## 🚀 Setup Instructions (VS Code & Local Dev)

### 1. Clone the repository
```bash
git clone https://github.com/devkothiya/restaurant-pos-api.git
cd restaurant-pos-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### 4. Run the server
```bash
npm start
```

Server runs on: `http://localhost:9000`

---

## 🌱 Sample Seed Data

### ➕ Create a Restaurant
**POST** `/api/restaurants`
```json
{
  "name": "Pizza Palace"
}
```

### ➕ Add Menu Items
**POST** `/api/menu-items`
```json
[
  {
    "restaurant_id": "REPLACE_WITH_ID",
    "name": "Margherita Pizza",
    "price": 300,
    "category": "Pizza",
    "is_available": true
  },
  {
    "restaurant_id": "REPLACE_WITH_ID",
    "name": "Garlic Bread",
    "price": 150,
    "category": "Sides",
    "is_available": true
  }
]
```

---

## 🔌 API Endpoints

### 1. **POST** `/api/orders` — Create New Order

### 2. **GET** `/api/orders/:id` — Fetch Order by ID

### 3. **GET** `/api/orders` — Fetch All Orders

---



## 🔍 API Testing with cURL

### ➕ Create Order
```bash
curl -X POST https://restaurant-pos-api.onrender.com/api/orders -H "Content-Type: application/json" -d '{
  "restaurant_id": "6808bba7ad6098560a3ca4e4",
  "customer_name": "Alice",
  "order_type": "DINE_IN",
  "items": [
    { "menu_item_id": "6808bd8201b3784015347c28", "quantity": 2 },
    { "menu_item_id": "6808bd8201b3784015347c29", "quantity": 1 }
  ]
}'
```

### 📥 Get Order by ID
```bash
curl https://restaurant-pos-api.onrender.com/api/orders/{order-id}
```

---



## 🧼 Code Quality & Best Practices

- All routes and logic modularized
- Error handling included
- Uses `.env` for sensitive configs
- Clean RESTful structure

---

## 👏 Credits

Made with ❤️ using Node.js, Express & MongoDB.

---