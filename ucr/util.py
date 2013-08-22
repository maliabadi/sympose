from os import getcwd
from math import log


color = ['rgb(255, 255, 229)',
         'rgb(255, 247, 188)',
         'rgb(254, 227, 145)',
         'rgb(254, 196, 79)',
         'rgb(254, 153, 41)',
         'rgb(236, 112, 20)',
         'rgb(204, 76, 2)',
         'rgb(153, 52, 4)',
         'rgb(102, 37, 6)']


def normalize(row):
    if row.scount is None or int(row.scount) == 0:
        row.scount = 0
    else:
        row.scount = log(int(row.scount), 10)
    return row


def gen_range(start, stop, step):
    current = start
    counter = 0
    while current < stop:
        next_current = current + step
        if next_current < stop:
            yield (counter, current, next_current)
        else:
            yield (counter, current, stop)
        current = next_current
        counter += 1


def within_bounds(row, l, h):
    return row.scount >= l and row.scount < h


def gen_match(response, l, h):
    for n in filter(lambda x: within_bounds(x, l, h),
                    response):
        yield n


def quantize(query):
    response = map(normalize, query.all())
    output = {}
    counts = map(lambda x: x.scount, response)
    low, high = (counts[-1], counts[0])
    denom = len(color)
    if (high - low) % len(color):
        denom -= 1
    chunk_size = (high - low) / denom
    for i, l, h in gen_range(low, high, chunk_size):
        for row in gen_match(response, l, h):
            output[row.fips] = color[i]
    return output


def format_timeline(query):
    return [{'year': k.x, 'count': k.y} for k in query.all()]


def format_histogram(query):
    return [{'count': int(x.count_sum), 'name': x.state} for x in query.all()]
