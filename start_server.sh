npm install && typings install
gulp move-files
tsc
cd Webapp/ && npm install
npm deploy
cd ../
pm2 start .build/index.js -f --name  "Endurance"