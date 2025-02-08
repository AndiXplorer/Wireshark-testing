# Express.js Packet Capture API 🚀  

This project is a simple **Express.js server** that listens on **port 3000** and captures HTTP POST requests.  
You can also use `tcpdump` to monitor network traffic on this server.  

---

## 📌 Features  

👉 Accepts `POST` requests at `/submit`  
👉 Logs incoming data (name & message)  
👉 Uses `tcpdump` to capture network packets  

---

## 🛠️ **Installation**  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/express-packet-capture.git
cd express-packet-capture
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

---

## 🚀 **Usage**  

### 1️⃣ Start the Express Server  
```sh
node server.js
```
By default, the server will listen on `http://localhost:3000`

---

### 2️⃣ Send a Test Request  
Use `curl` to send a sample request:  
```sh
curl -X POST -d "name=Andi&message=Hello" http://YOUR_IP:3000/submit
```
You'll see this response:  
```
Data received successfully!
```

---

## 💼 **Capturing Packets with tcpdump**  

### 1️⃣ Find Your Network Interface  
Run the following command to check your interface name:  
```sh
ip a
```
Example output:  
```
3: wlp0s20f3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 ...
    inet 172.16.85.201/24 brd 172.16.85.255 ...
```
Here, the interface is `wlp0s20f3`, and the **IP address** is `172.16.85.201`.

---

### 2️⃣ Capture Traffic on Port 3000  
Run this command to start capturing packets:  
```sh
sudo tcpdump -i wlp0s20f3 host 172.16.85.201 and port 3000 -w capture.pcap
```
💾 This will save the captured traffic in `capture.pcap`.  

To **stop capturing**, press `Ctrl + C`.

---

##  **Analyzing Captured Packets**  

1️⃣ Open `capture.pcap` in **Wireshark**  
```sh
wireshark capture.pcap
```
2️⃣ Apply a filter to only see HTTP traffic:  
```
http
```

---

## 🔥 **Troubleshooting**  

**1️⃣ Server Not Running?**  
Make sure Node.js is installed. Check with:  
```sh
node -v
```
If missing, install it:  
```sh
sudo dnf install nodejs -y  # For Fedora
```

**2️⃣ tcpdump Not Capturing?**  
Try running without filters:  
```sh
sudo tcpdump -i wlp0s20f3 -w capture.pcap
```

**3️⃣ Port 3000 Blocked?**  
Check the firewall status:  
```sh
sudo firewall-cmd --list-all
```
If needed, allow traffic:  
```sh
sudo firewall-cmd --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

---

## 🤝 **Contributing**  

Feel free to submit pull requests or report issues!  

---

### 📩 Contact  
If you have any questions, feel free to reach out!  

