# String method

---

## What is string?
&nbsp;&nbsp;&nbsp;&nbsp;**String** เนี่ย จริง ๆ แล้วมันก็คือ กลุ่มของตัวอักษรที่มาเรียงลำดับกัน ดังนั้นตัวอักษรแต่ละตัวใน string จึงมีตำแหน่งหรือ Index เป็นของตัวเอง<br>
โดยตำแหน่งนั้นจะเริ่มนับจากทางซ้ายสุด โดยเริ่มต้นที่ 0 แล้วก็ +1 ไปเรื่อยๆ 0,1,2,3,4,5,... <br>
และเราจะสามารถดูตัวอักษรที่อยู่ในตำแหน่งต่าง ๆ ได้โดยใช้สัญลักษณ์ "[]" เช่น

```python
>>> s = "Hello World" 
>>> print(s[0])
H
>>> print(s[8])
r
>>> print(s[11])
'IndexError: string index out of range #เนื่องจาก index เกิน 
>>> print(s[-1])
d
>>> print(s[-4])
o
```

&nbsp;&nbsp;&nbsp;&nbsp;ซึ่ง string นั้นเป็นตัวแปรที่ไม่สามารถเปลี่ยนค่าได้ (immutable) ซึ่งหากเราใส่ค่าให้มันแล้วเราไม่สามารถเปลี่ยนตัวอักษรในตำแหน่งใดตำแหน่งหนึ่งได้นอกเสียจากว่าน้องๆจะใส่ค่าให้มันใหม่หมดเลย เช่น

```python
>>> s = "Pre Pro" 
>>> s[0] = "x"
TypeError: 'str' object does not support item assignment
#ที่ขึ้น error เพราะ string เป็น immutable ซึ่งไม่สามารถเปลี่ยนค่าในแต่ละตำแหน่งได้
```

---

## String Method ที่น่าสนใจ

เวลาใช้ string method ต้องอย่าลืมว่าต้องมีตัวแปรมารองรับค่าเสมอเพราะเป็น immutable เช่น

```python
>>> s = "Pre PRO" 
>>> s = s.capitalize() #ไม่จำเป็นต้องเป็นตัวแปร s มารองรับ อาจจะเป็น x = s.capitalize() ก็ได้
>>> print(s)
Pre pro
```

```python
>>> s = "Pre Pro" 
>>> s.capitalize()
>>> print(s)
Pre PRO #Output เป็นแบบเดิมเพราะว่า ไม่มีตัวแปรใดมารองรับค่าทำให้ capitalize ไม่ส่งผลอะไรกับตัวแปร s
```

- ```capitalize()``` เป็นฟังก์ชันที่ทำให้ทำให้ตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่ ที่เหลือตัวพิมพ์เล็ก

```python
>>> s = "heLlo WOrlD"
>>> s = s.capitalize()
>>> print(s)
Hello world
```

- ```lower()``` เป็นฟังก์ชันที่ทำให้ตัวอักษรเป็นตัวพิมพ์เล็กทั้งหมด 

```python
>>> s = "heLlo WOrlD"
>>> s = s.lower()
>>> print(s)
hello world
```


- ```swapcase()``` เป็นฟังก์ชันที่ทำให้ตัวอักษรพิมพ์ใหญ่เป็นตัวพิมพ์อักษรเล็ก ตัวอักษรพิมพ์เล็กเป็นตัวอักษรพิมพ์ใหญ่
 
```python
>>> s = "hello WORLD"
>>> s = s.swapcase()
>>> print(s)
HELLO world
```

- ```upper()``` เป็นฟังก์ชันที่ทำให้ทั้งข้อความเป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด
 
```python
>>> s = "hello world"
>>> s = s.upper()
>>> print(s)
HELLO WORLD
```


- ```find()``` เป็นฟังก์ชันที่จะทำการค้นหา ข้อความ ในตัวแปรนั้นๆจะได้ค่า ตำแหน่งออกมา โดยจะเอาตำแหน่งตัวที่เจอแรกสุดก่อนเสมอ

```python
>>> s = "I love python"
>>> x = s.find("love")
>>> print(x)
2
```

- ```replace()``` เป็นฟังก์ชันที่จะแทนข้อความเดิมด้วยข้อความที่เรากำหนด
```python
>>> s = "I love python"
>>> s = s.replace("python", "cat")
>>> print(s)
I love cat
```

สามารถศึกษาคำ String Method อื่นๆได้ที่เว็บ [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

