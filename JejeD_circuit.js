#include <SoftPWM.h>
uint8_t ledsRed[6] = {1,5,8 , 11, A0, A3};
uint8_t ledsGreen[6] = {3, 6, 9, 12, A1, A4};
uint8_t ledsBlue[6] = {4, 7, 10, 13, A2, A5};

int buttonPin = 2;

//int redPin1 = 2;
int redPin2 = 5;
int redPin3 = 8;
int redPin4 = 11;
int redPin5 = A0;
int redPin6 = A3;

int greenPin1 = 3;
int greenPin2 = 6;
int greenPin3 = 9;
int greenPin4 = 12;
int greenPin5 = A1;
int greenPin6 = A4;

int bluePin1 = 4;
int bluePin2 = 7;
int bluePin3 = 10;
int bluePin4 = 13;
int bluePin5 = A2;
int bluePin6 = A5;


void setup() {
  SoftPWMBegin();
  SoftPWMSetFadeTime(ALL, 2000, 2000);
  pinMode(buttonPin,INPUT);
  Serial.begin(9600);
}
int ledState = LOW; 
int buttonState = 0; 
bool lastButtonState =  0;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50; 
bool toggle = false;
int counter = 0;
bool initializePatternToggle = true;
unsigned long buttonPushedTime;
unsigned long currentTime;
unsigned long previousTime = 0;

void loop() {
  /*for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    analogWrite(redPin, fadeValue);
    analogWrite(redPin2, fadeValue);
    analogWrite(redPin3, fadeValue);
    delay(30);
    }
    delay(2000);
    for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    analogWrite(redPin, fadeValue);
    analogWrite(redPin2, fadeValue);
    analogWrite(redPin3, fadeValue);
    delay(30);
    }
    delay(2000);
  */
  currentTime = millis();
  buttonState = digitalRead(buttonPin);
  
  if ( buttonState != lastButtonState) {  //  always-LOW != LOW
      if( digitalRead(buttonPin) == HIGH ){
		 buttonPushedTime = currentTime;
         counter++;
         Serial.println("on -" + counter);
      }else{
         Serial.println("off -" + counter);
      }
  }
  //Serial.println(buttonPushedTime);
	 lastButtonState = buttonState;
	 
	  if(counter ==0){
		buttonPushedTime = 0;
		initializationPattern();
	  }
	  if( counter == 1 ){
		Serial.println("here");
		firstPattern();
	  }
	  if( counter == 2 ){
		secondPattern();
	  }
	  if( counter == 3 ){
		thirdPattern();
	  }
	   if( counter == 4 ){
		counter = 0;
	  }
}
void initializationPattern(){
  if( initializePatternToggle ){
    Serial.println("here1");
      if( (currentTime - buttonPushedTime) >=3000 ){
        for( int j=1; j<=3;j++){
          for (int pin = 0; pin <= 5; pin++){ //fade all LEDs(6) one by one with white color
			for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) { //fade in
			  SoftPWMSet(ledsRed[pin], fadeValue);
			  SoftPWMSet(ledsGreen[pin], fadeValue);
			  SoftPWMSet(ledsBlue[pin], fadeValue);
			  delay(30);
			}
			delay(20);
			if( j<3 ){//remain LEDs(6) HIGH on 5th iteration
				for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {//fade out
				  SoftPWMSet(ledsRed[pin], fadeValue);
				  SoftPWMSet(ledsGreen[pin], fadeValue);
				  SoftPWMSet(ledsBlue[pin], fadeValue);
				  delay(30);
				}
			}
			delay(20);
          }
           if(j == 3){
				delay(500);
				for (int i = 1; i<=3; i++){ //blink all LEDs(6) together with white color
				  for( int pin = 0; pin <= 5; pin++ ){ //turn off every LEDs(6)
				    SoftPWMSet(ledsRed[pin], 0);
				    SoftPWMSet(ledsGreen[pin], 0);
				    SoftPWMSet(ledsBlue[pin], 0);
				  } 
					  delay(300);
				  for( int pin = 0; pin <= 5; pin++ ){//turn on every LEDs
					  SoftPWMSet(ledsRed[pin], 255);
					  SoftPWMSet(ledsGreen[pin], 255);
					  SoftPWMSet(ledsBlue[pin], 255);
				  }
					  delay(300);
				
				if( i == 3 ){
				  delay(2000);
				  for( int pin = 0; pin <= 5; pin++ ){ //for every LEDs
					for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {//fade out
					  SoftPWMSet(ledsRed[pin], fadeValue);
					  SoftPWMSet(ledsGreen[pin], fadeValue);
					  SoftPWMSet(ledsBlue[pin], fadeValue);
					  delay(60);
					}
				  }
				}
            initializePatternToggle = false;   
           } 
        }
      }
  }
}
void firstPattern(){
  if( (currentTime - buttonPushedTime) >=3000 ){
      buttonPushedTime = currentTime;
	  //SoftPWMSet(redPin1, 255);
	  SoftPWMSet(redPin2, 255);
	  SoftPWMSet(redPin3, 255);
	  SoftPWMSet(redPin4, 255);
	  SoftPWMSet(redPin5, 255);
	  SoftPWMSet(redPin6, 255);   
  }
  if( currentTime-buttonPushedTime >=1000 ){
	  //SoftPWMSet(redPin1, 0);
      SoftPWMSet(redPin2, 0);
      SoftPWMSet(redPin3, 0);
      SoftPWMSet(redPin4, 0);
      SoftPWMSet(redPin5, 0);
      SoftPWMSet(redPin6, 0);
  }
    
   
}
void secondPattern(){
  if( (currentTime - buttonPushedTime) >=2000 ){
	  for (int i = 0; i <= 5; i++){
		SoftPWMSet(ledsGreen[i], 5);
		delay(500);
		SoftPWMSet(ledsGreen[i], 0);
		delay(100);
	  }
	  delay(400);
	  for (int i = 5; i > 0; i--){
		SoftPWMSet(ledsGreen[i-1], 5);
		SoftPWMSet(ledsGreen[i], 0);
		delay(100);
	  }
	  delay(400);
  }
}
void thirdPattern(){
  for (int i = 0; i <= 5; i++)
  {
    SoftPWMSet(ledsBlue[i], 5);
    delay(500);
    SoftPWMSet(ledsBlue[i], 0);
    delay(100);
  }
  
  delay(400);
  
  for (int i = 5; i > 0; i--)
  {
    SoftPWMSet(ledsBlue[i-1], 5);
    SoftPWMSet(ledsBlue[i], 0);
    delay(100);
  }

  delay(400);
}

void fadeOutAll(fadeValue){
	  SoftPWMSet(redPin1, fadeValue);
	  SoftPWMSet(bluePin1, fadeValue);
	  SoftPWMSet(greenPin1, fadeValue);

	  SoftPWMSet(redPin2, fadeValue);
	  SoftPWMSet(greenPin2, fadeValue);
	  SoftPWMSet(bluePin2, fadeValue);
	  
	  SoftPWMSet(redPin3, fadeValue);
	  SoftPWMSet(greenPin3, fadeValue);
	  SoftPWMSet(bluePin3, fadeValue);

	  SoftPWMSet(redPin4, fadeValue);
	  SoftPWMSet(greenPin4, fadeValue);
	  SoftPWMSet(bluePin4, fadeValue);
	  
	  SoftPWMSet(redPin5, fadeValue);
	  SoftPWMSet(greenPin5, fadeValue);
	  SoftPWMSet(bluePin5, fadeValue);
	  
	  SoftPWMSet(redPin6, fadeValue);
	  SoftPWMSet(greenPin6, fadeValue);
	  SoftPWMSet(bluePin6, fadeValue);
}

