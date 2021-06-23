# Variable

---

การประกาศตัวแปรในภาษา Python นั้นเราสามารถทำได้โดยไม่จำเป็นต้องประกาศชนิดของข้อมูล (Data type) ซึ่งตัวแปรที่เราประกาศนั้นจะมีชนิดของข้อมูลตามข้อมูลที่เราได้เขียนหรือรับค่าเข้าไปเช่น

```python
name = "Peter Parker" # String
age = 18 # Integer
height = 173.5 # Float
hero = True # Boolean
```

โดยที่ชนิดของตัวแปรเริ่มต้นของคำสั่ง ```input()``` นั้น หากไม่ได้มีการกำหนดชนิดกำกับไว้ ชนิดของค่าที่รับเข้ามามานั้นจะเป็น String ดังรูป

```python
name = input() # Peter Parker
age = input() # 18
height = input() # 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'str'>
print(type(height)) # <class 'str'>
```

ถ้าหากเราต้องการที่จะรับค่า (input) เป็นชนิดข้อมูลอื่น ๆ นั้น เราจำเป็นต้องแปลงชนิดให้ข้อมูล ตามที่ได้กล่าวไว้ในหัวข้อก่อนหน้านี้ ดังรูป

```python
name = str(input()) # Peter Parker
age = int(input()) # 18
height = float(input()) # 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'int'>
print(type(height)) # <class 'float'>
```

## การประกาศตัวแปรพร้อมกันหลายตัว
โดยแบบที่ 1 คือ การประกาศตัวแปรทีละหลาย ๆ ตัว และกำหนดค่าทีละหลาย ๆ ค่า (Many Values to Multiple Variables) โดยสามารถทำแบบนี้ได้เลย

```python
name, age, height = "Peter Parker", 18, 173.5

print(type(name)) # <class 'str'>
print(type(age)) # <class 'int'>
print(type(height)) # <class 'float'>
```

แบบที่ 2 คือ การประกาศตัวแปรหลายตัว และกำหนดค่า ค่าเดียว (One value to Multiple Variables)

```python
spider_man = iron_man = hulk = "Avengers"
```

แบบที่ 3 คือการ unpack a collection หรือการแยกข้อมูลที่เก็บค่าหลาย ๆ ค่าในตัวแปรเดียว ให้อยู่ในหลาย ๆ ตัวแปรแทน สามารถทำได้กับตัวแปรชนิด list tuple ฯลฯ

```python
avengers = ["Spiderman", "Ironman", "Hulk"]
hero_1, hero_2, hero_3 = avengers
print(hero_1, hero_2, hero_3) # Spiderman Ironman Hulk
```

## การประกาศตัวแปรแบบ global variable
ในกรณีแรก กรณีที่มีการประกาศตัวแปรนอกฟังก์ชันและมีการใช้ตัวแปรนั้นในฟังก์ชัน สามารถทำได้ปกติ 

```python
name = "Peter Parker"

def heroes():
    print(name) # Perter Parke

heroes()
```

แต่ในกรณีที่ มีการประกาศตัวแปรชื่อเดียวกันทั้งในและนอกฟังก์ชัน จะถือว่าตัวแปรนั้นเป็นคนละตัวกัน 

```python
name = "Spiderman"

def heroes():
    name = "Captain America"
    print(name) # Captain America

heroes()

print(name) # Spiderman
```

โดยที่เราสามารถ ใส่คำว่า “global” เขียนไว้ข้างหน้าของตัวแปร เพื่อประกาศให้รู้ว่าตัวแปรนั้น เป็นตัวแปรที่สามารถใช้ได้ทั้งในและนอกฟังก์ชัน

```python
name = "Spiderman"

def heroes():
    global name
    name = "Captain America"
    print(name) # Captain America

heroes()

print(name) # Captain America
```
