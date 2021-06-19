# Pylint + PEP8
PEP8 คือ standard ของการเขียนโปรแกรม เพื่อให้คนอื่นๆ อ่านออกนะครับ ดังนั้นมันจึงเป็นเรื่องสำคัญที่จะต้องเขียนให้ผู้เขียนและผู้อ่าน เข้าใจว่าโปรแกรมนี้ทำงานอย่างไร<br>
โดย PEP8 นั้นถูกเขียนไว้ที่ Python Foundation : [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/)


---

## Missing DocString
Docstring คือ comment เพื่อบอกว่าฟังชั่น หรือ โปรแกรมนั้นๆ ทำงานเพื่ออะไร โดยทุก function ละหัวไฟล์ (บรรทัดที่ 1) จะต้องมี docstring กำกับ

ตัวอย่างเช่น

```python
"""DocString"""

def main():
  """Function Docstring"""
  print("Hello PrePro64")
main()
```

โดย DocString ที่ดีนั้น ใน Docstring ต้องอธิบายโปรแกรม จะต้องอธิบายว่าทั้งโปรแกรมนั้นมีหน้าที่อะไร อย่างไรแบบคร่าวๆ<br>
สำหรับ DocString ที่อธิบายฟังก์ชั่นนั้น ก็ต้องอธืบายว่าฟังก์ชั้นนั้นทำงานเพื่ออะไร หรือว่ากำลังจะทำอะไรอยู่

---

## Missing final new line
เป็นเรื่องของการลืมสร้างบรรทัดใหม่ เมื่อจบการทำงานของโปรแกรมหรือจบการทำงานของฟังก์ชั่นๆ

StackOverflow Reference :  [https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline)


```python
"""DocString"""

def main():
  """Function Docstring"""
  print("Hello Prepro64")
main()
# Final new line
```

---

## Invalid Data Type
เป็นการบอกว่าไม่สามารถทำการแปลงประเภทตัวแปร (Casting) ได้

เช่น
```python
int(input())
```
ถ้าหากรับค่า int มันจะแปลงจาก string เป็น int ปกติ
ถ้าหากรับค่า string มันจะแปลงไม่ได้ เพราะ string เป็นตัวอักษร เปลี่ยนค่าเป็นตัวเลขไม่ได้นะจ๊ะ

---

## Invalid Syntax
การใช้ฟังชั่นที่ใช้ชื่อผิด ใช้ผิดวิธี โมดูลขาด argument หรือ ไม่ได้เรียกโมดูลที่ต้องการใช้มาก่อน หรือก็คือไม่สามารถอ่านโค๊ตบรรทัดนั้นๆได้

เช่น
```python
import math
var_x = pi()
```

ซื่ง pi() ไม่ใช่ฟังชั่นใน python หลัก แต่เป็นส่วนหนึ่งของ library ชื่อ math

ดังนั้น หากจะแก้ให้ถูก จึงต้องใช้
```python
import math
var_x = math.pi
```

---

## Unused Variables
เป็นการประกาศตัวแปรขึ้นมาแต่ไม่ได้ทำการใช้ ซึ่งอาจจะรันโค๊ตได้
แต่มันเปลืองพื้นที่ RAM (เพื่อจองพื้นที่สำหรับ variable นี้) และจะมีการแจ้งเตือนจาก pylint

ซึ่ง การประกาศแล้วไม่ได้ใช้ วิธีแก้ก็คือ ไม่ต้องไปประกาศครับ ง่ายเนอะ

เช่น
```python
prepro_64 = "Ez"
var_x = 12
var_y = 21
print(var_x + var_y)
```
ซึ่งตัวแปร prepro_64 ไม่ได้ถูกใช้ในบรรทัดอื่น (นอกจากการประกาศค่า) เป็นการสี้นเปลืองทรัพยากร

---

## Variable Error
การตั้งชื่อ Variable ก็เป็นสี่งจำเป็นในการทำ python เพราะก็เอาไว้เก็บค่าตัวแปร

แต่การตั้งชื่อตัวแปรที่ง่ายๆ มันมักจะทำให้จุดอื่นๆพังไปด้วยและจะทำให้คนที่มาอ่านโค๊ตและตัวเราไม่ทราบที่มาของตัวแปร

เช่น
```python
import math
math = "Prepro64" # ตั้งชื่อตัวแปรเหมือนชื่อ library
print(math.fabs(20 - 99))
```
ก็จะทำให้การอ่านโค๊ตเกิดความสงสัย ว่าจะให้โหลด library หรือเรียกตัวแปรที่ชื่อว่า math

หรือ
```python
aaa = 12
bbb = 55

print(aaa + bbb)
```
ซื่งตัวแปร `aaa` นั้นก็ปกติอยู่หรอก แต่จะให้คนอื่นเค้ามาอ่านด้วยนั้น เป็นเรื่องที่ยากเหลือเกิน ว่าต้วแปรนี้เอาไว้ทำอะไร

ดังนั้นพี่มงเลยมี Checklist ที่ Pylint น่าจะเตือนนะครับ :)

| |Type|Meaning|Example|
-|-|-|-
1|Short Variable|ชื่อตัวแปรสั้นเกินไป|เช่น<br>`a`
2|Long Variable|ชื่อตัวแปรยากเกินเหตุ|เช่น<br> `Uvuvwevwevwe_Onyetenyevwe_Ugwemubwen_Ossas`
3|Variable Name is the same as function|ชื่อตัวแปรเหมือนชื่อฟังชั่น|เช่น<br>`if`
4|Vague Variable Name|ตั้งชื่อตัวแปรอย่างง่ายๆ|เช่น<br>`aaa`
5|Capitalized Variable|ตัวแปรที่มีการตั้งเป็นตัวใหญ่ด้านหน้า (การเขียนแบบนี้เอาไว้ใช้สำหรับการเขียนชื่อ class)|เช่น<br>`Num_1`
6|Camel Cased Variable|ตัวแปรที่ใช้การตั้งค่าเป็นตัวใหญ่แบ่งคำ (ซ้ำกับวิธีการตั้งชื่อ function)|เช่น<br>`distanceOverTime`
7|All Capitalized Variable (inside function)|ตัวแปรที่เป็นตัวใหญ่หมดเมื่อประกาศใน Local Variable|เช่น<br>`DISTANCE`
8|Weird Variable Name|ตัวแปรไม่บ่งบอกถึงการใช้งาน|เช่น<br>`num_1` สำหรับการเก็บค่า `distance`

ดังนั้น น้องๆจะต้องระวังในการตั้งชื่อนะครับ

และระบบก็จะไม่แจ้งนะครับ ว่าตัวแปรไหนผิดด้วยสาเหตุใด น้องๆก็ต้องไปดูแล้วทำการแก้ไขด้วยตนเองนะครับ

---

## Bad White Space
การที่มี white space ในจุดที่มันไม่จำเป็น เป็นการทำให้โค้ดของน้องๆสกปรก และไม่เป็นระเบียบ

เช่น
(พี่จะแทน space ด้วย * นะครับ จะได้เห็นกันง่ายๆ)

```python
print("Hello PrePre64")*
var_x,var_y = 12,21
print(var_x,var_y)
```

ในนี้ Pylint จะด่าในบรรทัด `print("Hello World")*`
เพระตัว PyLint เห็น Whitespace ในตัวสุดท้ายนั่นเอง

อีกเหตุการณ์หนึ่งของการเกิด Whitespace ก็คือกด space หรือไม่กด ตามที่ standard เขียนไว้ ตัวอย่างเช่น 
```python
var_x,var_y = 12,21
print(var_x,var_y)
```

ตัว PyLint จะด่า `print(var_x,var_y)`  เพราะ การใช้ , ควรจะเหมือนเขียนภาษาอังกฤษนะครับ ต้องมี space หลัง , นะจ๊ะ ดังนั้นมันควรเป็นแบบนี้

```python
var_x, var_y = 12, 21
print(var_x, var_y)
```

---

## Too much Local Variable
เป็นก่ารประกาศค่าตัวแปรมากเกินไป เปลืองทั้งทรัพยากร แล้วน้องๆก็ไม่จำเป็นต้องมีมากขนาดนั้นด้วย

เช่น
```python
def main():
  var_a = 12
  var_b = 13
  var_c = 14
  var_d = 15
  var_e = 15
  var_f = 16
  var_g = 17
  var_h = 18
  var_i = 19
  var_j = 20
  var_k = 21
  var_l = 22
  var_m = 23
main()
```
การเก็บข้อมูลแบบนี้ดูเหมือนจะเปลืองทรัพยากรการเก็บข้อมูลมากเลย มันเลยด่านะครับ

น้องๆควรที่จะใช้ List หรือ Dict แทน เพื่อให้เก็บข้อมูลให้เรียกใช้งานได้มากกว่านี้ครับ

---

## Too much Global Variable
เหมือนกับข้อที่แล้วเลยจ้า มันเปลืองพื้นที่ (การเก็บตัวแปรเป็นแบบ Global เปลืองทรัพยากรมากกว่า local อีกนะครับ จะบอกให้)

เช่น
```python
  VAR_A = 12
  VAR_B = 13
  VAR_C = 14
  VAR_D = 15
  VAR_E = 15
```
เพราะการเก็บตัวแปรแบบ Global เหมาะกับตัวแปรที่ถูกเปลี่ยนแปลงบ่อย หรือตัวแปรที่ทุก Function ควรรู้ครับ

---

## Line is too long
เป็นการบอกว่าโปรแกรมในแถวใดแถวหนึ่งยาวมาก <br>
โดยปกติแล้ว โปรแกรมก็ไม่ควรที่จะยาวเกิน **100 ตัวอักษร** อยู่แล้ว เพราะด้วยเหตุผลการอ่านไม่ออกล้วนๆครับ

เช่น
```python
print("This is a very long string, and they are more than 100 character long. They just keep going and going and going and going and going and going and going and going and going and going")
```

---

## Too many condition branch
เมื่อน้องต้องการทำ statement ซ้อนกันมาก (Chained IF หรือ Chain Loop) ก็จะโดนด่าแบบนี้ครับ

เช่น
```python
    var_x = int(input())
    if var_x == 1:
        print("Var_x is equal to", var_x)
    else:
        if var_x == 2:
            print("Var_x is equal to", var_x)
        else:
            if var_x == 3:
                print("Var_x is equal to", var_x)
            else:
                if var_x == 4:
                    print("Var_x is equal to", var_x)
                else:
                    if var_x == 5:
                        print("Var_x is equal to", var_x)
                    else:
                        if var_x == 6:
                            print("Var_x is equal to", var_x)
                        else:
                            if var_x == 7:
                                print("Var_x is equal to", var_x)
                            else:
                                if var_x == 8:
                                    print("Var_x is equal to", var_x)
                                else:
                                    if var_x == 9:
                                        print("Var_x is equal to", var_x)
                                    else:
                                        if var_x == 10:
                                            print("Var_x is equal to", var_x)
                                        else:
                                            if var_x == 11:
                                                print("Var_x is equal to", var_x)
                                            else:
                                                if var_x == 12:
                                                    print("Var_x is equal to", var_x)
                                                else:
                                                    if var_x == 13:
                                                        print("Var_x is equal to", var_x)
                                                    else:
                                                        if var_x == 14:
                                                            print("Var_x is equal to", var_x)
                                                        else:
                                                            if var_x == 15:
                                                                print("Var_x is equal to", var_x)

```
หากว่าน้องอยากจะใช้เยอะจริงๆ พี่ก็แนะนำว่าให้น้องใช้หลักการ Function หรือ Recursion แทนนะครับ จะประหยัดบรรทัดโค้ดลงไปได้เยอะเลย

---

## Mixing Tabs and Space
การใช้ Python น้องๆก็รู้ๆอยู่นะครับ ว่าจะไม่มีการใช้ {} ในการให้โปรแกรมรู้ว่าอยู่ในระดับขั้นตอนไหน<br>
ซึ่งการ indent ที่ดี ก็เป็นสี่งจำเป็น เพื่อให้ Python เข้าใจน้องๆนะครับ<br>
การ Indent จะใช้เท่ากับการกด space 4 ครั้งครับ ไม่ใช่ Tab<br>
เช่น (พี่จะแทนที่ space ด้วย * และ tab ด้วย ____ นะครับ)

อันนี้เป็นตัวอย่างที่ถูกต้องนะครับ
```python
def main():
****print("Hello world")
main()
```

อันนี้ผิด
```python
def main():
____print("This is a very long string, and they are more than 100 character long. They just keep going and going and going and going and going and going and going and going and going and going")
main()
```
ซึ่งเวลาน้องเห็นบน Text Editor มันจะเหมือนกันมากๆเลย แทบจะดูไม่ออก ดังนั้น น้องต้องระวังนะครับ

พี่ก็ขอแนะนำให้น้องเปิด Invisible Character หรือน้องก็สามารถเอา mouse ไปลากได้ โดยหากว่าเป็น space น้องๆก็จะเห็นเป็นจุด (°) แต่หากว่าเป็น TAB ก็จะเห็นเป็นลูกศร (⇥) ครับ

---

## Too many arguments in function
เป็นคำเตือนที่เกิดขึ้นจากว่า น้องทำการเขียน Function และรับ Parameter มากเกิดไปครับ

ตัวอย่างเช่น
```python
def main():
  var_a = int(input())
  var_b = int(input())
  var_c = int(input())
  var_d = int(input())
  var_e = int(input())
  var_f = int(input())
  var_g = int(input())
  var_h = int(input())
  calculate(var_a, var_b, var_c, var_d, var_e, var_f, var_g, var_h)

def calculate(var_a, var_b, var_c, var_d, var_e, var_f, var_g, var_h):
  print("The answer is", var_a + var_b + var_c + var_d + var_e + var_f + var_g + var_h)

main()
```

---

## Conflicted variable Name
โดยจะเกิดขื้นเมื่อต้องการให้ตัวแปรนึงไปเป็นตัวนับ (ซึ่งตัวนับจะถูกลบล้างไป หากมีการใช้งาน) ดังนั้น ตัว PyLint จึงด่าครับ
```python
x = 12
for x in range(1, 10):
    print(x)
```

หากต้องการแก้ไข ให้เปลี่ยนชื่อตัวแปรไม่ให้ซ้อนทับกันครับ
```python
x = 12
for i in range(1, 10):
    print(i)

```

---

## Incorrect line indentation
โดยอันนี้จะเกิดขื้นเมื่อน้องอยากให้ตัวโปรแกรมเหลือบรรทัดน้อยๆ หรือเกิดจากน้องลืมกด ENTER เพื่อเปลี่ยนบรรทัด เช่น<br>
แต่โดยปกติแล้ว โปรแกรมจะไม่รันเลย เนื่องจากว่าไม่เข้าใจว่าต้องการทำอะไร<br>
แต่สำหรับบางเหตุการนั้น ได้เฉยเลย พี่เลยเขียนไว้ก่อนนะครับ ว่าให้ศึกษาก่อนที่จะ shorthand coding นะจ๊ะ
```python
# Normally what it should be
if (x > 12):
    print(x)

# This is incorrect way to shorthand if functions
if (x > 12): print(x)

# This is correct way to shorthand if function
print(x) if (x > 12)
```

Pylint จะด่า เพราะน้องส่งตัวแปรให้กับฟังชั่น calculate มากเกินไป :(

---
**Reference**
- EJudge Pylint
