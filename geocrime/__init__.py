`from flask import Flask, render_template, jsonify, url_for, Response
from os import getcwd
from math import log
import json
import operator


def load_data(year=2008):
    with open('%s/static/data/crime/%s.json' % (getcwd(), year), 'r') as file:
        data = json.loads(file.read())
    return data

def get_fips_key(entry):
    return "%s%s" % (entry['fips_state_code'], entry['fips_county_code'])


def provide_quantization(nparts, data):
    high = max(data.values())
    low = min(data.values())
    chunk_size = (high - low) / nparts
    strata = []
    marker = int(low)
    while marker <= high:
        strata.append([marker, marker + chunk_size])
        marker += chunk_size
    chunked = {"cloro-%s" % x: {} for x,y in enumerate(strata)}
    for key, value in data.items():
        match = filter(lambda x: x[0] <= value and x[1] > value, strata)[0]
        idx = strata.index(match)
        chunked["cloro-%s" % idx][key] = value
    return chunked

app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    return render_template('index.html')

def zero_or_log(value):
    if not value or int(value) == 0:
        return 0
    else:
        return log(value, 10)


@app.route('/year/<year>/<var>')
def year_variable(year, var):
    data = { get_fips_key(x): zero_or_log(x[var]) for x in load_data(year=year) }
    response = provide_quantization(8, data)
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype="application/json")



if __name__ == '__main__':
    app.run()
