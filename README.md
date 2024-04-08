# Langchain-AI-Chatbot

Welcome to the IIT Roorkee AI Chatbot project! This chatbot utilizes the power of OpenAI's language model and the Lanchain model to provide a seamless and informative conversational experience about IIT Roorkee. Whether you're a current student, an alumni, or just curious about the institution, this chatbot is designed to answer your questions and provide insights about various aspects of IIT Roorkee.

## Overview

This project aims to create an interactive chatbot capable of answering queries related to IIT Roorkee. Leveraging OpenAI's API key and Lanchain, a model specifically designed for creating OpenAI embeddings and searching for context, the chatbot is trained on data sourced from various resources including watchout's fresher's guide,official documents, PDFs, and the Multimap site of IIT Roorkee. The chatbot's knowledge encompasses a wide range of topics including campus facilities, academic programs, extracurricular activities, and more.The chatbot can be deployed on the main website of IIT Roorkee to serve as a valuable resource for students, faculty, and visitors.

## Some responses it produced
![WhatsApp Image 2024-03-10 at 23 39 21_dcf6d149](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/1f8caad1-db5c-4a96-9177-162c78e2c79d)

![WhatsApp Image 2024-03-10 at 23 40 23_aeb94a4e](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/7673908a-2e9a-4808-a174-7ed7dc84907e)

![WhatsApp Image 2024-03-10 at 23 40 23_e0b87576](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/e941a891-1c61-476e-8008-9d48d05fc131)

![WhatsApp Image 2024-03-10 at 23 40 23_e52c30cb](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/7c396ce1-cae4-4ea4-84bf-7f8f03769fdf)

![WhatsApp Image 2024-03-10 at 23 40 24_aad01cd8](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/d0d72274-396f-4100-8ccf-735cf5b2cdf7)

![WhatsApp Image 2024-03-10 at 23 40 25_97758e0b](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/34070448-a4d4-4b5f-af25-aa72c786605b)

![WhatsApp Image 2024-03-10 at 23 40 24_013a6484](https://github.com/rishabhJain1234/Langchain-AI-Chatbot/assets/40473326/43a45c60-316a-4f94-a036-4c04720261f8)


## How It Works



### OpenAI API


The OpenAI API key is utilized to interact with the powerful language model, allowing the chatbot to understand and generate human-like responses to user queries.

### Tokens

The dataset is breaken into tokens with token size of 1000 characters and having an overlap of 300 characters.

### Lanchain Model

Lanchain is utilised to train the model on the tokens and creating OpenAI embeddings which can be used to efficiently search (semantic search) for context within these embeddings. By leveraging Lanchain, the chatbot can quickly retrieve relevant information from the trained dataset, ensuring accurate and contextually appropriate responses.

### FAISS

FAISS is a vector store database which stores the OpenAi embeddings.

## Techstack

### Django

Django is utilised to create a robust backend for the chatbot.

### React

React is used to create the front end for the chatbot.
