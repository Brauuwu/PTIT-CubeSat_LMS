// Icon PNG của từng Lab: thư mục "Lab Icon" = đang chọn, "Lab Icon_Inactive" = chưa chọn.
// Số Lab lấy từ tên file ("Lab 2_Icon.png", "Lab 2_Icon (1).png" đều là Lab 2).
const collect = modules => {
  const icons = {};
  for (const [path, url] of Object.entries(modules)) {
    const match = path.match(/Lab (\d+)_Icon/);
    if (match) icons[Number(match[1])] = url;
  }
  return icons;
};

const activeIcons = collect(import.meta.glob('../../assets/Lab Icon/*.png', { eager: true, query: '?url', import: 'default' }));
const inactiveIcons = collect(import.meta.glob('../../assets/Lab Icon_Inactive/*.png', { eager: true, query: '?url', import: 'default' }));

export const labIconUrl = (labId, active) => (active ? activeIcons[labId] : inactiveIcons[labId]) || activeIcons[labId] || inactiveIcons[labId] || null;
