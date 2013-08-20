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

color.reverse()


def normalize(row):
    if row.scount is None or int(row.scount) == 0:
        row.scount = 0
    else:
        row.scount = log(int(row.scount), 2)
    return row


def quantize(query):
    response = map(normalize, query.all())
    output = {}
    count = query.count()
    chunk_size = count / len(color)
    for i in color:
        for k in range(chunk_size):
            row = response.pop()
            output[row.fips] = i
    return output
