# What is \<e>Judge?

ระบบ \<e>Judge คือระบบ Grader ของคณะ IT ของเราเป็นระบบที่จะรับโปรแกรมของน้อง ๆ เข้ามาแล้วทำการประมวลผลโดยการใส่ค่า Input ที่โจทย์ได้กำหนดไว้และนำค่า Outputที่ได้มาเทียบกับผลลัพธ์ที่กำหนดไว้

### ระบบ \<e>Judge เช็คอะไรได้บ้าง?

1. **ความมีระเบียบ** ในการเขียนโปรแกรม (คุณภาพ)

2. **ความคล้ายคลึงใน Algorithm** ในโปรแกรมน้องๆ กับเพี่อนของน้องๆ

3. **ความถูกต้องในผลลัพท์** ที่ออกมาจากโปรแกรมที่น้องๆเขียนมา

4. **เก็บคะแนน** และเก็บไฟล์ที่น้องเคยส่งมาทั้งหมด


น้อง ๆ จะได้เจอกับระบบ \<e>Judge และใช้งานระบบนี้ในการเรียนเป็นส่วนมากในการเรียนและสอบสำหรับวิชาที่เกี่ยวกับการเขียนโค้ด ดังนั้นน้องๆจึงควรที่จะทำความเข้าใจในระบบ \<e>Judge ไว้ด้วย


ตัวอย่างการคำนวณคะแนนของระบบ \<e>Judge
หากผลลัพธ์จากโค้ดที่น้องเขียนถูกต้อง 9 ใน 10 testcases โดยที่คะแนนต่อข้อเท่ากับ 100 คะแนน มีระดับความยากเท่ากับ 5 ดาวและการเขียนโค้ดของน้องเป็นไปตามมาตรฐาน


|Testcase Score|Difficulty|Perfect bonus score|Quality|Total|
|--------------|----------|-------------------|-------|-----|
|(9/10) x 100  |x5        |100 x 5 x 0        |100%   |90 x 5 x 1 + 0 = 450|


หากผลลัพธ์จากโค้ดที่น้องเขียนถูกต้อง 10 ใน 10 testcases โดยที่คะแนนต่อข้อเท่ากับ 100 คะแนน มีระดับความยากเท่ากับ 5 ดาวและการเขียนโค้ดของน้องเป็นไปตามมาตรฐาน

|Testcase Score|Difficulty|Perfect bonus score|Quality|Total|
|--------------|----------|-------------------|-------|-----|
|(10/10) x 100 |	      x5|100 x 5 x 2        |100%   |100 x 5 x 1 + 500 = 1000|


จะเห็นได้ชัดเลยว่าตัวอย่างที่ 1 ได้ 450 คะแนนและตัวอย่างที่ 2 ได้ 1000 คะแนนกันเลยทีเดียว
ฉะนั้นความถูกต้องของ testcases จึงเป็นเรื่องสำคัญ
________________

# เนื้อหาการเรียนอย่างคร่าวๆ
### 1 Introduction to Python
What is Python? / Why Python? / Python Coding Modes and Compatibility

### 2 Variable expressions, statements and elementally Input / Output
One of the most powerful features of a programming language is the ability to manipulate variables. A variable is a name that refers to a value.

### 3 Function
A function is a group of statements that together perform a task.

### 4 Strings
A string is a sequence, which means it is an ordered collection of other values. In this chapter you’ll see how to access the characters that make up a string, and you’ll learn about some of the methods strings provide.

### 5 Decision Flow
The main topic of this chapter is the if statement, which executes different code depending on the state of the program

### 6 Iteration For / While
This chapter is about iteration, which is the ability to run a block of statements repeatedly.

### 7 List, Tuple
This chapter presents one of Python’s most useful built-in types, lists. You will also learn more about objects and what can happen when you have more than one name for the same object.

### 8 Dict, Set
Dictionaries are one of Python’s best features; they are the building blocks of many efficient and elegant algorithms.

Set is one of Python’s data structure. It’s the same as Set that we learned in Grade 10.

**สำหรับน้องๆที่อยากเรียนเพิ่มเติมสามารถอ่านได้จากหนังสือ Think Python เพื่อเป็น Reference ได้เลย**
________________

# Why Python?
น้องๆอาจจะสงสัยว่าทำไมเราจึงใช้ภาษา Python ในการเรียนการสอนกัน<br>
พี่ๆจะบอกข้อดีของ Python ให้น้องๆได้รู้กันเลย

- **Speed** น้องจะสามารถเขียนและเข้าใจในภาษานี้ได้เร็วเพราะว่าเป็นภาษา High Level คือภาษาที่ใกล้เคียงภาษามนุษย์ที่สุด

- **Integrations** ระบบต่างๆ นั้นรองรับภาษา Python เป็นส่วนใหญ่ถ้าหากไม่รองรับเราก็สามารถใช้ Library เพื่อให้สามารถรองรับได้

- **Compatibility** ใช้ได้กับทุกแพลตฟอร์มหลักๆ เช่น Windows (.NET) และ UNIX (MacOS & Linux Distribution & Android)

---

# Before Coding
น้องสามารถที่จะลองใช้และเลือก IDE และ Text Editor ที่เหมาะสมกับตัวเองมากที่สุดแต่ควรที่จะศึกษา Text Editor อื่นๆไว้ด้วยเผื่อการใช้งานในอนาคต

โดยโปรแกรมที่มีติดไว้กับเครื่องคอมพิวเตอร์ในห้องสอบนั้นจะมีเพียง Sublime Text, Atom, Visual Studio, NotePad และ Python IDE (IDLE)

________________

# โปรแกรมที่สามารถใช้ได้ในห้องสอบ
ในห้องสอบวิชา PSIT น้องจะได้ใช้คอมพิวเตอร์ในห้อง Lab ของคณะ ในการสอบโดยที่เครื่องคอมพิวเตอร์จะปิดการเชื่อมต่อกับเว็บอื่นๆ เหลือเพียงเว็บ \<e>Judge ที่จะสามารถเข้าไปใช้สอบทั้งรับโจทย์และส่งคำตอบได้

สิ่งที่น้องสามารถนำเข้าไปได้ในห้องสอบ
- **ดินสอ ปากกา** (ปากกาต้องเอามา) เพื่อใช้ทดความคิดลงในกระดาษและใช้เซ็นเข้าสอบ
- **บัตรประจำตัวนักศึกษา** ต้องนำมาในวันสอบถ้าไม่มีจะไม่สามารถเข้าห้องสอบได้ (หากลืมหรือหายจริงๆ สามารถติดต่อสำนักทะเบียน (ของสถาบัน) เพื่อออกใบเข้าสอบได้)
- **ขนม (ลูกอม)** (ปีของพี่เอาเข้าได้) โดยจะต้องเป็นขนมที่ไม่ทำให้คนสอบรอบข้างไม่หิวไปด้วย และไม่รบกวนคนอื่น

# ฟังก์ชั่นบน \<e>Judge ที่จะถูกปิดไปในวันสอบ
1. คะแนนของเพื่อนๆ และของตัวเอง แต่ยังสามารถดูได้ว่าข้อนี้มีคนส่งไปแล้วกี่คน

2. Quality จะบอกเพียงว่าอยู่ประมาณไหน จะไม่รู้เลยว่าโดนหักคะแนนไปมากขนาดไหน แต่จะยังบอกเพียงคร่าวๆเท่านั้น เช่น 50% - 75% หรือ 75% - 100%

3. ระบบ Code Simulator เนื่องจากอินเตอร์เน็ดจากภายนอกจะถูกปิดทั้งหมด

________________

# Reference
### Think Python v.2 :
![](http://greenteapress.com/thinkpython/think_python_comp2.medium.png)

http://greenteapress.com/thinkpython2/thinkpython2.pdf

เป็นหนังสือที่อาจารย์โชได้แนะนำมาซึ่งจะเป็นประโยชน์ต่อพวกเรามากเลยทีเดียว
