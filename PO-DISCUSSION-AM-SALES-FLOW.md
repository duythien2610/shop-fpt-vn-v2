# AM shop — Phương án tinh gọn và câu hỏi chốt nghiệp vụ với PO

Ngày phân tích: 13/10/2026. Trạng thái: đề xuất BA, chưa phải quyết định PO. Không thay đổi prototype trong lượt phân tích này.

## 1. Nguồn và giới hạn áp dụng

- **FPTVN PRD**: `input/ISC_FPTVN_v2.1_PRD_Check out InternetOnly+ComboNetTH_Standard_v1.0.docx.md`, mục 5.2, FR01/FR02 và US01/US05–US10. Luồng nền: chọn gói → thông tin/địa chỉ → kiểm tra policy → cấu hình đơn/thanh toán → thanh toán thành công và tạo đơn → hoàn tất đăng ký.
- **Partner SPEC**: `input/FTEL Partner Affiliate — Đặc tả tính năng v1.0 (Copy).md`, BR-01/02/03/07/22, ENT-ORDER, mục 7.3 và Q-22/Q-30/Q-31/Q-66. Đây là đặc tả chương trình affiliate, chưa tự động trở thành quy tắc bán hàng/điều phối của AM shop.
- **TO-BE cũ**: `input/Flow TO-BE checkout link AM (shop.fpt.vn).md` là đề xuất trước đây. Lưu lead sớm, tạo đơn nháp trước thanh toán, thanh toán sau đều cần đối chiếu lại với yêu cầu mới của PM và PO.

Chưa coi sales nội bộ là publisher cá nhân, chưa coi campaign cấu hình gian hàng AM là cùng thực thể campaign thông báo trong Partner SPEC, chưa áp chính sách hoa hồng Partner cho AM khi PO chưa xác nhận.

## 2. Ba phương án UI/UX giữ luồng fpt.vn

Luồng chung: **Landing/chọn gói → Liên hệ & địa chỉ → Cấu hình đơn & thanh toán → Hoàn tất đăng ký**. “Hoàn tất đăng ký” trên web khác “Hoàn tất lắp đặt/online” trong vòng đời vận hành.

| Phương án | Điều chỉnh so với fpt.vn | Kỳ cước / thiết bị | Ảnh hưởng tích hợp | Đánh giá |
|---|---|---|---|---|
| A — Điền sẵn theo link | Sales cấu hình khu vực thì điền sẵn, khách bổ sung số nhà/căn hộ. Link không có khu vực thì cho chọn trên landing hoặc nhập ở form. Gói và sales đi theo link. | Chọn trong màn thanh toán như PRD. | Ưu tiên giữ thứ tự gọi policy/quote hiện hữu; vẫn cần xác nhận dữ liệu nguồn từ link. | Ít thay đổi nhất, phù hợp khi PM ưu tiên bám flow. |
| B — Điền sẵn + màn thanh toán gọn | Như A; nhấn tổng trả hôm nay, tách cước tháng; thu gọn thiết bị/voucher; sửa gói bằng hành động riêng, không ép chọn lại. Mobile có thanh tiền/nút chính cố định. | Kỳ trả sau/3/6/12 hiển thị đầy đủ trong checkout; phụ thuộc policy. | Giữ điểm kiểm tra địa chỉ và tính lại đơn; không hứa không đổi API vì contract chưa kiểm chứng. | **Khuyến nghị**: khác biệt rõ ở trải nghiệm mà không thêm màn builder hoặc đảo nghiệp vụ. |
| C — Xem trước theo kỳ trên landing | Như B, thêm lựa chọn xem giá theo trả sau/3/6/12 trên thẻ gói. Khách không bắt buộc thao tác. | Giữ kỳ quan tâm sang checkout, xác nhận lại theo policy. Thiết bị vẫn chọn sau địa chỉ. | Chỉ thực hiện nếu có dữ liệu giá/biến thể trước địa chỉ; nếu chưa có thì hiện giá từ/tham khảo. | Khác biệt nhiều hơn nhưng cần kiểm chứng dữ liệu và xử lý kỳ không áp dụng. |

**Không khuyến nghị làm màn tùy chỉnh riêng thành luồng mặc định ở giai đoạn này.** Nó thêm chặng trước form, có thể yêu cầu chọn chính sách trước khi đủ dữ liệu địa chỉ, khó giải thích là chỉ tinh gọn nhẹ theo PRD. Bản thử hiện tại có thể giữ để so sánh; chỉ chỉnh mặc định khi người dùng chọn phương án.

### Hai loại link cần hỗ trợ

1. **Có khu vực từ sales**: hiển thị khu vực đang áp dụng → điền sẵn form → khách xác nhận hoặc đổi. Khu vực không phải địa chỉ lắp đặt đã kiểm tra. Nếu sales cung cấp cả địa chỉ chi tiết, cần phân biệt trường nào đã xác thực và trường nào chỉ là thông tin gợi ý.
2. **Chưa có khu vực**: không tự gán Quận 7/HCM hoặc địa chỉ mẫu cho khách. Giá “từ” hoặc giá tham khảo; cho chọn vị trí chủ động, không tự yêu cầu GPS. Dữ liệu chọn được giữ sang form, vẫn kiểm tra policy theo địa chỉ chi tiết.

Thay khu vực không tự thay nguồn giới thiệu, người xử lý hoặc giá cuối cùng một cách ngầm định. Ba quy tắc đó phải chốt riêng.

## 3. Những gì tài liệu đã có và chưa có

| Chủ đề | Bằng chứng trong tài liệu | Khoảng trống cho AM shop |
|---|---|---|
| Lead | Partner thuật ngữ và BR-22: khách để lại liên hệ qua link publisher, chưa thành đơn; có chỉ số click→lead. BR-03 có loại lead chuyển đổi thành công, mức tiền minh họa. | Chưa nêu bộ trường tối thiểu, thời điểm tạo, API/hệ thống nhận, owner, SLA hay chống trùng lead. |
| Địa chỉ không có vùng phủ | FPTVN S-03, AC-01.2.01, BR01-08: giữ dữ liệu, chặn tiếp tục và đẩy KHTN; mục tích hợp có Omnisell. | Chưa đủ bằng chứng để kết luận mọi lead đều vào Omnisell hoặc được chia cho TPKD. |
| Đơn sau thanh toán | FPTVN S-07: giao dịch thành công → tạo đơn và sinh mã đơn. | Tạo đơn nháp trước thanh toán không được mặc định coi là nghiệp vụ hiện hữu. Cần phân biệt draft/checkout session với đơn vận hành. |
| Đứt gãy | Partner thuật ngữ, BR-07, Q-22: đã ký hợp đồng, không lắp được do lỗi phía FPT. Khách tự hủy là Hủy. | Chưa định nghĩa mapping trạng thái bán hàng AM, quyền đổi trạng thái, hoàn tiền, khôi phục đơn hay giao lại người xử lý. |
| Toàn trình | Thuật ngữ: đi hết quy trình, duyệt/lắp/hoàn tất. BR-22: nhóm báo cáo gồm Đã duyệt, Đang lắp đặt, Hoàn tất. | Hai nghĩa chưa đồng nhất. Không dùng “toàn trình” thay trực tiếp cho “đã hoàn tất” trước khi PO xác nhận. |
| Nguồn giới thiệu | Partner BR-01: first-click còn hạn, 30 ngày lịch đến 24:00 ngày 30; một khách không ghi nhận quá một publisher; QR/mã giới thiệu có tracking. | Chưa xác nhận quy tắc đó áp dụng shop.fpt.vn, sales nội bộ, cross-domain, khách quay lại trực tiếp hoặc sales lên thay. |
| Nơi tiếp nhận / phân công | Partner mục 7.3 nhận click, lead, đơn, trạng thái từ hệ thống FPT; báo cáo đồng bộ hàng ngày. | Nhận số liệu báo cáo khác tiếp nhận lead để gọi khách; chưa có rule phân công vận hành theo địa bàn/TPKD. |
| Campaign | Partner BR-17: bài viết thông báo, không thay mức hoa hồng. | Không suy ra rằng campaign cấu hình bộ gói AM chỉ là bài thông báo hoặc dùng chung schema. |

### Các định nghĩa cần tách

- **Rời checkout**: sự kiện hành vi; chỉ thành lead khi đủ dữ liệu và đúng quy tắc ghi nhận.
- **Lead**: thông tin khách cần tiếp nhận/chăm sóc, chưa đồng nghĩa có đơn/hợp đồng.
- **Draft/session**: dữ liệu khách đang chọn; không mặc nhiên là đơn vận hành hoặc được tính hoa hồng.
- **Thanh toán lỗi/pending**: trạng thái giao dịch, không đồng nghĩa Đứt gãy/Hủy.
- **Đơn đứt gãy**: định nghĩa Partner có điều kiện đã ký hợp đồng và nguyên nhân phía FPT.
- **Hoàn tất đăng ký online**: khách xong thao tác web; chưa chứng minh đã lắp đặt/online.
- **Hoàn tất đơn vận hành**: Partner BR-07 yêu cầu đã lắp đặt và dịch vụ online.
- **“Đã thanh toán” ở Publisher**: BR-07 là hoa hồng thuộc sao kê đã chi trả; khác khách đã thanh toán dịch vụ.

Hệ số 100%/30%/0% cho Hoàn tất/Đứt gãy/Hủy là quy định **trong Partner SPEC**. Chưa áp cho sales AM khi chưa xác nhận phạm vi.

## 4. Có những trường hợp nào ghi nhận lead?

Đề xuất BA kiểm kê **5 điểm phát sinh hoặc cập nhật lead**, không phải 5 lead mới cho cùng một khách. Tài liệu hiện chưa chốt toàn bộ số trường hợp.

| Điểm | Sự kiện | Điều đã biết | Đề xuất và điều phải chốt |
|---|---|---|---|
| L1 | Gửi form Nhận tư vấn | Có nhu cầu để lại liên hệ trên landing dự kiến. Partner chỉ định nghĩa tổng quát việc để lại thông tin. | Tạo/cập nhật lead tư vấn sau submit hợp lệ và consent. Chốt nơi nhận, owner và chống trùng. |
| L2 | Nhập thông tin hợp lệ và bấm Tiếp tục từ form checkout | FPTVN có hành động Tiếp tục, nhưng không nêu chắc chắn tạo lead cho mọi địa chỉ có vùng phủ. | Đề xuất lưu lead gắn gói/khu vực/nguồn tại thao tác chủ động này, thay vì tự lưu khi chỉ gõ SĐT. Cần PO và backend xác nhận. |
| L3 | Policy xác định chưa có vùng phủ | FPTVN quy định đẩy KHTN, giữ dữ liệu và dừng đăng ký. | Đây là trường hợp đã có trong PRD. Chốt có cập nhật lead L2 hay tạo hồ sơ riêng, queue chờ hạ tầng và lịch chăm sóc lại. |
| L4 | Khách đã nhập liên hệ nhưng rời trang trước Tiếp tục | Chưa có quy tắc capture trong hai tài liệu. | Nếu cần lưu sớm: chốt điều kiện consent, bộ trường tối thiểu và thời điểm gửi. Không mặc định tự lấy dữ liệu khi vừa gõ. |
| L5 | Khách dừng hoặc thanh toán lỗi sau bước thông tin | PRD không nói chắc chắn có đơn trước thanh toán; TO-BE cũ đề xuất giữ dữ liệu/đơn nháp. | Cập nhật lead/draft hiện có để chăm sóc, không tạo lead mới mỗi lần retry. Pending phải kiểm tra kết quả trước khi mời thanh toán lại. |

Khách hoàn tất mua: liên kết lead với đơn để đo chuyển đổi, không tự tạo thêm lead. Khách chỉ xem, đổi khu vực, click gói, click gọi/Zalo chưa cung cấp liên hệ trong hệ thống thì chưa đủ để khẳng định có lead.

**Nguồn vào** là trục khác: link sales, link publisher/QR/mã giới thiệu, vào trực tiếp shop, sales lên thay khách. Cùng một điểm L1–L5 có thể xảy ra ở nhiều nguồn. Dedupe và quy tắc ghi nguồn phải tách riêng.

## 5. Đơn đứt gãy, toàn trình và hành trình khách

| Tình huống | Phân loại có thể dùng để hỏi PO | Hành động cần chốt |
|---|---|---|
| Chưa có đơn, bỏ form/checkout | Lead bỏ dở hoặc session bỏ dở nếu đã đủ điều kiện ghi nhận | Ai chăm sóc, sau bao lâu, có link tiếp tục không? |
| Thanh toán thất bại | Giao dịch lỗi; lead/draft/đơn tùy mốc tạo đơn được xác nhận | Thử lại/đổi phương thức, giữ lựa chọn, chống tạo trùng. Không gắn Đứt gãy. |
| Thanh toán chưa rõ | Giao dịch pending | Tra soát, khóa thanh toán mới; ai hỗ trợ và SLA? |
| Đơn được tiếp nhận, đang duyệt/lắp | Đang xử lý; có thể thuộc nhóm “toàn trình” theo BR-22 | Ai gọi xác nhận, duyệt, khảo sát, ký và lắp? Thứ tự các mốc do hệ thống vận hành xác nhận. |
| Đã ký nhưng FPT không thể lắp | Đứt gãy theo Partner SPEC | Mã nguyên nhân, người xác nhận, thông báo khách, hoàn tiền nếu đã thu, xử lý lại và hoa hồng. |
| Khách chủ động hủy | Hủy theo Partner SPEC | Thu thập lý do, trạng thái tiền và thông báo nguồn giới thiệu. |
| Đã lắp đặt và dịch vụ online | Hoàn tất theo Partner BR-07 | Ghi ngày hoàn tất, cập nhật báo cáo/hoa hồng đúng chính sách. |

## 6. Khách vào thẳng shop.fpt.vn

Phải tách **nguồn giới thiệu/hoa hồng**, **người tiếp nhận chăm sóc** và **đơn vị triển khai theo địa bàn**. Ba bên này có thể khác nhau.

| Trường hợp | Nhận định dựa trên tài liệu | Đề xuất chờ PO |
|---|---|---|
| Không có link hiện tại nhưng có click giới thiệu trước đó còn hạn | Có thể còn nguồn theo first-click nếu AM áp quy tắc Partner và tracking hợp lệ. | Không tự xóa nguồn chỉ vì URL hiện tại không có mã. Chốt domain, phạm vi và cách xác minh. |
| Không có nguồn giới thiệu hợp lệ | Không có căn cứ tự gán cho một AM bất kỳ. | Ghi nguồn Direct/Shop. Lead/đơn vào queue theo rule phân công đã duyệt. |
| Chưa có khu vực | Chưa đủ thông tin để chia địa bàn chính xác. | Queue tiếp nhận chung, bổ sung địa chỉ rồi phân công; không tự gán địa bàn mặc định. |
| Đã có địa chỉ | PRD có dữ liệu địa bàn nhưng không nêu người nhận. | PO chọn ECOM/telesales, sales địa bàn hoặc queue do TPKD quản lý; xác định rule khi nhiều đơn vị cùng phụ trách. |
| Link A nhưng đổi sang địa bàn B | Nguồn giới thiệu không đồng nhất với nơi triển khai. | Quy định giữ/chuyển nguồn riêng với chuyển người xử lý; không đổi hoa hồng âm thầm theo khu vực. |
| Link hết hiệu lực / sales không còn phụ trách | Chưa có rule AM shop. | Thông báo và fallback queue; chốt nguồn cũ, giá/campaign và trách nhiệm chăm sóc. |

Queue theo địa bàn là **đề xuất thiết kế quy trình**, không phải kết luận “đẩy về TPKD”. Nếu không tìm được người nhận, cần queue dự phòng và cảnh báo thay vì để lead mất hoặc tự gán ngẫu nhiên.

## 7. Bộ câu hỏi PO — ưu tiên chốt trước khi sửa web

### P0 — Chốt phạm vi, điểm ghi nhận và nơi nhận

| ID | Câu hỏi | Quyết định bị ảnh hưởng |
|---|---|---|
| PO-01 | AM shop áp dụng cho sales nội bộ, publisher Partner hay cả hai? Định danh hai nhóm liên kết thế nào; quy tắc Partner nào áp dụng cho shop? | Nguồn, quyền xem, hoa hồng và ownership. |
| PO-02 | Với link sales, chỉ điền sẵn tỉnh/phường hay cả loại nhà/địa chỉ chi tiết? Khách được đổi những trường nào; trường nào đã được xác thực? | Form, price check và nội dung thanh khu vực. |
| PO-03 | Chính thức ghi nhận lead tại điểm nào: gửi tư vấn, bấm Tiếp tục, không có vùng phủ, hoặc trước khi bấm Tiếp tục? Bộ trường tối thiểu và consent là gì? | API tạo/cập nhật lead, hành vi form và bỏ dở. |
| PO-04 | Từng nhóm lead L1–L5 vào hệ thống nào? Omnisell có nhận tất cả hay chỉ KHTN không có vùng phủ? Ai là owner và queue tiếp nhận? | Không được đồng nhất báo cáo Partner với hệ thống xử lý lead. |
| PO-05 | Lead từ link AM giao thẳng cho AM đó hay queue điều phối? AM không phản hồi/không cùng địa bàn thì chuyển cho ai sau bao lâu? | SLA, chuyển giao và nguồn ghi nhận. |
| PO-06 | Khách không có nguồn vào thẳng shop được ghi kênh nào và giao cho ai? ECOM/telesales, sales địa bàn hay queue TPKD; không có khu vực/người nhận thì fallback thế nào? | Luồng direct và tránh mất lead. |
| PO-07 | Đơn chính thức được tạo sau thanh toán thành công như PRD hay được tạo trước? Trước đó lưu lead/session/draft gì, có mã để khách tiếp tục không? | API và trạng thái; không coi draft là đơn vận hành. |

### P1 — Chốt trạng thái, nguồn và chăm sóc

| ID | Câu hỏi | Quyết định bị ảnh hưởng |
|---|---|---|
| PO-08 | “Toàn trình” là chỉ đơn hoàn tất hay cả Đã duyệt/Đang lắp/Hoàn tất như BR-22? Có cần đổi tên nhóm báo cáo để tránh hiểu sai? | Chỉ số, status và báo cáo. |
| PO-09 | AM có dùng đúng định nghĩa đứt gãy của Q-22? Ai và hệ thống nào xác nhận “đã ký” + nguyên nhân FPT, mã lý do nào bắt buộc? | Tách khỏi hủy, bỏ dở và lỗi thanh toán. |
| PO-10 | Khi đứt gãy nhưng đã thu tiền: ai hoàn tiền, SLA nào, khách được đổi địa chỉ/gói hay khôi phục đơn không? Khôi phục giữ mã đơn và nguồn nào? | Hành trình sau bán và thông báo khách. |
| PO-11 | First-click 30 ngày của Partner có áp dụng shop.fpt.vn không? Khách vào link A rồi B, quay lại direct, nhập mã khác thì nguồn nào thắng? | Attribution; quyền hưởng khác người xử lý. |
| PO-12 | Sales/đơn vị khác chăm sóc và tạo đơn từ lead có nguồn affiliate: có bảo lưu nguồn và hoa hồng không? Partner Q-30 loại tổng đài/cửa hàng nhưng BR-03 có lead chuyển đổi; ranh giới hai trường hợp là gì? | Tránh mất nguồn hoặc ghi nhận hai lần. |
| PO-13 | Dedupe theo SĐT hay SĐT + địa chỉ + dịch vụ + thời gian? Một khách có nhiều địa chỉ/đơn hợp lệ được xử lý thế nào? | Không hợp nhất nhầm, không sinh lead trùng khi retry. |
| PO-14 | Sales lên thay khách được đánh dấu thế nào, ghi nhận consent và nguồn ra sao, có khác khách tự mua không? | Audit, báo cáo và trách nhiệm dữ liệu. |
| PO-15 | Đổi khu vực khác link có đổi sales hưởng nguồn không, hay chỉ đổi người xử lý/đơn vị triển khai? Áp bảng giá chiến dịch hay địa bàn mới? | Quyền lợi, giá và rule chuyển giao. |
| PO-16 | Lead bỏ dở bao lâu thì nhắc/chăm sóc? Liên hệ bằng kênh nào; khách từ chối thì đóng và ngừng liên hệ thế nào? | SLA và nhánh phục hồi checkout. |
| PO-17 | Pending tra soát trong bao lâu, ai xử lý? Khi lỗi thanh toán có được chuyển COD/thu sau không, theo điều kiện nào? | Khóa giao dịch trùng, không tự mở nhánh thanh toán sau. |

### P2 — Dữ liệu, báo cáo và tích hợp

| ID | Câu hỏi | Quyết định bị ảnh hưởng |
|---|---|---|
| PO-18 | Lead xử lý vận hành cần chuyển ngay hay theo lịch? Báo cáo Partner đồng bộ ngày có áp cho AM shop không? | Không dùng batch báo cáo để trì hoãn chăm sóc khách. |
| PO-19 | Lead đã thành đơn còn được tính trong chỉ số lead tích lũy hay chỉ lead chưa chuyển đổi? Đơn/lead bị trùng/hủy tính báo cáo thế nào? | Funnel click→lead→đơn→online. |
| PO-20 | Nếu gửi lead lỗi nhưng checkout còn hoạt động, cho khách đi tiếp hay chặn; retry tự động và cảnh báo ai? Nếu thanh toán thành công nhưng tạo đơn lỗi thì xử lý thế nào? | Tránh mất liên hệ/tiền và tạo trùng. |
| PO-21 | Ai được xem tên/SĐT, địa chỉ, lý do hủy/đứt gãy? Sales nội bộ có quyền khác publisher không? | Không áp quyền che của Partner lên sales hoặc ngược lại một cách máy móc. |
| PO-22 | Campaign AM cấu hình bộ gói và campaign thông báo Partner là một hay hai khái niệm? Dữ liệu giá/bộ gói/banner, mã chiến dịch và thời hạn do hệ thống nào quản lý? | Schema, tracking và hành vi link hết hạn. |

## 8. Hỏi dev sau khi PO chốt nguyên tắc

- Endpoint nào hiện tạo KHTN/lead, schema và trigger hiện tại; có upsert, mã tham chiếu và chống trùng khi bấm/retry không?
- Luồng giá/biến thể kỳ hạn cần những trường địa chỉ nào; API trả cả danh sách kỳ hợp lệ hay phải đổi product code?
- Hệ thống nào là nguồn sự thật cho đơn, hợp đồng, vùng phủ, nguyên nhân đứt gãy, trạng thái giao dịch và hoàn tiền?
- Tracking fpt.vn ↔ shop.fpt.vn giữ được nguồn trong tình huống nào; cross-device, mất cookie và mã giới thiệu xử lý theo rule PO ra sao?
- Webhook/polling, retry đồng bộ và đối soát khi thanh toán thành công nhưng tạo đơn/ghi nguồn thất bại đang hỗ trợ gì?

## 9. Khuyến nghị trình PO

Chọn **B** để bám PRD fpt.vn, khác biệt bằng dữ liệu điền sẵn và màn thanh toán rõ ràng. Giữ điểm policy check sau địa chỉ; chưa thêm màn builder mặc định. Tách việc tối ưu UI khỏi các đề xuất mở rộng nghiệp vụ: lưu lead sớm, phân bổ direct, tạo đơn nháp trước thanh toán, COD/thu sau và hoa hồng AM. Chốt PO-01 đến PO-07 trước; các câu hỏi còn lại đưa vào quyết định trạng thái/ngoại lệ và kế hoạch tích hợp.
