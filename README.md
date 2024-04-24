# Doctor Recommendor App

Welcome to Doctor Recommendor App! This application evaluates user symptoms and suggests them with doctors who are specialized in relevant fields and are compatible with their schedules.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask, MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sanika1710/Doctor_recommender.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Doctor_recommender
    ```

3. Install dependencies for each folder:

    ```bash
    # For frontend
    cd frontend
    npm install

    # For backend
    cd backend
    npm install

    # For Flask API
    cd doctor_flask
    pip install -r requirements.txt
    ```

4. Set up environment variables:

    - Create a `.env` file in each directory (`frontend`, `backend`, and `doctor_flask`) and add necessary environment variables.
    - In the backend `.env` file, add the MongoDB URI as `MONGODB_URI`.

5. Run the development servers:

    ```bash
    # For frontend
    cd frontend
    npm run dev

    # For backend
    cd backend
    node index.js

    # For Flask API
    cd doctor_flask
    flask --app app run --port 4000
    ```


    


