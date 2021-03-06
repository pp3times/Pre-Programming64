# PEMDAS

---

**PEMDAS**   เป็นตัวย่อของลำดับขั้นการดำเนินการทางคณิตศาสตร์ ประกอบด้วย

**P** - Parentheses    หรือ   วงเล็บ<br>
**E** - Exponential    หรือ   การยกกำลัง<br>
**M** - Multiplication หรือ   การคูณ<br>
**D** - Division       หรือ   การหาร<br>
**A** - Addition       หรือ   การบวก<br>
**S** - Subtraction    หรือ   การลบ<br>
<br>
โดยจะเรียงลำดับความสำคัญตามลำดับเลย แต่จริง ๆ แล้วจะแบ่งออกเป็น 4 ลำดับคือ
<ol>
   <li>วงเล็บ</li>
   <li>การยกกำลัง</li>
   <li>การคูณ และ การหาร</li>
   <li>การบวก และ การลบ</li>
</ol>

จะเห็นว่าลำดับที่ 3 และ 4 จะมีอย่างละ 2 ตัว เพราะว่ามีลำดับความสำคัญที่เท่ากันแต่เราจะทำจากซ้ายไปขวาเสมอ เช่น

```python
2 + 3 + 4 – 5 * 2 / 5	=	((2 + 3) + 4) – ((5 * 2) / 5 )
                        =	((5) + 4) – ((10) / 5)
                        =	(9) – (2)
                        =	7
```

แต่ในภาษา Python นั้นจะมีเรื่องของการ **Modulo (%)** และ **Floor division (//)** ความสำคัญของสองตัวดำเนินการนี้จะมีลำดับความสำคัญอยู่ในขั้นที่ 3 หรือ มีความสำคัญเท่ากับ การคูณ และ การหาร

```python
"""           PEMDAS            """
1. () or Parentheses        # วงเล็บ
2. ** or Exponential        # ยกกำลัง
3. *  or Multiplication     # คูณ
   /  or Division           # หาร
   // or Floor division     # หารไม่เอาเศษ
   %  or Modulo             # หารเอาเศษ
4. +  or Addition           # บวก
   -  or Subtraction        # ลบ
```

---

### ตัวอย่างการใช้หลัก PEMDAS
**(2 ** 2 * 2 + (5 - 3) ** 4 // 6 % 3 + (3 ** 2 + 1) % (4 - 1)) * (2 ** 0)**
<br>
```python
=	(2 ** 2 * 2 + 2 ** 4 // 6 % 3 + (9 + 1) % 3) * 1   -> 2 = 5 – 3 , 9 = 3 ** 2 , 1 = 2 ** 0
=	(2 ** 2 * 2 + 2 ** 4 // 6 % 3 + 10 % 3) * 1        -> 10 = 9 + 1
=	(4 * 2 + 16 // 6 % 3 + 10 % 3) * 1                 -> 4 = 2 ** 2 , 16 = 2 ** 4
=	(8 + 2 % 3 + 1) * 1                                -> 8 = 4 * 2 , 2 = 16 // 6 , 1 = 10 % 3
=	(8 + 2 + 1) * 1                                    -> 2 = 2 % 3
=	(10 + 1) * 1                                       -> 10 = 8 + 2
=	11 * 1                                             -> 11 = 10 + 1
=	11                                                 -> 11 = 11 * 1
```

> ได้คำตอบออกมาคือ "11" <br>

```python
print((2 ** 2 * 2 + (5 - 3) ** 4 // 6 % 3 + (3 ** 2 + 1) % (4 - 1)) * (2 ** 0))
#แสดงผลออกมาได้ 11
```
