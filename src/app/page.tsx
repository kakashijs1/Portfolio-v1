import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stack from "./components/Stack/Stack";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">

        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">

            <div
              className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
                bg-[size:14px_24px]"
            ></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        {/* container here */}
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <Stack />
            <Project />
            <Experience />
            <Contact />
          </div>

      </div>
    </>
  );
}

 
  //โครงสร้างหลัก 
 // overflow-x-hidden: ปิดการเลื่อนแนวนอนเมื่อเนื้อหาเกินขนาด container
 // text-stone-300: กำหนดสีข้อความเป็นสีหินอ่อนโทนอ่อน (#d6d3d1)
 // antialiased: ทำให้ตัวอักษรเรียบเนียนขึ้น (ลดการแตกของขอบตัวอักษร)


  //พื่นหลักแบบ fixed 
 //fixed: ตรึงองค์ประกอบไว้กับ viewport (ไม่เลื่อนตามหน้าจอ)
 // inset-0: กำหนดให้เต็มหน้าจอทั้งซ้าย-ขวา-บน-ล่าง (เทียบเท่า top:0, right:0, bottom:0, left:0)
 //-z-10: กำหนดลำดับชั้นให้อยู่ด้านหลัง (ค่าลบทำให้อยู่หลังเนื้อหาหลัก)


 //พื้นหลังหลัก 
//relative: กำหนด positioning context สำหรับองค์ประกอบลูก
//h-full: ความสูงเต็ม container พ่อแม่
// w-full: ความกว้างเต็ม container พ่อแม่
// bg-black: พื้นหลังสีดำ


 //พื้นหลักลาย grid
{/* <div className="absolute bottom-0 left-0 right-0 top-0 
  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
       linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
  bg-[size:14px_24px]"></div> */}

// absolute: วางตำแหน่งแบบสัมพันธ์กับ container พ่อแม่ที่ relative
// bottom-0 left-0 right-0 top-0: ขยายเต็มพื้นที่ container พ่อแม่
// bg-[linear-gradient(...)]: สร้าง gradient แบบกำหนดเอง (ใช้ arbitrary values)
// เส้นแนวตั้ง: สีเทาโปร่งใส (#4f4f4f2e) ขนาด 1px
// เส้นแนวนอน: สีเทาโปร่งใส (#8080800a) ขนาด 1px
// bg-[size:14px_24px]: กำหนดขนาด pattern 14px แนวนอน 24px แนวตั้ง


 //วงกลมเรืองแสง
//  <div className="absolute left-0 right-0 top-[-10%] 
//   h-[1000px] w-[1000px] rounded-full 
//   bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

//top-[-10%]: วางตำแหน่งจากด้านบน -10% (ใช้ arbitrary value)
// h-[1000px] w-[1000px]: กำหนดขนาดสูงและกว้าง 1000px (ใช้ arbitrary value)
// rounded-full: ทำให้เป็นวงกลมสมบูรณ์
// bg-[radial-gradient(...)]: สร้าง gradient รัศมีวงกลม
// วงกลมขนาด 400px ที่ตำแหน่งกลางแนวนอน (50%) และ 300px จากด้านบน
// จากสีขาวโปร่งใส (#fbfbfb36) ไปสีดำ (#000)

