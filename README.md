🧱 CEB Compressive Strength Predictor Dashboard

An end-to-end machine learning project for predicting the compressive strength of Compressed Earth Blocks (CEBs) using real laboratory-tested parameters and presenting results through an interactive dashboard frontend.

This project integrates Civil Engineering domain knowledge with Machine Learning and Web Technologies for sustainable construction analysis.

📌 Project Overview

Compressed Earth Blocks (CEBs) are eco-friendly and sustainable building materials. Their compressive strength depends on multiple material, mix, and curing parameters.

This project:

Uses laboratory soil and CEB test data (Wardha region, Maharashtra)

Trains ML regression models to predict compressive strength

Provides a dashboard frontend for visualization and real-time prediction

Includes Explainable AI (XAI) concepts for model interpretation

🎯 Objectives

Predict compressive strength (MPa) of CEBs accurately

Analyze the effect of mix proportions and physical properties

Build a user-friendly dashboard for engineers and researchers

Demonstrate a complete frontend + backend ML pipeline

🧪 Dataset Description

The dataset is created based on laboratory test reports and expanded synthetically while preserving realistic statistical behavior.

🔹 Input Features

Soil source / location

Sand type (Black sand / White sand / Crusher dust)

Soil proportion (by weight)

Surkhi content (%)

Cement content (%)

Dry weight (gm)

Wet weight (gm)

Moisture content (%)

Water absorption (%)

Dry density (kg/m³)

Curing age (7 / 28 days)

🎯 Target Variable

Compressive strength (MPa)

🧠 Machine Learning Models Used

Linear Regression

Support Vector Regression (SVR)

Random Forest Regressor

Gradient Boosting / XGBoost

Artificial Neural Network (ANN)

The best-performing model is selected based on:

R² Score

MAE

MSE

RMSE

🖥️ System Architecture
Frontend (React + Vite)
        |
        |  REST API
        ↓
Backend (FastAPI)
        |
        ↓
Machine Learning Model (Python, Scikit-learn)

📊 Dashboard Features
🔹 Visualization Panel

Dataset summary statistics

Model performance comparison

Actual vs Predicted strength plot

Feature importance visualization

🔹 Prediction Panel

User input for material and mix parameters

Real-time compressive strength prediction (MPa)

🛠️ Tech Stack
Frontend

React.js

Vite

JavaScript

HTML, CSS

Backend

Python

FastAPI

Scikit-learn

Pandas

NumPy

Joblib

Tools

VS Code

Git & GitHub

Google AI Studio (Gemini) – dataset generation & insights

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Ro-hue-hue/Prediction-of-Compressive-strength-of-Compressed-Earth-block-CEB-using-Machine-learning
cd ceb-strength-predictor

2️⃣ Frontend Setup
npm install
npm run dev


Open in browser:

http://localhost:5173

3️⃣ Backend Setup
cd backend
pip install fastapi uvicorn scikit-learn pandas numpy joblib
uvicorn app:app --reload


Backend runs at:

http://127.0.0.1:8000

🧪 Model Training
python train_model.py


This will:

Train the ML model

Save the trained model as ceb_strength_model.pkl

🧠 Explainable AI (XAI)

Feature importance analysis

SHAP value visualization

Identifies dominant parameters such as:

Cement content

Dry density

Water absorption

Curing age

📈 Results & Insights

Cement content and dry density strongly influence compressive strength

Higher curing age significantly improves strength

Machine learning models outperform traditional empirical estimation

🌱 Applications

Quality control of CEB manufacturing

Sustainable construction planning

Decision support for civil engineers

Academic and research demonstrations

🔮 Future Scope

Real-time field data integration

Power BI / Streamlit deployment

Mobile-friendly dashboard

Cloud-based model hosting

Larger multi-region datasets

👩‍🎓 Academic Relevance

Minor Project / Final Year Project

Viva & Practical Demonstration

Journal / Conference Paper Preparation

Civil Engineering + AI interdisciplinary study

📜 License

This project is for academic and research purposes.

🙌 Author

Roshni Dahule
Computer Science Engineering
Machine Learning for Infrastructure Materials
