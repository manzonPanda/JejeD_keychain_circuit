int redPin = 4;
int greenPin = 2;
int bluePin = 3;

int redPin2 = 5;
int greenPin2 = 6;
int bluePin2 = 7;

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
  //Serial.println( temp = -temp);
  analogWrite(redPin,255);
  analogWrite(redPin2,255);
  analogWrite(redPin3,255);
  analogWrite(redPin4,255);
  analogWrite(redPin5,255);
  analogWrite(redPin6,255);
  delay(1000); 
  analogWrite(redPin2,0);
  analogWrite(redPin3,0);
  analogWrite(redPin4,0);
  analogWrite(redPin5,0);
  analogWrite(redPin6,0);
  analogWrite(redPin,0);

  delay(1000); 
 // digitalWrite(redPin,LOW);
  //digitalWrite(greenPin,LOW);
  //digitalWrite(bluePin,LOW);
//  delay(1000);  
//  digitalWrite(redPin,LOW);
//  digitalWrite(greenPin,LOW);
//  digitalWrite(bluePin,LOW);
  //delay(1000);  
}
