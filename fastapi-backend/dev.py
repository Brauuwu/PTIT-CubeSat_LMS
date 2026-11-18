"""Development server with compiler output excluded from reload watching."""

import os
from pathlib import Path

import uvicorn

if __name__ == "__main__":
    root = Path(__file__).resolve().parent
    # This Uvicorn version compares excluded directories with absolute paths. It globs any
    # exclude that is not an existing directory, and an absolute glob raises on Python 3.12+,
    # so the directory must exist before the first compile creates it.
    (root / "build_cache").mkdir(exist_ok=True)
    uvicorn.run(
        "app.main:app",
        # Local only by default; set BACKEND_HOST=0.0.0.0 to expose the dev API on the LAN on purpose.
        host=os.environ.get("BACKEND_HOST", "127.0.0.1"),
        port=8005,
        reload=True,
        reload_dirs=[str(root / "app")],
        reload_excludes=[str(build_cache)],
    )
