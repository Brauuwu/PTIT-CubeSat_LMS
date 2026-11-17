"""Development server with compiler output excluded from reload watching."""

from pathlib import Path

import uvicorn

if __name__ == "__main__":
    root = Path(__file__).resolve().parent
    build_cache = root / "build_cache"
    # Uvicorn only treats an absolute exclude as a directory when it exists;
    # otherwise it globs it, which Python 3.12+ rejects for absolute patterns.
    build_cache.mkdir(exist_ok=True)
    # This Uvicorn version compares excluded directories with absolute paths.
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8005,
        reload=True,
        reload_dirs=[str(root / "app")],
        reload_excludes=[str(build_cache)],
    )
