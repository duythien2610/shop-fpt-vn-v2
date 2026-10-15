(() => {
 const root=document.getElementById('app'),s=window.landingState;
 if(document.body.dataset.outside!=='true')document.querySelector('.footer-note').insertAdjacentHTML('beforeend','<a class="text-link" href="outside.html">Thử tùy chỉnh ngoài checkout →</a>');
 const showHome=()=>{if(!Purchase.close())return false;Storefront.home();return true;};
 root.addEventListener('click',e=>{
  const b=e.target.closest('button,a');if(!b)return;
  if(b.matches('[data-show-internet]')){if(!showHome())return;Storefront.setHomeCategory('internet');document.getElementById('plans').scrollIntoView({behavior:'smooth'});}
  if(b.matches('[data-show-combo]')){if(!showHome())return;Storefront.setHomeCategory('combo');document.getElementById('plans').scrollIntoView({behavior:'smooth'});}
  if(b.matches('[data-consult]')){e.preventDefault();if(!showHome())return;Storefront.renderHome();document.getElementById('consult').scrollIntoView({behavior:'smooth'});}
 });
 root.addEventListener('change',e=>{
  if(e.target.name==='landing-period'){
   s.period=e.target.value;Purchase.setLandingPeriod(s.period);Storefront.renderHome();
   document.getElementById("landing-period")?.focus({preventScroll:true});
  }
 });
 root.addEventListener('input',e=>{
  if(!e.target.closest('#consult-form'))return;const el=e.target;s.consult[el.name]=el.type==='checkbox'?el.checked:el.value;delete s.consult.errors[el.name];el.removeAttribute('aria-invalid');const feedback=document.getElementById('consult-'+el.name+'-error');if(feedback)feedback.textContent='';
 });
 root.addEventListener('submit',e=>{
  if(e.target.id!=='consult-form')return;e.preventDefault();const f=s.consult;if(f.status==='sending'||f.status==='sent')return;
  f.errors={};if(f.name.trim().length<2)f.errors.name='Vui lòng nhập họ tên từ 2 ký tự.';if(!/^0\d{9}$/.test(f.phone.replace(/\s/g,'')))f.errors.phone='Nhập 10 chữ số, bắt đầu bằng 0.';if(!f.consent)f.errors.consent='Vui lòng đồng ý chính sách để gửi yêu cầu.';
  if(Object.keys(f.errors).length){Storefront.renderHome();document.querySelector('#consult-form [aria-invalid="true"]')?.focus();return;}
  f.status='sending';Storefront.renderHome();
  setTimeout(()=>{s.lead={id:'TU-VAN-MAU-'+Date.now(),campaignId:campaign.id,salesId:campaign.sales.id,region:{...Storefront.offer().address},name:f.name,phone:f.phone,need:f.need,status:'consultation'};f.status='sent';Storefront.renderHome();const success=document.querySelector('.consult-success');success.setAttribute('tabindex','-1');success.focus({preventScroll:true});},500);
 });
})();
