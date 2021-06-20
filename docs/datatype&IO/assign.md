# Assign Variable

---

การประกาศตัวแปรใน python เราสามารถทำได้โดยไม่จำเป็นต้องประกาศชนิดของข้อมูล (Data type)   ตัวแปรที่เราประกาศนั้นจะมีชนิดของข้อมูลตามข้อมูลที่เราได้ assign เข้าไปเช่น

```python
name = "Peter Parker" # String
age = 18 # Integer
height = 173.5 # Float
hero = True # Boolean
```

โดยที่ Default ของ ```input()``` นั้น ถ้าไม่ได้กำหนด Data type ค่าที่รับมานั้นจะเป็น String ดังรูป

```python
name = input() # Peter Parker
age = input() # 18
height = input() # 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'str'>
print(type(height)) # <class 'str'>
```

ถ้าหากเราต้องการที่จะรับค่า (input) ชนิดข้อมูลอื่นๆนั้น เราจำเป็นต้องกำหนดให้ input แบบนี้เลย!

```python
name = str(input()) # Peter Parker
age = int(input()) # 18
height = float(input()) # 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'int'>
print(type(height)) # <class 'float'>
```

## การ Assign Multiple Values
แบบที่ 1 คือ การประกาศตัวแปรทีละหลายๆตัว และกำหนดค่าทีละหลายๆค่า (Many Values to Multiple Variables) โดยสามารถทำแบบนี้ได้เลย

```python
name, age, height = "Peter Parker", 18, 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'int'>
print(type(height)) # <class 'float'>
```

แบบที่ 2 คือ การประกาศตัวแปรหลายตัว และกำหนดค่า ค่าเดียว (One value to Multiple Variables) 

```python
spider_man, iron_man, hulk = "Avengers"
```

แบบที่ 3 คือการ unpack a collection หรือก็คือการ แยกข้อมูลที่เป็นชุดออกมาเช่น list , tuple และ อื่นๆ

```python
avengers = ["Spiderman", "Ironman", "Hulk"]
hero_1, hero_2, hero_3 = avengers
print(hero_1, hero_2, hero_3) # Spiderman Ironman Hulk
```

## การประกาศตัวแปร แบบ global variables 
ในกรณีแรก กรณีที่มีการประกาศตัวแปรนอก function และมีการใช้ตัวแปรนั้นใน function สามารถทำได้ปกติ

```python
name = "Peter Parker"

def heroes():
    print(name) # Perter Parke

heroes()
```

แต่ในกรณีที่ มีการประกาศตัวแปรชื่อเดียวกันทั้งใน และนอก function จะถือว่าเป็นคนละตัวกัน 

```python
name = "Spiderman"

def heroes():
    name = "Captain America"
    print(name) # Captain America

heroes()

print(name) # Spiderman
```

โดยที่เราสามารถ ใช้ keyword “global” เขียนไว้ข้างหน้าของตัวแปร เพื่อประกาศให้รู้ว่าเป็นตัวแปรที่สามารถใช้ได้ทั้งใน และนอก function

```python
name = "Spiderman"

def heroes():
    global name
    name = "Captain America"
    print(name) # Captain America

heroes()

print(name) # Captain America
```