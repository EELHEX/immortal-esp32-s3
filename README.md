<!--
  IMMORTAL-S3 repository README
-->

<div align="center">

<img src="docs/assets/logo.svg" alt="IMMORTAL-S3" width="120" />

# IMMORTAL-S3

### `> INITIALIZING IMMORTAL-S3...`

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&duration=2500&pause=700&color=46E5B8&center=true&vCenter=true&width=600&lines=Wireless+Research+Platform;ESP32-S3+%7C+WiFi+%7C+BLE+%7C+IR;OLED+Interface+%7C+Web+Dashboard;Built+by+EELHEX;SYSTEM+ONLINE." alt="Typing animation" />

<br>

**A pocket-sized wireless research platform for the ESP32-S3.**

WiFi · BLE · Sub-GHz · IR · BadUSB · Evil Twin · Karma · AI · OLED UI

<br>

[![Version](https://img.shields.io/badge/version-9.10.9-46e5b8?style=flat-square)](CHANGELOG.md)
[![Platform](https://img.shields.io/badge/platform-ESP32--S3-46e5b8?style=flat-square)](#hardware)
[![Flash](https://img.shields.io/badge/flash-web%20flasher-46e5b8?style=flat-square)](https://EELHEX.github.io/immortal-s3/)
[![License](https://img.shields.io/badge/license-Proprietary-ff5c7c?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-46e5b8?style=flat-square)](#roadmap)

<br>

[![GitHub stars](https://img.shields.io/github/stars/EELHEX/immortal-s3?style=for-the-badge\&logo=github\&label=STARS\&color=46e5b8)](https://github.com/EELHEX/immortal-s3)
[![GitHub issues](https://img.shields.io/github/issues/EELHEX/immortal-s3?style=for-the-badge\&color=46e5b8)](https://github.com/EELHEX/immortal-s3)
[![GitHub last commit](https://img.shields.io/github/last-commit/EELHEX/immortal-s3?style=for-the-badge\&color=46e5b8)](https://github.com/EELHEX/immortal-s3)

<br>

[**▶ Open the web flasher**](https://EELHEX.github.io/immortal-s3/) · [Report a bug](../../issues) · [Request a feature](../../issues)

</div>

---

<div align="center">

```text

```

`[ WiFi ]` ─── `ONLINE`    ` [ BLE ]` ─── `READY`    ` [ OLED ]` ─── `ACTIVE`

</div>

---

## What is IMMORTAL-S3?

IMMORTAL-S3 is a **closed-source**, single-binary firmware for the ESP32-S3 that turns a dev board into a wireless research toolkit. It boots into a custom OLED interface, exposes a local web dashboard, and is designed for authorized security testing, education, and research.

No app. No cloud. No account. One board, one URL, everything local.

---

<div align="center">

### `// CORE SYSTEMS`

`ESP32-S3`　`OLED`　`WiFi`　`BLE`　`IR`　`NRF24`　`BADUSB`　`AI`

</div>

## Features

### WiFi

Connect to WiFi
WiFi AP
Disconnect WiFi
WiFi Atks
Beacon Spam
Target Atk
Information
Target Deauth
EvilPortal + Deauth

### BLE

BLE Scan
iOS Spam
Windows Spam
Samsung Spam
Android Spam
Spam All

### Sub-GHz / IR

* NRF24L01+ research features
* Infrared remote testing
* TV-B-Gone

### BadUSB

* DuckyScript editor and validation
* Browser-based script management

### AI assistant

* Gemini API integration
* Runtime API key
* Local history storage

### OLED UI

* Animated 16-item menu
* Custom themes
* Lock screen
* Built-in games
* QR codes
* Boot chime and notifications

### Web dashboard

* Live OLED mirror
* Virtual controls
* Theme uploader
* Storage/system controls

---

<div align="center">

### `SYSTEM ARCHITECTURE`

```text
                    ┌──────────────────────┐
                    │      IMMORTAL-S3     │
                    │       ESP32-S3       │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        ┌─────────┐       ┌─────────┐       ┌─────────┐
        │   OLED  │       │  WiFi   │       │   BLE   │
        │  128x64 │       │ Engine  │       │ Engine  │
        └─────────┘       └─────────┘       └─────────┘
             │                 │                 │
             └─────────────────┼─────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │    LOCAL DASHBOARD  │
                    │      WEB UI         │
                    └─────────────────────┘
```

</div>

---

## Hardware

| Component           | Notes                                  |
| ------------------- | -------------------------------------- |
| **ESP32-S3 DevKit** | 16 MB flash, QIO OPI PSRAM recommended |
| **SSD1306 OLED**    | 128×64 I²C — `0x3C` or `0x3D`          |
| **3 push buttons**  | GPIO 0, 1, 2 — active low              |
| **Buzzer**          | GPIO 3 (optional)                      |
| **IR LED**          | GPIO 4                                 |
| **NRF24L01+**       | SCK 12, MISO 13, MOSI 11, CSN 10, CE 5 |
| **WS2812 LED**      | GPIO 48 on many S3 devkits             |

---

## Installation

### Web flasher

1. Plug the board into a USB data port.
2. Open `https://EELHEX.github.io/immortal-s3/`.
3. Click **INSTALL** and select the serial port.
4. Let the flasher complete.

Requires a Chromium-based browser with WebSerial.

### Manual flash

```bash
git clone https://github.com/EELHEX/immortal-s3.git
cd immortal-s3
pio run -t upload
```

### First boot

Join the device's local WiFi network and open its local dashboard.

**Only use wireless/USB testing features against systems you own or have explicit permission to test.**

---

<div align="center">

### `BOOT SEQUENCE`

```text
[████████████████████████████████████] 100%

> loading kernel.............. OK
> initializing hardware...... OK
> mounting storage............ OK
> starting OLED............... OK
> starting wireless........... OK
> starting dashboard.......... OK
> loading modules............. OK

          IMMORTAL-S3
        SYSTEM ONLINE
```

</div>

---

## Project structure

```text
src/
├── ESP32S3_AdvancedPentester.ino
├── LocalUI.h
├── Dashboard.h
├── NRF24.h
├── IRRemote.h
├── Portals.h
├── Payloads.h
└── GeminiConfig.h
platformio.ini
```

<details>
<summary><b>▸ Module map</b></summary>

<br>

| Module           | Purpose                       |
| ---------------- | ----------------------------- |
| `LocalUI.h`      | OLED interface and navigation |
| `Dashboard.h`    | Local web dashboard           |
| `NRF24.h`        | NRF24L01+ functionality       |
| `IRRemote.h`     | Infrared functionality        |
| `Portals.h`      | Portal functionality          |
| `Payloads.h`     | BadUSB payload handling       |
| `GeminiConfig.h` | AI configuration              |

</details>

---

## Roadmap

* [x] OLED UI with custom themes
* [x] Web dashboard with live mirror
* [x] Runtime Gemini API key
* [x] Multi-turn AI history
* [ ] OTA firmware updates
* [ ] SD card support
* [ ] 5 GHz support where hardware permits
* [ ] WebSocket OLED stream

---

<div align="center">

### `ROADMAP STATUS`

```text
OLED UI                 ████████████████████  DONE
WEB DASHBOARD           ████████████████████  DONE
AI INTEGRATION          ████████████████████  DONE
OTA UPDATES             ███████░░░░░░░░░░░░  NEXT
SD CARD                 ████░░░░░░░░░░░░░░░░  PLANNED
WEBSOCKET STREAM        █████░░░░░░░░░░░░░░░  PLANNED
```

</div>

---

## FAQ

**Does it work on ESP32 non-S3?**
No. The firmware is designed for ESP32-S3 hardware.

**Where is the source code?**
This repository package is for a closed-source project. Prebuilt binaries are distributed through the web flasher.

**Why does my board not appear in the flasher?**
Use a USB data cable and a Chromium-based browser. Try download mode/BOOT if necessary.

---

## Legal

> **For authorized security testing, education, and research only.**
>
> Do not use wireless, USB, credential, phishing, or device-testing functions against systems you do not own or have explicit permission to test. You are responsible for complying with applicable laws.

---

## License

**Proprietary — All Rights Reserved.** See [LICENSE](LICENSE).

---

## Credits

**Author:** Eelhex

<br>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=46e5b8&height=100&section=footer&text=IMMORTAL-S3&fontSize=30&fontColor=0b0f0e&animation=twinkling&fontAlignY=65" width="100%" />

### `EELHEX`

`BUILD · BREAK · LEARN · REPEAT`

<br>

**If IMMORTAL-S3 saved you time, star the repo.**

<br>

<img src="https://komarev.com/ghpvc/?username=EELHEX&repo=immortal-s3&color=46e5b8&style=flat-square&label=REPO+VIEWS" />

</div>
