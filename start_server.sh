npm install && typings install
tsc
pm2 start .build/index.js --name "Endurance"