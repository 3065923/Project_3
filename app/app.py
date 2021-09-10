from flask import Flask, json, render_template, redirect, request
from flask import jsonify
import json
import os
#----------------- BASIC ENDPOINTS -------------------- 

app = Flask(__name__)

f = open('..\..\DataFiles\weekly_data.json',) 

data = json.load(f)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/index.html")
def index():
    return redirect("/")

@app.route('/heatmap')
def heatmap():
    return render_template("Heatmap.html")

@app.route('/Heatmap.html')
def heatmap_redirect():
    return redirect('/heatmap')

@app.route("/query", methods=['GET', 'POST'])
def query():

    return (data)

#------------ RUN FLASK --------------------
if __name__ == '__main__':
    app.run(debug=True)

