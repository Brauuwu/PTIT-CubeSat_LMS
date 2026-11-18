# Local PTITCube compatibility fixes

Base: PTITCube/PTITCube-Library v1.1.0, commit `57cf1c32c166a28a8bf6bdde215270288b750d67` (previously `218d2b6`, rebased 2026-11-17).
`prepare.py` overlays these directories onto the installed library's `src/` before compiling trusted dependencies. They are not edits to submitted sketches or changes published upstream.

- Sensor: gate configuration and reads on successful initialization; disabled/unavailable readings are NaN. Add MPU6500 WHO_AM_I 0x70 support with checked register reads/writes, 8g and 500 degrees/s ranges. Public units remain Celsius, hPa, m/s², rad/s and Gauss. MPU6050 keeps its Adafruit driver. MPU9250 is not supported by this patch.
- GPS: aliases for curriculum API names and a location freshness check (5 seconds).
- Scheduler: dedicated UART2 mutex index 4; increase mutex array count to 5. This does not make arbitrary task code thread-safe.

- Camera v5: validate SIZE, cap transfer duration/length, check SD write counts and JPEG SOI/EOI, write temporary files and report failures honestly. `isReady()` still means SD readiness, not proof of a working image sensor.
- GPS v5: share the existing Serial2 instance with Camera instead of constructing a second HardwareSerial for the same peripheral. Callers must still serialize UART2 access and handle MUX/baud transitions.

- v6 Sensor: maximum 50 Hz sampling, BMP280 10 Hz, cached QMC 2G scale, checked MPU register read with STOP, per-device failure counters. No global suppression of I2C error logging.
- v6 Camera: change baud only when needed, preserving the UART instance; feed a registered task watchdog during bounded long image transfers.
- v6 Storage: report successful writes only when all requested bytes were written.
- v6 CDH: bound WiFi connection/config portal setup; proceed offline after timeout.
- v7 (library v1.1.0 rebase): upstream EPS (MAX17048 fuel gauge over I2C) and Stream-based `PTIT_CDH` are used unmodified except that `PTIT_CDH` wraps the board's console type (HardwareSerial on ESP32, HWCDC on ESP32-S3); upstream hard-codes `HardwareSerial&` and fails to compile on S3. CDH keeps the bounded WiFi/config-portal timeouts.
- v7 Camera/GPS: the capture command is `p` (PTITCube CAM_Firmware: `p` -> `SIZE:<n>` -> `OK` -> JPEG -> `DONE`). MUX switching is Break-Before-Make and UART2 is handed back to GPS after every capture. Both classes keep one shared `Serial2` instance and change baud with `updateBaudRate`. Without a MUX (pins 255) UART2 stays at the camera baud; upstream left it at 9600 so direct-wired captures always timed out. `hasFix()` also requires a fix younger than 5 seconds. Upstream removed `selectDevice()`/`Uart2Device`.
- v6 Scheduler: add a separate MQTT mutex. The corrected RTOS example uses atomic pause state, sensor/ADC snapshots, UART/SPI locks for capture, MQTT serialization, valid JSON for missing data and batched SD writes. Other user sketches must use their own appropriate synchronization.

The build configuration revision must change whenever these patches change so an outdated compiler image cannot return an accepted artifact. Current revision: v7. Rebuild from `fastapi-backend` with `docker build -f compiler/Dockerfile -t pscubesat-compiler:1 .`.

Hardware verification and limits: `Docs/CURRICULUM_SERIAL_AUDIT_2026-10-15.md` at repository root. Sensor wiring currently uses ESP32 GPIO21/22; do not infer S3 pin compatibility from compilation alone. Corrected curriculum sketches are in `app/firmware/curriculum/` and must be selected explicitly; the compiler never silently rewrites user source.
