# List Comprehension

---

## What is list comprehension?

&nbsp;&nbsp;&nbsp;&nbsp;คือการสร้าง ```list``` โดยง่าย จากขอบเขตของข้อมูลที่เราทราบอยู่แล้ว โดยใช้คำสั่ง ```for``` ในการเพิ่มข้อมูลภายใน ```list``` โดยจะอยู่ในรูป

```python
[statement for i in  mylist]
```

&nbsp;&nbsp;&nbsp;&nbsp;โดย ```statement``` คือจุดที่จะนำค่าที่วนจากลูปมาดำเนินการอะไรบางอย่าง ```i``` คือตัวแปรที่แทนค่าของลูปในรอบนั้น ซึ่งจะนำไปดำเนินการใน ```statement``` ต่อไป


> ```mylist``` คือ ```list``` ที่จะนำมาวนเพื่ออสร้าง ```list``` ใหม่ ซึ่งอาจจะเป็นการระบุช่วงข้อมูลโดยใช้คำสั่ง ```range``` ก็ได้เช่นกัน

### ตัวอย่างการใช้ List Comprehension

```python
list_of_1_to_5 = [i for i in  range(1, 6)]
print(list_of_1_to_5) # [1, 2, 3, 4, 5]
```

---

## List Comprehension with condition

&nbsp;&nbsp;&nbsp;&nbsp;เราสามารถใส่เงื่อนไขในการเลือกค่ามาสร้าง ```list``` ใหม่ได้ด้วยเช่นกัน โดยการใส่คำสั่ง ```if``` และตามด้วยเงื่อนไขในการเช็ค ต่อท้ายในจุดที่ระบุช่วงข้อมูล

```python
[statement for i in  mylist if expression]
```

### ตัวอย่างการใช้ List Comprehension with condition

```python
num_1 = [1, 2, 3, 4, 5, 6]
num_2 = [i for i in  num_1 if i % 2 == 0]
print(num_1) # [1, 2, 3, 4, 5, 6]
print(num_2) # [2, 4, 6]
```

---
