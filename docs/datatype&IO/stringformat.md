# Format string 

---

  การแสดงผลข้อความสามารถจัดรูปแบบได้หลากหลายวิธี เช่น
  
  * String Formatting ( % operator ) 
  
Format Sequence | คำอธิบาย |
-|-|
%s |***str*** (ข้อความ)|
%d |***int*** (จำนวนเต็ม)|
%f |***float*** (จำนวนจริง)|
%x |จำนวนเต็มใน hex|
%r |สำหรับการ Debug ข้อมูล|

> ตัวอย่างการใช้ % operator
```python
#1 
money = 50 
age = 18 
print("money = %d, age = %d" % (money, age)) # money = 50, age = 18 
print("money = %-5d, age = %d" % (money, 20)) # money = 50 age = 20 
print("age = %f" % 20) # age = 20.000000

#2
pi_value = 3.14159265358979323846264338 
print("Pi value = %.4f" % pi_value) # Pi value = 3.1416

#3 
planet = "Mars" 
print("Hello %s!" % planet) # Hello Mars! 
print("%-8s is next to Earth" % planet) # Mars is next to Earth

```
 
 ใน string formatting ด้านบนนั้นเป็น string formatting แบบเก่า ซึ่งใน python 2.7 นั้นได้เพิ่มวิธีการ format string แบบใหม่มา <br>
 โดยการ format แบบใหม่นั้นสามารถจัดลำดับการ format ด้วยผู้ใช้ได้ง่ายขึ้นอีกด้วย เช่น

```python
print("{}".format("Hello World!")) # Hello World!

print("Hi! my name is {1}, I love {@}.". format("PSIT", "Bob")), 
# Hi! my name is Bob, I love PSIT.

print("Hi! my name is {name}, I love {subject}.".format(subject="PSIT", name="Bob")) 
# Hi! my name is Bob, I love PSIT.
```

***และยังมีแบบที่ใหม่กว่านี้!***
โดยใน python 3.6 นั้นได้เพิ่ม Formatted string literals หรือที่เรียกกันว่า f-string ทำให้สามารถเข้าถึงได้อิสระกว่าเดิม เช่น
```python
planet = "Mars!" 
print(f"Hello {planet}") # Hello Mars!

name = "Bob" 
age = 20 
print(f"Hi! my name is {name}, I'm {age} years old.") 
#Hi! my name is Bob, I'm 20 years old.

```
แต่น่าเสียดายที่ E-Judge ของเรานั้นรองรับถึงแค่ python 3.4 เราจึงไม่สามารถใช้ f-string ได้ แต่ string formatting แบบใหม่ก็ช่วยเราได้เยอะอยู่เหมือนกันนะ!! น้อง ๆ สามารถอ่าน documentation ของการ format ได้ทั้งแบบเก่าและแบบใหม่ได้ที่[Python formatting guide](https://pyformat.info/)

