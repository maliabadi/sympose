from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, backref

from ucr.db import engine, Base


class County(Base):

    __tablename__ = 'county'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fips = Column(Integer)
    state_name = Column(String)


class Variable(Base):

    __tablename__ = 'variable'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    display_name = Column(String)
    display = Column(Integer)


class Statistic(Base):
    __tablename__ = 'statistic'
    id = Column(Integer, primary_key=True)
    year = Column(Integer)
    variable_id = Column(Integer, ForeignKey('variable.id'))
    county_id = Column(Integer, ForeignKey('county.id'))
    count = Column(Integer)
    fips = Column(Integer)


class YearVariable(Base):
    __tablename__ = 'year_variable'
    id = Column(Integer, primary_key=True)
    variable_id = Column(Integer)
    year = Column(Integer)
    national = Column(Integer)
