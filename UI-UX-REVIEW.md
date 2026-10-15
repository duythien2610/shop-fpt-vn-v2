# Báo Cáo Rà Soát & Đánh Giá UI/UX — Prototype AM v3

- **Dự án**: FPT Telecom AM (Bản v3 - Chiến dịch Ngoại Hạng Anh / Combo Internet + Truyền hình)
- **Thư mục mã nguồn**: `C:\BA\ba-tool-kit\project\AM\vu-no-lon\prototype-am-v3`
- **Phiên bản thử nghiệm chính**: `index.html` (Luồng tùy chỉnh gói ngoài checkout - Concept 1, data-clean)
- **Phiên bản đối chiếu**: `classic.html` (Chọn kỳ trong checkout 2 bước)
- **Trạng thái kiểm thử kỹ thuật**: PASS 100% kịch bản Playwright (`verify-outside.cjs` & `verify.cjs`) trên cả 3 breakpoint (1440px, 768px, 375px).

---

## 1. Tổng Quan Kiến Trúc & Ngôn Ngữ Giao Diện

- **Stack kỹ thuật**: Vanilla HTML5, CSS3 hiện đại, Vanilla JavaScript; không dùng framework hay Tailwind CSS. Tối ưu nhẹ, chạy ngay trên trình duyệt mà không cần cài đặt.
- **Hệ thống Token & Style**:
  - Khai báo token tại `:root` trong [storefront.css](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/storefront.css).
  - Phong cách: **Flat Design**, viền mảnh (`1px`), card bo góc mềm (`8px - 16px`), nền trung tính (`#F5F6F8`), không lạm dụng shadow hay hiệu ứng đổ bóng nặng.
  - Phông chữ chuẩn: `Inter` nhúng nội bộ, fallback `Nunito` hỗ trợ tiếng Việt đầy đủ.
- **Chế độ màu**: Hỗ trợ Light Mode (chưa có Dark Mode hoàn chỉnh, chỉ có concept charcoal thử nghiệm ở concept 2).

---

## 2. Bảng Rà Soát Chi Tiết Các Điểm Cần Lưu Ý

Phân loại theo tiêu chuẩn:
- **Hỏng**: Lỗi chức năng, vỡ layout, tràn màn hình hoặc chặn thao tác người dùng.
- **Lệch hệ**: Không đồng nhất token, component hoặc CSS giữa các màn trong cùng một sản phẩm.
- **Gu (UX/Polish)**: Góp ý cải thiện trải nghiệm, tối ưu phân cấp thông tin và giảm ma sát người dùng.

| # | Hạng | Màn hình & Khổ | Vị trí / Đoạn mã | Hiện trạng | Đề xuất hướng xử lý |
|---|---|---|---|---|---|
| **01** | **Lệch hệ** | Builder (Tùy chỉnh gói)<br>`All sizes` | [builder.css:13](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/builder.css#L13) | Thẻ chọn kỳ cước dùng radio gốc kết hợp `accent-color: var(--primary)`. Trong khi màn Checkout ([checkout.css:3-5](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L3-L5)) dùng radio tùy biến `appearance: none`. **Cùng 1 sản phẩm nhưng 2 kiểu radio khác hẳn nhau.** | Áp dụng style `appearance: none` đồng nhất cho radio ở `builder.css` giống với `checkout.css`. |
| **02** | **Lệch hệ** | Checkout (Thanh toán)<br>`All sizes` | [clean.css:50](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/clean.css#L50)<br>vs [checkout.css:13](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L13) | `clean.css` đè màu dòng "Cần trả hôm nay" thành `color: var(--foreground)` (đen/xám), trong khi `checkout.css` gốc là `color: var(--primary)` (cam đậm nổi bật). Làm chìm tín hiệu số tiền quan trọng nhất. | Đổi lại về `color: var(--primary)` trong `clean.css` để đồng nhất và làm nổi bật CTA thanh toán. |
| **03** | **Lệch hệ** | Builder vs Checkout<br>`All sizes` | [builder.css:6](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/builder.css#L6)<br>vs [checkout.css:12](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L12) | Card builder dùng `border: 1px solid var(--border)` (`#EFF0F2` - rất nhạt), trong khi Checkout panel và Plan card lại dùng `var(--border-strong)` (`#DDE0E5`). | Thống nhất dùng token `var(--border-strong)` cho tất cả các card panel chứa nội dung chính. |
| **04** | **Lệch hệ** | Landing (Card gói)<br>`Mobile 375px` | [storefront.css:10](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/storefront.css#L10) (`.card-actions`) | Mỗi card có 2 CTA song song ("Chọn gói này" + "Chi tiết & quyền lợi"). Trên mobile, layout nút flex wrap không đồng đều giữa các card có độ dài tên khác nhau, làm lệch chân card. | Gom "Chi tiết & quyền lợi" thành dạng text link hoặc popup icon thu gọn, ưu tiên 1 CTA chính "Chọn gói này". |
| **05** | **Gu** | Builder (Sticky action)<br>`Mobile 375px` | [builder.css:26](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/builder.css#L26) | Thanh sticky bottom chỉ khai báo `safe-area-inset-bottom`, thiếu bù lề ngang `safe-area-inset-left/right` khi xoay ngang hoặc trên các thiết bị màn hình viền cong/tai thỏ. | Thêm `padding-inline: max(16px, env(safe-area-inset-left))` để an toàn trên mọi dòng smartphone. |
| **06** | **Gu** | Checkout (Thanh toán)<br>`Mobile 375px` | [checkout.css:26](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L26) (`.purchase-summary`) | Trên màn hình hẹp, Sidebar tóm tắt đơn hàng và tổng tiền bị rớt xuống tận đáy (sau form liên hệ & phương thức). Người dùng điền thông tin mà không nhìn thấy số tiền cần trả. | Cân nhắc bổ sung 1 thanh tóm tắt số tiền thu gọn cố định ở đáy màn hình (Bottom Floating Bar) tương tự như màn Builder. |
| **07** | **Gu** | Checkout (Tóm tắt chi phí)<br>`Desktop 1440px` | [checkout.js:79](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.js#L79)<br>[checkout.css:13](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L13) | Khối `<dl>` cước tháng và `<h3>Thông tin thanh toán</h3>` đặt quá sát nhau, thiếu khoảng cách phân cấp trên desktop, dễ khiến người xem thấy heading bị kẹp giữa bảng số liệu. | Tăng margin-top cho thẻ `<h3>` trong `.purchase-summary` và thêm vạch chia mờ (`divider`). |
| **08** | **Gu** | Landing (Đầu trang)<br>`Mobile 375px` | [v3.css:76](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/v3.css#L76) (`.header nav`) | Menu điều hướng (Gói cước, Ưu đãi, FAQ) bị `display: none` hoàn toàn trên mobile mà không có menu hamburger thay thế. | Giữ nguyên nếu định vị landing là trang chuyển đổi đơn mục tiêu (Sales Page), hoặc bổ sung hamburger menu nếu muốn khách tra cứu nhanh FAQ. |
| **09** | **Gu** | Checkout (Form địa chỉ)<br>`All sizes` | [checkout.css:12](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L12) | Ô "Số nhà, tên đường" để placeholder mẫu `123 Đường mẫu`. Màu placeholder khá rõ có thể khiến người dùng lớn tuổi nhầm là hệ thống đã tự điền sẵn. | Đổi placeholder thành `Ví dụ: Số 123 Đường Lê Lợi` hoặc để trống kèm helper text bên dưới. |
| **10** | **Gu** | Builder (Bảng kỳ cước)<br>`Tablet 768px` | [builder.css:24](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/builder.css#L24) | Ở khổ 768px, layout chia 2 cột (cột trái ~400px chia 2 ô kỳ cước) khiến nội dung "Cước & lắp đặt" và số tiền bị ép sát mép viền. | Giảm font số tiền hoặc chuyển sang hiển thị 1 cột thẻ kỳ cước từ breakpoint <= 820px. |
| **11** | **Gu** | Landing (Card EPL)<br>`Mobile 375px` | [v3.css:88](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/v3.css#L88) | Thẻ card EPL giữ chiều cao `min-height: 420px` trên mobile khiến trang kéo dài, người dùng phải cuộn nhiều màn hình mới tới khối FAQ và Form tư vấn. | Giảm chiều cao card EPL trên mobile xuống khoảng `340px - 360px`. |
| **12** | **Gu** | Checkout (Mã ưu đãi)<br>`All sizes` | [checkout.css:10](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/checkout.css#L10) | Thẻ `<details>` dùng `::before` dấu `+`/`−`. Một số trình duyệt Safari/WebKit có thể hiển thị tam giác mặc định (disclosure marker). | Thêm thuộc tính `summary::-webkit-details-marker { display: none; }` và `summary { list-style: none; }`. |

---

## 3. Điểm Mạnh Đã Đạt Chuẩn (Cần Giữ Nguyên)

1. **Kiến trúc luồng 2 chặng (Outside-checkout flow)**:
   - Tách bạch thông minh: Chặng 1 chốt "Mua gói gì, trả kỳ nào, thiết bị gì" $\to$ Chặng 2 chỉ hỏi "Lắp ở đâu, thanh toán thế nào". Giảm tải áp lực nhận thức cho khách hàng.
2. **Bảo toàn trạng thái dữ liệu (State Preservation)**:
   - Thao tác "Sửa cấu hình" quay lại builder vẫn giữ nguyên họ tên, số điện thoại, ghi chú đã nhập. Không bắt khách nhập lại từ đầu.
3. **Phản hồi nghiệp vụ linh hoạt (Business Feedback Loop)**:
   - Cơ chế chặn thanh toán khi địa chỉ thay đổi giá ([AM-05](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/BA-SPEC.md#L63)).
   - Hỗ trợ đơn hàng 0đ hoàn tất trực tiếp mà không cần mở cổng thanh toán giả lập ([AM-11](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/BA-SPEC.md#L69)).
   - Thanh toán lỗi giữ nguyên mã đơn và cho phép đổi phương thức ([AM-12](file:///C:/BA/ba-tool-kit/project/AM/vu-no-lon/prototype-am-v3/BA-SPEC.md#L70)).
4. **Trải nghiệm Mobile trên Builder**:
   - Thanh Fixed Bottom Action Bar tính toán tổng tiền realtime kèm nút "Tiếp tục đăng ký" giúp khách thao tác bằng một tay dễ dàng.
5. **Tiêu chuẩn Khả năng tiếp cận (Accessibility - a11y)**:
   - Tương phản màu chữ đạt chuẩn WCAG AA.
   - Thao tác bàn phím (Tab, Enter) trên toàn bộ Accordion FAQ và các Form control đều hoạt động mượt mà.

---

## 4. Ma Trận Ưu Tiên Xử Lý Kỹ Thuật

```mermaid
quadrantChart
    title Ma trận ưu tiên hoàn thiện Prototype v3
    x-axis Độ phức tạp kỹ thuật: Thấp --> Cao
    y-axis Mức độ ảnh hưởng UX: Thấp --> Cao
    quadrant-1 Triển khai ngay (Quick Wins)
    quadrant-2 Kế hoạch vòng sau
    quadrant-3 Cân nhắc / Polish
    quadrant-4 Tạm hoãn
    "Đồng bộ Radio Builder": [0.2, 0.85]
    "Màu Cần trả hôm nay": [0.15, 0.8]
    "Đồng bộ Token viền": [0.18, 0.75]
    "Safe-area-inset Mobile": [0.25, 0.55]
    "Sticky Summary Mobile Checkout": [0.75, 0.82]
    "Gom nút CTA Card gói": [0.35, 0.6]
    "Spacer Header Summary": [0.2, 0.45]
    "Placeholder rõ ràng": [0.15, 0.4]
```

- **Mức 1 (Khẩn cấp - Sửa ngay)**: Mục 1, 2, 3 (Xử lý các lỗi Lệch hệ về radio, màu sắc và token viền).
- **Mức 2 (Quan trọng)**: Mục 5, 6 (Tối ưu trải nghiệm thanh toán trên thiết bị di động).
- **Mức 3 (Hoàn thiện)**: Các mục còn lại (Tinh chỉnh khoảng cách thị giác và placeholder).

---

## 5. Hướng Dẫn Thực Thi Nhanh (Execution Prompt)

Đã đóng gói mã lệnh/prompt chuẩn để chuyển giao cho kỹ sư FE hoặc agent code xử lý trực tiếp:

```markdown
Thực hiện chỉnh sửa CSS cho prototype tại C:\BA\ba-tool-kit\project\AM\vu-no-lon\prototype-am-v3:

1. Đồng bộ Radio Button (builder.css):
   - Tại `builder.css:13`, thay style của `.builder input[type="radio"]` sang:
     `appearance: none; width: 18px; height: 18px; border: 1.5px solid var(--border-strong); background: var(--surface); border-radius: 50%; flex-shrink: 0; transition: border-color .2s;`
   - Bổ sung khi được chọn:
     `.builder input[type="radio"]:checked { border: 5px solid var(--primary); }`

2. Đồng bộ màu tổng tiền (clean.css):
   - Tại `clean.css:50`, đổi `color: var(--foreground)` thành `color: var(--primary)`.

3. Đồng bộ token viền panel (builder.css):
   - Tại `builder.css:6`, đổi `border: 1px solid var(--border)` thành `border: 1px solid var(--border-strong)`.

4. Bổ sung Safe-Area Inset (builder.css):
   - Tại `builder.css:26` (`.builder-mobile-action`), đổi padding thành:
     `padding: 12px max(16px, env(safe-area-inset-right)) calc(12px + env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));`

Sau khi hoàn tất, chạy lệnh: `node verify-outside.cjs` để đảm bảo 100% test case pass.
```
