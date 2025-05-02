# 📘 Node.js Practice Notes

---

## 📅 DAY 1

### 💡 Node.js কি?
Node.js হলো একটি প্ল্যাটফর্ম যা দিয়ে JavaScript সার্ভার-সাইডে (ব্যাকএন্ডে) চালানো যায়। এটি দ্রুত, স্কেলযোগ্য এবং ইভেন্ট-ভিত্তিক অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে।

### 💡 Node.js কিভাবে কাজ করে?
Node.js হলো Single-threaded, Event-driven এবং Non-blocking I/O Model অনুসরণ করে কাজ করা একটি runtime environment।

### 💡 Node.js ব্যবহারের কারণ:
- 🔹 দ্রুত কাজ করে (V8 Engine)
- 🔹 একসাথে অনেক কাজ করতে পারে (Non-blocking)
- 🔹 JavaScript দিয়েই ব্যাকএন্ড করা যায়
- 🔹 Real-time অ্যাপ বানাতে সুবিধা হয়
- 🔹 হাজারো প্যাকেজ ফ্রি পাওয়া যায় (NPM)
- 🔹 সহজে স্কেল করা যায়

### 💡 NPM কি?
NPM (Node Package Manager) হলো Node.js-এর প্যাকেজ ম্যানেজার। এর মাধ্যমে সহজে থার্ড-পার্টি লাইব্রেরি ইন্সটল ও ম্যানেজ করা যায়।
### 💡 NPM-এর কাজ:
- ✔️ নতুন প্যাকেজ ইন্সটল করা (npm install)
- ✔️ নিজস্ব প্যাকেজ তৈরি ও প্রকাশ করা
- ✔️ প্রজেক্টের নির্ভরতাগুলো (dependencies) ম্যানেজ করা
- ✔️ হাজারো রেডি-মেড মডিউল পাওয়া যায় (যেমন: express, axios)
- ✔️ package.json → npm init --y    →(tarminal command)

### 💡 Node Module কি?
Node Module হলো JavaScript কোডের পুনঃব্যবহারযোগ্য অংশ, যেগুলো Node.js-এ আলাদা আলাদা ফাইল বা প্যাকেজ হিসেবে ব্যবহৃত হয়। এগুলোর সাহায্যে প্রজেক্টকে ছোট ছোট ভাগে ভাগ করা যায়।
### 💡 ৩ ধরনের Node Module
👉 Core Module
- 🔹 Node.js এর সাথে built-in আসে
- 🔹 আলাদা ইন্সটল করতে হয় না
- 🔹 যেমন: fs, http, path
👉 Local Module
- 🔹 নিজে বানানো মডিউল
- 🔹 নিজের প্রজেক্টের জন্য তৈরি
- 🔹 এক বা একাধিক ফাইল হতে পারে
👉 Third-party Module
- 🔹 অন্য কেউ তৈরি করেছে
- 🔹 NPM থেকে ইন্সটল করতে হয়
- 🔹 যেমন: express, mongoose, lodash

### 💡 HTTP Protocol: Request-Response Model
HTTP (HyperText Transfer Protocol) হলো ওয়েব ব্রাউজার ও সার্ভারের মধ্যে যোগাযোগ করার নিয়ম বা প্রটোকল। এটি Request-Response মডেল অনুসরণ করে।
### 💡 HTTP কিভাবে কাজ করে?
Client (ব্রাউজার) → সার্ভারে Request পাঠায়
Server → সেই Request অনুযায়ী Response পাঠায়
### 💡 HTTP Request
Client যখন সার্ভারে কিছু চায়, তখন HTTP Request পাঠায়। এতে থাকে:
Method: কী ধরনের কাজ করতে চাচ্ছে (যেমন GET, POST, PUT, DELETE, OPTION, HEAD)
URL: কোন রিসোর্স চাচ্ছে
Headers: অতিরিক্ত তথ্য
Body: (সবসময় না) যেমন ফর্ম ডেটা
### 💡 HTTP Response
Server যখন Request-এর উত্তর দেয়, তখন HTTP Response পাঠায়। এতে থাকে:
- 1. Status Code: উত্তর কেমন (যেমন 200 OK, 404 Not Found)
- 2. Data: 
	Headers: অতিরিক্ত তথ্য
	Body: আসল ডেটা (HTML, JSON, ইত্যাদি)।


## 📅 DAY 2

### 💡 Request-Response Model in Node.js
Node.js-এ http মডিউল ব্যবহার করে আমরা একটি সার্ভার তৈরি করতে পারি যা Client Request গ্রহণ করে এবং একটি Response পাঠায়। এটি Request-Response Model।  
### 💡 Request-Response Model এ কী ঘটে:
ইউজার ব্রাউজারে "http://localhost:3000" টাইপ করে।
Node.js সেই রিকোয়েস্ট ধরে।
তারপর Server থেকে রেসপন্স পাঠানো হয়—যেমন HTML, Text, JSON ইত্যাদি।
উদারণ: day2-node>day2-main.js এর মাঝে পাওয়া যাবে।  
### 🔔 ব্যাখ্যা:
http.createServer() দিয়ে সার্ভার তৈরি হয়।
req.url চেক করে কোন রিকোয়েস্ট এসেছে সেটা ধরা হয়।
res.writeHead() দিয়ে HTTP স্ট্যাটাস এবং কনটেন্ট টাইপ সেট করা হয়।
res.write() দিয়ে মেসেজ পাঠানো হয়।
res.end() দিয়ে রেসপন্স শেষ করা হয়।
📌 note: [Rabbil Hasan YouTube]("https://www.youtube.com/watch?v=Gdjv8CyzOI4&t=346s") class-6

### 💡 HTTP Client কি?
HTTP Client হলো এমন একটি সফটওয়্যার বা টুল, যা সার্ভারে HTTP Request পাঠায় এবং Response গ্রহণ করে।
👉 সাধারণভাবে, ব্রাউজার, Postman, বা JavaScript কোড (fetch/axios) - সবই HTTP Client হতে পারে।
### 💡 HTTP Client-এর কাজ:
সার্ভারের কাছে Request পাঠানো (GET, POST, PUT, DELETE)
সার্ভার থেকে Response পাওয়া
ডেটা পাঠানো বা রিসিভ করা (যেমন: JSON, HTML, ফাইল)
### 🎯 উদাহরণ (HTTP Client কীভাবে কাজ করে):
ব্রাউজারে গিয়ে https://api.github.com টাইপ করলে আমি আসলে একটি HTTP Client ব্যবহার করছি।
অথবা, Node.js থেকে আমরা নিজে https.get() দিয়ে অন্য সার্ভারে রিকোয়েস্ট পাঠাতে পারি।
🧰 জনপ্রিয় HTTP Clients: Browser, Postman, fetch(), axios, curl, Retrofit, RestSharp.....

### 💡 package.json ফাইল কি?
package.json হলো Node.js প্রজেক্টের মূল কনফিগারেশন ফাইল, যেখানে প্রজেক্ট সম্পর্কে সব গুরুত্বপূর্ণ তথ্য ও ডিপেনডেন্সি (dependencies) রাখা হয়।
এটি Node.js অ্যাপের পরিচয়পত্রের মতো কাজ করে।
### 💡 কেনো ব্যবহার হয়?
প্রজেক্টের নাম, ভার্সন, বিবরণ ইত্যাদি সংরক্ষণ করে
কোন কোন প্যাকেজ/মডিউল দরকার তা বলে
স্ক্রিপ্ট (যেমন npm start) সংরক্ষণ করে
লাইসেন্স, লেখক, গিট রিপোজিটরি ইত্যাদিও রাখা যায়
### 🛠️ কীভাবে তৈরি হয়?
- package.json → npm init --y    →(tarminal command)
- 📌 note: [Rabbil Hasan YouTube] class-9

### 💡 Node.js URL Module
URL Module হলো Node.js এর একটি Core Module, যার সাহায্যে আমরা কোনো URL কে ভেঙে তার বিভিন্ন অংশ বের করতে পারি—যেমন host, pathname, query ইত্যাদি।
URL মানে: Uniform Resource Locator
যেমন: "https://example.com/blog?year=2025&month=april"
✅ উদাহরণ:  day2-node>day2-main.js এর মাঝে পাওয়া যাবে।
### 🔍 parse() ফাংশন কি করে?
url.parse(url_string, true)
এটি একটি URL কে ভেঙে object আকারে দেয় যাতে আমরা তার বিভিন্ন অংশ পেতে পারি।
📝 Parsed Object থেকে যা পাওয়া যায়: host, pathname, search, query


## 📅 DAY 3

### 💡 Node.js FS (File System) Module
fs Module হলো Node.js এর Core Module, যার মাধ্যমে আমরা ফাইলের উপর বিভিন্ন কাজ করতে পারি, যেমন: ফাইল তৈরি করা,  ফাইল পড়া, ফাইল লেখা, ফাইল ডিলিট করা,ফোল্ডার হ্যান্ডেল করা
### 🔄 দুই ধরনের ফাইল অপারেশন:
1️. Asynchronous:
- নন-ব্লকিং (অন্য কাজ থেমে থাকে না)
- দ্রুত ও বেশি ব্যবহারযোগ্য
- কলব্যাক ফাংশনের মাধ্যমে কাজ হয়
### ✍️ FS Module-এর প্রধান ফাংশনসমূহ
🔁 Asynchronous Methods (নন-ব্লকিং)
- fs.readFile(fileName, [options], callback);       // ফাইল পড়ে (Async)
- fs.writeFile(fileName, data, [options], callback); // ফাইল লিখে
- fs.appendFile(file, data, [options], callback);    // ফাইলের শেষে ডেটা যোগ করে
- fs.rename(oldPath, newPath, callback);             // ফাইল/ফোল্ডারের নাম বদলায়
- fs.exists(path, callback);                         // কোনো ফাইল/পাথ আছে কিনা চেক করে
- fs.unlink(path, callback);                         // ফাইল ডিলিট করে
- fs.open(path, flags, [mode], callback);            // ফাইল ওপেন করে
- fs.mkdir(path, [mode], callback);                  // নতুন ফোল্ডার তৈরি করে
- fs.rmdir(path, callback);                          // ফোল্ডার মুছে ফেলে
- fs.readdir(path, callback);                        // ফোল্ডারের সব ফাইল লিস্ট করে

2️. Synchronous:
ব্লকিং (ফাইল না পড়া পর্যন্ত পরের লাইন এক্সিকিউট হয় না)
কোড সহজ কিন্তু বড় অ্যাপ্লিকেশনে ধীর গতি আনতে পারে
⏸️ Synchronous Methods (ব্লকিং)
- fs.readFileSync(fileName, [options]);              // ফাইল পড়ে (Sync)
- fs.writeFileSync(fileName, data, [options]);       // ফাইল লিখে
- fs.appendFileSync(file, data, [options]);          // ফাইলের শেষে ডেটা যোগ করে
- fs.renameSync(oldPath, newPath);                   // ফাইল/ফোল্ডারের নাম বদলায়
- fs.existsSync(path);                               // ফাইল/পাথ আছে কিনা চেক করে
- fs.unlinkSync(path);                               // ফাইল ডিলিট করে
- fs.openSync(path, flags, [mode]);                  // ফাইল ওপেন করে
- fs.mkdirSync(path, [mode]);                        // নতুন ফোল্ডার তৈরি করে
- fs.rmdirSync(path);                                // ফোল্ডার মুছে ফেলে
- fs.readdirSync(path);                              // ফোল্ডারের সব ফাইল লিস্ট করে
### ✅ সংক্ষিপ্তভাবে:
- fs module = File System handle করার জন্য
- Asynchronous = Fast, non-blocking, callback-based
-Synchronous = Slow, blocking, simple
ছোট প্রজেক্টে Synchronous চলবে, বড় প্রজেক্টে Asynchronous উত্তম।
📌 note: [Rabbil Hasan YouTube] class-10
### 3rd Day Code Practice:
- 📌 fs ready file page(Asynchronous): day3-fs-module-node>index.js
- 📌 fs read file (Synchronous): day3-fs-module-node>index.js
- 📌 fs File Write (Asynchronous): day3-fs-module-node>index.js


## 📅 DAY 4

### 3rd Day Code Practice:
- 📌 fs File Write (Synchronous): day4-fs-module-node>index.js
- 📌 fs Rename File (Aynchronous): day4-fs-module-node>index.js
- 📌 fs Rename File (Synchronous): day4-fs-module-node>index.js


## 📅 DAY 5
- 📌 fs File Delete Operation (Aynchronous): day5-fs-module-node-part-1>index.js
- 📌 fs File Delete Operation (Synchronous): day5-fs-module-node-part-1>index.js
- 📌 fs File Exists Operation (Aynchronous): day5-fs-module-node-part-1>index.js
- 📌 fs File Exists Operation (Synchronous): day5-fs-module-node-part-1>index.js


## 📅 DAY 6

## 📘 নোট: Domain এবং Hosting সম্পর্কিত বিস্তারিত:

### 💡 ১. Domain কী?
Domain হলো ইন্টারনেটে কারো ওয়েবসাইটের ঠিকানা। যেমন:
google.com
facebook.com
-উদাহরণ: তুমি যদি একটা দোকান খোল, তবে তোমার দোকানের একটা নাম থাকবে — যেমন "Rahim Store"। এই নামটাই অনলাইনের ক্ষেত্রে Domain।

### 💡 ২. Hosting কী?
Hosting মানে হলো সেই সার্ভার বা জায়গা যেখানে তোমার ওয়েবসাইটের সব ফাইল, কোড, ছবি ইত্যাদি রাখা হয়।
-- ক্লায়েন্ট যখন তোমার ওয়েবসাইটে প্রবেশ করে, তখন এই হোস্টিং সার্ভার থেকেই সব কিছু লোড হয়।
কারো Node.js প্রজেক্ট যেখানে রান করবে, সেটা হচ্ছে হোস্টিং। অনেকটা কম্পিউটারে সার্ভার চালানোর মতো।
- উদাহরণ: ধরো তুমি একটা দোকান দিচ্ছো (Domain) — এখন তোমার প্রোডাক্টগুলো রাখতে একটা জায়গা লাগবে (Hosting)। সেই জায়গাটাই হচ্ছে Hosting Server।

### 💡 ৩. Top Level Domain (TLD) কী?
TLD হচ্ছে ডোমেইনের শেষে যেটা থাকে।
উদাহরণ:
- .com
- .org
- .net
- .info
- এই অংশটাই হচ্ছে Top Level Domain।

### 💡  ৪. Subdomain কী?
Subdomain হলো কারো মূল ডোমেইনের একটা অংশ বা সাব-অ্যাড্রেস।
উদাহরণ:
- মূল ডোমেইন: example.com
- সাবডোমেইন: blog.example.com, shop.example.com
-- এটি আলাদা আলাদা সেকশন বা অ্যাপ চালানোর জন্য কাজে লাগে।

### 💡 ৫. Domain Extension কী?
Domain Extension আর TLD অনেকটা একই — এটা ডোমেইনের শেষে থাকা অংশ, যেমন .com, .net ইত্যাদি।

### 💡 ৬. Country Domain Extension কী?
যে ডোমেইনগুলোর শেষে দেশের কোড থাকে।
উদাহরণ:
- .bd → বাংলাদেশ
- .us → আমেরিকা
- .uk → ইউকে
- .in → ভারত
- এগুলো দিয়ে বোঝা যায় ওয়েবসাইট কোন দেশের জন্য।

## 💡 MySQL কি?
MySQL হলো একটি Relational Database Management System (RDBMS)
যেখানে ডাটা টেবিল আকারে রাখা হয় (যেমন Excel-এর মতো Row & Column এ)।
- 🔹 এটি একটি Open Source ডেটাবেজ
- 🔹 এখানে আমরা CRUD operation করতে পারি:

### 6th Day Code Practice:
- 📌 Create New Node Project with MySQL: day6-node-with-MySQL>index.js
- 📌 Create Connection With MySQL: day6-node-with-MySQL>index.js


## 📅 DAY 7

### 7th Day Code Practice:
- 📌 Create Connection With MySQL: day6+day7+day8-node-with-MySQL>index.js
- 📌 Create Connection & Data Insert Node MySQL: day6+day7+day8-node-with-MySQL>index.js
- 📌 Data Update and Delete Node MySQL: day6+day7+day8-node-with-MySQL>index.js

## 📅 DAY 8

### 8th Day Code Practice:
- 📌 Data Select Node MySQL: day6+day7+day8-node-with-MySQL>index.js

# 📚 Database Basics
### 💡 ডাটাবেজ কি?
-Data সংরক্ষণের জন্য তৈরি করা একটি ডিজিটাল জায়গা বা ব্যবস্থা।
-অনেকগুলো তথ্য (Data) ডিজিটালভাবে জমিয়ে রাখা। যাতে দরকার হলে দ্রুত খুঁজে পাওয়া যায়, আপডেট করা যায়, ডিলিট করা যায়।
যেমন:

- ফেসবুকের User Info (নাম, ইমেইল, পাসওয়ার্ড)
- স্কুলের ছাত্রদের নামের লিস্ট
- অনলাইন দোকানের Product লিস্ট

### 💡 ডাটাবেজের ধরণ: 
Relational Database vs Non-relational Database
-- Relational Database:
### Relational Database মানে:
👉 তথ্য গুলো টেবিলের মতো ছকে ছকে রাখা হয়।
👉 টেবিলগুলোর মধ্যে সম্পর্ক (Relation) থাকে।
-টেবিলের ভেতর:
- Row → Data এর লাইন (একটা User, একটা Product)
- Column → Data এর ধরন (Name, Age, Price)
-টেবিলের মধ্যে "Primary Key" আর "Foreign Key" দিয়ে এক টেবিলের সাথে অন্য টেবিলের বন্ধুত্ব করানো হয়।

### Non-relational Database মানে:
👉 টেবিলের ছক মানতেই হবে না।
👉 তথ্য রাখা যায় অনেক ফ্রি স্টাইলে — JSON format বা document আকারে।
👉 Data গুলো টেবিলের মতো না, বরং আলাদা আলাদা "ডকুমেন্ট" আকারে থাকে।
-ধরো, তুমি একটা প্রোডাক্টের সব ইনফো (নাম, দাম, রেটিং, কমেন্ট) একসাথে এক ফাইলে রাখলে — এটাই Non-relational!


## 📅 DAY 9

# 📒 MongoDB (Definitions)
### 💡 MongoDB কী?
MongoDB হলো একটি Non-relational (NoSQL) ডেটাবেস যেখানে ডেটা Document আকারে সংরক্ষিত হয়।
প্রতিটি ডেটা দেখতে JSON Object এর মতো, যা ফ্লেক্সিবল এবং স্কেলেবল ডেটা স্টোরের সুবিধা দেয়।
👉 এক কথায়, MongoDB হলো ফ্রি স্টাইল ডেটাবেস যেখানে rigid টেবিলের বাঁধা নিয়ম নেই।

### 💡 SQL vs NoSQL কি?
SQL (Structured Query Language) ব্যবহার করে relational database চালায়, NoSQL ডেটা ফ্লেক্সিবলভাবে রাখে

### 💡 Collection কী?
Collection হলো MongoDB তে ডেটার গ্রুপ বা Folder।
একটি Collection এর ভেতরে অনেকগুলো Document থাকে।
👉 যেমন, "Students" নামে একটি Collection এর ভেতরে থাকবে আলাদা আলাদা Student এর তথ্য (Document আকারে)।

### 💡 Document কী?
Document হলো MongoDB এর ডেটার একক ইউনিট।
প্রতিটি Document দেখতে JSON Object এর মতো।
👉 যেমন:
{
  "name": "Sakib",
  "age": 24,
  "profession": "Cricketer"
}

### 💡 MongoDB Atlas কী?
MongoDB Atlas হলো MongoDB এর Cloud Hosting সার্ভিস।
এখানে তুমি অনলাইনে (ইন্টারনেটের মাধ্যমে) Database তৈরি করতে পারো, ম্যানেজ করতে পারো, এবং অ্যাক্সেস করতে পারো।
👉 সহজ ভাষায়, MongoDB Atlas হলো MongoDB এর অনলাইন ভার্সন, যেখানে ডেটাবেস বানানোর জন্য নিজের কম্পিউটারে কিছু ইনস্টল করার দরকার হয় না।


## 📅 DAY 10

### Understanding MongoDB Installation and Connect
- Understanding about MongoDB Atlas
- Create Clusters
- Connect with MongoDB Compass

### 10th Day Code Practice:
- 📌 Connect with MongoDB Compass: day10-node>index.js

## 📅 DAY 11

### 11th Day Code Practice:
- 📌 Connect & InsertData with MongoDB Compass: day10+day11+day12-MongoDB>index.js
- 📌 Connect & Data Update with MongoDB Compass: day10+day11+day12-MongoDB>index.js
- 📌 Connect & Data Delete with MongoDB Compass: day10+day11+day12-MongoDB>index.js

## 📅 DAY 12

### 12th Day Code Practice:
- 📌 Connect & ReadData with MongoDB Compass: day10+day11+day12-MongoDB>index.js

## 📅 DAY 13

### 13th Day Code Practice:
- 📌 Connect & Data Find with MongoDB Compass: day10+day11+day12+day13-MongoDB>index.js
