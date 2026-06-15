# 📱 Boorapatis Apps — Developer Website

เว็บไซต์ผู้พัฒนาแอปพลิเคชันสำหรับ **Boorapatis Ploysuwan**  
รองรับการเผยแพร่บน **GitHub Pages** และใช้งาน URL สำหรับ App Store & Google Play Store

---

## 🌐 Demo / URL

```
https://<your-username>.github.io/<your-repo-name>/
```

> ✏️ แทนที่ `<your-username>` และ `<your-repo-name>` ด้วยข้อมูล GitHub ของคุณ

---

## 📁 โครงสร้างไฟล์

```
/
├── index.html                          ← หน้าหลัก (Developer Portfolio)
├── README.md                           ← ไฟล์นี้
├── assets/
│   ├── style.css                       ← CSS หลักทุกหน้า (แก้ที่นี่ที่เดียว)
│   └── favicon.ico                     ← ✏️ ใส่ไฟล์ favicon ของคุณที่นี่
└── apps/
    ├── banchee-witheethai/             ← แอป "บัญชีวิถีไทย"
    │   ├── index.html                  ← หน้าแนะนำแอป + ลิงก์ดาวน์โหลด
    │   ├── privacy.html                ← นโยบายความเป็นส่วนตัว
    │   ├── support.html                ← FAQ + ฟอร์มติดต่อ
    │   └── terms.html                  ← ข้อกำหนดการใช้งาน
    ├── khaidee/                        ← แอป "ขายดี"
    │   ├── index.html
    │   ├── privacy.html
    │   ├── support.html
    │   └── terms.html
    ├── wandee/                         ← แอป "วันดีๆ"
    │   ├── index.html
    │   ├── privacy.html
    │   ├── support.html
    │   ├── terms.html
    │   ├── icon.png
    │   └── og-image.png
    └── pheuan-tueanya/                 ← แอป "เพื่อนเตือนยา"
        ├── index.html
        ├── privacy.html
        ├── support.html
        ├── terms.html
        ├── icon.png
        └── og-image.png
    └── pheuan-ekkasan/                 ← แอป "เพื่อนเตือนเอกสาร"
        ├── index.html
        ├── privacy.html
        ├── support.html
        ├── terms.html
        ├── icon.png
        └── og-image.png
    └── greeting_card/                  ← แอป "ส่งใจ"
        ├── index.html
        ├── privacy.html
        ├── support.html
        ├── terms.html
        ├── icon.png
        ├── og-image.png
        └── screenshots/
```

---

## 🚀 วิธีเผยแพร่บน GitHub Pages

1. สร้าง Repository ใหม่บน GitHub (Public)
2. อัปโหลดไฟล์ทั้งหมดไปยัง Root ของ repo
3. ไปที่ **Settings → Pages**
4. เลือก Source: **Deploy from a branch → main → / (root)**
5. กด Save และรอ 1-3 นาที
6. เว็บไซต์จะพร้อมใช้งานที่ `https://<username>.github.io/<repo-name>/`

---

## ✏️ สิ่งที่ต้องแก้ไขก่อนเผยแพร่

### จุดที่ต้องแก้ทุกไฟล์ (ค้นหา `✏️ [แก้ไข]` ในโค้ด)

| จุด | ต้องแก้เป็น | ไฟล์ที่เกี่ยวข้อง |
|-----|------------|------------------|
| URL เว็บ GitHub Pages | `https://burapatis.github.io/app` | `index.html` หลัก |
| อีเมลติดต่อ | อีเมลจริงของคุณ | ทุกไฟล์ |
| ลิงก์ App Store iOS | URL หน้าแอปใน App Store | `apps/*/index.html` |
| ลิงก์ Google Play | URL หน้าแอปใน Google Play | `apps/*/index.html` |
| ภาพ Screenshot | ใส่รูปจริงแทน placeholder | `apps/*/index.html` |
| เวอร์ชันแอป | เวอร์ชันปัจจุบันของแอป | `apps/*/index.html` |
| วันที่นโยบาย | วันที่มีผลจริง | `apps/*/privacy.html`, `apps/*/terms.html` |
| favicon.ico | ไฟล์ favicon จริง | `assets/favicon.ico` |

---

## ➕ วิธีเพิ่มแอปใหม่

### ขั้นตอนที่ 1 — สร้างโฟลเดอร์แอปใหม่
```
apps/
└── your-new-app/
    ├── index.html
    ├── privacy.html
    ├── support.html
    └── terms.html
```
คัดลอกโฟลเดอร์ `khaidee` หรือ `banchee-witheethai` แล้วแก้ไขข้อมูล

### ขั้นตอนที่ 2 — เพิ่ม App Card ในหน้าหลัก
เปิด `index.html` (root) และหาบรรทัดที่มี comment:
```html
<!-- ✏️ [เพิ่มแอปใหม่] คัดลอก block นี้ทั้งหมดเพื่อเพิ่มแอปใหม่ -->
```
คัดลอก block `<article class="app-card">` แล้ววางต่อท้าย แก้ชื่อ icon และลิงก์

### ขั้นตอนที่ 3 — เพิ่มลิงก์ใน Footer
ในไฟล์ `index.html` หลัก หาส่วน Footer และเพิ่มลิงก์แอปใหม่

### ขั้นตอนที่ 4 — กำหนดสีธีม (ไม่บังคับ)
ในไฟล์ `apps/your-new-app/index.html` แก้ CSS variable:
```css
:root {
  --app-primary: #your-color;
  --app-primary-dark: #your-darker-color;
}
```

---

## 🎨 Design System

| ตัวแปร | ค่า | ใช้สำหรับ |
|--------|-----|-----------|
| `--primary` | `#1C3D5A` | สีหลัก (น้ำเงินเข้ม) |
| `--accent` | `#C9941A` | สีเน้น (ทองไทย) |
| `--bg` | `#F8F7F4` | พื้นหลัง (ครีม) |
| Font | Sarabun | รองรับภาษาไทยสมบูรณ์ |

---

## 📋 URL สำหรับ App Store (ตัวอย่าง)

ใส่ URL เหล่านี้ในหน้า App Store / Play Store Console:

| หน้า | URL |
|------|-----|
| Privacy Policy (บัญชีวิถีไทย) | `https://<user>.github.io/<repo>/apps/banchee-witheethai/privacy.html` |
| Support URL (บัญชีวิถีไทย) | `https://<user>.github.io/<repo>/apps/banchee-witheethai/support.html` |
| Privacy Policy (ขายดี) | `https://<user>.github.io/<repo>/apps/khaidee/privacy.html` |
| Support URL (ขายดี) | `https://<user>.github.io/<repo>/apps/khaidee/support.html` |
| Privacy Policy (วันดีๆ) | `https://<user>.github.io/<repo>/apps/wandee/privacy.html` |
| Support URL (วันดีๆ) | `https://<user>.github.io/<repo>/apps/wandee/support.html` |
| Terms of Service (วันดีๆ) | `https://<user>.github.io/<repo>/apps/wandee/terms.html` |
| App Store (วันดีๆ) | `https://apps.apple.com/th/app/id6777304179` |
| Privacy Policy (เพื่อนเตือนยา) | `https://<user>.github.io/<repo>/apps/pheuan-tueanya/privacy.html` |
| Support URL (เพื่อนเตือนยา) | `https://<user>.github.io/<repo>/apps/pheuan-tueanya/support.html` |
| Terms of Service (เพื่อนเตือนยา) | `https://<user>.github.io/<repo>/apps/pheuan-tueanya/terms.html` |
| Privacy Policy (เพื่อนเตือนเอกสาร) | `https://<user>.github.io/<repo>/apps/pheuan-ekkasan/privacy.html` |
| Support URL (เพื่อนเตือนเอกสาร) | `https://<user>.github.io/<repo>/apps/pheuan-ekkasan/support.html` |
| Terms of Service (เพื่อนเตือนเอกสาร) | `https://<user>.github.io/<repo>/apps/pheuan-ekkasan/terms.html` |
| App Store (ขายดี) | `https://apps.apple.com/th/app/id6775516917` |
| App Store (เพื่อนเตือนยา) | `https://apps.apple.com/th/app/id6777451083` |
| App Store (เพื่อนเตือนเอกสาร) | `https://apps.apple.com/th/app/id6777645901` |
| App Store (ส่งใจ) | `https://apps.apple.com/th/app/id6779915909` |
| Privacy Policy (ส่งใจ) | `https://<user>.github.io/<repo>/apps/greeting_card/privacy.html` |
| Support URL (ส่งใจ) | `https://<user>.github.io/<repo>/apps/greeting_card/support.html` |
| Terms of Service (ส่งใจ) | `https://<user>.github.io/<repo>/apps/greeting_card/terms.html` |

---

## 📄 License

© 2026 Boorapatis Ploysuwan. All Rights Reserved.  
โค้ดในโปรเจกต์นี้ใช้สำหรับเว็บไซต์ของผู้พัฒนาเท่านั้น
# app
