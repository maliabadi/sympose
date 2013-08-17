from ucr.db import engine, base
from sqlalchemy import Column, Integer, String, ForeignKey


class State(Base):

    __tablename__ = 'state'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fips_code = Column(String)


class County(Base):

    __tablename__ = 'county'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fips_code = Column(String)
    state_id = Column(Integer, ForeignKey('state.id'))


class Variable(Base):
    __tablename__ = 'variable'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    display_name = Column(string)


class Statistic(Base):
    __tablename__ = 'statistic'
    id = Column(Integer, primary_key=True)
    year = Column(Integre)
    variable_id = Column(Integer, ForeignKey('variable.id'))
    county_id = Column(Integer, ForeignKey('county.id'))
    count = Column(Integer)
