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
    return render_template("register.js")


@app.route("/signin", methods=["GET", "POST"])
def rigister():
    msg = ""
    if request.method == "POST":
            firstname = request.form["firstname"]
            lastname = request.form["lastname"]
            emailid = request.form["username"]
            password = request.form["password"]

            if firstname == "":
                msg = "Firstname cannot be blank"

            elif lastname == "":
                msg = "Lastname cannot be blank"

            elif emailid == "":
                msg = "Emailid cannot be blank"

            elif password == "":
                msg = "Password cannot be blank"

            else:
                msg = "User has been added succsessfuly"
                UserService.AddUser(firstname, lastname, emailid, password, 1)
                return render_template("users/adduser.html", msg=msg)
        else:
            return render_template("users/adduser.html")

