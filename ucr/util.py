from os import getcwd
from math import log


def zero_or_log(value):
    if value is None:
        return -1
    if int(value) == 0:
        return 0
    else:
        return log(value, 10)


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
    chunked = {"cloro-%s" % x: {} for x, y in enumerate(strata)}
    chunked['cloro-blank'] = {}
    for key, value in data.items():
        if value < 0:
            chunked['cloro-blank'][key] = value
        else:
            match = filter(lambda x: x[0] <= value and x[1] > value, strata)[0]
            idx = strata.index(match)
            chunked["cloro-%s" % idx][key] = value
    return chunked


def load_data(year=2008):
    with open('%s/static/data/crime/%s.json' % (getcwd(), year), 'r') as file:
        data = json.loads(file.read())
    return data


def load_states():
    with open('%s/static/data/geo/states.json' % getcwd(), 'r') as file:
        data = json.loads(file.read())
    return data


def sort_histogram_data(data, year, variable):
    states = load_states()
    state_to_count = {x['fips']: 0 for x in states}
    fips_to_name = {x['fips']: x['name'] for x in states}
    for entry in data:
        if entry["fips_state_code"] in state_to_count:
            if entry[variable]:
                state_to_count[entry["fips_state_code"]] += int(entry[variable])
    response = {'data': sorted(filter(lambda y: y[1] > 0, state_to_count.items()), key=lambda x: x[1], reverse=True), 'fips': fips_to_name}
    return response
