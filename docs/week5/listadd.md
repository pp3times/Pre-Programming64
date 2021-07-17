# List Method (add)

&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้สำหรับการเพิ่มค่าเข้าสู่ ```list``` ด้วยวิธีต่าง ๆ ได้แก่

## Append
&nbsp;&nbsp;&nbsp;&nbsp;คือการเพิ่มค่าเข้าสู่ ```list``` โดยนำข้อมูลมาต่อที่ตำแหน่งสุดท้ายของชุดข้อมูล (```list```) 

```python
mylist.append(vaule)
```

> ```mylist``` คือ ชื่อของ ```list``` ที่จะถูกเพิ่มข้อมูลเข้าไป<br>
> ```value``` คือ ค่าที่เราต้องการจะเพิ่มเข้าไปใน ```list```

### ตัวอย่างการใช้คำสั่ง append

```python
myzoo = ["tiger", "monkey", "elephant"]
print(myzoo) # ['tiger', 'monkey', 'elephant']

myzoo.append("lion")
print(myzoo) # ['tiger', 'monkey', 'elephant', 'lion']
```

>  ```“lion”``` จะถูกเพิ่มต่อท้าย ```mylist```

---

## Insert
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการแทรกค่าเข้าสู่ ```list``` ในตำแหน่งที่ระบุไว้ 

```python
mylist.insert(index, vaule)
```

> ```mylist``` คือ ชื่อของ ```list``` ที่จะถูกเพิ่มข้อมูลเข้าไป<br>
> ```insert``` คือตำแหน่งที่เราต้องการให้ค่าของเราแทรกเข้าไป<br>
> ```value``` คือ ค่าที่เราต้องการจะเพิ่มเข้าไปใน ```list```

### ตัวอย่างการใช้คำสั่ง insert

```python
myTD = ["Goten", "Program", "Toey"]
print(myTD) # ['Goten', 'Program', 'Toey']

myTD.insert(2, "Tawan")
print(myTD) # ['Goten', 'Program', 'Tawan', 'Toey']
```

>  ในบรรทัดที่ 4 จะเห็นว่ามีการแทรก ```“Tawan”``` เข้าไปในตำแหน่ง index ที่ 2 ```“Toey”``` จึงถูกขยับไปในตำแหน่งถัดไป 

---

## Extend
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการนำข้อมูลในชุดข้อมูลอื่นมาเพิ่มในชุดข้อมูลที่กำหนด

```python
mylist.extend(otherlist)
```

> ```mylist``` คือชื่อของ ```list``` ที่จะถูกเพิ่มข้อมูลเข้าไป<br>
> ```otherlist``` คือ ชุดของข้อมูลที่เราจะนำไปเพิ่มใน ```mylist```

### ตัวอย่างการใช้คำสั่ง extend

```python
myaqua = ["shark", "stingray", "sealion"]
print(myaqua) # ['shark', 'stingray', 'sealion']

myaqua2 = ["seahorse", "octopus", "whale"]
print(myaqua2) # ['seahorse', 'octopus', 'whale']

myaqua.extend(myaqua2)
print(myaqua) # ['shark', 'stingray', 'sealion', 'seahorse', 'octopus', 'whale']
```

>  จะเห็นว่าข้อมูลใน ```myaqua2``` ถูกนำไปเพิ่มใน ```myaqua``` โดยจะไปต่อในตำแหน่งด้านหลัง

> ( .extend() นอกจากการเพิ่ม ```list``` ยังสามารถนำ ชุดข้อมูลแบบอื่น มาเพิ่มได้ด้วยเช่นกัน อาทิ ```tuple```, ```sets```)
> 
<br>

## Tips
สามารถเพิ่มข้อมูลจากชุดข้อมูลอื่น ๆ ลงใน list โดยการใช้เครื่องหมาย += ดังรูป

```python
mylist = ["a", "b", "c"]
mylist += ["d", "e"]

print(mylist) # ['a', 'b', 'c', 'd', 'e']
```

```python
mylist = ["v", "w", "x"]
mylist2 = ["y", "z"]

mylist += mylist2
print(mylist) # ['v', 'w', 'x', 'y', 'z']
```

---

