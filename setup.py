import os
from setuptools import setup, find_packages

setup(
    name="chronochrime",
    version="0.0.1",
    author="Matt Aliabadi",
    author_email="mattmaliabadi@gmail.com",
    description=("Backend for a UCR Visualizaiton Tool"),
    install_requires=['bson>=0.3.3', 'pymongo==2.1.1', 'flask'],
    license="BSD",
    keywords="UCR, Crime, Data-viz",
    packages=find_packages()
)
