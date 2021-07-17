# Loop through List

---

## What is loop through list?

&nbsp;&nbsp;&nbsp;&nbsp;คือการใช้ ```for loop``` ในการวนค่าข้อมูลภายใน ```list``` ตั้งแต่ข้อมูลแรกจนถึงข้อมูลสุดท้ายเช่นเดียวกับการวนตัวอักษรในข้อมูลชนิด ```string```

```python
mylist = ["bird", "cat", "dog"]
for i in mylist:
    print(i)

# bird
# cat
# dog
```

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
