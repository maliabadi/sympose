from ucr.util import quantize
import ucr.db.query as q

from flask import Flask, render_template, jsonify, url_for, Response
import json

app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/year/<var>/<year>')
def year_variable(year, var):
    response = quantize(q.year_variable(year, var))
    return Response(response=json.dumps(response), status=200,
                    mimetype='application/json')


@app.route('/histogram/national/<year>/<var>')
def histogram_national(year, var):
    response = quantize(q.year_variable(year, var))
    return Response(response=json.dumps(response), status=200,
                    mimetype='application/json')


@app.route('/list/years')
def list_years():
    response = q.get_years()
    return Response(response=json.dumps(response), status=200,
                    mimetype='application/json')


@app.route('/list/variables/<year>')
def list_variables(year):
    response = q.get_variables(int(year))
    return Response(response=json.dumps(response), status=200,
                    mimetype='application/json')


if __name__ == '__main__':
    app.run()
