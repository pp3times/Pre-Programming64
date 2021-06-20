# Input & Output

---

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
>>> print(64)
64
>>> print(2564)
2564
```
  
  <li>List</li>
  <li>Tuple</li>
 </ul>
