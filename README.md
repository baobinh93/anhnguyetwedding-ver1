# Ánh Nguyệt — React / Tailwind / TypeScript

Chuyển từ 2 bản thiết kế HTML desktop + mobile thành cấu trúc React/Vite.

## Chạy project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

## Kiến trúc

- `src/design/desktop.html`: bản thiết kế laptop/desktop gốc.
- `src/design/mobile.html`: bản thiết kế mobile gốc.
- `src/components/DesignPage.tsx`: chọn layout theo breakpoint.
- `src/components/MenuBuilder.tsx`: phần thực đơn tương tác bằng React.
- `src/data/menu.mock.ts`: database giả hiện tại.
- `src/services/menuService.ts`: lớp truy cập dữ liệu — sau này đổi sang Google Sheets tại đây.
- `src/types/menu.ts`: TypeScript model cho món ăn.

## Kết nối Google Sheet sau này

Chỉ cần thay implementation của `getMenuItems()` trong `src/services/menuService.ts` bằng `fetch()` tới Google Apps Script Web App / API của Google Sheet. UI `MenuBuilder` không cần thay đổi.
