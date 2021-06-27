# Built-in Function

---

## What is Built-in Function?
&nbsp;&nbsp;&nbsp;&nbsp;**Built-in Function**  คือฟังก์ชันที่ผู้ใช้สามารถเรียกใช้ได้เลยทันทีที่เขียนโปรแกรม โดยไม่ต้องสร้างใหม่หรือเรียกใช้อะไร ถ้าคำสั่งที่น้องๆรู้จักกันดีก็อย่างเช่น
- ```print()``` ที่ใช้ในการแสดงค่า
- ```input()``` ที่ใช้ในการรับค่า
- ```int() float() str()``` ที่ใช้ในการกำหนดชนิดตัวแปร

---

## Built-in Function ที่น่าสนใจ

- ```abs()``` ฟังก์ชันในการหาค่าสัมบูรณ์ของค่าที่ใส่ ใช้ได้กับค่าหรือตัวแปรประเภท int และ float

```python
>>> abs(-3)
3
>>> abs(20)
20
```

- ```len()``` ฟังก์ชันในการหาขนาดของ Object หรือ String เช่น ใช้ในการการหาความยาวของข้อความ

```python
>>> len("Preprogramming64")
16
>>> word = "IlovePython"
>>> len(word)
11
```

- ```max() & min()``` ฟังก์ชันในการหาค่าที่มากที่สุดและน้อยที่สุดของ กลุ่มค่า ใช้ได้กับค่าหรือตัวแปรประเภท int และ float

```python
>>> max(21, 22, 23)
23
>>> min(21, 22, 23)
21
```

- ```chr()``` ฟังก์ชันที่เกี่ยวกับรหัส ascii ใช้สำหรับการเปลี่ยนเลขฐานสิบเป็นตัวอักษรหรือสัญลักษณ์ตามตาราง ascii

```python
>>> chr(65)
'A'
>>> chr(97)
'a'
```

- ```ord()``` ฟังก์ชันที่เกี่ยวกับรหัส ascii ใช้สำหรับการเปลี่ยนตัวอักษรหรือสัญลักษณ์เป็นเลขฐานสิบตามตาราง ascii

```python
>>> ord('A')
65
>>> ord('a')
97
```

> ดูสัญลักษณ์ในตาราง ascii ได้ที่นี่ [HTML ASCII Reference](https://www.w3schools.com/charsets/ref_html_ascii.asp)

สามารถศึกษาคำ Built-in Function อื่นๆได้ที่เว็บ [Built-in Functions — Python 3.9.5 documentation](https://docs.python.org/3/library/functions.html)
