from flask import Flask, render_template, jsonify, url_for, Response
import json
import operator


app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/year/<year>/<var>')
def year_variable(year, var):
    response = []
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype="application/json")


@app.route('/histogram/national/<year>/<var>')
def histogram_national(year, var):
    response = []
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype="application/json")


if __name__ == '__main__':
    app.run()
