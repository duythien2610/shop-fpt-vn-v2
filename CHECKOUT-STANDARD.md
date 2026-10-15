# Checkout AM theo luồng Selfservice

Bản mặc định: index.html. Bản thử nghiệm cũ: outside.html.

1. Chọn gói trên landing; không chọn kỳ cước hoặc thiết bị tại đây.
2. Nhập liên hệ, consent và địa chỉ; khu vực từ link được kế thừa và được sửa. Kiểm tra địa chỉ, chặn khi không áp dụng hoặc yêu cầu xác nhận giá đổi. Sau thao tác Tiếp tục hợp lệ, tạo mã đơn mẫu. Không tự ghi nhận lead khi chỉ gõ thông tin.
3. Chọn kỳ cước, thiết bị hợp lệ, ưu đãi và phương thức. Giữ mã đơn khi cập nhật và thử lại; khóa thanh toán khi tính lại, chặn giao dịch mới khi chưa rõ kết quả.
4. Hoàn tất đăng ký khác hoàn tất lắp đặt. Không có nhánh gửi thanh toán sau khi lỗi nếu chưa được PO chốt.

Mô phỏng order/create và order/update-detail từ sơ đồ người dùng cung cấp; không gọi API thật. Trạng thái configured là tên mẫu, không khẳng định trạng thái backend. Thời điểm kiểm tra hạ tầng, lưu lead, API lấy policy và phân công sales vẫn cần xác nhận. Giá và chính sách là dữ liệu minh họa.

Kiểm thử: verify-standard.cjs kiểm tra luồng mặc định ở 1440/768/375px, mã đơn trước thanh toán, đổi kỳ, sửa thông tin, thử lại, pending và thành công. verify-local.cjs kiểm tra các nhánh dùng chung, địa chỉ lỗi/không áp dụng/đổi giá, thiết bị, voucher, đơn 0đ và form tư vấn.
