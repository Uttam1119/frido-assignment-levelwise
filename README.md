
#   Frido-Assignment

---

## Installation (both level1 & level1_level2 will have same installation steps)

### Backend

1. Clone the repo:

   ```bash
   git clone https://github.com/Uttam1119/level1.git
   cd level-1/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables (`.env`):

   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=5000
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start server:

   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to frontend:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set environment variables (`.env`):

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start React app:

   ```bash
   npm run dev
   ```

---
