# Service

## Go to service directory

cd service

## Create a virtual environment

python -m venv env

## Activate Virtual environment

./env/Scripts/activate

## Install requirements

pip install -r requirements.txt

## Start flask application

python -m flask run

# Front

## Go to fron directory

cd front

## Install dependencies

npm install

## Set environment variable

set REACT_APP_API_URL=http://127.0.0.1:5000/ (this is the default flask URL)

## Start react application

npm start