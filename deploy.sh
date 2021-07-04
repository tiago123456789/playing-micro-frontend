#!/bin/bash 

cd app-a/
npm run build
cd ..
cd app-b/
npm run build
cd ..
cd panel 
npm run build
docker-compose down
docker-compose up