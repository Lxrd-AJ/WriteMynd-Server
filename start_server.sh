npm install && typings install
gulp move-files
tsc
cd Webapp/ && npm install
gulp deploy
cd ../
sudo pm2 start .build/index.js -f --name  "Endurance++"