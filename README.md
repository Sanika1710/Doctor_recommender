# Doctor Recommendor App

Welcome to Doctor Recommendor App! This application that evaluates user symptoms and provides suggestions for doctors who are specialized in relevant fields and have compatible schedules.

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
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
    cd ../backend
    npm install

    # For Flask API
    cd ../doctor_flask
    pip install -r requirements.txt
    ```

4. Set up environment variables:

    - Create a `.env` file in each directory (`frontend`, `backend`, and `doctor_flask`) and add necessary environment variables.
    - In the backend and Flask API `.env` files, add the MongoDB URI as `MONGO_URI=<your_mongo_uri_here>`.

5. Run the development servers:

    ```bash
    # For frontend
    cd frontend
    npm run dev

    # For backend
    cd ../backend
    node index.js

    # For Flask API
    cd ../doctor_flask
    flask --app app run --port 4000
    ```

6. Access the application in your browser:

    ```
    http://localhost:5173
    ```

## Contributing

Contributions are welcome! Please feel free to fork the repository, make pull requests, and suggest improvements.

