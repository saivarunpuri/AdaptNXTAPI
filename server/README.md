# E-commerce API Documentation

## Setup Instructions

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Create `.env` file in the server directory:**

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ADAPTNXTAPIDB
   JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
   ```

3. **Start MongoDB** (make sure MongoDB is running locally)

4. **Start the server:**
   ```bash
   node server.js
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

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

## Request Examples

### Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"
}
```

### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Product (Admin)

```bash
POST /api/products
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "name": "iPhone 15",
  "description": "Latest iPhone model",
  "price": 999.99,
  "category": "Electronics",
  "stock": 50,
  "imageUrl": "https://example.com/iphone15.jpg"
}
```

### Add to Cart

```bash
POST /api/cart
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "productId": "PRODUCT_ID_HERE",
  "quantity": 2
}
```

### Create Order

```bash
POST /api/orders
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
}
```

## Features Implemented

✅ **Authentication & Authorization**

- JWT-based authentication
- Role-based access (customer/admin)
- Password hashing with bcrypt

✅ **Product Management**

- CRUD operations for products
- Pagination and search functionality
- Category filtering
- Stock management

✅ **Cart Management**

- Add/remove items
- Update quantities
- Stock validation
- Automatic total calculation

✅ **Order Management**

- Create orders from cart
- Stock deduction on order
- Order status tracking
- Shipping address support

✅ **Extra Features**

- Pagination for product listing
- Search by name/description/category
- Comprehensive error handling
- Input validation

## Testing the API

1. **Start the server**
2. **Register a user** (POST /api/auth/register)
3. **Login** (POST /api/auth/login) - save the JWT token
4. **Create products** (admin role required)
5. **Add items to cart** (customer role required)
6. **Create orders** from cart

## Error Responses

All endpoints return consistent error responses:

```json
{
  "message": "Error description",
  "error": "Detailed error message (in development)"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
