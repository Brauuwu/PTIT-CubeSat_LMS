_PIO_INI: dict[str, str] = {
    "esp32s3": """\
[platformio]
default_envs = esp32s3

[env:esp32s3]
platform = espressif32@6.10.0
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
extra_scripts = post:export_flash_manifest.py
build_flags =
\t-DARDUINO_USB_CDC_ON_BOOT=1
\t-DARDUINO_USB_MODE=1
lib_deps =
\thttps://github.com/PTITCube/PTITCube-Library.git#57cf1c32c166a28a8bf6bdde215270288b750d67
""",
    "esp32": """\
[platformio]
default_envs = esp32

[env:esp32]
platform = espressif32@6.10.0
board = esp32doit-devkit-v1
framework = arduino
monitor_speed = 115200
extra_scripts = post:export_flash_manifest.py
lib_deps =
\thttps://github.com/PTITCube/PTITCube-Library.git#57cf1c32c166a28a8bf6bdde215270288b750d67
""",
}

# Bump when compiler-side library fixes change, rejecting stale compiler images.
_PIO_INI = {
    board: ini
    + "\n; PTITCube sensor readiness + MPU6500 + GPS aliases + UART2 mutex + camera validation/shared UART patch + library v1.1.0 (camera p command, break-before-make) v7\n"
    for board, ini in _PIO_INI.items()
}
