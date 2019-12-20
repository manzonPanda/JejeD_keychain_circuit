int redPin = 3;
int greenPin = 5;
int bluePin = 6;

int redPin2 = 9;
int greenPin2 = 10;
int bluePin2 = 11;

int redPin3 = 8;
int greenPin3 = 9;
int bluePin3 = 10;

int redPin4 = 11;
int greenPin4 = 12;
int bluePin4 = 13;

int redPin5 = A0;
int greenPin5 = A1;
int bluePin5 = A2;

int redPin6 = A3;
int greenPin6 = A4;
int bluePin6 = A5;


int temp = 15;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);   
  
  pinMode(redPin2, OUTPUT);
  pinMode(greenPin2, OUTPUT);
  pinMode(bluePin2, OUTPUT);  

  pinMode(redPin3, OUTPUT);
  pinMode(greenPin3, OUTPUT);
  pinMode(bluePin3, OUTPUT);   
  
  pinMode(redPin4, OUTPUT);
  pinMode(greenPin4, OUTPUT);
  pinMode(bluePin4, OUTPUT);   
  
  pinMode(redPin5, OUTPUT);
  pinMode(greenPin5, OUTPUT);
  pinMode(bluePin5, OUTPUT);  
  
  pinMode(redPin6, OUTPUT);
  pinMode(greenPin6, OUTPUT);
  pinMode(bluePin6, OUTPUT); 
  
  
  Serial.begin(9600);
}

void loop() {
 // analogWrite(redPin,255);
    
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    analogWrite(redPin, fadeValue);
	analogWrite(redPin2, fadeValue);
    delay(30);
  }
  
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    analogWrite(redPin, fadeValue);
	analogWrite(redPin2, fadeValue);
    delay(30);
  }
  delay(200); 
  
  analogWrite(bluePin, 255);
  analogWrite(bluePin2, 255);
   for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    analogWrite(bluePin, fadeValue);
	analogWrite(bluePin2, fadeValue);
    delay(30);
  }
   delay(2000);
  
 // digitalWrite(redPin,LOW);
  //digitalWrite(greenPin,LOW);
  //digitalWrite(bluePin,LOW);
//  delay(1000);  
//  digitalWrite(redPin,LOW);
//  digitalWrite(greenPin,LOW);
//  digitalWrite(bluePin,LOW);
  //delay(1000);  
}
