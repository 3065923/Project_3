# Project_3
A Machine Learning project performing sentiment analysis on stock market headlines

This project will use natural language processing to create a sentiment index for stocks in the S&P 500. We are looking at using either a SVG model or a naive bayes model that will be tuned with grid search. We will preprocess the data both to get word stems, and to remove filler words. 

We will then make a flask API (and maybe MongoDB) to serve the data, and will render it using JavaScript and D3  (?)


Data Sourced from Kaggle:
https://www.kaggle.com/miguelaenlle/massive-stock-news-analysis-db-for-nlpbacktests?select=raw_partner_headlines.csv
https://www.kaggle.com/dgawlik/nyse?select=prices.csv
