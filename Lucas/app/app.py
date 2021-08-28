from flask import Flask, render_template, redirect, request
from flask import jsonify

#----------------- BASIC ENDPOINTS -------------------- 

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

# API works by passing quereys e.g. {url}/query?key=value&key=value&key=value
#each key value pair is seperated by & and the full query is preceeded by a ? 
@app.route("/query", methods=['GET', 'POST'])
def query():
    thing = request.args.get('thing')
    return thing


#---------------- API BELOW -----------------

@app.route('/person/')
def hello():
    return jsonify({'name':'Jimit',
                    'address':'India'})


#------------ RUN FLASK --------------------
if __name__ == '__main__':
    app.run(debug=True)

