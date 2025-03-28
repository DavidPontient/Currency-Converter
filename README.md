# Currency Converter

# About 
I created this to make it easier to check real-time exchange rates, especially when paying tuition fees at ALU.  

# How it works

Real-time currency conversion  
Supports multiple international currencies  
Simple not too complecated codes especially with html and javascript. 
Uses a reliable Api 

## More
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** JavaScript  
- **API:** [ExchangeRate API](https://www.exchangerate-api.com/)  

## **How to Use**  
  
Run the app:

Open index.html in a browser


Deployment
Upload files to servers was a bit easier since i had already configured the servers before:

scp -r * ubuntu@184.72.196.72:/var/www/html/  
scp -r * ubuntu@3.88.21.88:/var/www/html/  

sudo mv /home/ubuntu/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

Restart the web server:

sudo systemctl restart nginx  
Check the live site using your domain or public IP

## API Details
Endpoint:

https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD  
Docs: ExchangeRate API

## Challenges & Solutions
API key security: Stored in .env file and added to .gitignore.

also met some permission errors while trying to use scp to put the site to the eservers, had to manually copy paste lol.
Deployment issues: Kept on gettign QME errors while trying to deploy. Load balancer configuration took longer than it should have..

## Credits
[ExchangeRate API for real-time exchange rates.](https://www.exchangerate-api.com/)
Followed some tutorials for further help. https://www.youtube.com/watch?v=UY7F37KHyI8
