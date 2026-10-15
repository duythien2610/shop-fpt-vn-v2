# Prototype AM v3

Mở `index.html` bằng trình duyệt. Toàn bộ nội dung, phông chữ, banner và ảnh quảng bá nằm trong folder này; không cần cài đặt để xem.

**Bản mặc định:** chọn gói → thông tin và địa chỉ → kỳ cước và thanh toán. Tạo mã đơn mẫu sau thông tin hợp lệ và kiểm tra địa chỉ; giữ cùng mã khi sửa và thử lại. `outside.html` lưu bản thử nghiệm tùy chỉnh ngoài checkout. Không kết nối API thật.

## Những gì có thể thử

- Chọn khu vực, lọc 3 Internet / 3 Combo, đổi kỳ trả sau hoặc trả trước 3/6/12 tháng.
- Chọn gói để vào checkout 2 bước; dữ liệu gói, kỳ và khu vực được truyền sẵn.
- Nhập liên hệ, consent, địa chỉ; thử đổi khu vực, loại nhà và xác nhận giá thay đổi.
- Sửa gói/kỳ; chọn thiết bị hợp lệ; thử voucher và phương thức; xem tổng tiền cập nhật.
- Nút Duyệt nghiệp vụ ở footer cho phép chọn kịch bản địa chỉ, thay đổi giá hoặc đơn 0đ.
- Nút Thanh toán mở màn mô phỏng với lựa chọn thành công, thất bại, chưa rõ kết quả. Không có cổng thanh toán thật.
- FAQ và form tư vấn cuối trang có thể thao tác. Form chỉ ghi nhận trong bộ nhớ của phiên xem.

## Cấu hình và tài liệu

- `campaign.js`: chiến dịch, sales, khu vực, thứ tự/bật–tắt nhóm gói, banner, ba thẻ quảng bá, FAQ và thông tin liên hệ.
- `offers.js`: sáu gói mẫu. `commerce.js`: bảng giá khu vực, kỳ, thiết bị, voucher, phương thức mẫu.
- `BA-SPEC.md`: quy tắc, ma trận cấu hình, tiêu chí nghiệm thu và câu hỏi PO.
- `ASSET-SOURCES.md`: nguồn banner/ảnh và phông chữ.
- `qa/`: ảnh desktop 1440px, tablet 768px, mobile 375px, cùng kết quả kiểm thử.

## Giới hạn

Không gọi API, không sử dụng localStorage hoặc cookie để lưu thông tin khách, không tạo lead/đơn/giao dịch thật. Refresh trang bắt đầu lại phiên mẫu. Giá, chính sách miễn phí lắp đặt, voucher và tương thích thiết bị là giả định để review UX, không phải bảng giá AM được duyệt.

## Kiểm thử

`node verify.cjs` kiểm tra bản đối chiếu; `node verify-outside.cjs` kiểm tra luồng tùy chỉnh ngoài checkout. Các script chạy trên Chrome với Playwright có sẵn trong môi trường làm việc hiện tại, tạo máy chủ chỉ lắng nghe trên localhost, dùng thông tin giả, lưu ảnh/kết quả vào `qa/` và tự đóng trình duyệt/máy chủ. Muốn dùng ở máy khác cần điều chỉnh đường dẫn Playwright ở đầu script.
