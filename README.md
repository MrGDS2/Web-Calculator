# Web-Calculator
Allows users to perform add, multiple, subtract with server side calculation
WEB CAlCULATOR
_______________________
| |            15.00|
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |

SERVER SIDE CALCULATIONS
Front-end:
.__              .__         
|__| ____   ____ |__| ____   
|  |/  _ \ /    \|  |/ ___\  
|  (  <_> )   |  \  \  \___  
|__|\____/|___|  /__|\___  > 
               \/        \/  
I decided to use the Ionic Framework, due to it's ease of use for front end development via web or mobile app.

Developing a calculator may warrant the use of a mobile device and ionic allows for that flexibility.

 

Back-end:

                                                                                              
      __    ____   __    ___  _   _  ____ 
  /__\  (  _ \ /__\  / __)( )_( )( ___)
 /(__)\  )___//(__)\( (__  ) _ (  )__) 
(__)(__)(__) (__)(__)\___)(_) (_)(____)                                                                                    
                                            
  __ _          _                    
 / _(_)        | |                   
| |_ _ _ __ ___| |__   __ _ ___  ___ 
|  _| | '__/ _ \ '_ \ / _` / __|/ _ \ 
| | | | | |  __/ |_) | (_| \__ \  __/
|_| |_|_|  \___|_.__/ \__,_|___/\___|
                                     

I used Apache to host the scripts I have developed, performing server-side calculations. 

These scripts are written in php, which calculates the two numbers sent from the Ionic front-end(add,subtract,multiply,divide) and posts the result to Firebase (provided by Google).

The result, now stored in the Firebase Realtime Database is retrieved using calls from Ionic. After the result is received, it is then displayed in a ion-card view.

 
