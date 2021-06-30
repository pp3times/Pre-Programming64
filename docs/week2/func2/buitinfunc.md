#  User-defined function

---

## What is user-defined function?

&nbsp;&nbsp;&nbsp;&nbsp;User-defined function เป็นฟังก์ชันที่เราสามารถสร้างขึ้นเองได้ เพื่อทำหน้าที่เฉพาะตามที่เราต้องการ หรือ เพราะในการเขียนโปรแกรม เรามักจะเขียนโค้ดที่มีการทำงานซ้ำ ๆ เราจึงสามารถแยกตัวฟังก์ชันที่มีการทำงานซ้ำไว้เพื่อให้ง่ายต่อการใช้งานหรือการเรียกซ้ำนั่นเอง <br>
&nbsp;&nbsp;&nbsp;&nbsp;เช่น ถ้าเราต้องการสร้างรูปสี่เหลี่ยม 1 รูป เราสามารถเขียนฟังก์ชันได้ดังนี้

```python
"""create a square // สร้างรูปสี่เหลี่ยม"""
def square():
    """main function""" 
    print(" _______")
    print("|\t|")
    print("|\t|")
    print("|_______|")
square()

#output // ผลลัพธ์ที่ได้จากการเรียกใช้ฟังก์ชันนี้
 _______
|       |
|       |
|_______|
```

แต่ถ้าเราต้องการสร้างรูปสี่เหลี่ยม 5 รูป เราสามารถเรียกใช้งานฟังก์ชันเดิมได้ ดังนี้ตามรูป

```python
"""create a square // สร้างรูปสี่เหลี่ยม"""
def square():
    """main function""" 
    print(" _______")
    print("|\t|")
    print("|\t|")
    print("|_______|")
square()
square()
square()
square()
square()

#output // ผลลัพธ์ที่ได้จากการเรียกใช้ฟังก์ชันนี้
 _______
|       |
|       |
|_______|
 _______
|       |
|       |
|_______|
 _______
|       |
|       |
|_______|
 _______
|       |
|       |
|_______|
 _______
|       |
|       |
|_______|
```

---

## วิธีการสร้างฟังก์ชัน

```python
"""Module Docstring"""
def name(parameter_1, parameter_2, ...):
    """Docstring""" 
    <statements>
  
name(argument_1, argument_2, ...)
```

- เริ่มด้วยการใช้คำสั่ง ```def```  ตามด้วย ตั้งชื่อฟังก์ชันนั้น ๆ  แล้วตามด้วยวงเล็บ () โดยภายในวงเล็บจะมีสิ่งที่เรียกว่า Parameter ซึ่งก็คือ ตัวแปรที่เอาไว้เก็บค่าที่ส่งมาจากผู้ใช้หรือค่าคงที่ที่กำหนด เพื่อนำไปใช้ดำเนินการในฟังก์ชัน
โดย Parameter สามารถมีหรือไม่มีก็ได้ และสามารถมีหลายตัวได้อีกด้วย และต่อด้วยตัวสุดท้ายคือ โคลอน ( : ) <br>
&nbsp;&nbsp;&nbsp;&nbsp;ซึ่งตามที่อธิบายทั้งหมดไปด้านบนจะเขียนได้ว่า<br>

```python
def function_name(parameter_1, parameter_2, …):
```

- ```<statements>``` คือส่วนที่เราจะต้องเขียนโค้ดภายในฟังก์ชัน ซึ่งโค้ดในส่วนนี้จะถูกเรียกใช้เมื่อมีการเรียกใช้งานฟังก์ชันที่เราประกาศ
- และเมื่อเราสร้างฟังก์ชันเสร็จแล้วสุดท้ายคือการเรียกใช้ฟังก์ชัน โดยในการเรียกใช้ต้องทำการพิมพ์ชื่อฟังก์ชัน จากนั้นในวงเล็บจะให้ใส่สิ่งที่เรียกว่า ```Arguments``` ซึ่งก็คือ ค่าที่ส่งให้ไปแทน Parameter ของฟังก์ชันเพื่อเอาไปทำงานต่อ
โดยเราจะสามารถส่ง Argument เข้าไปได้ถ้าฟังก์ชันนั้นมี Parameter มารับ แต่ถ้าไม่มี Parameter มารับ เราก็สามารถเรียกฟังก์ชัน function_name() ได้เลยเช่นกันโดยที่ไม่ต้องใส่ Arguments เข้าไป

---
  
## ตัวอย่างการสร้างฟังก์ชัน
  
```python
"""Module Docstring"""
def printsum(number1, number2): #parameter คือ number1 และ number2
    """print sum of number""" 
    print(number1+number2)
  
printsum(2, 3) #argument ที่ส่งเข้าไปคือ 2 และ 3
```

&nbsp;&nbsp;&nbsp;&nbsp;จากรูปเราจะสร้างฟังก์ชันชื่อว่า printsum ที่ใช้ในแสดงผลบวกของเลข 2 เลข โดยในฟังก์ชันจะมี parameter อยู่สองตัวแปรคือ number1 และ number2 โดยให้นำ 2 เลขมาบวกกันและแสดงผลออกมา<br>
&nbsp;&nbsp;&nbsp;&nbsp;โดยในบรรทัดล่างสุดจะเป็นการเรียกใช้ฟังก์ชัน โดยการใส่ค่า Argument 2 และ 3 เข้าไปในตัวแปร number1 และ number2 ก่อนจะนำไปบวกกันและแสดงผลจึงได้ผลออกมาเป็น 5 นั่นเอง

> **ข้อควรรู้**<br>
> &nbsp;&nbsp;&nbsp;&nbsp;เนื้อหาหรือ statement ในฟังก์ชันจะ indent เข้ามา  1 indent หรือมีค่าเท่ากับ 4 spaces ตามหลัก PEP8 โดยจะทำการ indent จากตำแหน่งของตัวอักษรแรกในบรรทัดที่ประกาศชื่อฟังก์ชัน 
> ตัวอย่างเช่น
> 
> ```python
> """Module Docstring"""
> def printsum(number1, number2):
>     """print sum of number""" 
>   
>     def calculation (number_1, number_2):
>         """Calculation function"""
>         return number_1 + number_2
>     
>     print(calculation (number1, number2))
>   
> printsum(2, 3)
> ```
> 
> &nbsp;&nbsp;&nbsp;&nbsp;จะเห็นว่า statement ที่อยู่ในฟังก์ชัน printsum ที่เป็นฟังก์ชันหลักจะ indent เพียง 4 spaces เพราะตัวอักษรแรกอยู่ชิดริม แต่ statement ในฟังก์ชัน calculation  ที่เป็นฟังก์ชันย่อยจะ indent ไปถึง 8 spaces เนื่องจากบรรทัดก่อนหน้า indent ไปแล้ว 4 spaces นั่นเอง
> &nbsp;&nbsp;&nbsp;&nbsp;ซึ่งเราจะต้องทำการ indent เพื่อแสดงให้เห็นว่า statement หรือโค้ดในส่วนนี้เป็นส่วนหนึ่งของฟังก์ชันใด รวมถึงทำให้อ่านโค้ดได้ง่ายขึ้นอีกด้วย
  
---

## Type of user-defined function
<br>
User-defined function มี 2 แบบคือ
- Void Function คือ ฟังก์ชันที่รับค่าเข้ามา แต่ไม่มีการ return หรือส่งค่ากลับ เช่น

```python
"""Module Docstring"""
def printsum(number1, number2): 
    """print sum of number""" 
    print(number1+number2)
  
printsum(2, 3) 
```

- Fruitful Function คือ ฟังก์ชันที่มีการ return หรือส่งค่ากลับมายังจุดที่มีการเรียกใช้ฟังก์ชันนั้น เช่น
 
```python
"""Module Docstring"""
def addnumber(number1, number2): 
    """plus number""" 
    sum_number = number1 + number2
    return sum_number
    
def main():
    """main function"""
    input_1 = int(input())
    input_2 = int(input())
    ans = addnumber(input_1, input2)
    print(ans)
main() 
```
 ยกตัวอย่างเช่น โค้ดข้างต้น ซึ่งโค้ดนี้เป็นการนำตัวเลขสองตัวมาบวกกัน จะเห็นว่ามีการเรียกฟังก์ชัน main() ให้มีการทำงาน
1. เริ่มแรก จะต้องรับ input เป็นเลขจำนวนเต็มมาเก็บไว้ที่ตัวแปร input_1 และ input_2
2. เรียกฟังก์ชัน addnumber() แล้วส่งค่า Arguments (ชื่อที่เรียกตอนจะส่งค่าเข้าไปไว้ใน parameter ของอีกฟังก์ชันนึง) นั่นก็คือ input_1 และ input_2
3. ขั้นตอนนี้ให้กลับไปดูที่ฟังก์ชัน addnumberเมื่อฟังก์ชัน addnumber รับค่าเข้ามาแล้ว จากนั้นจะบวกสองค่านี้แล้วนำไปเก็บไว้ในตัวแปร sum_number  แล้ว return ค่า sum_number กลับมา ณ จุดที่เรียกฟังก์ชัน addnumber
4. ตอนนี้ ans จะเก็บค่าที่ return กลับมาไว้แล้ว
5. แสดงผลค่าที่อยู่ในตัวแปร ans


