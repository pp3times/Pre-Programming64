# List Method (remove)

---

&nbsp;&nbsp;&nbsp;&nbsp;คำสั่งสำหรับการกำจัดค่าใน ```list``` ด้วยวิธีต่าง ๆ ได้แก่

## Remove
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการลบค่าที่กำหนด ออกจาก ```list``` 

```python
mylist.remove(vaule)
```

> ```mylist``` คือ ชื่อของ ```list``` ที่จะถูกกำจัดข้อมูล<br>
> ```value``` คือ ค่าที่เราต้องการจะกำจัดใน ```list```

### ตัวอย่างการใช้คำสั่ง remove

```python
mynum = [1, 2, 3, 4]
mynum.remove(3)
print(mynum) # [1, 2, 4]
```

>  ข้อควรระวัง !
>  ```python
>  mynum = [1, 2, 3, 4, 4, 5]
>  mynum.remove(4)
>  print(mynum) # [1, 2, 3, 4, 5]
>  ```
>  
>  ถ้ามีค่าที่จะกำจัดหลายค่า ```.remove()``` จะกำจัดออกแค่ข้อมูลที่พบตำแหน่งแรกจากด้านซ้ายเพียงตัวเดียว

---

## Pop
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการกำจัดตามตำแหน่งที่กำหนด 

```python
mylist.pop(index)
```

> ```mylist``` คือ ชื่อของ ```list``` ที่จะถูกกำจัดข้อมูล<br>
> ```value``` คือ ตำแหน่งของค่าใน ```list``` ที่ต้องการจะกำจัด

### ตัวอย่างการใช้คำสั่ง pop

```python
mylist = ["a", "b", "c", "d"]
mylist.pop(2)
print(mylist) # ['a', 'b', 'd']
```

```python
mylist = ["a", "b", "c", "d"]
mylist.pop()
print(mylist) # ['a', 'b', 'c']
```

> โดยหากเราไม่ใส่ argument ใน .pop() จะทำการกำจัดตัวสุดท้ายใน list

### Tips
```.pop()``` จะ return ค่าที่นำออกมาด้วย หรือก็คือถ้าเรามีตัวแปรมารับค่าเอาไว้ ค่าที่ถูกนำออกจาก ```list``` จะถูกเก็บในตัวแปรนั้น

```python
check = "Hello"
mylist = ["a", "b", "c", "d"]
check = mylist.pop()
print(check) # 'd'
```

---

## Del
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการกำจัดค่าจากตำแหน่งที่กำหนด ใกล้เคียงกับคำสั่ง ```.pop()``` แต่จะไม่มีการ return ค่าที่ถูกกำจัดออกไป

```python
mylist = ["a", "b", "c", "d"]
del mylist[1]
print(mylist) # ['a', 'c', 'd']
```

โดยหากไม่มีการระบุตำแหน่งที่จะกำจัด คำสั่ง ```del``` จะกำจัดทั้งตัวแปรไปเลย

```python
mylist = ["a", "b", "c", "d"]
del mylist
print(mylist) 
# NameError: name 'mylist' is not defined
```

---

## Clear
&nbsp;&nbsp;&nbsp;&nbsp;คือคำสั่งในการกำจัดค่าทุกค่าใน ```list```

```python
mylist = [1, 2, 3, 4, 5]
mylist.clear()
print(mylist) # []
```

---
