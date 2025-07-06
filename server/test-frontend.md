# Frontend Testing Instructions

## 🚀 How to Test the Frontend

1. **Start your server:**

   ```bash
   npm run dev
   ```

2. **Open your browser and go to:**

   ```
   http://localhost:5000
   ```

3. **Test the API through the frontend:**

### **Step 1: Authentication**

- Go to the "Authentication" tab
- Register a new user (try both customer and admin roles)
- Login with your credentials
- Check "Get Profile" to verify your token

### **Step 2: Products (Admin)**

- Login as an admin user
- Go to "Products" tab
- Create some test products
- Use "Get Products" to see all products
- Try search and filtering

### **Step 3: Cart (Customer)**

- Login as a customer
- Go to "Cart" tab
- Add products to cart (use product IDs from step 2)
- Update quantities
- Remove items
- Clear cart

### **Step 4: Orders (Customer)**

- Go to "Orders" tab
- Create an order with shipping address
- View your orders

### **Step 5: Admin Orders**

- Login as admin
- Go to "Orders" tab
- View all orders
- Update order status

## 🎯 Features of the Frontend

✅ **Tabbed Interface** - Easy navigation between features  
✅ **Forms for All Operations** - Register, login, create products, etc.  
✅ **Real-time API Testing** - See responses immediately  
✅ **Error Handling** - Clear error messages  
✅ **Token Management** - Automatic token handling  
✅ **Responsive Design** - Works on different screen sizes

## 📋 What You Can Test

- **Authentication**: Register, login, profile
- **Products**: Create, view, search, filter
- **Cart**: Add, update, remove, clear
- **Orders**: Create, view (customer & admin)
- **Role-based Access**: Test customer vs admin permissions

## 🎉 Benefits

1. **Visual Testing** - See your API in action
2. **Easy Debugging** - Clear response display
3. **User Experience** - Understand how users will interact
4. **Documentation** - Frontend serves as API documentation
5. **Assignment Bonus** - Shows complete understanding

**Your frontend is now ready for testing!** 🚀
