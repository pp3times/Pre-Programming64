# Error

หลังจากที่น้อง ๆ ได้ลองจับลองเขียน Python กันมาซักพักนึงแล้ว พี่เชื่อว่าหลาย ๆ คนคงจะประสบพบเจอกับปัญหาหลายอย่าง แต่ในวันนี้พี่จะขอยกหนึ่งในปัญหาที่น้อง ๆ อาจจะเคยพบเองมาแล้ว นั่นก็คือ Error ของภาษา Python

---

## Error in Python

สาเหตุของ error ส่วนใหญ่จะมาจากที่เราอาจจะเขียนไม่ตรงกับรูปแบบของภาษา มีอะไรผิดพลาดกับสิ่งที่เราเขียน เป็นต้น เนื่องจาก Python ทำงานแบบ Interpreter เมื่อเกิด error ขึ้น ตัว Interpreter จะหยุดการทำงาน และรายงานทันที วันนี้พี่ไม่ได้จะมาสอนวิธีการรับมือกับ error แต่จะมาสอนให้น้อง ๆ รู้จักกับ error แบบต่าง ๆ เพื่อที่จะแก้ไขโค้ดของเราให้ทำงานได้ปกติ

***

## TypeError

เกิดขึ้นเมื่อ object หรือตัวแปรได้รับการกระทำกับ operator หรือฟังก์ชัน โดยชนิดไม่ตรงกับความต้องการ หรือไม่สามารถดำเนินการได้ เช่น “a” / 3 นั้นไม่สามารถกระทำได้เนื่องจาก string ไม่สามารถนำมาดำเนินการทางคณิตศาสตร์ได้

```python
>>> "a"/3
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for /: 'str' and 'int'
```

## ValueError

เกิดเมื่อค่าที่จะใส่ในฟังก์ชัน(argument) ของฟังก์ชัน เป็นชนิดที่ไม่ตรงกับความต้องการ

```python
>>> int("abcde")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: invalid literal for int() with base 10: 'abcde'
```

## NameError
เกิดเมื่อหา object หรือตัวแปรที่เราเรียกใช้ไม่เจอ ส่วนมากเกิดจากไม่ได้ประกาศตัวแปรไว้ก่อน

เกิดจากเราทำการเรียกตัวแปร num_1 โดยที่ไม่เคยกำหนดค่าให้ num_1 ก่อนจะเรียกใช้

```python
>>> num_1
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'num_1' is not defined
```

## ZeroDivisionError
เกิดเมื่อมีการหาร 0 เกิดขึ้น น้องๆน่าจะรู้กันอยู่แล้วว่า ตามหลักคณิตศาสตร์นั้น ไม่สามารถทำการหารด้วย 0 ได้

```python
>>> 20/0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

## KeyboardInterrupt
เกิดเมื่อ user ทำการป้อนคำสั่ง interrupt ก่อนที่โค้ดจะทำการประมวลผลเสร็จ (ปกติแล้วการป้อนคำสั่ง interrupt คือการกด Ctrl + C สามารถนำไปใช้กันได้นะ)

```python
>>> input()
^c
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyboardInterrupt
```

---

# สำหรับ Error อื่นๆ ที่ยังไม่เรียนกัน

## ImportError
เมื่อหาฟังก์ชันที่เรียกใช้ไม่เจอ

```python
>>> from math import square
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: cannot import name 'square' from 'math'
```

## IndexError
เมื่อเข้าถึง item ใน index ที่ไม่มีอยู่จริง
Index จะได้เรียนในหัวข้อของ string slicing และ list

```python
>>> box = ["a", "b", "c"]
>>> box[5]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```


> จะเห็นว่า ใน box มีสิ่งของอยู่ 3 ชิ้น ในตำแหน่งที่ 0, 1, 2 แต่พี่พยายามจะเรียกค่าของตำแหน่งที่ 5 ที่ไม่มีอยู่จริง จึงเกิด IndexError ขึ้น

## KeyError
เกิดขึ้นเมื่อ key ที่เราเรียกใช้ไม่มีอยู่ใน dictionary Key จะได้เรียนในเรื่อง dict ในวิชา PSIT

```python
>>> mydict = {"a":"1", "b":"2"}
>>> mydict["z"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyErroro: 'z'
```

> เพราะว่า ใน mydict ไม่มี item ไหนที่มี key เป็น ‘z’

