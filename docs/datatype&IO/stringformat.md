# Format string 

---

  การแสดงผลข้อความสามารถจัดรูปแบบได้หลากหลายวิธี เช่น
  
  * String Formatting ( % operator ) 
  
Format Sequence | คำอธิบาย |
-|-|
%s |***str*** (ข้อความ)|
%d |***int*** (จำนวนเต็ม)|
%f |***float*** (จำนวนจริง)|
%x |จำนวนเต็มใน hex|
%r |สำหรับการ Debug ข้อมูล|

  <li>รับค่าแล้วนำไปใช้งานได้เลย</li>
  Input คือ การรับค่าจาก User โดย default ข้อมูลจะเป็นชนิด string
แต่ถ้าต้องการเปลี่ยนเป็นข้อมูลชนิดอื่น สามารถนำชนิดของข้อมูลมาครอบ input() ได้เลย
	* ข้อความ ⇒ input()
  * จำนวนเต็ม ⇒  int(input()) 
  * จำนวนทศนิยม ⇒ float(input())
  * ค่าความจริง ⇒ bool(input())
สามารถตรวจสอบชนิดข้อมูลโดยใช้ type()
```python
>>> var = input()
520 #user input vaja 
>>> print(var) 
520 #print ค่าของ Var 
>>> print(type(var)) 
<class 'str'> #print ชนิดของข้อมูลที่อยู่ในตัวแปร var

>>> var = int( input() 
520 #user input Bayan 
>>> print(var) 
520 #print ค่าของ var 
>>> print(type(var)) 
<class 'int'> #print ชนิดของข้อมูลที่อยู่ในตัวแปร var

>>> var = float(input()) 
520 #user input ข้อมูลเข้ามา 
>>> print(var) 
520.0 #print ค่าของ var 
>>> print(type(var)) 
<class 'float'> #print ชนิดของข้อมูลที่อยู่ในตัวแปร var
```

> จากโค้ด สร้างตัวแปรชื่อ var และรับ input ต่างชนิดกัน แต่เป็นข้อความเดียวกัน type ของข้อมูลก็จะเป็นไปตาม type ที่เรากำหนดไว้ตั้งแต่แรก

## Input 
<ul>
  <li>รับค่าแล้วนำไปใช้งานได้เลย</li>
	
  > เช่น เรารับค่ามาแล้ว สามารถสั่ง print ได้เลย
  
```python
>>> print(input())
>>> python
python 
	
>>> print(int(input()))
>>> 500
500

>>> print(float(input()))
>>> 25.64
25.64
```
  
  <li>รับค่าแล้วนำไปเก็บเข้าตัวแปร</li>
	
  > คือการสร้างตัวแปรขึ้นมารับค่าที่ user input เข้ามา 
  
```python
>>> number = int(input())
>>> 200
>>> print(number)
200

>>> float_1 = float(input())
>>> 11.12
>>> float_2 = float(input())
>>> 11.50
>>> ans = float_1 + float_2
>>> print(ans)
22.62
```

## Output
	
print() เป็นฟังก์ชันที่ใช้แสดงผล output ของ python สามารถแสดงผลค่าของตัวแปรหรือค่าต่าง ๆ ได้ตามต้องการ
	
<ul>
  <li>print string</li>
	
  > ใช้เครื่องหมาย " " หรือ ' '
  
```python
>>> print("สู้ๆ")
สู้ๆ
	
>>> print("python สนุกมากกก")
python สนุกมากกก
```
  
  <li>print int</li>
	
  > ไม่มีเครื่องหมาย ' ' หรือ " " แต่ถ้าจะ print รวมกับ string สามารถใช้ %d แล้วใส่ %(ตัวแปร / ค่าคงที่) ตามหลังข้อความ 
  
```python
>>> print(520) 
520
	
>>> print(930)
930
	
>>> print("%d" %500)
500
	
>>> ans = 721 
>>> print("You are my %d" %ans)
You are my 721
```
	
<li>print float</li>
	
  > ไม่มีเครื่องหมาย ‘ ‘ หรือ “ “ แต่ถ้าจะ print รวมกับ string สามารถใช้ %f แล้วใส่ %(ตัวแปร / ค่าคงที่) ตามหลังข้อความ 
  
```python
>>> var = 3.143432
	
>>> print(var)
3.143432

>>> print("Is not pi? %f" %var)
Is not pi? 3.143432
```
 </ul>

