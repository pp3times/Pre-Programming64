# List Method (other)

---

## .sort()
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้เรียงข้อมูลใน ```list``` จากน้อยไปมาก ถ้าเป็น ```string``` จะอิงจากรหัสลำดับใน ascii

```python
mylist.sort()
```

### ตัวอย่างการใช้คำสั่ง sort

```python
fruit = ["banana", "mango", "apple"]
fruit.sort()
print(fruit) # ['apple', 'banana', 'mango']

num = [0, -1, 20, 4]
num.sort()
print(num) # [-1, 0, 4, 20]
```

>  หากใส่ ```reverse=True``` ใน ```argument``` เพื่อ ```sort``` จากมากไปน้อยแทน

```python
num = [0, -1, 20, 4]
num.sort(reverse=True)
print(num) # [20, 4, 0, -1]
```

### Tips ข้อแตกต่างระหว่าง .sort() และ sorted() ที่เป็น built-in function

&nbsp;&nbsp;&nbsp;&nbsp;```.sort()``` จะเป็น list method จะเรียงค่าน้อยไปมากใน ```list``` และจะทำให้ค่าในตัวแปรนั้นเรียงกัน

```python
num = [3, -1, 0, -4, 9, 4]
num.sort()
print(num) # [-4, -1, 0, 3, 4, 9]
```

&nbsp;&nbsp;&nbsp;&nbsp;```sorted()``` จะเป็น built-in function จะเรียงค่าใน ```list``` เช่นเดียวกัน แต่ต้องมีตัวแปรมารองรับ เนื่องจาก ```sorted()``` ไม่ได้เรียงค่าในตัวแปรนั้นๆ

```python
num = [3, -1, 0, -4, 9, 4]
sorted(num)
print(num) # [3, -1, 0, -4, 9, 4]

num = [3, -1, 0, -4, 9, 4]
num = sorted(num)
print(num) # [-4, -1, 0, 3, 4, 9]

num = [3, -1, 0, -4, 9, 4]
print(sorted(num)) # [-4, -1, 0, 3, 4, 9]
```

---

## .reverse()
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้สลับตำแหน่งของข้อมูล จากซ้ายไปขวาเป็นขวาไปซ้าย

```python
mylist.reverse()
```

### ตัวอย่างการใช้คำสั่ง reverse

```python
num = [4, 3, 6.2, 5]
num.reverse()
print(num) # [-5, 6.2, 3, 4]
```

---

## .count()
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ในการนับค่าใน ```list```

```python
mylist.count(value)
```

> ```mylist``` คือ ```list``` ที่ต้องการจะนับค่า
> 
> ```value``` คือ ค่าที่ต้องการจะนับใน ```list```


### ตัวอย่างการใช้คำสั่ง count

```python
myaqua = ["whale", "shark", "sealion", "shark", "whale", "shark"]
count = myaqua.count("whale")
print(count) # 2
```

---

## .index()
&nbsp;&nbsp;&nbsp;&nbsp;เป็นคำสั่งที่ใช้ return ตำแหน่งของค่าที่ค้นหา

```python
mylist.index(value)
```

> ```mylist``` คือ ```list``` ที่จะใช้หาค่า
> 
> ```value``` คือ ค่าที่จะค้นหาใน ```mylist```


### ตัวอย่างการใช้คำสั่ง index

```python
fruit = ["apple", "banana", "cherry", "durian"]
num = fruit.index("banana")
print(num) # 1
```

> ```.index()``` จะ return ตำแหน่ง (index) ของข้อมูลที่เจอใน ```list```

> ข้อควรระวัง !
> 
> ```python
> myTD = ["Goten", "Tawan", "Program", "Goten"]
> num = myTD.index("Goten")
> print(num) # 0
> ```
> 
>  ```.index()``` จะเริ่มค้นหาจากฝั่งซ้ายไปขวาและจะ return ตำแหน่งแค่ตัวแรกที่เจอ

> ข้อควรระวัง 2 !
> 
> ```python
> myTD = ["Goten", "Tawan", "Program"]
> num = myTD.index("Poom")
> # ValueError: 'Poom' is not in list 
> ```
> 
> ถ้าหากไม่มีค่าที่ค้นหาใน ```list``` จะเกิด ```ValueError```

---
