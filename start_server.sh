npm install && typings install
gulp move-files
tsc
cd Webapp/ && npm install
gulp deploy
cd ../
NODE_ENV=production pm2 start .build/index.js -f --name  "Endurance v1.0"