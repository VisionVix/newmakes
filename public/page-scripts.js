// === HERO PARTICLE SYSTEM ===
(function(){
  const canvas=document.getElementById('heroParticles');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let w,h,particles=[],mouse={x:-999,y:-999},raf;
  const PARTICLE_COUNT=60;
  const CONNECT_DIST=130;
  const MOUSE_DIST=150;

  function resize(){
    const hero=canvas.parentElement;
    w=canvas.width=hero.offsetWidth;
    h=canvas.height=hero.offsetHeight;
  }

  function createParticle(){
    return{
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*.4,
      vy:(Math.random()-.5)*.4,
      r:Math.random()*2+1,
      color:Math.random()>.6?'rgba(200,150,62,':'rgba(46,125,91,',
      baseAlpha:.15+Math.random()*.25
    };
  }

  function init(){
    resize();
    particles=[];
    for(let i=0;i<PARTICLE_COUNT;i++)particles.push(createParticle());
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    // Draw connections
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<CONNECT_DIST){
          const alpha=.06*(1-dist/CONNECT_DIST);
          ctx.strokeStyle=`rgba(200,150,62,${alpha})`;
          ctx.lineWidth=.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.stroke();
        }
      }
    }
    // Draw particles + mouse interaction
    particles.forEach(p=>{
      // Mouse repulsion
      const mdx=p.x-mouse.x,mdy=p.y-mouse.y;
      const mDist=Math.sqrt(mdx*mdx+mdy*mdy);
      if(mDist<MOUSE_DIST){
        const force=(MOUSE_DIST-mDist)/MOUSE_DIST*.8;
        p.vx+=mdx/mDist*force*.3;
        p.vy+=mdy/mDist*force*.3;
      }
      // Dampen velocity
      p.vx*=.98;p.vy*=.98;
      // Move
      p.x+=p.vx;p.y+=p.vy;
      // Wrap around
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;
      if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      // Draw
      const glow=mDist<MOUSE_DIST?p.baseAlpha+.3:p.baseAlpha;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color+glow+')';
      ctx.fill();
      // Glow effect for close particles
      if(mDist<MOUSE_DIST){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r*3,0,Math.PI*2);
        ctx.fillStyle=p.color+'.06)';
        ctx.fill();
      }
    });
    // Mouse connections
    particles.forEach(p=>{
      const dx=p.x-mouse.x,dy=p.y-mouse.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<MOUSE_DIST){
        ctx.strokeStyle=`rgba(200,150,62,${.12*(1-dist/MOUSE_DIST)})`;
        ctx.lineWidth=.8;
        ctx.beginPath();
        ctx.moveTo(mouse.x,mouse.y);
        ctx.lineTo(p.x,p.y);
        ctx.stroke();
      }
    });
    raf=requestAnimationFrame(draw);
  }

  document.querySelector('.hero').addEventListener('mousemove',e=>{
    const rect=canvas.getBoundingClientRect();
    mouse.x=e.clientX-rect.left;
    mouse.y=e.clientY-rect.top;
  });
  document.querySelector('.hero').addEventListener('mouseleave',()=>{mouse.x=-999;mouse.y=-999});
  window.addEventListener('resize',()=>{resize()});

  init();
  draw();
})();
// === SCROLL REVEAL ===
const obs=new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting){el.target.classList.add('vis');obs.unobserve(el.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>obs.observe(el));

// === NAVBAR ===
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',scrollY>60)});

// === COUNTER ANIMATION ===
let cDone=false;
const cObs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting&&!cDone){cDone=true;document.querySelectorAll('[data-count]').forEach(el=>{const t=+el.dataset.count,d=1800,s=t/(d/16);let c=0;const i=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(i)}el.textContent=Math.floor(c).toLocaleString()+(t===98?'%':'+')},16)})}})},{threshold:.3});
document.querySelectorAll('.hero-card').forEach(el=>cObs.observe(el));

// === TOOLS TABS ===
function switchTool(id,btn){
  document.querySelectorAll('.tool-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tool-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tool-'+id).classList.add('active');
  btn.classList.add('active');
}

// === TAKE HOME PAY CALCULATOR (UK 2025/26) ===
function calcTakeHome(){
  const salary=+document.getElementById('th-salary').value;
  const pensionPct=+document.getElementById('th-pension').value;
  const studentPlan=+document.getElementById('th-student').value;
  const pension=salary*(pensionPct/100);
  const taxable=salary-pension;
  const pa=12570;
  let tax=0;
  if(taxable>pa){
    const band1=Math.min(taxable-pa,37700);
    const band2=Math.max(0,Math.min(taxable-pa-37700,87440));
    const band3=Math.max(0,taxable-pa-37700-87440);
    tax=band1*.2+band2*.4+band3*.45;
  }
  let ni=0;
  if(salary>12570){
    const niable=Math.min(salary-12570,37700);
    const niupper=Math.max(0,salary-50270);
    ni=niable*.08+niupper*.02;
  }
  let student=0;
  if(studentPlan===1&&salary>22015)student=(salary-22015)*.09;
  if(studentPlan===2&&salary>27295)student=(salary-27295)*.09;
  if(studentPlan===4&&salary>27660)student=(salary-27660)*.09;
  const takeHome=salary-tax-ni-pension-student;
  const monthly=takeHome/12;
  const effectiveRate=((tax+ni)/salary*100).toFixed(1);
  const fmt=n=>'£'+Math.round(n).toLocaleString();
  document.getElementById('th-results-body').innerHTML=`
    <div class="result-row"><span class="rr-label">Gross Salary</span><span class="rr-value">${fmt(salary)}</span></div>
    <div class="result-row"><span class="rr-label">Income Tax</span><span class="rr-value" style="color:var(--red)">-${fmt(tax)}</span></div>
    <div class="result-row"><span class="rr-label">National Insurance</span><span class="rr-value" style="color:var(--red)">-${fmt(ni)}</span></div>
    ${pension>0?`<div class="result-row"><span class="rr-label">Pension (${pensionPct}%)</span><span class="rr-value" style="color:var(--red)">-${fmt(pension)}</span></div>`:''}
    ${student>0?`<div class="result-row"><span class="rr-label">Student Loan</span><span class="rr-value" style="color:var(--red)">-${fmt(student)}</span></div>`:''}
    <div class="result-row total"><span class="rr-label">Annual Take-Home</span><span class="rr-value">${fmt(takeHome)}</span></div>
    <div class="result-row highlight"><span class="rr-label">Monthly Take-Home</span><span class="rr-value">${fmt(monthly)}/mo</span></div>
    <div class="result-row"><span class="rr-label">Effective Tax Rate</span><span class="rr-value">${effectiveRate}%</span></div>
    <div class="result-cta"><p>Want to reduce your tax bill? We find avg. £4,200 in savings.</p><a href="#contact" class="btn btn-gold" style="font-size:.85rem;padding:11px 24px">Get Free Tax Review</a></div>`;
}

// === VAT CHECKER ===
function calcVAT(){
  const turnover=+document.getElementById('vat-turnover').value;
  const expenses=+document.getElementById('vat-expenses').value;
  const threshold=90000;
  const mustRegister=turnover>=threshold;
  const nearThreshold=turnover>=threshold*0.85&&turnover<threshold;
  const flatRateBenefit=turnover*0.165<turnover/6;
  const standardVAT=turnover/6-expenses/6;
  const flatRate=turnover*0.165;
  let html='';
  if(mustRegister){
    html=`<div class="result-row highlight" style="background:var(--red-light)"><span class="rr-label">⚠️ VAT Registration</span><span class="rr-value" style="color:var(--red)">REQUIRED</span></div>
    <div class="result-row"><span class="rr-label">Your turnover</span><span class="rr-value">£${turnover.toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">VAT threshold</span><span class="rr-value">£${threshold.toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">Over threshold by</span><span class="rr-value" style="color:var(--red)">£${(turnover-threshold).toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">Standard Scheme VAT due (est.)</span><span class="rr-value">£${Math.round(standardVAT).toLocaleString()}/yr</span></div>
    <div class="result-row"><span class="rr-label">Flat Rate Scheme VAT (est.)</span><span class="rr-value">£${Math.round(flatRate).toLocaleString()}/yr</span></div>
    <div class="result-row total"><span class="rr-label">Better scheme</span><span class="rr-value">${standardVAT<flatRate?'Standard':'Flat Rate'}</span></div>`;
  }else if(nearThreshold){
    html=`<div class="result-row highlight" style="background:rgba(200,150,62,.1)"><span class="rr-label">⏳ VAT Registration</span><span class="rr-value" style="color:var(--gold)">APPROACHING</span></div>
    <div class="result-row"><span class="rr-label">Your turnover</span><span class="rr-value">£${turnover.toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">Headroom remaining</span><span class="rr-value" style="color:var(--gold)">£${(threshold-turnover).toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">Distance to threshold</span><span class="rr-value">${((1-turnover/threshold)*100).toFixed(1)}% away</span></div>`;
  }else{
    html=`<div class="result-row highlight"><span class="rr-label">✅ VAT Registration</span><span class="rr-value">NOT REQUIRED</span></div>
    <div class="result-row"><span class="rr-label">Your turnover</span><span class="rr-value">£${turnover.toLocaleString()}</span></div>
    <div class="result-row"><span class="rr-label">Headroom remaining</span><span class="rr-value" style="color:var(--green)">£${(threshold-turnover).toLocaleString()}</span></div>`;
  }
  html+=`<div class="result-cta"><p>Need help with VAT registration or choosing the right scheme?</p><a href="#contact" class="btn btn-gold" style="font-size:.85rem;padding:11px 24px">Free VAT Consultation</a></div>`;
  document.getElementById('vat-results-body').innerHTML=html;
}

// === DIVIDEND VS SALARY OPTIMISER ===
function calcDividend(){
  const profit=+document.getElementById('div-profit').value;
  const optimalSalary=12570;
  const employerNI=optimalSalary>9100?(optimalSalary-9100)*.138:0;
  const afterSalary=profit-optimalSalary-employerNI;
  const corpTax=afterSalary<=50000?afterSalary*.19:afterSalary<=250000?afterSalary*.25:afterSalary*.25;
  const availableDividends=afterSalary-corpTax;
  const divAllowance=500;
  const taxableDivs=Math.max(0,availableDividends-divAllowance);
  const basicBand=Math.max(0,50270-optimalSalary);
  const basicDivs=Math.min(taxableDivs,basicBand);
  const higherDivs=Math.max(0,taxableDivs-basicBand);
  const divTax=basicDivs*.0875+higherDivs*.3375;
  const totalTakeHome=optimalSalary+availableDividends-divTax;
  const allSalaryTax=profit>12570?(Math.min(profit-12570,37700)*.2+Math.max(0,profit-50270)*.4):0;
  const allSalaryNI=profit>12570?(Math.min(profit-12570,37700)*.08+Math.max(0,profit-50270)*.02):0;
  const allSalaryTakeHome=profit-allSalaryTax-allSalaryNI;
  const saving=totalTakeHome-allSalaryTakeHome;
  const fmt=n=>'£'+Math.round(n).toLocaleString();
  document.getElementById('div-results-body').innerHTML=`
    <div class="result-row" style="background:var(--gold-pale);margin:0 -36px;padding:14px 36px"><span class="rr-label">🏆 Optimal Strategy</span><span class="rr-value" style="color:var(--gold)">Low Salary + Dividends</span></div>
    <div class="result-row"><span class="rr-label">Optimal Salary</span><span class="rr-value">${fmt(optimalSalary)}/yr</span></div>
    <div class="result-row"><span class="rr-label">Corporation Tax (${afterSalary<=50000?'19%':'25%'})</span><span class="rr-value" style="color:var(--red)">-${fmt(corpTax)}</span></div>
    <div class="result-row"><span class="rr-label">Available as Dividends</span><span class="rr-value">${fmt(availableDividends)}</span></div>
    <div class="result-row"><span class="rr-label">Dividend Tax</span><span class="rr-value" style="color:var(--red)">-${fmt(divTax)}</span></div>
    <div class="result-row total"><span class="rr-label">Total Take-Home</span><span class="rr-value">${fmt(totalTakeHome)}</span></div>
    ${saving>0?`<div class="result-row highlight"><span class="rr-label">💰 You save vs all-salary</span><span class="rr-value">${fmt(saving)}/yr</span></div>`:''}
    <div class="result-cta"><p>This is a simplified estimate. We can optimise further with pension contributions, expenses, and allowances.</p><a href="#contact" class="btn btn-gold" style="font-size:.85rem;padding:11px 24px">Get Expert Optimisation</a></div>`;
}

// === 3D TESTIMONIAL CAROUSEL ===
const t3dCards=document.querySelectorAll('.t3d-card');
const t3dDots=document.querySelectorAll('.t3d-dot');
const t3dTotal=t3dCards.length;
let t3dCurrent=0;
const t3dRadius=420;
const t3dAngleStep=360/t3dTotal;

function positionCards(){
  t3dCards.forEach((card,i)=>{
    const angle=((i-t3dCurrent)*t3dAngleStep)*Math.PI/180;
    const x=Math.sin(angle)*t3dRadius;
    const z=Math.cos(angle)*t3dRadius-t3dRadius;
    const scale=0.55+0.45*((z+t3dRadius)/(t3dRadius*2));
    const opacity=0.3+0.7*((z+t3dRadius)/(t3dRadius*2));
    const blur=z<-t3dRadius*0.5?2:0;
    card.style.transform=`translateX(${x}px) translateZ(${z}px) scale(${scale})`;
    card.style.opacity=opacity;
    card.style.filter=blur?`blur(${blur}px)`:'none';
    card.style.zIndex=Math.round(scale*100);
    card.style.transition='transform .8s cubic-bezier(.25,.46,.45,.94),opacity .8s ease,filter .8s ease';
    card.classList.toggle('active',i===t3dCurrent);
  });
  t3dDots.forEach((d,i)=>d.classList.toggle('active',i===t3dCurrent));
}
function rotateCarousel(dir){t3dCurrent=(t3dCurrent+dir+t3dTotal)%t3dTotal;positionCards();resetAutoRotate()}
function goToCard(i){t3dCurrent=i;positionCards();resetAutoRotate()}
let t3dAutoTimer=setInterval(()=>rotateCarousel(1),5000);
function resetAutoRotate(){clearInterval(t3dAutoTimer);t3dAutoTimer=setInterval(()=>rotateCarousel(1),5000)}
let t3dStartX=0;
const t3dScene=document.getElementById('t3dScene');
if(t3dScene){t3dScene.addEventListener('touchstart',e=>{t3dStartX=e.touches[0].clientX},{passive:true});t3dScene.addEventListener('touchend',e=>{const diff=e.changedTouches[0].clientX-t3dStartX;if(Math.abs(diff)>40)rotateCarousel(diff>0?-1:1)})}
positionCards();

// === CALCY AI CHATBOT — Full System ===
// Audio
let audioCtx=null;
function initAudio(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume()}
function playClick(freq=1200){initAudio();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='sine';o.frequency.setValueAtTime(freq,audioCtx.currentTime);g.gain.setValueAtTime(0.05,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.04);o.start();o.stop(audioCtx.currentTime+0.04)}
function playEquals(){initAudio();[523,659,784].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='sine';const t=audioCtx.currentTime+i*0.06;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0.07,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.08);o.start(t);o.stop(t+0.08)})}
function playSuccess(){initAudio();[523,659,784,1047].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='sine';const t=audioCtx.currentTime+i*0.08;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0.07,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.1);o.start(t);o.stop(t+0.1)})}
function playError(){initAudio();[300,250].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='square';const t=audioCtx.currentTime+i*0.12;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0.04,t);g.gain.exponentialRampToValueAtTime(0.003,t+0.1);o.start(t);o.stop(t+0.1)})}
function playCashRegister(){initAudio();[1568,2093,1568,2093].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='sine';const t=audioCtx.currentTime+i*0.05;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0.05,t);g.gain.exponentialRampToValueAtTime(0.005,t+0.05);o.start(t);o.stop(t+0.05)});setTimeout(()=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='triangle';o.frequency.setValueAtTime(2500,audioCtx.currentTime);g.gain.setValueAtTime(0.06,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.15);o.start();o.stop(audioCtx.currentTime+0.15)},200)}

// Expressions
const avatar=document.getElementById('avatar');
const moodBadge=document.getElementById('moodBadge');
const allAnims=['wave','happy','thinking','error','bounce'];
function setExpression(expr,dur=1500){allAnims.forEach(a=>avatar.classList.remove(a));void avatar.offsetWidth;if(expr){avatar.classList.add(expr);if(dur>0)setTimeout(()=>avatar.classList.remove(expr),dur)}}

// Spawners
function spawnText(text,color='#C8963E'){const c=document.getElementById('calcyArea');const el=document.createElement('div');el.textContent=text;el.style.cssText=`position:absolute;font-family:'Orbitron',sans-serif;font-size:${7+Math.random()*4}px;font-weight:700;color:${color};left:${25+Math.random()*50}%;bottom:45%;z-index:40;pointer-events:none;animation:rise 1.3s ease-out forwards;text-shadow:0 0 6px ${color}44;`;c.appendChild(el);setTimeout(()=>el.remove(),1300)}
function spawnEmoji(emoji){const c=document.getElementById('calcyArea');const el=document.createElement('div');el.textContent=emoji;el.style.cssText=`position:absolute;font-size:${10+Math.random()*8}px;left:${25+Math.random()*50}%;bottom:45%;z-index:40;pointer-events:none;animation:rise 1.5s ease-out forwards;`;c.appendChild(el);setTimeout(()=>el.remove(),1500)}

// Display
function updateDisplay(val){document.getElementById('displayText').textContent=val}
function formatNum(n){if(Math.abs(n)>99999999)return n.toExponential(2);if(n===Math.floor(n))return n.toLocaleString();return parseFloat(n.toFixed(2)).toLocaleString()}

// Receipt
function showReceipt(label,amount){
  const inner=document.getElementById('receiptInner');
  inner.innerHTML=`<div class="receipt-line"><span>${label}</span><span>£${formatNum(amount)}</span></div>`;
  document.getElementById('receiptPaper').classList.add('visible');
  setTimeout(()=>document.getElementById('receiptPaper').classList.remove('visible'),3500);
}

// Click avatar to wave
document.getElementById('calcyArea').addEventListener('click',e=>{
  if(e.target.closest('.calc-btn'))return;
  playClick();setExpression('wave',1200);moodBadge.textContent='👋 HI!';spawnEmoji('🧮');
  setTimeout(()=>moodBadge.textContent='🧮 READY',1200);
});

// Mini calculator buttons work
let calcCurrent='0',calcPrev=null,calcOp=null,calcJust=false;
document.querySelectorAll('#calcButtons .calc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const val=btn.dataset.val;if(!val)return;
    btn.classList.add('pressed');setTimeout(()=>btn.classList.remove('pressed'),150);
    if(val>='0'&&val<='9'||val==='.'){
      playClick(1200+parseInt(val||0)*50);
      if(calcJust||calcCurrent==='0'&&val!=='.'){calcCurrent=val;calcJust=false}else{if(val==='.'&&calcCurrent.includes('.'))return;calcCurrent+=val}
      updateDisplay('£'+calcCurrent);
    }else if(val==='C'){playClick(800);calcCurrent='0';calcPrev=null;calcOp=null;updateDisplay('£0')
    }else if(val==='='){
      playEquals();
      if(calcPrev!==null&&calcOp){
        let r;const a=parseFloat(calcPrev),b=parseFloat(calcCurrent);
        switch(calcOp){case'+':r=a+b;break;case'-':case'−':r=a-b;break;case'×':r=a*b;break;case'÷':r=b===0?'ERR':a/b;break;default:r=b}
        if(r==='ERR'){playError();setExpression('error',1200);updateDisplay('ERR');moodBadge.textContent='❌ ERROR';setTimeout(()=>{updateDisplay('£0');moodBadge.textContent='🧮 READY'},1500)}
        else{updateDisplay('£'+formatNum(r));setExpression('happy',1200);moodBadge.textContent='✅ SOLVED';spawnText('£'+formatNum(r),'#2E7D5B');setTimeout(()=>moodBadge.textContent='🧮 READY',2000)}
        calcPrev=null;calcOp=null;calcJust=true;
      }
    }else{playClick(1400);if(calcPrev===null)calcPrev=calcCurrent;calcOp=val;calcJust=true;setExpression('thinking',800)}
  });
});

// === 10 UK TAX Q&As (2025/26) ===
const taxQA = [
  {
    q: "When is self-assessment due?",
    keywords: ["self-assessment","self assessment","tax return","deadline","filing","january","31 jan","submit"],
    emoji:"📅",display:"31 JAN",
    a: `<strong>📅 Self Assessment Deadlines (2024/25 Tax Year):</strong><br><br>
• <strong>5 Oct 2025</strong> — Register if you're new<br>
• <strong>31 Oct 2025</strong> — Paper return deadline<br>
• <strong>31 Jan 2026</strong> — Online filing & payment<br>
• <strong>31 Jul 2026</strong> — 2nd payment on account<br><br>
⚠️ Late filing = <strong>£100 penalty</strong> immediately, rising to £10/day after 3 months.<br><br>
💡 <em>Makesworth files returns early to avoid the January rush.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "What is the personal allowance?",
    keywords: ["personal allowance","tax free","tax-free","12570","allowance","how much can i earn"],
    emoji:"💷",display:"£12,570",
    a: `<strong>💷 Personal Allowance 2025/26: £12,570</strong><br><br>
• Earn under <strong>£12,570</strong> → No income tax<br>
• Earn <strong>£100,000+</strong> → Allowance reduces by £1 per £2 over £100k<br>
• Earn <strong>£125,140+</strong> → Allowance gone completely<br>
• <strong>Marriage Allowance</strong> — Transfer up to £1,260 to a spouse (save up to £252/yr)<br><br>
📌 Frozen until <strong>2030/31</strong> — fiscal drag means more people pay higher rates each year.<br><br>
💡 <em>We help clients structure income to maximise allowances.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "Sole trader vs limited company?",
    keywords: ["sole trader","limited company","ltd","incorporate","structure","which is better","sole vs"],
    emoji:"⚖️",display:"LTD?",
    a: `<strong>⚖️ Sole Trader vs Limited Company (2025/26):</strong><br><br>
<strong>Sole Trader:</strong> Income Tax (20-45%) + Class 2 & 4 NI on all profits. Simple setup, unlimited liability.<br><br>
<strong>Limited Company:</strong> Corporation Tax (19-25%). Take salary £12,570 + dividends (8.75%). Limited liability, more admin.<br><br>
💰 Earning £60k → Ltd saves <strong>£3,000–£5,000/yr</strong> typically.<br><br>
📌 Try our <a href="#tools" style="color:var(--gold)" onclick="toggleChat()">free comparison tool</a>!<br>
💡 <em>We handle incorporations every week.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "Do I need to register for VAT?",
    keywords: ["vat","register","threshold","90000","vat registration","turnover","flat rate"],
    emoji:"📊",display:"£90K",
    a: `<strong>📊 VAT Registration (2025/26):</strong><br><br>
• <strong>Mandatory: £90,000</strong> — Must register if turnover exceeds this in any 12-month period<br>
• <strong>Deregistration: £88,000</strong><br><br>
<strong>Schemes:</strong> Standard (20% VAT, reclaim on expenses) · Flat Rate (fixed % of turnover) · Cash Accounting<br><br>
⚠️ You can register <strong>voluntarily</strong> below £90k if clients are VAT-registered.<br><br>
📌 Try our <a href="#tools" style="color:var(--gold)" onclick="toggleChat()">free VAT checker</a>!<br>
💡 <em>We help clients choose the best VAT scheme.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "What are the income tax rates?",
    keywords: ["income tax","tax rate","tax band","basic rate","higher rate","additional rate","20%","40%","45%","how much tax"],
    emoji:"💰",display:"20/40/45",
    a: `<strong>💰 Income Tax Rates 2025/26 (England, Wales & NI):</strong><br><br>
<table style="width:100%;font-size:.75rem;border-collapse:collapse;margin:6px 0">
<tr style="background:var(--navy);color:#fff"><td style="padding:5px 6px">Band</td><td style="padding:5px 6px">Income</td><td style="padding:5px 6px">Rate</td></tr>
<tr style="background:#f8f9fa"><td style="padding:5px 6px">Personal Allowance</td><td style="padding:5px 6px">Up to £12,570</td><td style="padding:5px 6px"><strong>0%</strong></td></tr>
<tr><td style="padding:5px 6px">Basic</td><td style="padding:5px 6px">£12,571–£50,270</td><td style="padding:5px 6px"><strong>20%</strong></td></tr>
<tr style="background:#f8f9fa"><td style="padding:5px 6px">Higher</td><td style="padding:5px 6px">£50,271–£125,140</td><td style="padding:5px 6px"><strong>40%</strong></td></tr>
<tr><td style="padding:5px 6px">Additional</td><td style="padding:5px 6px">Over £125,140</td><td style="padding:5px 6px"><strong>45%</strong></td></tr>
</table><br>
📌 Frozen until <strong>2030/31</strong>.<br>
💡 <em>Use our <a href="#tools" style="color:var(--gold)" onclick="toggleChat()">Take-Home Pay calculator</a> to see what you keep.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "How much is the dividend allowance?",
    keywords: ["dividend","allowance","dividend tax","8.75","33.75","company director","pay myself"],
    emoji:"🧾",display:"£500",
    a: `<strong>🧾 Dividend Tax 2025/26:</strong><br><br>
• <strong>Tax-free allowance: £500</strong><br>
• Basic rate: <strong>8.75%</strong> · Higher: <strong>33.75%</strong> · Additional: <strong>39.35%</strong><br><br>
⚠️ <strong>From April 2026</strong>: Basic → 10.75%, Higher → 35.75% (+2% each)<br><br>
<strong>Optimal:</strong> Salary £12,570 + dividends = <strong>£3,000–£8,000/yr cheaper</strong> than all salary.<br><br>
📌 Try our <a href="#tools" style="color:var(--gold)" onclick="toggleChat()">Dividend vs Salary optimiser</a>!<br>
💡 <em>We plan the most tax-efficient salary/dividend mix for every client.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "Can I claim working from home?",
    keywords: ["working from home","wfh","home office","claim","expenses","remote","work from home"],
    emoji:"🏠",display:"£6/WK",
    a: `<strong>🏠 Working From Home Tax Relief (2025/26):</strong><br><br>
<strong>Employed:</strong> £6/week flat rate (£312/yr) no receipts needed, or claim actual costs. Employer must <strong>require</strong> WFH.<br><br>
<strong>Self-employed:</strong> Simplified expenses: £10/month (25-50 hrs), £18 (51-100), £26 (101+). Or actual proportion of bills.<br><br>
⚠️ Exclusive business use of a room may affect CGT exemption on your home.<br><br>
💡 <em>Many clients miss this deduction — we'll check what you can claim.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "What is Making Tax Digital?",
    keywords: ["making tax digital","mtd","digital","hmrc","software","quarterly","record keeping"],
    emoji:"📱",display:"MTD",
    a: `<strong>📱 Making Tax Digital (MTD):</strong><br><br>
<strong>VAT</strong> (live): All VAT businesses must keep digital records + file via software.<br><br>
<strong>Income Tax</strong> — rolling out:<br>
• <strong>April 2026</strong>: Earning over £50,000<br>
• <strong>April 2027</strong>: Over £30,000<br><br>
Means quarterly updates to HMRC via Xero/QuickBooks + end-of-period statement.<br><br>
💡 <em>Makesworth is fully MTD-ready with Xero & Dext.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "What's the employer NI rate?",
    keywords: ["employer","national insurance","ni rate","employer nic","secondary","15%","employment allowance","hiring"],
    emoji:"👔",display:"15%",
    a: `<strong>👔 Employer NI 2025/26:</strong><br><br>
• <strong>Rate: 15%</strong> (up from 13.8%)<br>
• <strong>Threshold: £96/week</strong> (£5,000/yr) — down from £175/week<br><br>
<strong>Employment Allowance:</strong> £10,500/yr off your NI bill (if bill was under £100k prev year).<br><br>
<strong>Employee NI:</strong> 8% on £12,570–£50,270, then 2% above.<br><br>
💡 <em>We help businesses structure payroll tax-efficiently.</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  },
  {
    q: "How does student loan repayment work?",
    keywords: ["student loan","repayment","plan 1","plan 2","plan 4","plan 5","graduate","university"],
    emoji:"🎓",display:"9%",
    a: `<strong>🎓 Student Loan Repayments 2025/26:</strong><br><br>
<table style="width:100%;font-size:.7rem;border-collapse:collapse;margin:6px 0">
<tr style="background:var(--navy);color:#fff"><td style="padding:4px 5px">Plan</td><td style="padding:4px 5px">Threshold</td><td style="padding:4px 5px">Rate</td></tr>
<tr style="background:#f8f9fa"><td style="padding:4px 5px">Plan 1</td><td style="padding:4px 5px">£22,015</td><td style="padding:4px 5px">9%</td></tr>
<tr><td style="padding:4px 5px">Plan 2</td><td style="padding:4px 5px">£27,295</td><td style="padding:4px 5px">9%</td></tr>
<tr style="background:#f8f9fa"><td style="padding:4px 5px">Plan 4</td><td style="padding:4px 5px">£27,660</td><td style="padding:4px 5px">9%</td></tr>
<tr><td style="padding:4px 5px">Plan 5</td><td style="padding:4px 5px">£25,000</td><td style="padding:4px 5px">9%</td></tr>
<tr style="background:#f8f9fa"><td style="padding:4px 5px">Postgrad</td><td style="padding:4px 5px">£21,000</td><td style="padding:4px 5px">6%</td></tr>
</table><br>
📌 You repay 9% on earnings <strong>above</strong> the threshold only.<br>
💡 <em>Our <a href="#tools" style="color:var(--gold)" onclick="toggleChat()">Take-Home Pay calculator</a> includes student loan deductions!</em><br><br>📞 <a href="tel:02079938850" style="color:var(--gold)"><strong>020 7993 8850</strong></a> · 📧 <a href="mailto:info@makesworth.co.uk" style="color:var(--gold)"><strong>info@makesworth.co.uk</strong></a><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a>.`
  }
];

// Calcy expression map per question topic
const calcyReactions = [
  {expr:'thinking',sound:'click',spawn:'📅',badge:'📅 DEADLINE'},
  {expr:'happy',sound:'equals',spawn:'💷',badge:'💷 ALLOWANCE'},
  {expr:'thinking',sound:'click',spawn:'⚖️',badge:'⚖️ COMPARING'},
  {expr:'bounce',sound:'cash',spawn:'📊',badge:'📊 VAT CHECK'},
  {expr:'thinking',sound:'click',spawn:'💰',badge:'💰 TAX RATES'},
  {expr:'happy',sound:'cash',spawn:'🧾',badge:'🧾 DIVIDENDS'},
  {expr:'wave',sound:'equals',spawn:'🏠',badge:'🏠 WFH'},
  {expr:'thinking',sound:'click',spawn:'📱',badge:'📱 MTD'},
  {expr:'bounce',sound:'cash',spawn:'👔',badge:'👔 EMPLOYER NI'},
  {expr:'happy',sound:'success',spawn:'🎓',badge:'🎓 STUDENT LOAN'}
];

function toggleChat(){
  const cb=document.getElementById('chatbot');
  const btn=document.getElementById('chatToggle');
  cb.classList.toggle('open');
  btn.classList.toggle('active');
  if(cb.classList.contains('open')){
    playClick();setExpression('wave',1200);
    moodBadge.textContent='👋 HELLO';spawnEmoji('🧮');
    setTimeout(()=>moodBadge.textContent='🧮 READY',1200);
  }
}

function doCalcyReaction(idx){
  const r=calcyReactions[idx];
  const qa=taxQA[idx];
  // Sound
  if(r.sound==='click')playClick();
  else if(r.sound==='equals')playEquals();
  else if(r.sound==='cash')playCashRegister();
  else if(r.sound==='success')playSuccess();
  // Expression
  setExpression(r.expr,1500);
  // Badge
  moodBadge.textContent=r.badge;
  // Spawn
  spawnEmoji(r.spawn);
  // Update display
  updateDisplay(qa.display);
  // Receipt for some
  if(idx===1)showReceipt('Personal Allowance',12570);
  else if(idx===3)showReceipt('VAT Threshold',90000);
  else if(idx===5)showReceipt('Div Allowance',500);
  else if(idx===8)showReceipt('Employer NI',15);
  // Spawn numbers
  setTimeout(()=>spawnText(qa.display,'#C8963E'),300);
  // Reset badge
  setTimeout(()=>moodBadge.textContent='🧮 READY',3000);
}

function askQ(idx){
  const qa=taxQA[idx];
  addUserMsg(qa.q);
  doCalcyReaction(idx);
  typeResponse(qa.a);
}

function sendChat(){
  const input=document.getElementById('chatInput');
  const msg=input.value.trim();
  if(!msg)return;
  input.value='';
  addUserMsg(msg);
  const lower=msg.toLowerCase();
  let match=null;let bestScore=0;let bestIdx=0;
  taxQA.forEach((qa,i)=>{let score=0;qa.keywords.forEach(kw=>{if(lower.includes(kw))score+=kw.length});if(score>bestScore){bestScore=score;match=qa;bestIdx=i}});
  if(bestScore>=3){
    doCalcyReaction(bestIdx);
    typeResponse(match.a);
  }else{
    playClick();setExpression('thinking',1500);moodBadge.textContent='🤔 HMMMM';
    spawnText('?','#C8963E');
    setTimeout(()=>moodBadge.textContent='🧮 READY',2500);
    typeResponse(`Thanks for your question! Our team can give you a personalised answer.<br><br>📞 <strong><a href="tel:02079938850" style="color:var(--gold)">020 7993 8850</a></strong><br>📧 <strong><a href="mailto:info@makesworth.co.uk" style="color:var(--gold)">info@makesworth.co.uk</a></strong><br><br>Or <a href="#contact" style="color:var(--gold)" onclick="toggleChat()"><strong>book a free consultation</strong></a> — we respond within 4 hours.<br><br><em>Try these popular questions:</em>
    <div class="chat-suggestions" style="margin-top:8px">
      <span class="chat-sug" onclick="askQ(0)">📅 Self-assessment</span>
      <span class="chat-sug" onclick="askQ(4)">💰 Tax rates</span>
      <span class="chat-sug" onclick="askQ(2)">⚖️ Sole trader vs Ltd</span>
    </div>`);
  }
}

function addUserMsg(text){
  const msgs=document.getElementById('chatMsgs');
  const div=document.createElement('div');div.className='chat-msg user';div.textContent=text;
  msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}

function typeResponse(html){
  const msgs=document.getElementById('chatMsgs');
  const loading=document.createElement('div');
  loading.className='chat-msg bot loading';
  loading.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  msgs.appendChild(loading);msgs.scrollTop=msgs.scrollHeight;
  const delay=500+Math.random()*500;
  setTimeout(()=>{
    loading.remove();
    const div=document.createElement('div');div.className='chat-msg bot';div.style.opacity='0';div.innerHTML=html;
    msgs.appendChild(div);
    requestAnimationFrame(()=>{div.style.transition='opacity .3s ease,transform .3s ease';div.style.transform='translateY(8px)';
      requestAnimationFrame(()=>{div.style.opacity='1';div.style.transform='translateY(0)';playEquals()})});
    msgs.scrollTop=msgs.scrollHeight;
  },delay);
}

// ===== 3D HOVER TILT CARDS =====
document.querySelectorAll('[data-tilt]').forEach(card=>{
  const shine=card.querySelector('.hover-card-shine');
  card.addEventListener('mousemove',e=>{
    const rect=card.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width;
    const y=(e.clientY-rect.top)/rect.height;
    const tiltX=(y-.5)*-20; // -10 to 10 degrees
    const tiltY=(x-.5)*20;
    card.style.transform=`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03,1.03,1.03)`;
    // Shine follows cursor
    if(shine){
      shine.style.background=`radial-gradient(circle at ${x*100}% ${y*100}%,rgba(255,255,255,.15) 0%,transparent 60%)`;
    }
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    if(shine)shine.style.background='none';
  });
  // Touch support
  card.addEventListener('touchmove',e=>{
    const touch=e.touches[0];
    const rect=card.getBoundingClientRect();
    const x=(touch.clientX-rect.left)/rect.width;
    const y=(touch.clientY-rect.top)/rect.height;
    const tiltX=(y-.5)*-15;
    const tiltY=(x-.5)*15;
    card.style.transform=`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`;
  },{passive:true});
  card.addEventListener('touchend',()=>{
    card.style.transform='perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}})});

// ===== GOLD COIN RAIN =====
function spawnCoinRain(count=25,origin=null){
  const canvas=document.getElementById('coinCanvas');
  const symbols=['£','£','£','$','¢','£'];
  const sizes=['','big','small','','small',''];
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const coin=document.createElement('div');
      const size=sizes[Math.floor(Math.random()*sizes.length)];
      coin.className='coin'+(size?' '+size:'');
      // Position: spread from origin or random
      let leftPos;
      if(origin){
        const rect=origin.getBoundingClientRect();
        leftPos=rect.left+rect.width/2+(Math.random()-0.5)*300;
      }else{
        leftPos=Math.random()*window.innerWidth;
      }
      const fallDur=2+Math.random()*2;
      const spinDur=0.4+Math.random()*0.8;
      const drift=(Math.random()-0.5)*120;
      const wobble=(Math.random()-0.5)*20;
      coin.style.left=leftPos+'px';
      coin.style.setProperty('--fall-dur',fallDur+'s');
      coin.style.setProperty('--fall-delay','0s');
      coin.style.setProperty('--drift',drift+'px');
      coin.style.setProperty('--spin-dur',spinDur+'s');
      coin.style.setProperty('--wobble',wobble+'deg');
      coin.innerHTML=`<div class="coin-inner"><div class="coin-face">${symbols[Math.floor(Math.random()*symbols.length)]}</div></div>`;
      canvas.appendChild(coin);
      // Add a tiny flash when coin reaches ~80% of viewport
      setTimeout(()=>{
        const flash=document.createElement('div');
        flash.className='coin-flash';
        flash.style.left=(leftPos+drift*0.8)+'px';
        flash.style.top=(window.innerHeight*0.85)+'px';
        canvas.appendChild(flash);
        setTimeout(()=>flash.remove(),500);
      },(fallDur*0.8)*1000);
      // Remove coin
      setTimeout(()=>coin.remove(),(fallDur+0.5)*1000);
    },i*60+Math.random()*80);
  }
}

// Trigger coin rain on page load (hero entrance)
window.addEventListener('load',()=>{
  setTimeout(()=>spawnCoinRain(20),1500);
});

// Trigger coin rain on CTA button clicks
document.querySelectorAll('.btn-gold,.btn-navy,.btn-white,.btn-outline-w').forEach(btn=>{
  btn.addEventListener('click',function(e){
    spawnCoinRain(15,this);
  });
});

// ===== WALKING CALCY =====
const walkingCalcy=document.getElementById('walkingCalcy');
const wcSpeech=document.getElementById('wcSpeech');
const wcMessages=[
  '💬 Need tax help? Click me!',
  '🧮 I can save you £4,200!',
  '📅 Self-assessment due soon!',
  '💷 Free tax advice inside!',
  '👋 Hi there! Click me!',
  '📊 Check our free tools!',
  '🎯 Sole trader or Ltd?',
  '💰 Know your tax rates?'
];
let wcMsgIdx=0;
let wcPaused=false;
let wcTimeout=null;

function startCalcyWalk(){
  if(document.getElementById('chatbot').classList.contains('open'))return;
  walkingCalcy.style.left='-120px';
  walkingCalcy.classList.remove('paused','waving');
  walkingCalcy.classList.add('walking');
  // Change speech bubble message
  wcMsgIdx=(wcMsgIdx+1)%wcMessages.length;
  wcSpeech.textContent=wcMessages[wcMsgIdx];
  // Random pause in the middle
  const pauseAt=3000+Math.random()*5000;
  wcTimeout=setTimeout(()=>{
    walkingCalcy.classList.remove('walking');
    walkingCalcy.classList.add('paused');
    // Save current position
    const rect=walkingCalcy.getBoundingClientRect();
    walkingCalcy.style.left=rect.left+'px';
    // Wave
    setTimeout(()=>{
      walkingCalcy.classList.add('waving');
      setTimeout(()=>walkingCalcy.classList.remove('waving'),1200);
    },500);
    // Resume walking after pause
    setTimeout(()=>{
      if(wcPaused)return;
      walkingCalcy.classList.remove('paused');
      // Continue walking to the right
      walkingCalcy.style.transition='left 12s linear';
      walkingCalcy.style.left='calc(100vw + 120px)';
      // Schedule next walk
      setTimeout(()=>{
        walkingCalcy.style.transition='none';
        walkingCalcy.classList.remove('walking');
        scheduleNextWalk();
      },12000);
    },3000);
  },pauseAt);
}

function scheduleNextWalk(){
  const delay=15000+Math.random()*20000; // 15-35 seconds between walks
  setTimeout(()=>startCalcyWalk(),delay);
}

// Hover: show speech bubble (handled by CSS)
walkingCalcy.addEventListener('mouseenter',()=>{
  walkingCalcy.classList.add('waving');
  // Play a little sound
  try{playClick()}catch(e){}
});
walkingCalcy.addEventListener('mouseleave',()=>{
  walkingCalcy.classList.remove('waving');
});

// Click: open chatbot + spawn coins
walkingCalcy.addEventListener('click',()=>{
  spawnCoinRain(12,walkingCalcy);
  toggleChat();
  // Hide walking calcy when chat is open
  walkingCalcy.style.opacity='0';
  walkingCalcy.style.pointerEvents='none';
  setTimeout(()=>{
    walkingCalcy.style.transition='none';
    walkingCalcy.style.left='-120px';
    walkingCalcy.classList.remove('walking','paused','waving');
  },500);
});

// When chat closes, bring calcy back
const origToggle=toggleChat;
// Start first walk after 5 seconds
window.addEventListener('load',()=>{
  setTimeout(()=>startCalcyWalk(),5000);
});

// Re-enable walking calcy when chatbot closes
const chatObs=new MutationObserver(()=>{
  if(!document.getElementById('chatbot').classList.contains('open')){
    walkingCalcy.style.opacity='1';
    walkingCalcy.style.pointerEvents='all';
    setTimeout(()=>startCalcyWalk(),8000);
  }
});
chatObs.observe(document.getElementById('chatbot'),{attributes:true,attributeFilter:['class']});

