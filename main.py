from flask import *
app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def index():
    return render_template('index.js')


@app.route('/login', methods=["POST", "GET"])
def login():
    msg = ""
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password']
        if username == "":
            msg = "username cannot be blank"
        elif password == "" or len(password) < 8:
            msg = "password has to be at least 8 charactors long"
        else:
            return redirect("/")
    return render_template("login.js")

# @app.route("/signin")
