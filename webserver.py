from flask import Flask, render_template

mi_app = Flask("__name__")


# esta linea va en conjunto con def inferior y le ejecuta
@mi_app.route("/")
def hello_world():
    return "<h1>piddddr</h1>"

if __name__ =="__main__":
    # para ejecutar una página en servidor local
    mi_app.run(debug=True)