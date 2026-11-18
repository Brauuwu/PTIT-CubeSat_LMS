// Top-level stacks are placed by the C++ import / saved projects before they have been rendered, so
// their real heights are unknown. Once rendered, move overlapping stacks apart without touching
// layouts that already do not overlap (the student's own arrangement is kept).
const GAP = 40;
const MARGIN = 30;

const boxOf = block => {
  const { x, y } = block.getRelativeToSurfaceXY();
  const { width, height } = block.getHeightWidth();
  return { block, x, y, width, height };
};
const overlaps = (a, b) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

/** @returns {boolean} true when blocks were moved. */
export function separateOverlappingStacks(workspace) {
  const boxes = workspace.getTopBlocks(false).map(boxOf);
  // Hidden (display: none) workspaces measure 0x0; wait until they are visible.
  if (boxes.length < 2 || boxes.every(box => box.height === 0)) return false;
  if (!boxes.some((a, i) => boxes.slice(i + 1).some(b => overlaps(a, b)))) return false;
  boxes.sort((a, b) => a.y - b.y || a.x - b.x);
  let y = Math.min(MARGIN, boxes[0].y);
  for (const box of boxes) {
    box.block.moveBy(MARGIN - box.x, y - box.y);
    y += box.height + GAP;
  }
  return true;
}
