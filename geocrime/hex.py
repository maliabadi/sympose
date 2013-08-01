from json import loads
from os import getcwd


with open('%s/static/data/geo/topology.json' % getcwd(), 'r') as file:
	data = loads(file.read())

print data
