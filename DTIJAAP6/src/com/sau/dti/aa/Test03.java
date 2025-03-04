package com.sau.dti.aa;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Test03 {
    //Exception Handling การจัดการข้อผิดพลาดที่เกิดขึ้นขณะโปรแกรมทำงาน ***
    int num1, num2;
    double result[] = new  double[2];

    Scanner sc = new Scanner(System.in);

    try{
        System.out.print("ป้อนตัวเลขที่ 1:");
        num1 = sc.nextDouble();
        System.out.print("ป้อนตัวเลขที่ 2:");
        num2 = sc.nextDouble();
        System.out.println("---------------");
        System.out.println("ผลหารของ" + num1 + "/" + num2 + "มีค่าเป็น" + result[5]);
    }catch (InputMismatchException ex){
        System.out.println("มีข้อผิดพลาดจาการป้อน กรุณาป้อมแต่ตัวเลขเท่านั้น");
    }catch (ArrayIndexOutOfBoundsException ex)
        System.out.println("มีข้อผิดพลาดเกิดขึ้น ลองใหม่อีกครั้ง หรือติดต่อ IT");
    }catch (Exception ex){
        System.out.println("SW พบปัญหาบางอย่าง กรุณาติดต่อ IT")
    }
}
