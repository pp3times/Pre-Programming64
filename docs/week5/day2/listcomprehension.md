# List Comprehension

---

## What is list comprehension?

&nbsp;&nbsp;&nbsp;&nbsp;คือการสร้าง ```list``` โดยง่าย จากขอบเขตของข้อมูลที่เราทราบอยู่แล้ว โดยใช้คำสั่ง ```for``` ในการเพิ่มข้อมูลภายใน ```list``` โดยจะอยู่ในรูป

```python
[statement for i in  mylist]
```

&nbsp;&nbsp;&nbsp;&nbsp;โดย ```statement``` คือจุดที่จะนำค่าที่วนจากลูปมาดำเนินการอะไรบางอย่าง ```i``` คือตัวแปรที่แทนค่าของลูปในรอบนั้น ซึ่งจะนำไปดำเนินการใน ```statement``` ต่อไป


> **Tips** built-in function ```len()``` นอกจากจะหาความยาวของ ```string``` ได้ ยังสามารถหาขนาดของ ```list``` ได้อีกด้วย ดังรูป
> 
> ```python
> mylist = ["a", "b", "c", "d"]
> num = len(mylist)
> print(num) # 4
> ```


&nbsp;&nbsp;&nbsp;&nbsp;และเรายังสามารถวนค่าข้อมูลใน ```list``` ด้วยคำสั่ง ```range``` ได้โดยการใส่ ขนาดของ ```list``` ใน ```range()``` และใส่ค่า i ลงไปในวงเล็บสี่เหลี่ยม (square bracket) เพื่อดึงค่าของข้อมูลจากตำแหน่งแรกจนถึงตำแหน่งสุดท้าย

```python
mylist = ["a", "b", "c", "d"]
for i in range(len(mylist)):
    print(i, mylist[i])

# 0 a
# 1 b
# 2 c
# 3 d
```

---
