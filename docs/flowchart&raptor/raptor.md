# Raptor

---

## การติดตั้งโปรแกรม Raptor Flowchart ในระบบปฏิบัติการ Windows
<ol>
<li>ไปที่ลิงก์ <a href="https://raptor.martincarlisle.com/">Raptor Flowchart</a></li>
<p align="center">
<img src="./img/r1.png"
     style="width: 50vw;" /><br>
</p>
<li>เลื่อนลงไปที่ Download RAPTOR แล้วกด Download latest version</li>
<p align="center">
<img src="./img/r2.png"
     style="width: 50vw;" /><br>
</p>
<li>กด next</li>
<p align="center">
<img src="./img/r3.png"
     style="width: 30vw;" /><br>
</p>
<li>เลือก folder ที่จะติดตั้งโปรแกรมแล้วกด next</li>
<p align="center">
<img src="./img/r4.png"
     style="width: 30vw;" /><br>
</p>
<li>กด next อีกทีเพื่อยืนยันการติดตั้ง</li>
<p align="center">
<img src="./img/r5.png"
     style="width: 30vw;" /><br>
</p>
<li>ติดตั้งเรียบร้อย กด close เพื่อปิด installer</li>
<p align="center">
<img src="./img/r6.png"
     style="width: 30vw;" /><br>
</p>
</ol>

## การติดตั้งโปรแกรม Raptor Flowchart ในระบบปฏิบัติการ MacOS
ให้ใช้เว็บไซต์ Lucid Chart แทน โดยเข้าได้ที่เว็บไซต์ <a href="https://www.lucidchart.com/">Lucidchart</a> สมัครสมาชิกและล็อกอินเข้าสู่ระบบ (จะมีการสอนใช้เว็บไซต์แยกเป็นรายกลุ่มไป)

## ทำความรู้จักกับ Raptor
เรามาทำความรู้จักกับ Raptor กันซักหน่อยดีกว่าว่ามีแนวทางการใช้อะไรบ้าง แต่ว่าก่อนอื่นเลย Raptor จะบังคับให้เซฟไฟล์ก่อน หรือถ้าไม่แจ้งเตือนอะไร เราก็จะเซฟไฟล์ไว้ก่อนอยู่ดี
* หน้าตาโปรแกรม
<p align="center">
<img src="./img/0.png"
     style="width: 30vw;" /><br>
</p>

* การนำสัญลักษณ์ออกมาใช้แบบที่ 1
> คลิกซ้ายที่สัญลักษณ์ที่ต้องการครั้งดียว แล้วไปคลิกซ้ายอีกที ณ จุดที่เราต้องการใช้ 

<p align="center">
<img src="./img/1.gif"
     style="width: 30vw;" /><br>
</p>

* การนำสัญลักษณ์ออกมาใช้แบบที่ 2
> กดคลิกซ้ายแล้วลากมายังจุดที่เราต้องการจะให้สัญลักษณ์นั้นไปอยู่

<p align="center">
<img src="./img/2.gif"
     style="width: 30vw;" /><br>
</p>

* การสร้างตัวแปรและใส่ค่าให้ตัวแปร
> รับ input ไปเก็บในตัวแปร x ใน prompt และใส่เป็น string เปล่า (“”) และ variable จะใส่เป็นชื่อตัวแปรที่เราจะใช้เก็บค่าของinput

<p align="center">
<img src="./img/3.gif"
     style="width: 30vw;" /><br>
</p>

> ทดสอบการทำงานดูจะได้แบบนี้

<p align="center">
<img src="./img/4.gif"
     style="width: 30vw;" /><br>
</p>

* การแสดงผลข้อความ
> ลองเพิ่ม output ดูให้ส่งออกคำว่า “ Hello world” เราจะใส่ “ ” ทั้งหน้าและหลัง เพราะเราต้องการจะส่ง string ออกมา

<p align="center">
<img src="./img/5.gif"
     style="width: 30vw;" /><br>
</p>

> เริ่มการทำงานก็จะได้ Output ออกมาในหน้าต่าง Console 

<p align="center">
<img src="./img/6.gif"
     style="width: 30vw;" /><br>
</p>

## ตัวอย่างโจทย์ Raptor
### 1. เขียน Flowchart ให้แสดงค่าที่รับ Input เข้ามา
> ใน Flowchart นี้ รับ Input ไปไว้ในตัวแปร a แล้ว Output ออกเป็นค่าของตัวแปร a

<p align="center">
<img src="./img/7.gif"
     style="width: 30vw;" /><br>
</p>

> เมื่อเริ่มการทำงานก็จะได้หน้าตาแบบนี้เลย

<p align="center">
<img src="./img/8.gif"
     style="width: 30vw;" /><br>
</p>

### 2. เขียน Flowchart ให้รับค่า Input เป็นจำนวนเต็ม จากนั้นนำค่าไปคูณด้วย 2 แล้วแสดงผลออกมา
> ตั้ง Input เพื่อรับค่าของจำนวนเต็มในสัญลักษณ์ Assignment คือเราประกาศว่า ให้ number มีค่าเป็น number * 2

<p align="center">
<img src="./img/9.gif"
     style="width: 30vw;" /><br>
</p>

> เมื่อเริ่มการทำงานแล้วใส่ Input เป็น 6 จะได้ Output เป็น 12

<p align="center">
<img src="./img/10.gif"
     style="width: 30vw;" /><br>
</p>

### 3. เขียน Flowchart ให้ตรวจสอบว่าเงินที่ได้รับมาพอที่จะซื้อเรือดำน้ำราคา 50 บาทหรือไม่?
พี่อยากจะซื้อเรือดำน้ำของเล่นราคา 50 บาท แต่พี่ไม่มีเงิน เลยอยากจะขอยืมเงินน้อง ๆ ก่อน ให้กันตามศรัทธาได้เลย ข้อนี้จะให้เขียน Flowchart รับinputเป็นจำนวนเงินที่น้องๆ จะให้พี่ยืม แล้วเช็คว่าจำนวนเงินที่พี่ได้มานั้น พอจะซื้อเรือดำน้ำของเล่นได้ไหม ถ้าซื้อได้ให้ output เป็นคำว่า "yes" ถ้าไม่ได้ให้ออกเป็นคำว่า "no"

> รับ Input จำนวนเงินที่น้องๆ จะให้พี่ยืมเก็บไว้ในตัวแปรชื่อว่า money

<p align="center">
<img src="./img/11.gif"
     style="width: 30vw;" /><br>
</p>

> ใช้ Selection โดยเพิ่มเงื่อนไข ถ้า money >= 50 เป็นจริง จะเลือกเส้นทาง yes ถ้า money >= 50 เป็นเท็จ จะไปเส้นทาง no

<p align="center">
<img src="./img/12.gif"
     style="width: 30vw;" /><br>
</p>

> เพิ่ม Output ให้ทั้งสองเส้นทาง ถ้าเป็นจริงจะแสดงผล "yes" เป็นเท็จจะแสดงผล "no"

<p align="center">
<img src="./img/13.gif"
     style="width: 30vw;" /><br>
</p>

> ลองรันแล้วใส่ Input เป็น 60 จะพบว่า money >= 50 เป็นจริงจึงแสดงผลเป็น "yes"

<p align="center">
<img src="./img/14.gif"
     style="width: 30vw;" /><br>
</p>

>ถ้าเราใส่ Input เป็น 40 money >= 50 จะเป็นเท็จจะแสดงผลเป็น "no"

<p align="center">
<img src="./img/15.gif"
     style="width: 30vw;" /><br>
</p>

### 4. เขียน Flowchart ให้แสดงผลเลขตั้งแต่ 0 ถึง 5 โดยเมื่อแสดงผลหมดแล้วให้ขึ้นว่า "end"
> อันดับแรก กำหนดค่าตัวแปรขึ้นมาหนึ่งตัว โดยให้มีค่าเท่ากับ 0

<p align="center">
<img src="./img/16.gif"
     style="width: 30vw;" /><br>
</p>

> แล้วเพิ่ม Loop โดยให้แสดงผลค่า x ออกมาทุกครั้ง

<p align="center">
<img src="./img/17.gif"
     style="width: 30vw;" /><br>
</p>

> สัญลักษณ์ Loop จะทำงานร่วมกับ Selection หลังจากแสดงผลค่า x ออกมา ถ้า x มีค่าไม่เท่ากับ 5 จะให้ x = x+1 แล้ววนลูป แต่ถ้า x มีค่าเป็น 5 ให้ออกจากลูปทันที

<p align="center">
<img src="./img/18.gif"
     style="width: 30vw;" /><br>
</p>

> ทำการแสดงผลคำว่า "end" เมื่อ Output 5 เสร็จสิ้น

<p align="center">
<img src="./img/19.gif"
     style="width: 30vw;" /><br>
</p>

>เมื่อเริ่มการทำงานก็จะได้หน้าตาแบบนี้เลย

<p align="center">
<img src="./img/20.gif"
     style="width: 30vw;" /><br>
</p>
