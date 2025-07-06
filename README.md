# 🛒 E-commerce API

A complete e-commerce API built with Node.js, Express, and MongoDB featuring authentication, product management, cart operations, and order processing.

## 🚀 Live Demo

- **API**: [Your Render URL]
- **Frontend**: [Your Render URL] (same URL)

## ✨ Features

- ✅ **Authentication & Authorization**

  - JWT-based security
  - Role-based access (customer/admin)
  - Password hashing with bcrypt

- ✅ **Product Management**

  - CRUD operations for products
  - Pagination and search functionality
  - Category filtering
  - Stock management

- ✅ **Cart Management**

  - Add/remove items from cart
  - Update quantities
  - Stock validation
  - Automatic total calculation

- ✅ **Order Management**

  - Create orders from cart
  - View customer orders
  - Admin order management
  - Order status updates

- ✅ **Extra Features**
  - Pagination for product listing
  - Search by name/description/category
  - Comprehensive error handling
  - Input validation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Render

## 📋 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Products

- `GET /api/products` - Get all products (with pagination & search)
- `GET /api/products/categories` - Get all categories
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Cart (Customer only)

- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update cart item quantity
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Orders

- `POST /api/orders` - Create order from cart (customer)
- `GET /api/orders/my-orders` - Get user's orders (customer)
- `GET /api/orders/my-orders/:id` - Get specific order (customer)
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get specific order (admin)
- `PUT /api/orders/:id/status` - Update order status (admin)

## 🚀 Quick Start

### Prerequisites

- Node.js (>=14.0.0)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env` file in the root directory:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ADAPTNXTAPIDB
   JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
   ```

4. **Start the server:**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

5. **Access the application:**
   - **API**: http://localhost:5000
   - **Frontend**: http://localhost:5000

## 🧪 Testing

### Using the Frontend

1. Open http://localhost:5000 in your browser
2. Use the tabbed interface to test all features
3. Register users (customer & admin)
4. Create products, manage cart, place orders

### Using Postman/curl

```bash
# Test root endpoint
curl http://localhost:5000

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"password123","role":"customer"}'
```

## 📁 Project Structure

```
├── server/
│   ├── models/          # MongoDB schemas
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   ├── middlewear/      # Authentication middleware
│   ├── public/          # Frontend files
│   └── server.js        # Main server file
├── package.json         # Dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🔧 Environment Variables

| Variable     | Description               | Default  |
| ------------ | ------------------------- | -------- |
| `PORT`       | Server port               | `5000`   |
| `MONGO_URI`  | MongoDB connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Express.js for the web framework
- MongoDB for the database
- JWT for authentication
- Render for hosting

---

**Built with ❤️ for learning and development**
