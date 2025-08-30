# 🚀 Git Repository Dashboard – Frontend

This is the **frontend** of the Git Repository Dashboard project.  
It is built with **React + Vite + TailwindCSS**, providing a clean UI to fetch and display data from the backend API.  
The app is deployed on **AWS Amplify** with CI/CD directly from GitHub.

---

## 🌐 Live Links

- **Frontend (Amplify):** [https://main.d2bq4wm45qqalq.amplifyapp.com](https://main.d2bq4wm45qqalq.amplifyapp.com)  
- **Backend (EC2):** [http://13.127.84.94:3003](http://13.127.84.94:3003)  

---

## 🛠️ Tech Stack

- ⚡ **React + Vite** – Fast build tool and modern React setup  
- 🎨 **TailwindCSS** – Utility-first CSS framework for styling  
- ☁️ **AWS Amplify** – Frontend hosting with GitHub CI/CD  
- 🌍 **REST API Integration** – Connected to backend hosted on AWS EC2  

---

## 📌 Features

- Fetches repository data from backend API (`/repo/all`)  
- Displays data with a responsive and clean UI  
- Continuous deployment via Amplify – every push to GitHub auto-deploys  
- Environment-specific API support (dev/prod)  

---

## 🐞 Challenges We Faced

1. **Backend Timeout (ETIMEDOUT)**  
   - Issue: Frontend was trying to connect to `localhost:3003` after deployment.  
   - ✅ Fix: Updated API URL to use **EC2 public IP**.  

2. **CORS Errors**  
   - Issue: Amplify (HTTPS) couldn’t fetch data from EC2 (HTTP).  
   - ✅ Fix: Enabled `cors` in backend and whitelisted Amplify domain.  

3. **Mixed Content (HTTPS vs HTTP)**  
   - Issue: Amplify serves over HTTPS, but backend was only HTTP.  
   - ✅ Fix: Allowed temporary HTTP connections (plan: add Nginx + SSL).  

4. **AWS Security Group Blocking Port**  
   - Issue: API calls failed because port `3003` was not open.  
   - ✅ Fix: Added inbound rule for port `3003` in EC2 security group.  

---

## 📚 What We Learned

- Deploying a **React + Vite app** to AWS Amplify  
- Handling **CORS policies** between different domains  
- Managing **EC2 inbound/outbound security groups**  
- Using **pm2** to keep backend alive on EC2  
- Debugging **ETIMEDOUT & Mixed Content errors**  
- Importance of **HTTPS (SSL)** in frontend-backend communication  

---

## 🚀 Next Steps

- Configure **Nginx + SSL (Let’s Encrypt)** on EC2 backend  
- Store API URLs in **`.env` files** for better environment management  
- Add **authentication & user login system**  
- Setup **custom domains** for frontend and backend  
- Improve UI/UX with more interactivity  

---

## 🤝 Contributing

Feel free to fork this repo, open issues, and submit PRs.  
Contributions are welcome!  

---

## 👨‍💻 Author

**Arvind Prajapati**  
- GitHub: [@arvi8080](https://github.com/arvi8080)  
- LinkedIn: [Arvind Prajapati](https://www.linkedin.com/in/arvind-prajapati-4b6689296/)  

---
