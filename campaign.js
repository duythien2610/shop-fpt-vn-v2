/* A local fixture, not an API contract or a production price list. */
window.campaign={
 id:'AM-EPL-DEMO-2026',label:'Kết nối cho mọi nhà',sales:{id:'AM-DEMO-01',name:'Minh Anh'},
 region:{province:'Hồ Chí Minh',ward:'Phường Bình Trị Đông',houseType:'house',building:''},
 sections:{internet:{visible:true,planIds:['internet-giga','internet-sky','internet-meta']},combo:{visible:true,planIds:['combo-giga','combo-sky','combo-meta']}},
 recommended:'combo-sky',banner:{image:'assets/campaign-epl.png',alt:'FPT Play mang Ngoại hạng Anh tới mọi nhà',cta:'Khám phá các gói Combo',target:'combo'},
 promotions:[
  {image:'assets/epl-trophy-official.jpg',alt:'Cúp Premier League với dải ruy băng Arsenal',tag:'NGOẠI HẠNG ANH',title:'Cảm xúc sân cỏ. Ngay tại nhà.',description:'Khám phá kết nối Internet và giải trí trong bộ gói Combo của chiến dịch.',target:'combo',cta:'Khám phá Combo'},
  {image:'assets/epl-celebrations.jpg',alt:'Cầu thủ Arsenal ăn mừng cùng cúp Premier League',tag:'KẾT NỐI & GIẢI TRÍ',title:'Một kết nối. Nhiều cách tận hưởng.',description:'Xem rõ quyền lợi truyền hình và tốc độ Internet của từng gói trước khi chọn.',target:'combo',cta:'So sánh các gói'},
  {image:'assets/campaign-epl.png',alt:'Các cầu thủ Premier League trong banner FPT Play',tag:'GÓI DÀNH CHO BẠN',title:'Chọn gói cho những tối cùng xem.',description:'Chưa chắc gói nào phù hợp? Người hỗ trợ trên link sẵn sàng tư vấn thêm.',target:'consult',cta:'Nhận tư vấn'}
 ],
 faqs:[
  ['Nên chọn Internet hay Combo Internet + Truyền hình?','Chọn Internet nếu bạn cần kết nối cho học tập, làm việc và sử dụng các ứng dụng riêng. Chọn Combo nếu muốn kết hợp Internet với quyền lợi truyền hình. Xem chi tiết quyền lợi của gói trước khi đăng ký.'],
  ['Trả trước và trả sau khác nhau thế nào?','Trả trước thanh toán cước cho 3, 6 hoặc 12 tháng đã chọn. Trả sau thanh toán cước hàng tháng, nhưng có thể cần trả phí lắp đặt ban đầu. Màn kiểm tra đơn sẽ tách rõ các khoản này.'],
  ['Giá trên thẻ đã phải số tiền thanh toán cuối cùng chưa?','Thẻ hiển thị cước tháng và khoản ban đầu dự kiến theo khu vực. Tổng tiền cuối cùng được xác nhận sau khi kiểm tra địa chỉ, kỳ cước, thiết bị và ưu đãi. Giá trong prototype là dữ liệu mẫu.'],
  ['Có thể đổi khu vực và địa chỉ khi đăng ký không?','Có. Khu vực từ trang này được điền sẵn sang checkout. Bạn vẫn có thể sửa; nếu giá thay đổi, cần xác nhận mức giá mới trước khi thanh toán.'],
  ['Tôi có cần mua thêm thiết bị không?','Chỉ thiết bị được chính sách của gói cho phép mới xuất hiện. Thiết bị bổ sung trong bản mẫu là tùy chọn và được tách giá riêng.'],
  ['Ai hỗ trợ tôi sau khi đăng ký?','Minh Anh là người hỗ trợ trên link chiến dịch mẫu này. Sau bước xác nhận đăng ký, người hỗ trợ sẽ trao đổi thông tin và lịch lắp đặt tiếp theo.']
 ],
 contact:{intro:'Để lại thông tin, chúng tôi giúp bạn chọn kết nối phù hợp.',privacy:'https://fpt.vn/ho-tro/chinh-sach-quy-trinh/5107/5076/286'}
};
window.storefrontConfig={...window.offerSamples.performance,label:campaign.label,sales:campaign.sales,address:campaign.region,sections:campaign.sections,recommended:campaign.recommended};
window.landingState={period:'post',category:'all',consult:{name:'',phone:'',need:'',consent:false,status:'idle',errors:{}},lead:null};
window.demoCommerce.vouchers.forEach(v=>Object.assign(v,{kind:v.installation?2:1,methods:v.code==='UUDAI100'?['vnpay','bank','atm']:null}));
window.demoCommerce.vouchers.push({code:'DON0',title:'Đơn 0đ · kiểm thử',description:'Chỉ dùng kịch bản đơn 0đ trong công cụ duyệt.',amount:99999999,kind:0,testOnly:true});
window.DemoPolicy={
 extras:(p,period)=>window.demoCommerce.extras.filter(x=>x.id==='mesh'||p?.category==='combo'&&period!=='post'),
 methods:(p,period)=>window.demoCommerce.methods.filter(x=>!(period==='post'&&x.id==='international')),
 voucherAmount:(v,t)=>Math.min(v.amount,v.installation?t.fee:t.subtotal),
 autoVoucher:(eligible,t)=>eligible.filter(v=>!v.testOnly).sort((a,b)=>(a.kind||1)-(b.kind||1)||DemoPolicy.voucherAmount(b,t)-DemoPolicy.voucherAmount(a,t))[0]||null
};
