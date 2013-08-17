from sqlalchemy.orm import sessionmaker

from ucr.db.models import State, County, Variable, Statistic, engine

Session = sessionmaker(bind=engine)
session = Session()


def year_variable(year, var):
    # var cloroStruct = {'cloro-0' : 'rgb(255, 255, 229)',
    #                'cloro-1' : 'rgb(255, 247, 188)',
    #                'cloro-2' : 'rgb(254, 227, 145)',
    #                'cloro-3' : 'rgb(254, 196, 79)',
    #                'cloro-4' : 'rgb(254, 153, 41)',
    #                'cloro-6' : 'rgb(236, 112, 20)',
    #                'cloro-7' : 'rgb(204, 76, 2)',
    #                'cloro-8' : 'rgb(153, 52, 4)',
    #                'cloro-9' : 'rgb(102, 37, 6)',
    #                'cloro-blank': 'rgb(217, 217, 217)'}
    # data = {get_fips_key(x): zero_or_log(x[var]) for x in load_data(year)}
    pass


def histogram_national(year, var):
    pass
