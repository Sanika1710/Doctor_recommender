from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.decomposition import PCA
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns
import spacy
import numpy as np
import re
import json

app = Flask(__name__)

def create_vector_from_input(filtered_tokens, columns):
    input_vector = []
    for column in columns:
        # print(column)
        splitted_column = re.split("_", column)
        input_vector.append(1 if set(splitted_column).issubset(set(filtered_tokens)) else 0)
    print(input_vector)
    return input_vector

@app.route('/predict', methods=['POST'])
def predict():
    # Get text input from request
    text = request.json['text']
    data = pd.read_csv("updated.csv")
    data = data.drop(columns=[ "new_column", "rating", "slots", "qualifications", "city", "experience"])
    encoder = LabelEncoder()
    data["prognosis"] = encoder.fit_transform(data["prognosis"])
    features = data.drop(columns=["prognosis", "specialisation"]) 
    target = data["prognosis"]
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(features)
    pca = PCA(n_components=0.95)
    pca_features = pca.fit_transform(scaled_features)
    X_train, X_test, y_train, y_test = train_test_split(pca_features, target, test_size=0.3, random_state=42)
    svm_model = SVC(kernel='rbf', random_state=42)
    svm_model.fit(X_train, y_train)
    y_pred_svm = svm_model.predict(X_test)

    # Train Logistic Regression model
    logreg_model = LogisticRegression(max_iter=1000, random_state=42)
    logreg_model.fit(X_train, y_train)
    y_pred_logreg = logreg_model.predict(X_test)
    # Train Gradient Boosting Classifier model
    gb_model = GradientBoostingClassifier(n_estimators=100, random_state=42)
    gb_model.fit(X_train, y_train)
    y_pred_gb = gb_model.predict(X_test)
    # Calculate accuracy for each model
    accuracy_svm = accuracy_score(y_test, y_pred_svm)
    accuracy_logreg = accuracy_score(y_test, y_pred_logreg)
    accuracy_gb = accuracy_score(y_test, y_pred_gb)
    
    
    print("Accuracy (SVM):", accuracy_svm)
    print("Accuracy (Logistic Regression):", accuracy_logreg)
    print("Accuracy (Gradient Boosting):", accuracy_gb)
    df = pd.read_csv("updated.csv")
    columns = df.columns[:-8]
    # Load the language model
    nlp = spacy.load("en_core_web_sm")

    # Process the text
    doc = nlp(text)

    filtered_tokens = [token.text for token in doc if not token.is_stop]

    # Print the text excluding stop words
    print(filtered_tokens)
    text_input = create_vector_from_input(filtered_tokens, columns)

    # Select a random index
    random_row =text_input
    random_row= np.array(text_input)


    reshaped_array = random_row.reshape(1, -1)
    pca_random_features = pca.transform(reshaped_array)
    predicted_prognosis = logreg_model.predict(pca_random_features)
    predicted_prognosis_label = encoder.inverse_transform(predicted_prognosis)
    result = { "disease": predicted_prognosis_label[0] }
    
    return json.dumps(result)

if __name__ == '__main__':
    app.run(debug=True)
