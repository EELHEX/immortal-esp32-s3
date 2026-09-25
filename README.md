<!--
  IMMORTAL-S3 repository README
-->

<div align="center">

<img src="docs/assets/logo.svg" alt="IMMORTAL-S3" width="120" />

# IMMORTAL-S3

### `> INITIALIZING IMMORTAL-S3...`

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&duration=2500&pause=700&color=46E5B8&center=true&vCenter=true&width=700&lines=Wireless+Research+Platform;ESP32-S3+%7C+WiFi+%7C+BLE+%7C+IR+%7C+NRF24;OLED+Interface+%7C+Web+Dashboard;Walkie+Talkie+%7C+Ghost+Chat;Built+by+EELHEX;SYSTEM+ONLINE." alt="Typing animation" />

<br>

**A pocket-sized wireless research platform for the ESP32-S3.**

WiFi · BLE · IR (full-brand) · NRF24 · Walkie Talkie · Ghost Chat · BadUSB · Evil Twin · Karma · AI · OLED UI

<br>

[![Version](https://img.shields.io/badge/version-9.21.0-46e5b8?style=flat-square)](CHANGELOG.md)
[![Platform](https://img.shields.io/badge/platform-ESP32--S3-46e5b8?style=flat-square)](#hardware)
[![Flash](https://img.shields.io/badge/flash-web%20flasher-46e5b8?style=flat-square)](https://eelhex.github.io/immortal-esp32-s3/)
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

`[ WiFi ]` ─── `ONLINE`    `[ BLE ]` ─── `READY`    `[ OLED ]` ─── `ACTIVE`    `[ NRF24 ]` ─── `LINKED`

</div>

---

## What is IMMORTAL-S3?

IMMORTAL-S3 is a **closed-source**, single-binary firmware for the ESP32-S3 that turns a dev board into a wireless research toolkit. It boots into a custom OLED interface, exposes a local web dashboard, and now adds full-brand IR control, NRF24 voice (walkie talkie), Ghost-to-Ghost text chat, and a stateful AI assistant.

No app. No cloud. No account. One board, one URL, everything local.

---

<div align="center">

### `// CORE SYSTEMS`

`ESP32-S3`　`OLED`　`WiFi`　`BLE`　`IR`　`NRF24`　`WALKIE`　`CHAT`　`BADUSB`　`AI`

</div>

## Features

### WiFi

* Connect to WiFi (STA) / AP mode / Disconnect
* WiFi Attack suite
* Beacon Spam
* Target Attack
* Target Deauth
* PMKID attack
* Evil Portal + Deauth (combo mode)
* **Multi-Deauth** — up to 8 simultaneous targets with channel-hopping
* **Capture-only mode** — passive EAPOL/PCAP capture, no TX
* **Karma attack** — probe-response spoofing with rolling beacon frames
* **Packet Monitor** — live management/control/data frame counter + RSSI
* **Handshake capture** — PCAP saved to LittleFS, downloadable from the dashboard
* **STA scanner** — quick-pick from last scan for combo / capture / connect

### BLE

* BLE Scan (with name + MAC + RSSI)
* iOS Spam (SourApple / AirPods)
* Windows Spam (Swift Pair)
* Samsung Spam
* Android Spam (Fast Pair)
* iBeacon flood
* Panic mode (cycles all targets)
* **NRF24 BLE Jammer** — const-carrier sweep across the 3 advertising channels or all 40

### IR (Full-Brand)

* **Category picker** — TV · Air Conditioner · Fan · Projector · Audio · TV-B-Gone
* **14 TV brands** — Sony, Samsung, LG, Panasonic, Philips, Toshiba, Sharp, JVC, Sanyo, Mitsubishi, Pioneer, Hitachi, NEC, Akai
* **17 AC brands** with stateful remote — Coolix/Midea, Daikin, Fujitsu, Gree, Hitachi, Kelvinator, LG, Mitsubishi MSZ, Mitsubishi Heavy, Panasonic, Samsung, Sharp, TCL, Toshiba, Voltas, Electra, Corona
* **AC remote screen** — Power · Temp± · Mode · Fan · Swing · live status strip
* **TV-B-Gone** — cycles through every supported TV power code in a loop

### NRF24

* Spectrum scan (0–125)
* Channel jammer
* BLE channel jammer (ADV × 3 / ALL × 40)
* **Ghost Chat** — text messaging between two IMMORTAL-S3 units with reply, reactions, delivered ticks, typing indicator, unread badge, role A/B
* **Walkie Talkie** — PTT voice over NRF24 with µ-law codec, background HTTPS/HTTP servers (ports 8443 / 81), live link-quality estimate and distance readout

### BadUSB

* DuckyScript editor and validation
* Browser-based script management
* Runs over USB HID from the ESP32-S3's native USB

### AI Assistant

* Gemini API integration (`gemini-3.6-flash`)
* Runtime API key set from the web dashboard
* Multi-turn conversation history stored on-device
* Optional model discovery on HTTP 404

### OLED UI

* Animated 19-item menu with per-item icons
* Custom themes for **main menu**, **lock screen**, and **chat backdrop**
* Lock screen with 4-digit PIN
* Built-in games — Flappy Bird, Dino Run, Space Shooter
* Tamagotchi-style pet (feed / play / sleep / clean / reset)
* Weather (Open-Meteo, Beirut default) with cached fallback
* QR codes — WiFi AP, WiFi Twin, C2 URL, free text
* Boot chime and toast notifications
* Rotatable portrait / landscape layout

### Web Dashboard

* Live OLED mirror
* Virtual button controls
* Theme uploader (3 slots)
* Storage and system controls
* Handshake PCAP list, download and delete
* Walkie talkie launcher (HTTPS + HTTP fallback)
* Live chat panel with reply, reactions and timestamp modes

---

<div align="center">

### `SYSTEM ARCHITECTURE`

```text
                    ┌──────────────────────────┐
                    │       IMMORTAL-S3        │
                    │        ESP32-S3          │
                    └──────────┬───────────────┘
                               │
        ┌────────┬─────────────┼─────────────┬────────┬────────┐
        │        │             │             │        │        │
        ▼        ▼             ▼             ▼        ▼        ▼
   ┌────────┐┌────────┐   ┌────────┐   ┌────────┐┌────────┐┌────────┐
   │  OLED  ││  WiFi  │   │  BLE   │   │ NRF24  ││  IR    ││ BadUSB │
   │ 128x64 ││ Engine │   │ Engine │   │ Walkie ││ Full   ││ HID    │
   └────────┘└────────┘   └────────┘   └────────┘└────────┘└────────┘
        │        │             │             │        │        │
        └────────┴──────┬──────┴──────┬──────┴────────┴────────┘
                       │             │
                       ▼             ▼
              ┌─────────────────┐ ┌─────────────────┐
              │  LOCAL WEB UI   │ │  OLED UI / MENU │
              │   :80 (dash)    │ │  128x64 status  │
              │  :81 / :8443    │ │                 │
              │   (walkie)      │ │                 │
              └─────────────────┘ └─────────────────┘
```

</div>

---

## Hardware

| Component           | Notes                                            |
| ------------------- | ------------------------------------------------ |
| **ESP32-S3 DevKit** | 16 MB flash, QIO OPI PSRAM recommended           |
| **SSD1306 OLED**    | 128×64 I²C — `0x3C` or `0x3D` at SDA 8 / SCL 9   |
| **3 push buttons**  | UP 4 · SEL 5 · BACK 7 — active low, `INPUT_PULLUP` |
| **Buzzer**          | GPIO 3 (optional)                                |
| **IR LED**          | GPIO 13                                          |
| **NRF24L01+**       | SCK 12 · MISO 18 · MOSI 11 · CSN 10 · CE 15      |
| **WS2812 LED**      | GPIO 48 on many S3 devkits                       |

### Pin map (v9.21.0)

```text
                  ┌───────────────────────┐
                  │       ESP32-S3        │
                  └───────────────────────┘
   OLED SDA  ─────── GPIO 8
   OLED SCL  ─────── GPIO 9
   BTN  UP   ─────── GPIO 4   (active low)
   BTN  SEL  ─────── GPIO 5   (active low)
   BTN  BACK ─────── GPIO 7   (active low)
   BUZZER    ─────── GPIO 3
   IR  LED   ─────── GPIO 13
   RGB  LED  ─────── GPIO 48
   NRF SCK   ─────── GPIO 17
   NRF MISO  ─────── GPIO 18
   NRF MOSI  ─────── GPIO 11
   NRF CSN   ─────── GPIO 10
   NRF CE    ─────── GPIO 15
   3V3 / GND ─────── NRF24 + OLED + IR driver
```

> ⚠️ Use a **100 µF** capacitor across the NRF24 VCC/GND — the module browns out on TX otherwise.

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

Join the device's AP (`immortal` / `admin1234`) and open `http://192.168.4.1` in a browser.

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
> starting IR backend......... OK
> starting NRF24 chat......... OK
> starting walkie servers..... OK
> loading modules............. OK

          IMMORTAL-S3
        SYSTEM ONLINE
```

</div>

---

## Walkie Talkie

Two IMMORTAL-S3 units can talk to each other over NRF24:

* **Channel** 90, 2 Mbps, µ-law 8 kHz, 20 ms frames
* **HTTPS** on `:8443` (Safari/iPhone needs HTTPS for mic access)
* **HTTP** on `:81` (Chrome desktop with insecure-origin flag)
* Push-to-talk, live link-quality estimate, distance readout, drop counters

Open the walkie page from the dashboard or navigate directly:

```
https://192.168.4.1:8443/walkie   (Safari / iOS)
http://192.168.4.1:81/walkie      (Chrome with flag)
```

The first HTTPS visit will warn about the self-signed EC P-256 certificate — accept it once.

---

## Ghost Chat

Two units can exchange text messages over NRF24 without any WiFi:

* Role **A** or **B** — set from the OLED, dashboard, or `chat_role.txt`
* Reply-to, reactions (`+1`, `+haha`, `+heart`, `+!`), delivered ticks
* Peer typing indicator, unread badge, in-device log
* 28-character messages (fits in one 32-byte RF24 packet)

---

## Project structure

```text
src/
├── ESP32S3_AdvancedPentester.ino
├── LocalUI.h
├── Dashboard.h
├── NRF24.h
├── NRF24Chat.h
├── IRRemote.h
├── IRRemoteOld.h          (kept for reference)
├── WalkieTalkie.h
├── WalkiePage.h
├── Portals.h
├── Payloads.h
└── GeminiConfig.h
platformio.ini
```

<details>
<summary><b>▸ Module map</b></summary>

<br>

| Module                | Purpose                                                    |
| --------------------- | ---------------------------------------------------------- |
| `LocalUI.h`           | OLED interface, menus, games, pet, themes, lock screen     |
| `Dashboard.h`         | Local web dashboard (HTML/CSS/JS in PROGMEM)               |
| `NRF24.h`             | NRF24L01+ driver — scan, channel jam, BLE channel jam      |
| `NRF24Chat.h`         | Ghost-to-Ghost text chat protocol over NRF24               |
| `WalkieTalkie.h`      | PTT voice engine + HTTPS/HTTP servers on 8443 / 81         |
| `WalkiePage.h`        | Walkie web UI (WebSocket audio + PTT)                      |
| `IRRemote.h`          | IR TV/AC/Fan/Projector/Audio + TV-B-Gone                   |
| `Portals.h`           | Captive portal HTML (firmware, Amazon, Facebook, G, iCloud)|
| `Payloads.h`          | BadUSB payload tables, PCAP global header                  |
| `GeminiConfig.h`      | AI model name and runtime key loader                       |

</details>

---

## Roadmap

* [x] OLED UI with custom themes (main / lock / chat)
* [x] Web dashboard with live mirror
* [x] Runtime Gemini API key
* [x] Multi-turn AI history
* [x] Full-brand IR (TV + AC + TV-B-Gone)
* [x] Walkie Talkie over NRF24
* [x] Ghost-to-Ghost chat
* [x] Multi-Deauth (up to 8 targets)
* [x] Combo mode (Deauth + Evil Portal)
* [x] Capture-only mode
* [x] Tamagotchi pet
* [ ] OTA firmware updates
* [ ] SD card support
* [ ] 5 GHz support where hardware permits
* [ ] WebSocket OLED stream
* [ ] NFC / RFID (PN532) support
* [ ] Sub-GHz (CC1101) support

---

<div align="center">

### `ROADMAP STATUS`

```text
OLED UI                 ████████████████████  DONE
WEB DASHBOARD           ████████████████████  DONE
AI INTEGRATION          ████████████████████  DONE
FULL-BRAND IR           ████████████████████  DONE
NRF24 WALKIE / CHAT     ████████████████████  DONE
MULTI-DEAUTH            ████████████████████  DONE
OTA UPDATES             ███████░░░░░░░░░░░░  NEXT
SD CARD                 ████░░░░░░░░░░░░░░░░  PLANNED
NFC / RFID              ███░░░░░░░░░░░░░░░░░  PLANNED
WEBSOCKET OLED STREAM   █████░░░░░░░░░░░░░░░  PLANNED
```

</div>

---

## FAQ

**Does it work on ESP32 non-S3?**
No. The firmware is designed for ESP32-S3 hardware (native USB, PSRAM, and the newer WiFi stack).

**Where is the source code?**
This repository package is for a closed-source project. Prebuilt binaries are distributed through the web flasher.

**Why does my board not appear in the flasher?**
Use a USB data cable and a Chromium-based browser. Try download mode / BOOT if necessary.

**Walkie talkie says "unreachable".**
Use HTTPS (`:8443`) on iOS / Safari. For Chrome desktop, add `http://192.168.4.1:81` to `chrome://flags/#unsafely-treat-insecure-origin-as-secure`.

**Chat shows "noRF".**
The NRF24L01+ module isn't detected. Check wiring, add the 100 µF cap, and reboot.

**IR codes aren't firing.**
The IR LED needs a driver (NPN transistor recommended). Bare GPIO drive works only at close range.

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
