from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import cast
from sqlalchemy import Integer, func
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
    """
    SELECT
        county.state_name as state,
        sum(statistic.count) as count_sum
    FROM
        county
    INNER JOIN
        statistic
    ON county.fips = statistic.fips
    WHERE
        statistic.variable_id = 12
        AND statistic.year = 1977
    GROUP BY
        county.state_name
    """
    query = session.query(County.state_name.label('state'),
                          func.sum(Statistic.count).label('count_sum')) \
        .filter(County.fips == Statistic.fips) \
        .filter(Statistic.variable_id == var) \
        .filter(Statistic.year == year)
    return query


def timeline_variable(var):
    """
    SELECT
        year_variable.year,
        year_variable.national
    FROM
        year_variable
    WHERE
        variable_id = 12
    GROUP BY
        year;
    """
    query = session.query(YearVariable.year.label('x'),
                          YearVariable.national.label('y')) \
        .filter(YearVariable.variable_id == var) \
        .group_by(YearVariable.year)
    return query


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
