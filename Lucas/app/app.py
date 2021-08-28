from flask import Flask
from flask import jsonify
from flask import Flask, render_template, redirect

#----------------- BASIC ENDPOINTS -------------------- 

app = Flask(__name__)
@app.route('/data/', methods=['GET', 'POST'])
def dumb():
    return "Hello World!"

@app.route("/")
def welcome():
    return render_template("index.html")


#---------------- API BELOW -----------------

@app.route('/person/')
def hello():
    return jsonify({'name':'Jimit',
                    'address':'India'})


#------------ RUN FLASK --------------------
if __name__ == '__main__':
    app.run(debug=True)

