# Thử nghiệm: tùy chỉnh gói trước checkout

## Hai bản để so sánh

- `index.html`: bản mới — landing → tùy chỉnh gói → checkout một trang → kết quả.
- `classic.html`: giữ bản trước — landing → liên hệ/địa chỉ → kỳ cước/thiết bị/thanh toán → kết quả.

Hai bản dùng cùng catalog, chiến dịch và chính sách mẫu. Bản mới không thay đổi các điều kiện kiểm tra địa chỉ, giá, voucher và thanh toán trong BA-SPEC.

## Phân chia công việc theo ý định của khách

| Chặng | Quyết định / thao tác | Thông tin không phải nhập lại |
|---|---|---|
| Landing | So sánh bộ gói; có thể xem giá theo kỳ và đổi khu vực | Nguồn campaign/sales |
| Tùy chỉnh gói | Xác nhận gói, chọn trả sau/3/6/12 tháng, thiết bị tùy chọn; đổi khu vực/loại nhà nếu cần | Gói và kỳ đã chọn trên landing |
| Checkout một trang | Họ tên, SĐT, số nhà/tên đường hoặc căn hộ; consent; chọn phương thức và xác nhận tiền | Gói, kỳ cước, thiết bị, tỉnh/phường và loại nhà |
| Kết quả | Xác nhận đăng ký/thanh toán và bước tiếp theo | Cùng mã đơn nháp khi thử lại |

Không bắt khách chọn gói hoặc kỳ lần nữa trong checkout. “Sửa cấu hình” quay về màn tùy chỉnh và giữ thông tin đã nhập. Ghi chú được thu gọn, thiết bị thêm không bắt buộc. Phương thức thanh toán dùng một dropdown gọn.

## Các điểm cần giữ khi đánh giá UX

- Tùy chỉnh giải quyết câu hỏi **mua gì, trả theo kỳ nào**. Checkout giải quyết **ai đăng ký, lắp ở đâu, xác nhận bao nhiêu tiền**.
- Không tuyên bố giảm tổng số chặng: hai quyết định vẫn tồn tại, chỉ chuyển phần chọn dịch vụ ra trước form nhập thông tin.
- Với khách đã được sales tư vấn sẵn, màn tùy chỉnh có thể là thêm một chặng. Sau khi review mới quyết định có cho link gửi riêng bỏ qua màn này không; bản thử chưa tạo thêm cấu hình quản trị đó.
- Khu vực chỉ xác định báo giá dự kiến, không thay cho địa chỉ chi tiết hoặc xác nhận vùng phủ.
- Chỉ ba trường chính cho nhà riêng khi khu vực/loại nhà đã có sẵn. Chung cư vẫn cần thông tin tòa/căn hộ phù hợp; không bỏ các trường cần thiết cho lắp đặt.
- Trả sau vẫn có thể có phí lắp đặt cần thu. Không tự bỏ bước xác nhận thanh toán theo tên kỳ cước.
- Mã ưu đãi được kiểm tra sau địa chỉ. Nếu khách bấm thanh toán trước khi có quote và số tiền thay đổi sau kiểm tra, bản thử hiện tổng mới và yêu cầu bấm xác nhận lại, không tự giao dịch bằng giá chưa xem.
- Thanh toán lỗi giữ đơn; pending chặn tạo giao dịch mới; đơn 0đ xác nhận trực tiếp. Không có tiền thật được thu.
- Mobile có thanh tổng tiền và nút thanh toán cố định ở đáy, chỉ hiện tại bước `payment`. Thanh dùng cùng trạng thái/tổng tiền với summary, khóa khi kiểm tra hoặc tính lại, ẩn ở builder/màn chờ/kết quả. Hai thanh cố định đều có safe-area trái, phải và dưới; trang chừa khoảng cuộn để không che phần cuối.

## Kiểm thử

`node verify-outside.cjs` kiểm tra 1440px, 768px, 375px: cấu hình ngoài checkout, truyền lựa chọn, không còn control kỳ/thiết bị trong checkout, validation, giữ dữ liệu khi sửa cấu hình, đổi địa chỉ, tính lại theo phương thức, thanh toán lỗi/pending/thành công và lỗi kiểm tra địa chỉ.

Ảnh `qa/outside-builder-*`, `qa/outside-checkout-*`, `qa/outside-success-*`; kết quả `qa/outside-results.txt`. Script `verify.cjs` tiếp tục kiểm tra bản đối chiếu `classic.html`.
