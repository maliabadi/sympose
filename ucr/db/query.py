from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import cast
from sqlalchemy import Integer
from ucr.db.models import County, Variable, Statistic, YearVariable, engine

Session = sessionmaker(bind=engine)
session = Session()


def year_variable(year, var):
    query = session.query(Statistic.fips.label('fips'),
                          Statistic.count.label('scount')) \
        .filter(Statistic.variable_id == var) \
        .filter(Statistic.year == year) \
        .order_by(Statistic.count.desc())
    return query


def histogram_national(year, var):
    pass


def get_years():
    qry = session.query(YearVariable.year.distinct().label('y'))
    return map(lambda x: int(x.y), qry.all())


def get_variables(year):
    qry = session.query(Variable.display_name.label('dname'),
                        Variable.id.label('vid')) \
        .filter(Variable.id == YearVariable.variable_id) \
        .filter(YearVariable.year == year) \
        .filter(Variable.display == 1)
    return map(lambda x: {'id': int(x.vid), 'display': str(x.dname)},
               qry.all())
