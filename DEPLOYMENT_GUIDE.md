# DEPLOYMENT GUIDE (24/7 Access)

To make your website accessible 24/7 to your client, you cannot run it on "localhost". You need to deploy it to the cloud.

Here is the best **Free Tier Tech Stack** for this project:

1.  **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database) (Free Cloud Database)
2.  **Backend**: [Render](https://render.com/) (Hosting for Node.js)
3.  **Frontend**: [Vercel](https://vercel.com/) (Hosting for React)

---

## ONE-TIME SETUP (Prepare Code)

1.  **Initialize Git**
    Run these commands in your project root (`/Users/sahildevendramakhamale/Desktop/untitled folder`):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Push to GitHub**
    -   Go to [GitHub.com](https://github.com) and create a new repository called `portfolio`.
    -   Copy the commands they give you to "push an existing repository". They will look like:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git branch -M main
    git push -u origin main
    ```

---

## STEP 1: SET UP DATABASE (MongoDB Atlas)

1.  Go to **MongoDB Atlas** and sign up for free.
2.  Create a **Shared Cluster** (Free).
3.  Go to "Database Access" -> Create a Database User (username/password).
4.  Go to "Network Access" -> Allow Access from Anywhere (`0.0.0.0/0`).
5.  Click **Connect** -> "Connect your application" -> Copy the Connection String.
    -   It looks like: `mongodb+srv://user:password@cluster0.mongodb.net/portfolio`

---

## STEP 2: DEPLOY BACKEND (Render)

1.  Go to [Render.com](https://render.com) and sign up with GitHub.
2.  Click **New +** -> **Web Service**.
3.  Select your `portfolio` repository from the list.
4.  **Configure Settings**:
    -   **Root Directory**: `server`
    -   **Build Command**: `npm install`
    -   **Start Command**: `node index.js`
5.  **Environment Variables** (Scroll down):
    -   Key: `MONGODB_URI` | Value: (Paste your Atlas connection string from Step 1)
    -   Key: `PORT` | Value: `10000` (Render usually expects this or uses its own)
6.  Click **Create Web Service**.
7.  **Wait**: Once live, copy your Backend URL (e.g., `https://portfolio-backend.onrender.com`).

---

## STEP 3: DEPLOY FRONTEND (Vercel)

1.  Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
2.  Click **Add New Project**.
3.  Import your `portfolio` repository.
4.  **Configure Project**:
    -   **Framework Preset**: Vite
    -   **Root Directory**: Click "Edit" and select `client`.
5.  **Environment Variables**:
    We need to tell the frontend where the backend lives.
    -   We need to update your code to use an environment variable first!
    -   (I have already prepared the code to look for the backend URL, you just need to set the variable in Vercel).
    -   **NAME**: `VITE_API_URL`
    -   **VALUE**: (Paste your Render Backend URL from Step 2)
    
    *Note: You might need to update your `client/src/pages` code to use `import.meta.env.VITE_API_URL` instead of hardcoded `http://localhost:5001`. See "Final Code Tweak" below.*

6.  Click **Deploy**.

---

## FINAL CODE TWEAK (Important!)

Before deploying, we need to make the frontend dynamic so it connects to `localhost` when you are developing, but connects to the Cloud when deployed.

**I will apply this fix for you now.**
