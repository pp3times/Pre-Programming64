# Arithmetic operators

---

หรือตัวดำเนินการทางคณิตศาสตร์ ในภาษา python มีตัวดำเนินการที่เราจะต้องได้ใช้อย่างแน่นอน ดังนี้

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

นอกจากนี้เครื่องหมายบวกและคูณยังมีคุณสมบัติพิเศษที่เป็นประโยชน์อีกมากด้วย นั่นก็คือ
เครื่องหมายบวก “+” เราสามารถรวม string หลายตัวเข้าด้วยกันให้เป็น string เดียวกันได้ เช่น

```python
>>> print("IT " + "KMITL")
IT KMITL
```

<span style="color:red;font-style:bold">แต่ขอบอกไว้ก่อนนะ</span> เราไม่สามารถบวก int หรือ float เข้ากับ string ได้นะ

เครื่องหมายคูณ “*” เราสามารถใช้ตัวคูณ คูณระหว่าง int และ string ได้ เพื่อเป็นการซ้ำ string นั้นตามจำนวนครั้งของ int ที่เราคูณกับข้อความ เช่น

```python
>>> print("Hi" * 3)
HiHiHi
```

แต่ระวังไว้ว่าเราไม่สามารถคูณ string กับ  string หรือ string กับ float ได้ ไม่งั้นล่ะก็มันจะเกิด error ทันที

<span style="color:red">Tips</span> : ไม่ว่าเราจะดำเนินการใดๆ ก็ตามระหว่าง float กับ int ผลลัพธ์ที่ได้จะเป็น float เสมอ

```python
print(2 + 1.0)      # 3.0
print(100 - 45.0)   # 55.0
print(4 * 3.0)      # 12.0
print(4.0 // 3)     # 1.0
print(3 / 1)        # 3.0
print(4.0 % 1)      # 0.0
print(5 % 1.0)      # 0.0
print(10 ** 1.0)    # 10.0
print(2.0 ** 1)     # 2.0
```