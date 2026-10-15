/* Outside-checkout experiment: reuse the same draft and policy rules. */
(() => {
 const A=Storefront,D=demoCommerce,{esc,money,icon}=A;
 const panel=document.createElement('main');panel.id='configure';panel.className='container builder';panel.hidden=true;document.getElementById('purchase').before(panel);
 let choosingPlan=false;
 const p=()=>catalog.find(p=>p.id===Purchase.state.planId),period=()=>D.periods.find(p=>p.id===Purchase.state.period);
 function render(){
  if(panel.hidden||!p())return;const st=Purchase.state,t=Purchase.totals(),region=A.offer().address;
  const action=`<div class="builder-due"><span>Ban đầu dự kiến</span><strong>${money(t.total)}</strong></div><button class="button primary" data-builder-next>Tiếp tục đăng ký ${icon('arrow')}</button>`;
  panel.innerHTML=`<button class="text-button" data-builder-home>${icon('back')} Về bộ gói</button><div class="builder-heading"><p class="eyebrow">CHỌN TRƯỚC · ĐĂNG KÝ GỌN</p><h1>Tùy chỉnh kết nối của bạn.</h1><p>Chốt gói và kỳ cước ở đây. Bước sau chỉ cần bổ sung thông tin lắp đặt.</p></div><ol class="purchase-steps builder-steps"><li class="active" aria-current="step"><span>1</span><strong>Tùy chỉnh gói</strong></li><li><span>2</span><strong>Thông tin & thanh toán</strong></li></ol><div class="builder-layout"><div class="builder-panels"><section class="purchase-panel"><div class="panel-heading"><div><p class="eyebrow">GÓI BẠN ĐÃ CHỌN</p><h2>${esc(p().name)}</h2></div><button class="text-button" data-builder-plans aria-expanded="${choosingPlan}">${choosingPlan?'Thu gọn':'Đổi gói'}</button></div><div class="builder-plan-info"><strong>${esc(p().down)}</strong><span>${money(t.monthly)}/tháng</span><small>${esc(p().features.join(' · '))}</small></div>${choosingPlan?`<fieldset class="builder-plans"><legend class="sr-only">Chọn gói khác</legend>${A.groups().flatMap(g=>g.plans).map(plan=>`<label class="${plan.id===st.planId?'selected':''}"><input type="radio" name="builder-plan" value="${plan.id}" ${plan.id===st.planId?'checked':''}><span><strong>${esc(plan.name)}</strong><small>${esc(plan.down)} · ${money(A.price(plan,region?.province))}/tháng</small></span></label>`).join('')}</fieldset>`:''}</section>
  <section class="purchase-panel"><h2>Bạn muốn thanh toán thế nào?</h2><p class="panel-description">So sánh cước và phí lắp đặt. Thiết bị thêm được tính riêng trong tổng dự kiến.</p><fieldset class="builder-periods"><legend class="sr-only">Chọn kỳ cước trước checkout</legend>${D.periods.map(pr=>`<label class="${st.period===pr.id?'selected':''}"><input type="radio" name="builder-period" value="${pr.id}" ${st.period===pr.id?'checked':''}><span><strong>${pr.label}</strong><small>Cước & lắp đặt</small><b>${money((pr.id==='post'?0:t.monthly*pr.months)+pr.fee)}</b><em>${pr.id==='post'?'Cước tháng thanh toán sau':`Trả ${pr.months} tháng · dùng ${pr.months} tháng`}</em></span></label>`).join('')}</fieldset><p class="builder-period-note">${esc(period().description)}</p></section>
  <section class="purchase-panel builder-extras"><details ${st.extrasOpen?'open':''}><summary><span>Thiết bị bổ sung <small>Không bắt buộc${st.extras.length?' · '+st.extras.length+' mục':''}</small></span>${icon('down')}</summary><div class="builder-extra-list">${DemoPolicy.extras(p(),st.period).map(x=>`<label><input type="checkbox" name="builder-extra" value="${x.id}" ${st.extras.includes(x.id)?'checked':''}><span><strong>${esc(x.name)}</strong><small>${esc(x.description)}</small></span><b>${money(x.price)}</b></label>`).join('')}</div></details></section>
  <section class="purchase-panel builder-region"><div class="panel-heading"><div><h2>Khu vực lắp đặt</h2><p>${esc(region?.ward)}, ${esc(region?.province)}</p><small>${region?.houseType==='apartment'?'Chung cư':'Nhà riêng'} · bổ sung địa chỉ chi tiết ở bước sau</small></div><button class="text-button" data-region>Đổi</button></div></section></div>
  <aside class="builder-summary"><p class="eyebrow">CẤU HÌNH CỦA BẠN</p><h2>${esc(p().name)}</h2><p class="builder-summary-period">${period().label}</p><dl class="cost-breakdown"><div><dt>Cước tháng</dt><dd>${money(t.monthly)}</dd></div><div><dt>Cước trả trước</dt><dd>${money(t.service)}</dd></div><div><dt>Phí lắp đặt</dt><dd>${money(t.fee)}</dd></div>${st.extras.map(id=>D.extras.find(x=>x.id===id)).map(x=>`<div><dt>${esc(x.name)}</dt><dd>${money(x.price)}</dd></div>`).join('')}${t.discount?`<div><dt>Ưu đãi mẫu</dt><dd>−${money(t.discount)}</dd></div>`:''}</dl><div class="builder-desktop-action">${action}</div><p class="builder-price-note">Giá và ưu đãi được xác nhận sau khi kiểm tra địa chỉ chi tiết. Không thu tiền tại bước này.</p><div class="builder-next-hint"><strong>Bước sau bạn cần điền</strong><span>Họ tên · Số điện thoại · Số nhà / căn hộ</span></div><button class="text-button contact-trigger">${esc(campaign.sales.name)} · Người hỗ trợ ${icon('arrow')}</button></aside></div><div class="builder-mobile-action">${action}</div><p class="demo-note">Prototype · giá và chính sách minh họa.</p>`;
 }
 function open(id){
  if(!Purchase.close())return;const draft=Purchase.state;if(draft.planId&&draft.values.province)A.setRegion({...draft.values});Purchase.open(id);if(Purchase.state.planId!==id)return;
  document.getElementById('home').hidden=true;document.getElementById('purchase').hidden=true;panel.hidden=false;document.body.classList.add('configuring');document.body.classList.remove('purchasing');render();scrollTo({top:0,behavior:'instant'});
 }
 function next(){
  landingState.period=Purchase.state.period;panel.hidden=true;document.body.classList.remove('configuring');Purchase.state.step='payment';document.getElementById('purchase').hidden=false;document.body.classList.add('purchasing');Purchase.render();scrollTo({top:0,behavior:'instant'});document.getElementById('buy-name')?.focus({preventScroll:true});
 }
 panel.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-builder-home'))A.home();if(b.hasAttribute('data-builder-next'))next();if(b.hasAttribute('data-builder-plans')){choosingPlan=!choosingPlan;render();}});
 panel.addEventListener('toggle',e=>{if(e.target.matches('.builder-extras details'))Purchase.state.extrasOpen=e.target.open;},true);
 panel.addEventListener('change',e=>{
  const el=e.target,st=Purchase.state;
  if(el.name==='builder-plan'){open(el.value);return;}
  if(el.name==='builder-period'){
   const removed=st.extras.some(id=>!DemoPolicy.extras(p(),el.value).some(x=>x.id===id));
   if(removed&&!confirm('Kỳ cước mới không áp dụng một số thiết bị đã chọn. Tiếp tục sẽ gỡ các thiết bị đó.')){render();return;}
   landingState.period=el.value;Purchase.setLandingPeriod(el.value);render();
  }
  if(el.name==='builder-extra'){st.extras=el.checked?[...new Set([...st.extras,el.value])]:st.extras.filter(id=>id!==el.value);Purchase.setLandingPeriod(st.period);render();}
 });
 document.getElementById('app').addEventListener('click',e=>{if(e.target.closest('[data-edit-configuration]'))open(Purchase.state.planId);});
 window.Builder={open,render,renderIfOpen:()=>{if(!panel.hidden)render();},next};
 const footer=document.querySelector('.footer-note');footer.insertAdjacentHTML('beforeend','<a class="text-link compare-flow" href="classic.html">So sánh bản chọn kỳ trong checkout →</a>');
})();
