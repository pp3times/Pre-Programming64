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

## List Method (add)

&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้สำหรับการเพิ่มค่าเข้าสู่ ```list``` ด้วยวิธีต่าง ๆ ได้แก่

- Append
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

- Insert
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

- Extend
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

### Tips
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

## List Method (remove)

&nbsp;&nbsp;&nbsp;&nbsp;คำสั่งสำหรับการกำจัดค่าใน ```list``` ด้วยวิธีต่าง ๆ ได้แก่

- Remove
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

- Pop
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

- Del
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

- Clear
&nbsp;&nbsp;&nbsp;&nbsp;คือคำสั่งในการกำจัดค่าทุกค่าใน ```list```

```python
mylist = [1, 2, 3, 4, 5]
mylist.clear()
print(mylist) # []
```
