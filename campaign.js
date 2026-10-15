/* A local fixture, not an API contract or a production price list. */
window.campaign={
 id:'AM-EPL-DEMO-2026',label:'Kết nối cho mọi nhà',sales:{id:'AM-DEMO-01',name:'Minh Anh'},
 region:{province:'Hồ Chí Minh',ward:'Phường Bình Trị Đông',houseType:'house',building:''},
 sections:{internet:{visible:true,planIds:['internet-giga','internet-sky','internet-meta']},combo:{visible:true,planIds:['combo-giga','combo-sky','combo-meta']}},
 recommended:'combo-sky',banner:{image:'assets/campaign-epl.png',alt:'FPT Play mang Ngoại hạng Anh tới mọi nhà',cta:'Khám phá các gói Combo',target:'combo'},
 promotions:[
  {image:'assets/epl-trophy-official.jpg',alt:'Cúp Premier League với dải ruy băng Arsenal',tag:'NGOẠI HẠNG ANH',title:'Cảm xúc sân cỏ. Ngay tại nhà.',description:'Khám phá kết nối Internet và giải trí trong bộ gói Combo của chiến dịch.',target:'combo',cta:'Khám phá Combo'},
  {image:'assets/epl-celebrations.jpg',alt:'Cầu thủ Arsenal ăn mừng cùng cúp Premier League',tag:'INTERNET CHO NHÀ BẠN',title:'Làm việc, học tập. Kết nối mỗi ngày.',description:'Chọn tốc độ tải xuống và tải lên phù hợp với nhu cầu sử dụng tại nhà.',target:'internet',cta:'Khám phá Internet'},
  {image:'assets/campaign-epl.png',alt:'Các cầu thủ Premier League trong banner FPT Play',tag:'GÓI DÀNH CHO BẠN',title:'Chọn gói cho những tối cùng xem.',description:'Chưa chắc gói nào phù hợp? Người hỗ trợ trên link sẵn sàng tư vấn thêm.',target:'consult',cta:'Nhận tư vấn'}
 ],
 faqs:[
 ['Nên chọn Internet hay Combo Internet + Truyền hình?','Chọn Internet nếu chỉ cần kết nối. Chọn Combo nếu cần thêm truyền hình FPT Play. So sánh mô tả nhu cầu, tốc độ hai chiều và quyền lợi cụ thể trên từng gói.'],
 ['Phí lắp đặt và tổng chi phí ban đầu gồm những gì?','Tổng ban đầu gồm cước trả trước (nếu chọn), phí lắp đặt và thiết bị bổ sung, trừ ưu đãi đủ điều kiện. Bản mẫu dùng phí lắp đặt 300.000đ khi trả sau và 0đ khi trả trước; đây chưa phải chính sách FPT được duyệt. Các khoản được tách rõ trước khi thanh toán.'],
 ['Giá đã gồm VAT chưa?','Bảng giá hiện tại là dữ liệu minh họa và chưa xác định chính sách VAT. Khi dùng thật, báo giá cần ghi rõ VAT, khu vực áp dụng và các khoản phải trả trước khi khách xác nhận đăng ký.'],
 ['Lắp mạng mất bao lâu?','Nhân viên hỗ trợ sẽ xác nhận khả năng cung cấp và lịch lắp sau khi kiểm tra địa chỉ. Thời gian thực tế phụ thuộc hạ tầng và lịch kỹ thuật; chưa thể cam kết thời điểm chỉ từ khu vực xem giá.'],
 ['Gói đã có thiết bị chưa, có cần mua thêm không?','Các gói mẫu liệt kê modem Wi-Fi 6. Thiết bị mở rộng Wi-Fi hoặc thiết bị giải trí bổ sung là tùy chọn, được hiển thị và tính riêng nếu áp dụng.'],
 ['Cần chuẩn bị gì khi đăng ký?','Chuẩn bị số điện thoại liên hệ và địa chỉ lắp đặt. Nhân viên tư vấn sẽ hướng dẫn giấy tờ xác minh theo đối tượng đăng ký; không cần gửi giấy tờ qua form tư vấn này.'],
 ['Ai hỗ trợ tôi sau khi đăng ký?','Nhân viên tư vấn được hiển thị trên đầu trang sẽ hỗ trợ chọn gói và trao đổi thông tin lắp đặt. Bạn có thể mở thông tin liên hệ hoặc để lại yêu cầu tư vấn.']
 ],
 contact:{intro:'Để lại thông tin, chúng tôi giúp bạn chọn kết nối phù hợp.',privacy:'https://fpt.vn/ho-tro/chinh-sach-quy-trinh/5107/5076/286'}
};
// Triple fixtures for UI review; names, prices and entitlements require catalog approval.
window.catalog.push(
 {id:'triple-giga',category:'triple',name:'Triple Giga V.VIP – Lite (Play 4)',description:'Internet, truyền hình và camera cho nhu cầu cơ bản.',price:259000,down:'300 Mbps',up:'300 Mbps',features:['Modem Wi-Fi 6','FPT Play V.VIP','Camera trong nhà Play 4'],sample:true},
 {id:'triple-sky',category:'triple',name:'Triple Sky V.VIP – Lite (Play 4)',description:'Kết nối nhiều thiết bị, giải trí và theo dõi ngôi nhà.',price:279000,down:'1 Gbps',up:'300 Mbps',features:['Modem Wi-Fi 6','FPT Play V.VIP','Camera trong nhà Play 4'],sample:true},
 {id:'triple-meta',category:'triple',name:'Triple Meta V.VIP – Lite (Play 4)',description:'Tải lên nhanh cùng truyền hình và camera tại nhà.',price:379000,down:'1 Gbps',up:'1 Gbps',features:['Modem Wi-Fi 6','FPT Play V.VIP','Camera trong nhà Play 4'],sample:true}
);
campaign.sections.triple={visible:true,planIds:['triple-giga','triple-sky','triple-meta']};
window.landingBenefit=(period)=>period==='post'?'Cước tháng thanh toán sau':'+ Miễn phí lắp đặt · chính sách mẫu';
window.storefrontConfig={...window.offerSamples.performance,label:campaign.label,sales:campaign.sales,address:campaign.region,sections:campaign.sections,recommended:campaign.recommended};
window.landingState={period:'post',category:'all',consult:{name:'',phone:'',need:'',consent:false,status:'idle',errors:{}},lead:null};
window.demoCommerce.vouchers.forEach(v=>Object.assign(v,{kind:v.installation?2:1,methods:v.code==='UUDAI100'?['vnpay','bank','atm']:null}));
window.demoCommerce.vouchers.push({code:'DON0',title:'Đơn 0đ · kiểm thử',description:'Chỉ dùng kịch bản đơn 0đ trong công cụ duyệt.',amount:99999999,kind:0,testOnly:true});
window.DemoPolicy={
 extras:(p,period)=>window.demoCommerce.extras.filter(x=>x.id==='mesh'||['combo','triple'].includes(p?.category)&&period!=='post'),
 methods:(p,period)=>window.demoCommerce.methods.filter(x=>!(period==='post'&&x.id==='international')),
 voucherAmount:(v,t)=>Math.min(v.amount,v.installation?t.fee:t.subtotal),
 autoVoucher:(eligible,t)=>eligible.filter(v=>!v.testOnly).sort((a,b)=>(a.kind||1)-(b.kind||1)||DemoPolicy.voucherAmount(b,t)-DemoPolicy.voucherAmount(a,t))[0]||null
};
