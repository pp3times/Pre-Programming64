# Booleans

---

## What is boolean expression?
&nbsp;&nbsp;&nbsp;&nbsp;ก่อนที่เราจะมาทำความรู้จักกับ Condition กัน พี่อยากจะให้น้อง ๆ ได้รู้จักกับ Boolean Expression กันก่อน<br>
&nbsp;&nbsp;&nbsp;&nbsp;โดยคำว่า Boolean เนี่ยมีความหมายว่า ค่าความจริง  โดยน้อง ๆ ที่เคยได้เรียนมาแล้วในวิชาตรรกศาสตร์ตอนมัธยมก็อาจจะคุ้นเคยกับคำว่า จริง (True) และ เท็จ (False) กันมาบ้าง<br>
&nbsp;&nbsp;&nbsp;&nbsp;ส่วนคำว่า Expression (นิพจน์) คือ กลุ่มของข้อมูลที่เราเอามาดำเนินการทางคณิตศาสตร์หรือตรรกศาสตร์ ซึ่งในทางตรรกศาสตร์จะสื่อถึงกลุ่มของข้อมูลที่เราสามารถระบุค่าความจริงได้<br> 
&nbsp;&nbsp;&nbsp;&nbsp;เมื่อเราเอาสองคำนี้มารวมกัน Boolean Expression ก็จะหมายความว่า กลุ่มของข้อมูลที่เราเอามาดำเนินการทางตรรกศาสตร์ แล้วจะได้ผลออกมาเป็นค่าความจริงใด ๆ<br>

> ใน python จะเขียนค่าความจริงในรูป True และ False โดยต้องสะกดด้วยพิมพ์เล็กและพิมพ์ใหญ่แบบนี้เท่านั้น

```python
var_1 = True
var_2 = False
```

---

## Python Comparison Operators
&nbsp;&nbsp;&nbsp;&nbsp;นอกจากสัญลักษณ์ทางคณิตศาสตร์ที่ใช้ในการคำนวณแล้ว Python ก็มีสัญลักษณ์ที่ใช้ในการเปรียบเทียบเช่นเดียวกัน โดยจะได้ผลจากจากเปรียบเทียบในรูปของค่าความจริงอย่าง True และ False

```python
a == b # a equals b
a != b # a not equal b
a < b # a is less than b
a > b # a is greater than b
a <= b # a is less or equal to b
a >= b # a is greater or equal to b
```

### ตัวอย่างการใช้ Comparison Operators

```python
print(10 == 10) # True
print(10 < 1) # False
```

&nbsp;&nbsp;&nbsp;&nbsp;จากโค้ดข้างต้น เมื่อเราแสดงผลทั้งสองบรรทัดออกมา ก็จะเห็นว่าในบรรทัดแรกได้outputออกมาเป็น True เพราะ 10 == 10 มีค่าเป็นจริง กลับกันในบรรทัดที่ 2  10 < 1 มีค่าเป็นเท็จ จึงแสดงผลออกมาเป็น False

---

## Python Logical Operators
&nbsp;&nbsp;&nbsp;&nbsp;อีกตัวหนึ่งที่ใช้ดำเนินการใน boolean expression มีหน้าที่ในการดำเนินการทางตรรกศาสตร์กับนิพจน์ที่ตั้งแต่ 1 ตัวหรือใช้ในการเปลี่ยนแปลงค่าความจริงของนิพจน์ ซึ่งจะมีตัวดำเนินการหลัก ๆ ดังนี้

```python
value1 and value2 # return True ถ้าทั้งสองฝั่งเป็นจริง
value3 or value4 # return True ถ้าฝั่งใดฝั่งหนึ่งเป็นจริง
not value5 # return True ถ้าเป็นเท็จ, return False ถ้าเป็นจริง
```

> โดยผลของการดำเนินการทางตรรกศาสตร์ทั้งหมดเป็นไปตามตารางด้านล่าง

| A     | B     | A and B | A or B |
|-------|-------|---------|--------|
| True  | True  | True    | True   |
| True  | False | False   | True   |
| False | True  | False   | True   |
| False | False | False   | False  |






### ตัวอย่างการใช้ Logical Operators

```python
print(1 != 2 and 4 > 3) # True
print(5 == 6 and 7 <= 8) # True
print(not(9 == 9)) # False
```

จากโค้ดข้างต้น<br>
บรรทัดแรกจะแสดงผล True เพราะ 1 ไม่เท่ากับ 2 มีค่าเป็นจริง และ 4 มากกว่า 3 มีค่าเป็นจริง โดยนิพจน์ทั้งสองนำมา “and” กัน จึงได้ผลลัพธ์เป็นจริงนั่นเอง<br>
<br>
บรรทัดที่สองจะแสดงผล True เพราะถึง 5 เท่ากับ 6 มีค่าเป็นเท็จ แต่ 7 น้อยกว่าหรือเท่ากับ  8 มีค่าเป็นจริง และนิพจน์ทั้งสองมา “or” กัน เพราะมีหนึ่งในนิพจน์ที่มีค่าเป็นจริงผลลัพธ์ทั้งหมดจึงออกมาเป็นจริง<br>
<br>
บรรทัดสุดท้ายจะแสดงผล False เพราะนิพจน์ 9 เท่ากับ 9 มีค่าความจริงเป็นจริง แต่ถูกดำเนินการกับ “not” จึงถูกเปลี่ยนค่าความจริงจากจริงเป็นเท็จแทน<br>
<br>

---

## bool()

&nbsp;&nbsp;&nbsp;&nbsp;เราสามารถใช้ built-in function ที่ชื่อว่า ```bool()``` เพื่อแปลงค่าข้างใน argument เป็นข้อมูลประเภท booleans ซึ่งจะมีค่าเป็น True หรือ False เท่านั้น

```python
bool()
```

### ตัวอย่างการใช้ฟังก์ชัน bool()

```python
x = 5
print(bool(11)) # True
print(bool(-2)) # True
print(bool(x)) # True
```

```python
y = "Prepro 64"
print(bool("Hello world")) # True
print(bool(y)) # True
```

โดยจากตัวอย่างข้างต้นจะเห็นว่า แสดงผลออกมาเป็น True ทั้งหมด แล้วแบบนี้จะมีตัวไหนบ้างที่จะแสดงผลออกมาเป็น False ?

```python
y = "Prepro 64"
print(bool(0)) # False
print(bool("")) # False
```

&nbsp;&nbsp;&nbsp;&nbsp;โดยข้อมูลที่จะทำให้แสดงผลออกมาเป็น False นั้น หากเป็นข้อมูลประเภทจำนวนเต็มหรือจำนวนจริง มีเพียงค่าเดียวที่จะทำให้ฟังก์ชัน bool ส่งค่า False กลับมา นั่นคือเลข 0 นั่นเองซึ่งถ้าเป็นตัวเลขที่ไม่เท่ากับ 0 ไม่ว่าจะเป็น 1, 4.6, -1.0 หรือ -152 ก็จะส่งค่า True กลับมาทั้งหมด<br>
และสำหรับข้อมูลประเภท string จะได้ผลออกมาเป็น False ก็ต่อเมื่อข้างใน string ไม่มีอะไรเลยหรือก็คือเป็นข้อความเปล่า ๆ (“”) เท่านั้น หากมีตัวอักษรอยู่ข้างในไม่ว่าจะเป็นตัวอะไรก็ตามจะได้ค่าออกมาเป็น True ทั้งหมด<br>

> แอบกระซิบ: ถ้าน้อง ๆ เรียนถึงเรื่อง array แล้ว ลองเอา list ที่มีและไม่มีค่ามาใส่ในฟังก์ชัน bool() ดูสิ

---

## การแปลง boolean เป้น integer

```python
print(int(True)) # 1
print(int(False)) # 0
```

&nbsp;&nbsp;&nbsp;&nbsp;เมื่อเราแปลง boolean expression ด้วยฟังก์ชัน int() จะพบว่า int(True) จะได้ค่าเป็น 1 และ int(False) จะได้ค่าเป็น 0 เพราะว่าในภาษา Python นั้น boolean จะถูกพิจารณาเป็นข้อมูลชนิด Numeric ได้ <br>
&nbsp;&nbsp;&nbsp;&nbsp;ซึ่งหมายความว่าเราสามารถใช้ boolean ในการคำนวณทางคณิตศาสตร์ได้ ตามที่น้องเคยเรียนไปในหัวข้อ **Arithmetic Operators** ในเรื่องของการคูณด้วย boolean

### ตัวอย่างการแปลง boolean เป้น integer

```python
print(True == 1) # True 
print(False == 0) # True

print(True + True + True) # 3

print("Hello" * True) # Hello 
print("World" * False) #

print("This is TEXT" * (10 > 9)) # This is TEXT
print("Boolean is PERFECT!" * (5 == 3)) #
```

> จากตัวอย่างในบรรทัดที่ 9 เนื่องจาก 10 มากกว่า 9 มีค่าเป็นจริงผลที่ออกมาจึงมีค่าเป็น True หรือเท่ากับ 1 นั่นเอง เมื่อนำมาคูณกับ string จึงได้ string ตัวเดิม
