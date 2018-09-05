# fliplet-backend

To run locally:
1. git clone https://github.com/sirudog/fliplet-backend.git
2. git checkout feature
3. npm install
4. npm start

To run the dockerized service:
1. git clone https://github.com/sirudog/fliplet-backend.git
2. git checkout feature
3. docker build -t fliplet-backend .
4. docker run --rm -p 3000:3000 fliplet-backend