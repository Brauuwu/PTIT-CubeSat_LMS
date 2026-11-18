# ESP32-CAM slave (AI Thinker)

Based on https://github.com/PTITCube/CAM_Firmware. This is a separate firmware for the camera board, not the OBC Lab7 sketch. Pins match AI Thinker ESP32-CAM only.

Build: `python -m platformio run -d app/firmware/camera-slave` from fastapi-backend. Upload to the camera's confirmed USB-UART port with `python -m platformio run -d app/firmware/camera-slave -t upload --upload-port COMx`. Do not select the OBC port. Use the camera board's documented BOOT/reset procedure.

The pinned Arduino-ESP32 framework supplies the compatible camera driver; no second Git camera driver is installed. With detected PSRAM it uses VGA/PSRAM, otherwise QVGA/DRAM. Initialization errors remain visible on later CAPTURE requests, instead of calling frame acquisition after failed initialization. UART0 (GPIO 1/3) is only for flashing and PC debug logs. The OBC protocol runs on UART2 at 115200 (camera TX GPIO 14 → OBC RX, camera RX GPIO 15 ← OBC TX), as confirmed by the hardware team on 2026-11-17 and matching upstream CAM_Firmware: CAPTURE → SIZE → OK → JPEG → DONE. `p`/`P` is accepted as the capture command too, because the PTITCube library v1.1.0 (`PTIT_Camera`) uses `p`. STATUS additionally returns camera readiness, init result, PSRAM presence and heap. JPEG length and SOI/EOI markers are checked before transmission.

This does not repair missing power, incorrect board pinout or a disconnected image sensor. ERROR:CAPTURE means frame acquisition returned null; ERROR:CAMERA_INIT includes the actual initialization code. Build success alone does not confirm the camera can capture an image.
