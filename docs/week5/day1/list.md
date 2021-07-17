# List

---

## What is list?

&nbsp;&nbsp;&nbsp;&nbsp;```list``` เป็นชนิดของข้อมูลที่ใช้เก็บข้อมูลหลาย ๆ ค่ามาไว้ในข้อมูลชุดเดียว
โดยใน python นอกจาก ```list``` ยังมี ```tuple```, ```set``` และ ```dictionary``` ที่เป็น built-in data types สำหรับการเก็บข้อมูลเป็นชุด แต่ในคอร์ส pre-programming นี้ เราจะไม่เน้นเรื่องนี้ พี่ๆ แค่จะแนะนำน้องๆ ให้รู้จักกับ ```list``` กันคร่าว ๆ กันก่อน

```python
mylist = list()
# or
mylist = []
```

&nbsp;&nbsp;&nbsp;&nbsp;โดยการเขียนให้ python รู้ว่าตัวแปร ```mylist``` ของเราเป็นตัวแปรชนิด ```list``` สามารถทำได้โดยใช้ ```list()``` หรือใส่ค่า [] ลงไปเพื่อบ่งบอกว่าเป็นข้อมูลแบบ ```list``` ที่ไม่มีข้อมูลอื่น ๆ อยู่ด้านใน

> จากการเก็บข้อมูลแบบปกติ

```python
mypet_1 = "dog"
mypet_2 = "bird"
mypet_3 = "cat"
```

> ถ้าหากเรานำ ```list``` มาช่วยจะสามารถเขียนได้ดังนี้

```python
mypet = ["dog", "bird", "cat"]
```

> และเมื่อลองแสดงผลออกมาจะได้ว่า

```python
mypet = ["dog", "bird", "cat"]
print(mypet) #["dog", "bird", "cat"]
```

&nbsp;&nbsp;&nbsp;&nbsp;```list``` สามารถเก็บข้อมูลได้หลากหลาย และสามารถเก็บ ```list``` อื่นไว้ข้างในได้อีกด้วย

```python
list1 = ["pencil", "eraser", "ruler"]
list2 = [1, 2, 3, 4.2]
list3 = [True, False, True, True]

list4 = [10, "paper", -1.4, [False, 0.01, "pen"]]
```

&nbsp;&nbsp;&nbsp;&nbsp;เนื่องจาก ```list``` มีการเก็บข้อมูลอย่างเป็นลำดับ เราจึงสามารถเข้าถึงค่าใน ```list``` ได้จากการระบุตำแหน่ง (index) ใน ```list``` นั้นได้ เช่น

```python
mypet = ["dog", "bird", "cat"]
print(mypet[0]) # "dog"
```

&nbsp;&nbsp;&nbsp;&nbsp;ซึ่งการนับลำดับของตำแหน่ง (index) จะเริ่มจากตำแหน่งที่ 0 ดังนั้นค่าตำแหน่งแรกของ ```list``` จึงเป็น 0 และตำแหน่งต่อ ๆ ไป ก็เพิ่มไปเรื่อย ๆ จนถึงตำแหน่งสุดท้าย แต่หากลองใส่ค่าของตำแหน่งเป็น -1 ดู

```python
mypet = ["dog", "bird", "cat"]
print(mypet[-1]) # "cat"
```

> ตำแหน่งที่ -1 คือการนับย้อนกลับจากตำแหน่งสุดท้ายกลับมา 1 ตำแหน่ง

&nbsp;&nbsp;&nbsp;&nbsp;หากเริ่มต้นที่ตำแหน่งที่ไม่ติดลบ จะเริ่มนับจากซ้ายไปขวา โดยตำแหน่งแรกจะเริ่มจากด้านซ้ายสุดของ ```list```  แต่ถ้าเริ่มที่ตำแหน่งที่ติดลบ จะเริ่มนับจากขวาไปซ้าย โดยตำแหน่งแรกที่เริ่มนับคือตำแหน่งสุดท้ายใน ```list``` กลับไปจนถึงตำแหน่งแรกของ ```list```

&nbsp;&nbsp;&nbsp;&nbsp;เช่นเดียวกับ string slicing การใส่ argument ในการหาตำแหน่งของข้อมูลใน ```list``` ก็สามารถใช้ ```[start:stop:step]``` ได้เช่นเดียวกัน

```python
mylist[start:stop:step]
```

> หากไม่ใส่ค่าใด ๆ เลยใน argument ก็จะอิงจากค่า default

### ตัวอย่างการทำงานที่ 1

```python
mylist["a", "b", "c", "d", "e", "f", "g", "h"]
print(mylist[0:3]) # ['a', 'b', 'c']
```

> แต่เพราะ ค่า default ของ start คือ 0 อยู่แล้ว เราจะไม่ใส่ก็ได้ ดังนี้

```python
mylist["a", "b", "c", "d", "e", "f", "g", "h"]
print(mylist[:3]) # ['a', 'b', 'c']
```

### ตัวอย่างการทำงานที่ 2

```python
mylist["a", "b", "c", "d", "e", "f", "g", "h"]
print(mylist[5:]) # ['f', 'g', 'h']
```

### ตัวอย่างการทำงานที่ 3

```python
mylist["a", "b", "c", "d", "e", "f", "g", "h"]
print(mylist[::2]) # ['a', 'c', 'e', 'g']
```

---

## Changeable List

&nbsp;&nbsp;&nbsp;&nbsp;เนื่องจาก ```list``` เป็นการเก็บข้อมูลแบบ mutable (ชุดข้อมูลซึ่งสามารถแก้ไขค่าของข้อมูลในนั้นได้) ไม่เหมือน ```list``` ที่เป็น immutable เราจึงสามารถแก้ไขข้อมูลแต่ละอันใน ```list``` ได้เลย
แต่ว่าถ้าอยากกำหนดจำนวนรอบให้ละเอียดขึ้น ก็สามารถเขียนแบบนี้ได้เลย

```python
fruit = ["apple", "banana", "cherry", "durian"]
print(fruit) # ['apple', 'banana', 'cherry', 'durian']
fruit[2] = "orange"
print(fruit) # ['apple', 'banana', 'orange', 'durian']
```

หากต้องการที่จะแก้ไขครั้งละหลาย ๆ ค่า สามารถทำได้ ดังรูป

```python
fruit = ["apple", "banana", "cherry", "durian"]
print(fruit) # ['apple', 'banana', 'cherry', 'durian']
fruit[1:3] = ["kiwi", "melon"]
print(fruit) # ['apple', 'kiwi', 'melon', 'durian']
```

และเรายังสามารถแก้ไขค่าหลายๆ ค่าให้เหลือเพียงค่าเดียวได้ ดังรูป

```python
fruit2 = ["blueberry", "fig", "mango", "plum"]
print(fruit) # ['blueberry', 'fig', 'mango', 'plum']
fruit2[2:4] = ["raspberry"]
print(fruit) # ['blueberry', 'fig', 'raspberry']
```

---
