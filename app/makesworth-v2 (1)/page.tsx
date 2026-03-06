// @ts-nocheck
/* eslint-disable */
"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      <Script src="/page-scripts.js" strategy="afterInteractive" />
      {/* NAV */}
      <nav className="nav" id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo"><div className="icon">M</div><span>Makesworth</span></a>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#tools">Free Tools</a>
              <a href="#services">Services</a>
              <a href="#portal">Client Portal</a>
              <a href="#team">Team</a>
              <a href="#contact" className="nav-cta">Free Consultation</a>
            </div>
            <button className="mob-toggle" onClick={() => { document.body.classList.toggle('menu-open') }} aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>
      
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        {/* Particle canvas */}
        <canvas className="hero-particles" id="heroParticles" />
        {/* Floating geometric shapes */}
        <div className="hero-shapes">
          <div className="hero-shape circle s1"></div>
          <div className="hero-shape s2"></div>
          <div className="hero-shape circle s3"></div>
          <div className="hero-shape s4"></div>
          <div className="hero-shape circle s5"></div>
          <div className="hero-shape s6"></div>
        </div>
        <div className="hero-content container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge hero-fade d1"><span className="dot"></span>Chartered Accountants — Harrow & Milton Keynes</div>
              <h1>
                <span className="hero-text-reveal"><span className="hero-text-line">Keep More Money.</span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Grow <em>Faster.</em></span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Worry Less.</span></span>
              </h1>
              <p className="hero-sub hero-fade d2">We don't just do your accounts — we help you build a more profitable business, pay less tax, and get your weekends back.</p>
              <div className="hero-outcomes hero-fade d3">
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Save avg. £4,200 in tax
                </div>
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  10+ hrs saved monthly
                </div>
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  100% MTD compliant
                </div>
              </div>
              <div className="hero-actions hero-fade d4">
                <a href="#contact" className="btn btn-gold">Book Free Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                <a href="#tools" className="btn btn-outline-w">Try Free Tax Tools</a>
              </div>
            </div>
            <div className="hero-visual hero-fade d4">
              <div className="hero-card">
                <div className="hero-stats">
                  <div className="hero-stat"><span className="num" data-count="13">0</span><span className="lbl">Years of Excellence</span></div>
                  <div className="hero-stat"><span className="num" data-count="2500">0</span><span className="lbl">Clients Worldwide</span></div>
                  <div className="hero-divider"></div>
                  <div className="hero-stat"><span className="num" data-count="40">0</span><span className="lbl">Awards Earned</span></div>
                  <div className="hero-stat"><span className="num" data-count="98">0</span><span className="lbl">% Client Retention</span></div>
                </div>
                <div className="hero-trust"><p>Trusted Partners</p><div className="hero-trust-logos"><span>Xero</span><span>Dext</span><span>Barclays</span><span>Stripe</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* OUTCOME STRIP */}
      <section className="outcome-strip">
        <div className="container">
          <div className="outcome-cards">
            <div className="outcome-card reveal">
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div className="oc-num">£4,200+</div>
              <div className="oc-txt">Average annual tax savings per client</div>
            </div>
            <div className="outcome-card reveal" style={{transitionDelay:".1s"}}>
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div className="oc-num">10+ hrs</div>
              <div className="oc-txt">Monthly time saved on financial admin</div>
            </div>
            <div className="outcome-card reveal" style={{transitionDelay:".2s"}}>
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <div className="oc-num">100%</div>
              <div className="oc-txt">HMRC compliant with zero penalties</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3D HOVER SHOWCASE — WHY CHOOSE US */}
      <section className="showcase-3d" id="showcase">
        <div className="container" style={{textAlign:"center",marginBottom:"40px"}}>
          <div className="s-label reveal">Why Makesworth</div>
          <h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Six Reasons Clients <em>Choose Us</em></h2>
          <p className="s-desc reveal" style={{transitionDelay:".15s",maxWidth:"560px",margin:"12px auto 0"}}>We're not just accountants — we're your financial growth partners.</p>
        </div>
        <div className="hover-grid" id="hoverGrid">
          {/* Card 1: Savings */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(200,150,62,.4),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"40px",height:"40px",background:"rgba(200,150,62,.08)",top:"15%",left:"60%",animationDelay:"0s"}}></div>
            <div className="hover-card-particle" style={{width:"20px",height:"20px",background:"rgba(200,150,62,.06)",top:"40%",left:"20%",animationDelay:"1.5s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">💰</div>
              <div className="hover-card-title">Avg. £4,200 Saved</div>
              <div className="hover-card-desc">Our clients save an average of £4,200 per year through smart tax planning and allowance optimisation.</div>
            </div>
          </div>
          {/* Card 2: Speed */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(46,125,91,.4),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"30px",height:"30px",background:"rgba(46,125,91,.08)",top:"20%",left:"70%",animationDelay:".3s"}}></div>
            <div className="hover-card-particle" style={{width:"24px",height:"24px",background:"rgba(46,125,91,.06)",top:"50%",left:"15%",animationDelay:"2s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">⚡</div>
              <div className="hover-card-title">4-Hour Response</div>
              <div className="hover-card-desc">No waiting days for a reply. Our team responds to every query within 4 business hours, guaranteed.</div>
            </div>
          </div>
          {/* Card 3: Tech */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(37,99,235,.4),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"35px",height:"35px",background:"rgba(37,99,235,.08)",top:"10%",left:"55%",animationDelay:".6s"}}></div>
            <div className="hover-card-particle" style={{width:"18px",height:"18px",background:"rgba(37,99,235,.06)",top:"55%",left:"25%",animationDelay:"2.5s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">🤖</div>
              <div className="hover-card-title">AI-Powered</div>
              <div className="hover-card-desc">Xero, Dext, and AI tools automate your bookkeeping. Making Tax Digital ready from day one.</div>
            </div>
          </div>
          {/* Card 4: Portal */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(139,92,246,.4),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"28px",height:"28px",background:"rgba(139,92,246,.08)",top:"25%",left:"65%",animationDelay:".9s"}}></div>
            <div className="hover-card-particle" style={{width:"22px",height:"22px",background:"rgba(139,92,246,.06)",top:"45%",left:"10%",animationDelay:"1.8s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">🔐</div>
              <div className="hover-card-title">Client Portal</div>
              <div className="hover-card-desc">Upload documents, track deadlines, e-sign, and see real-time status of every filing. All in one secure place.</div>
            </div>
          </div>
          {/* Card 5: Support */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(236,72,153,.35),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"32px",height:"32px",background:"rgba(236,72,153,.07)",top:"18%",left:"50%",animationDelay:"1.2s"}}></div>
            <div className="hover-card-particle" style={{width:"20px",height:"20px",background:"rgba(236,72,153,.05)",top:"52%",left:"30%",animationDelay:"3s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">🤝</div>
              <div className="hover-card-title">Dedicated Manager</div>
              <div className="hover-card-desc">One person who knows your business inside out. No call centres, no explaining yourself twice.</div>
            </div>
          </div>
          {/* Card 6: Advisory */}
          <div className="hover-card" data-tilt>
            <div className="hover-card-bg" style={{background:"linear-gradient(160deg,rgba(245,158,11,.4),rgba(11,29,58,.9))"}}></div>
            <div className="hover-card-overlay"></div>
            <div className="hover-card-shine"></div>
            <div className="hover-card-particle" style={{width:"36px",height:"36px",background:"rgba(245,158,11,.08)",top:"12%",left:"58%",animationDelay:"1.5s"}}></div>
            <div className="hover-card-particle" style={{width:"16px",height:"16px",background:"rgba(245,158,11,.05)",top:"48%",left:"18%",animationDelay:"2.2s"}}></div>
            <div className="hover-card-content">
              <div className="hover-card-icon">📈</div>
              <div className="hover-card-title">Growth Advisory</div>
              <div className="hover-card-desc">Strategic financial planning, cashflow forecasting, and business growth advice — not just compliance.</div>
            </div>
          </div>
        </div>
        <div className="showcase-3d-hint reveal">✦ hover over the cards ✦</div>
      </section>
      
      {/* FREE TOOLS */}
      <section className="tools" id="tools">
        <div className="container">
          <div className="tools-header">
            <div className="s-label reveal">Free Financial Tools</div>
            <h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Calculate Your <em>Savings</em> Instantly</h2>
            <p className="s-desc reveal" style={{transitionDelay:".15s"}}>Use our free tools to estimate your take-home pay, compare business structures, and check your VAT obligations — no signup needed.</p>
          </div>
          <div className="tools-tabs reveal" style={{transitionDelay:".2s"}}>
            <button className="tool-tab active" onClick={() => { switchTool('takehome',this) }}>💰 Take-Home Pay</button>
            <button className="tool-tab" onClick={() => { switchTool('compare',this) }}>⚖️ Sole Trader vs Ltd</button>
            <button className="tool-tab" onClick={() => { switchTool('vat',this) }}>📊 VAT Checker</button>
            <button className="tool-tab" onClick={() => { switchTool('dividend',this) }}>💼 Dividend vs Salary</button>
          </div>
      
          {/* TAKE HOME PAY CALCULATOR */}
          <div className="tool-panel active" id="tool-takehome">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>Take-Home Pay Calculator</h3>
                <p>Find out exactly how much you'll keep after tax and NI.</p>
                <div className="tf-group"><label>Annual Gross Salary (£)</label><input type="number" id="th-salary" value="45000" min="0" /></div>
                <div className="tf-row">
                  <div className="tf-group"><label>Tax Code</label><input type="text" id="th-taxcode" value="1257L" /></div>
                  <div className="tf-group"><label>Pension Contribution (%)</label><input type="number" id="th-pension" value="5" min="0" max="100" /></div>
                </div>
                <div className="tf-group"><label>Student Loan</label><select id="th-student"><option value="0">None</option><option value="1">Plan 1</option><option value="2">Plan 2</option><option value="4">Plan 4</option></select></div>
                <button className="tf-btn" onClick={() => { calcTakeHome() }}>Calculate Take-Home Pay</button>
              </div>
              <div className="tool-result" id="th-result">
                <h3>Your Results</h3>
                <div id="th-results-body">
                  <p style={{color:"var(--grey-400)",fontSize:".9rem",textAlign:"center",padding:"30px 0"}}>Enter your details and click calculate to see your results.</p>
                </div>
              </div>
            </div>
          </div>
      
          {/* SOLE TRADER VS LTD COMPARISON */}
          <div className="tool-panel" id="tool-compare">
            <div className="compare-grid">
              <div className="compare-col sole">
                <h3>Sole Trader <span className="badge badge-blue">Simple</span></h3>
                <p>Best for freelancers earning under £50k</p>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Simple setup — register with HMRC for free</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Less paperwork and reporting requirements</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Keep all profits after tax</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Full privacy — no public accounts filing</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Unlimited personal liability for debts</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Higher tax rates above £50,270 (40%)</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Less tax-efficient for higher earnings</span></div>
              </div>
              <div className="compare-col ltd">
                <h3>Limited Company <span className="badge badge-gold">Tax Efficient</span></h3>
                <p>Best for contractors & businesses earning £50k+</p>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Limited liability — personal assets protected</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Corporation Tax at 19-25% (lower than income tax)</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Tax-efficient salary + dividend strategy</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>More credible to larger clients & contracts</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>More admin — annual accounts & confirmation statement</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Public filing — accounts visible on Companies House</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Director responsibilities under company law</span></div>
              </div>
              <div className="compare-verdict">
                <p>Not sure which is right for you? <strong>Most contractors earning over £50k save £3,000–£8,000/year</strong> with a limited company. Let us run the numbers for your specific situation.</p>
                <a href="#contact" className="btn btn-gold" style={{marginTop:"8px"}}>Get Free Personalised Advice <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>
          </div>
      
          {/* VAT CHECKER */}
          <div className="tool-panel" id="tool-vat">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>VAT Registration Checker</h3>
                <p>Check if you need to register for VAT and which scheme suits you.</p>
                <div className="tf-group"><label>Annual Turnover (£)</label><input type="number" id="vat-turnover" value="75000" min="0" /></div>
                <div className="tf-group"><label>Annual Expenses (£)</label><input type="number" id="vat-expenses" value="15000" min="0" /></div>
                <div className="tf-group"><label>Business Type</label><select id="vat-type"><option value="services">Services</option><option value="goods">Goods / Retail</option><option value="mixed">Mixed</option></select></div>
                <button className="tf-btn" onClick={() => { calcVAT() }}>Check VAT Status</button>
              </div>
              <div className="tool-result" id="vat-result">
                <h3>Your VAT Status</h3>
                <div id="vat-results-body"><p style={{color:"var(--grey-400)",fontSize:".9rem",textAlign:"center",padding:"30px 0"}}>Enter your turnover to check your VAT obligations.</p></div>
              </div>
            </div>
          </div>
      
          {/* DIVIDEND VS SALARY */}
          <div className="tool-panel" id="tool-dividend">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>Dividend vs Salary Optimiser</h3>
                <p>Find the most tax-efficient way to pay yourself from your limited company.</p>
                <div className="tf-group"><label>Company Profit Before Salary (£)</label><input type="number" id="div-profit" value="80000" min="0" /></div>
                <div className="tf-group"><label>Other Income (£)</label><input type="number" id="div-other" value="0" min="0" /></div>
                <button className="tf-btn" onClick={() => { calcDividend() }}>Optimise My Pay</button>
              </div>
              <div className="tool-result" id="div-result">
                <h3>Optimal Strategy</h3>
                <div id="div-results-body"><p style={{color:"var(--grey-400)",fontSize:".9rem",textAlign:"center",padding:"30px 0"}}>Enter your company profit to see the most tax-efficient strategy.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ADVISORY */}
      <section className="advisory" id="about">
        <div className="container">
          <div className="advisory-grid">
            <div className="advisory-visual reveal-l">
              <img src="images/advisory.jpg" alt="Advisory" className="advisory-img" />
              <div className="advisory-float">
                <div className="advisory-float-stat">80%</div>
                <p>of clients now demand advisory services beyond compliance</p>
              </div>
            </div>
            <div className="advisory-text reveal-r">
              <div className="s-label">More Than Accountants</div>
              <h2 className="s-title">We Don't Just Do Your Books.<br />We Help You <em>Grow.</em></h2>
              <p className="s-desc">The accounting industry has changed. You don't need someone who just files your returns — you need a strategic partner who proactively finds savings, spots opportunities, and helps your business scale.</p>
              <div className="adv-cards">
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
                  <div><h4>Proactive Tax Planning</h4><p>We don't wait until year-end. Quarterly reviews to minimise your tax bill legally.</p></div>
                </div>
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
                  <div><h4>Business Growth Strategy</h4><p>Cash flow forecasting, funding support, and actionable insights to scale.</p></div>
                </div>
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
                  <div><h4>Cloud-First Technology</h4><p>Real-time dashboards via Xero, Dext & automated workflows. See your numbers anytime.</p></div>
                </div>
              </div>
              <a href="#contact" className="btn btn-navy">Let's Talk Strategy <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CLIENT PORTAL */}
      <section className="portal" id="portal">
        <div className="container">
          <div className="portal-grid">
            <div className="portal-text reveal-l">
              <div className="s-label">Client Portal</div>
              <h2 className="s-title">Your Finances, <em>At Your Fingertips</em></h2>
              <p className="s-desc">No more email chains, lost documents, or wondering where things stand. Your own secure, branded portal to manage everything in one place.</p>
              <div className="portal-features">
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Upload documents securely — no more email attachments</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Track your tax return status in real time</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>See all deadlines and never miss a filing date</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Message your accountant directly — responses within 4 hrs</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>E-sign documents without printing a single page</div>
              </div>
              <a href="#contact" className="btn btn-gold">Get Portal Access <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="portal-mockup reveal-r">
              <div className="portal-mock-header">
                <h4>📂 Makesworth Portal</h4>
                <div className="status">● All systems live</div>
              </div>
              <div className="portal-mock-items">
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
                    <div className="pmi-info"><h5>Year-End Accounts 2024/25</h5><span>Updated 2 days ago</span></div>
                  </div>
                  <div className="pmi-status done">✓ Complete</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon tax"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></div>
                    <div className="pmi-info"><h5>Self Assessment Tax Return</h5><span>Due: 31 Jan 2026</span></div>
                  </div>
                  <div className="pmi-status pending">⏳ In Progress</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon pay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1"/></svg></div>
                    <div className="pmi-info"><h5>VAT Return Q3</h5><span>Submitted 12 Feb 2026</span></div>
                  </div>
                  <div className="pmi-status done">✓ Filed</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></div>
                    <div className="pmi-info"><h5>Engagement Letter</h5><span>Awaiting your signature</span></div>
                  </div>
                  <div className="pmi-status review">✍ Sign Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div><div className="s-label reveal">What We Do</div><h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Expert Solutions for<br /><em>Every Financial Need</em></h2></div>
            <a href="https://mw.makesworth.uk/services/" className="btn btn-navy reveal" style={{transitionDelay:".2s"}}>All Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
          <div className="services-grid">
            <div className="svc-card reveal"><div className="svc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></div><h3>Accounting & Bookkeeping</h3><p>Year-end accounts, cloud bookkeeping, and MTD-compliant digital records.</p><a href="#" className="svc-link">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
            <div className="svc-card reveal" style={{transitionDelay:".1s"}}><div className="svc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div><h3>Tax & Compliance</h3><p>VAT, payroll, pensions, R&D tax credits, and CIS rebates.</p><a href="#" className="svc-link">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
            <div className="svc-card reveal" style={{transitionDelay:".2s"}}><div className="svc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><h3>Business Advisory</h3><p>Cash flow forecasting, growth planning, and strategic financial guidance.</p><a href="#" className="svc-link">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
            <div className="svc-card reveal" style={{transitionDelay:".3s"}}><div className="svc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><h3>Audit & Assurance</h3><p>Statutory, non-statutory, internal, and specialist audit services.</p><a href="#" className="svc-link">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIALS — 3D CAROUSEL */}
      <section className="testimonials">
        <div className="container">
          <div className="test-header"><div className="s-label reveal" style={{justifyContent:"center"}}>Client Stories</div><h2 className="s-title reveal" style={{transitionDelay:".1s"}}>What Our Clients <em>Say</em></h2></div>
          <div className="t3d-scene reveal" style={{transitionDelay:".2s"}} id="t3dScene">
            <div className="t3d-carousel" id="t3dCarousel">
              <div className="t3d-card active" data-index="0">
                <div className="t3d-card-inner">
                  <div className="t3d-quote-mark">"</div>
                  <div className="t3d-stars">★ ★ ★ ★ ★</div>
                  <p className="t3d-text">Great service — they made my first tax declaration smooth and easy. It's always easy to reach them and ask any questions you need.</p>
                  <div className="t3d-author"><div className="t3d-avatar"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/01/rebecca-1.png" alt="Rebecca M" /></div><div><div className="t3d-name">Rebecca M</div><span className="t3d-role">Client</span></div></div>
                </div>
              </div>
              <div className="t3d-card" data-index="1">
                <div className="t3d-card-inner">
                  <div className="t3d-quote-mark">"</div>
                  <div className="t3d-stars">★ ★ ★ ★ ★</div>
                  <p className="t3d-text">Very professional and attentive. If you need a professional accountant, I recommend them wholeheartedly. Outstanding service from the whole team.</p>
                  <div className="t3d-author"><div className="t3d-avatar"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/01/Roberto-Baptista.png" alt="Roberto" /></div><div><div className="t3d-name">Roberto Baptista</div><span className="t3d-role">Client</span></div></div>
                </div>
              </div>
              <div className="t3d-card" data-index="2">
                <div className="t3d-card-inner">
                  <div className="t3d-quote-mark">"</div>
                  <div className="t3d-stars">★ ★ ★ ★ ★</div>
                  <p className="t3d-text">Makesworth have been our accountants for many years. No matter how small a problem, they were there ready to help. Very professional yet human.</p>
                  <div className="t3d-author"><div className="t3d-avatar"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/01/mihaela-solga.png" alt="Mihaela" /></div><div><div className="t3d-name">Mihaela Solga</div><span className="t3d-role">Long-term Client</span></div></div>
                </div>
              </div>
              <div className="t3d-card" data-index="3">
                <div className="t3d-card-inner">
                  <div className="t3d-quote-mark">"</div>
                  <div className="t3d-stars">★ ★ ★ ★ ★</div>
                  <p className="t3d-text">Excellent accounting firm! They helped me set up my limited company and handled everything from VAT registration to payroll. Couldn't be happier.</p>
                  <div className="t3d-author"><div className="t3d-avatar" style={{background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1.1rem"}}>D</div><div><div className="t3d-name">David K</div><span className="t3d-role">Ltd Company Director</span></div></div>
                </div>
              </div>
              <div className="t3d-card" data-index="4">
                <div className="t3d-card-inner">
                  <div className="t3d-quote-mark">"</div>
                  <div className="t3d-stars">★ ★ ★ ★ ★</div>
                  <p className="t3d-text">The team saved me over £5,000 in my first year through proper tax planning. They're proactive, knowledgeable, and always available when I need them.</p>
                  <div className="t3d-author"><div className="t3d-avatar" style={{background:"var(--green)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1.1rem"}}>S</div><div><div className="t3d-name">Sarah T</div><span className="t3d-role">Freelancer</span></div></div>
                </div>
              </div>
            </div>
            <div className="t3d-reflection"></div>
          </div>
          <div className="t3d-nav">
            <button className="t3d-btn" onClick={() => { rotateCarousel(-1) }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg></button>
            <div className="t3d-dots" id="t3dDots">
              <span className="t3d-dot active" onClick={() => { goToCard(0) }}></span>
              <span className="t3d-dot" onClick={() => { goToCard(1) }}></span>
              <span className="t3d-dot" onClick={() => { goToCard(2) }}></span>
              <span className="t3d-dot" onClick={() => { goToCard(3) }}></span>
              <span className="t3d-dot" onClick={() => { goToCard(4) }}></span>
            </div>
            <button className="t3d-btn" onClick={() => { rotateCarousel(1) }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg></button>
          </div>
        </div>
      </section>
      
      {/* AWARDS TICKER */}
      <section className="awards-ticker">
        <div className="container" style={{textAlign:"center",marginBottom:"0"}}>
          <div className="s-label reveal">Recognised Excellence</div>
          <h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Award-Winning <em>Accountants</em></h2>
        </div>
        {/* Row 1: Text cards scrolling left */}
        <div className="awards-ticker-outer">
          <div className="awards-ticker-row scroll-left">
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🏆</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Fast-track Firm of the Year 2021</div><div className="awards-ticker-sub">Accounting Excellence</div></div><div className="awards-ticker-badge" style={{background:"#C8963E"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">⭐</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Client Service Award (Small Firms) 2023</div><div className="awards-ticker-sub">Accounting Excellence</div></div><div className="awards-ticker-badge" style={{background:"#2563EB"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🌟</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">FSB Celebrating Small Business Awards</div><div className="awards-ticker-sub">Community Award — London</div></div><div className="awards-ticker-badge" style={{background:"#2E7D5B"}}>FINALIST</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🏅</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Award Winner 2024</div><div className="awards-ticker-sub">FSB Celebrating Small Business</div></div><div className="awards-ticker-badge" style={{background:"#8B5CF6"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">💚</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Community Impact Winner</div><div className="awards-ticker-sub">Small Business Awards</div></div><div className="awards-ticker-badge" style={{background:"#ec4899"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🌍</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">For Our Planet — Gold Award 2024</div><div className="awards-ticker-sub">Ecologi Sustainability</div></div><div className="awards-ticker-badge" style={{background:"#22c55e"}}>GOLD</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">📊</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Top Small Accounting Firm</div><div className="awards-ticker-sub">Recognised Year on Year</div></div><div className="awards-ticker-badge" style={{background:"#f97316"}}>TOP</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🤝</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">98% Client Satisfaction Rate</div><div className="awards-ticker-sub">Verified Client Reviews</div></div><div className="awards-ticker-badge" style={{background:"#06b6d4"}}>VERIFIED</div></div>
            {/* Duplicate for seamless loop */}
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🏆</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Fast-track Firm of the Year 2021</div><div className="awards-ticker-sub">Accounting Excellence</div></div><div className="awards-ticker-badge" style={{background:"#C8963E"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">⭐</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Client Service Award (Small Firms) 2023</div><div className="awards-ticker-sub">Accounting Excellence</div></div><div className="awards-ticker-badge" style={{background:"#2563EB"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🌟</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">FSB Celebrating Small Business Awards</div><div className="awards-ticker-sub">Community Award — London</div></div><div className="awards-ticker-badge" style={{background:"#2E7D5B"}}>FINALIST</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🏅</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Award Winner 2024</div><div className="awards-ticker-sub">FSB Celebrating Small Business</div></div><div className="awards-ticker-badge" style={{background:"#8B5CF6"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">💚</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Community Impact Winner</div><div className="awards-ticker-sub">Small Business Awards</div></div><div className="awards-ticker-badge" style={{background:"#ec4899"}}>WINNER</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🌍</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">For Our Planet — Gold Award 2024</div><div className="awards-ticker-sub">Ecologi Sustainability</div></div><div className="awards-ticker-badge" style={{background:"#22c55e"}}>GOLD</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">📊</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">Top Small Accounting Firm</div><div className="awards-ticker-sub">Recognised Year on Year</div></div><div className="awards-ticker-badge" style={{background:"#f97316"}}>TOP</div></div>
            <div className="awards-ticker-card"><div className="awards-ticker-icon">🤝</div><div className="awards-ticker-divider"></div><div><div className="awards-ticker-title">98% Client Satisfaction Rate</div><div className="awards-ticker-sub">Verified Client Reviews</div></div><div className="awards-ticker-badge" style={{background:"#06b6d4"}}>VERIFIED</div></div>
          </div>
        </div>
        {/* Row 2: Award badge images scrolling right */}
        <div className="awards-ticker-outer">
          <div className="awards-img-row scroll-left" style={{animationDirection:"reverse",animationDuration:"25s"}}>
            <img src="images/awards.jpg" alt="Makesworth Awards — Community Impact, FSB 2024, Accounting Excellence 2021, Client Service 2023" className="awards-img" />
            <img src="images/awards_2.jpg" alt="Makesworth Awards — Accounting Excellence, FSB, Ecologi Gold 2024, Community Impact" className="awards-img" />
            <img src="images/awards.jpg" alt="Makesworth Awards" className="awards-img" />
            <img src="images/awards_2.jpg" alt="Makesworth Awards" className="awards-img" />
            <img src="images/awards.jpg" alt="Makesworth Awards" className="awards-img" />
            <img src="images/awards_2.jpg" alt="Makesworth Awards" className="awards-img" />
          </div>
        </div>
      </section>
      
      {/* TEAM */}
      <section className="team" id="team">
        <div className="container">
          <div className="team-header"><div className="s-label reveal">Our Team</div><h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Meet the <em>Experts</em></h2></div>
          <div className="team-grid">
            <div className="tm-card reveal"><div className="tm-img"><img src="images/sanjay_sah.jpg" alt="Sanjay Sah" /></div><h3>Sanjay Sah</h3><span className="role">Managing Director</span></div>
            <div className="tm-card reveal" style={{transitionDelay:".1s"}}><div className="tm-img"><img src="images/rakesh_gurung.jpg" alt="Rakesh Gurung" /></div><h3>Rakesh Gurung</h3><span className="role">Practice/Business Development Manager</span></div>
            <div className="tm-card reveal" style={{transitionDelay:".2s"}}><div className="tm-img"><img src="images/rajesh_sah.jpg" alt="Rajesh Sah" /></div><h3>Rajesh Sah</h3><span className="role">Branch Operations Manager</span></div>
            <div className="tm-card reveal" style={{transitionDelay:".3s"}}><div className="tm-img"><img src="images/indra_giri.jpg" alt="Indra Giri" /></div><h3>Indra Giri</h3><span className="role">Senior Consultant</span></div>
          </div>
        </div>
      </section>
      
      {/* BLOG */}
      <section className="blog">
        <div className="container">
          <div className="blog-header"><div><div className="s-label reveal">Insights</div><h2 className="s-title reveal" style={{transitionDelay:".1s"}}>Latest <em>Articles</em></h2></div><a href="https://mw.makesworth.uk/blog/" className="btn btn-navy reveal" style={{transitionDelay:".15s"}}>All Articles <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
          <div className="blog-grid">
            <div className="bl-card reveal"><div className="bl-img"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/02/Understanding-the-VAT-Flat-Rate-Scheme-Is-It-Right-for-Your-Business.jpg" alt="" /></div><div className="bl-body"><div className="bl-meta"><span className="cat">Blog</span><span>Feb 2025</span></div><h3>Understanding the VAT Flat Rate Scheme: Is It Right for Your Business?</h3><a href="#" className="bl-link">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div>
            <div className="bl-card reveal" style={{transitionDelay:".1s"}}><div className="bl-img"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/01/Struggling-to-Pay-Your-Tax-Bill-Heres-What-You-Can-Do-1.jpg" alt="" /></div><div className="bl-body"><div className="bl-meta"><span className="cat">Blog</span><span>Jan 2025</span></div><h3>Struggling to Pay Your Tax Bill? Here's What You Can Do</h3><a href="#" className="bl-link">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div>
            <div className="bl-card reveal" style={{transitionDelay:".2s"}}><div className="bl-img"><img src="https://mw.makesworth.uk/wp-content/uploads/2025/01/Simplifying-VAT-Compliance-Understanding-the-VAT-Flat-Rate-Scheme.jpg" alt="" /></div><div className="bl-body"><div className="bl-meta"><span className="cat">Blog</span><span>Jan 2025</span></div><h3>Simplifying VAT Compliance: Understanding the VAT Flat Rate Scheme</h3><a href="#" className="bl-link">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div>
          </div>
        </div>
      </section>
      
      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal-l">
              <div className="s-label">Get in Touch</div>
              <h2 className="s-title">Let's Start a <em>Conversation</em></h2>
              <p className="s-desc" style={{marginTop:"12px"}}>Book your free consultation. We respond within 4 hours on business days.</p>
              <div className="contact-cards">
                <div className="cc"><div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><h4>Head Office — Harrow</h4><p>Unit 101, Cervantes House, 5-9 Headstone Rd, HA1 1PD</p></div></div>
                <div className="cc"><div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><h4>Milton Keynes Office</h4><p>29 Linford Forum, 18 Rockingham Dr, MK14 6LY</p></div></div>
                <div className="cc"><div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><div><h4>Call Us</h4><a href="tel:02079938850"><strong>020 7993 8850</strong></a><p><a href="mailto:info@makesworth.co.uk">info@makesworth.co.uk</a></p></div></div>
              </div>
            </div>
            <div className="reveal-r">
              <div className="contact-form">
                <h3>Request a Free Quote</h3>
                <p>We'll get back within 4 hours on business days.</p>
                <form onSubmit={(e) => { e.preventDefault(); event.preventDefault();alert('Thank you! We will contact you shortly.') }}>
                  <div className="cf-row"><div className="cf-group"><label>Full Name</label><input type="text" placeholder="John Smith" required /></div><div className="cf-group"><label>Phone</label><input type="tel" placeholder="+44 7XXX XXXXXX" /></div></div>
                  <div className="cf-row"><div className="cf-group"><label>Email</label><input type="email" placeholder="john@company.co.uk" required /></div><div className="cf-group"><label>Business Name</label><input type="text" placeholder="Your Company Ltd" /></div></div>
                  <div className="cf-row"><div className="cf-group full"><label>How can we help?</label><textarea placeholder="Tell us about your requirements..."></textarea></div></div>
                  <div className="cf-submit"><button type="submit" className="btn btn-gold">Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="cta"><div className="container"><div className="cta-content reveal"><h2>Ready to Keep More of Your Money?</h2><p>Book your free consultation — we'll show you exactly how much you could save.</p><a href="#contact" className="btn btn-white">Get Started Today <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div></section>
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand"><a href="#" className="nav-logo" style={{color:"var(--white)"}}><div className="icon">M</div><span>Makesworth</span></a><p>Chartered accountants helping you keep more, grow faster, and worry less since 2012.</p><div className="footer-social"><a href="#">f</a><a href="#">𝕏</a><a href="#">ig</a><a href="#">in</a></div></div>
            <div className="footer-col"><h4>Company</h4><ul><li><a href="#">About Us</a></li><li><a href="#">Our Team</a></li><li><a href="#">Case Studies</a></li><li><a href="#">Awards</a></li><li><a href="#">Careers</a></li></ul></div>
            <div className="footer-col"><h4>Services</h4><ul><li><a href="#">Accounting</a></li><li><a href="#">Tax & Compliance</a></li><li><a href="#">Business Advisory</a></li><li><a href="#">Tax Planning</a></li><li><a href="#">Audit & Assurance</a></li></ul></div>
            <div className="footer-col"><h4>Contact</h4><ul><li><a href="tel:02079938850">020 7993 8850</a></li><li><a href="mailto:info@makesworth.co.uk">info@makesworth.co.uk</a></li><li><a href="#">Harrow, HA1 1PD</a></li><li><a href="#">Milton Keynes, MK14 6LY</a></li></ul></div>
          </div>
          <div className="footer-bottom"><p>© 2025 <a href="#">Makesworth Accountants</a>. All rights reserved.</p><p><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Cookies</a></p></div>
        </div>
      </footer>
      
      {/* GOLD COIN RAIN CANVAS */}
      <div className="coin-canvas" id="coinCanvas"></div>
      
      {/* WALKING CALCY */}
      <div className="walking-calcy" id="walkingCalcy" onClick={() => { toggleChat() }}>
        <div className="wc-speech" id="wcSpeech">💬 Need tax help? Click me!</div>
        <div className="wc-container">
          <div className="wc-body">
            <div className="wc-shell">
              <div className="wc-display"><span className="wc-display-text">HI!</span></div>
              <div className="wc-btns">
                <div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn g"></div>
                <div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn g"></div>
                <div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn"></div><div className="wc-btn g"></div>
              </div>
            </div>
            <div className="wc-eye l"><div className="wc-eyebg"><div className="wc-pupil"></div><div className="wc-lid"></div></div></div>
            <div className="wc-eye r"><div className="wc-eyebg"><div className="wc-pupil"></div><div className="wc-lid"></div></div></div>
          </div>
          <div className="wc-arm wc-arm-l"><div className="wc-arm-seg"></div><div className="wc-hand"></div></div>
          <div className="wc-arm wc-arm-r"><div className="wc-arm-seg"></div><div className="wc-hand"></div></div>
          <div className="wc-legs">
            <div className="wc-leg wc-leg-l"><div className="wc-leg-seg"></div><div className="wc-shoe"></div></div>
            <div className="wc-leg wc-leg-r"><div className="wc-leg-seg"></div><div className="wc-shoe"></div></div>
          </div>
          <div className="wc-sparkle" style={{top:"-4px",left:"-2px",fontSize:"5px",color:"rgba(200,150,62,.35)"}}>£</div>
          <div className="wc-sparkle" style={{top:"12px",right:"-4px",fontSize:"4px",color:"rgba(46,125,91,.3)",animationDelay:".6s"}}>%</div>
          <div className="wc-glow"></div>
        </div>
      </div>
      
      {/* CALCY TOGGLE - The calculator character IS the button */}
      <button className="chatbot-toggle" id="chatToggle" onClick={() => { toggleChat() }}>
        <div className="chatbot-badge"></div>
        <div className="calcy-speech">💬 Ask me about UK tax!</div>
        <div className="toggle-calcy">
          <div className="calc-body">
            <div className="calc-shell">
              <div className="calc-display"><div className="display-text">TAX?</div></div>
              <div className="calc-btns-mini">
                <div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn gold-btn"></div>
                <div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn gold-btn"></div>
                <div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn gold-btn"></div>
                <div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn"></div><div className="mini-btn gold-btn"></div>
              </div>
            </div>
            <div className="calc-eye el"><div className="eye-bg"><div className="eye-pupil"></div><div className="eye-lid"></div></div></div>
            <div className="calc-eye er"><div className="eye-bg"><div className="eye-pupil"></div><div className="eye-lid"></div></div></div>
          </div>
          <div className="calc-arm al"><div className="arm-seg"></div><div className="calc-hand"></div></div>
          <div className="calc-arm ar"><div className="arm-seg"></div><div className="calc-hand"></div></div>
          <div className="calc-legs"><div className="calc-legwrap"><div className="leg-seg"></div><div className="calc-shoe"></div></div><div className="calc-legwrap"><div className="leg-seg"></div><div className="calc-shoe"></div></div></div>
          <div className="t-sparkle" style={{fontSize:"6px",color:"rgba(200,150,62,.35)",top:"0",left:"-2px"}}>£</div>
          <div className="t-sparkle" style={{fontSize:"5px",color:"rgba(46,125,91,.35)",top:"20px",right:"-4px"}}>%</div>
          <div className="t-sparkle" style={{fontSize:"6px",color:"rgba(200,150,62,.3)",bottom:"28px",left:"-3px"}}>Σ</div>
          <div className="platform-glow"></div>
        </div>
      </button>
      <div className="chatbot" id="chatbot">
        <div className="chatbot-header">
          <div className="chatbot-header-left"><div className="dot"></div><div><h4>Makesworth Tax Assistant</h4><span>// crunch the numbers</span></div></div>
          <button className="chatbot-close" onClick={() => { toggleChat() }}>✕</button>
        </div>
        {/* CALCY AVATAR */}
        <div className="calcy-area" id="calcyArea">
          <div className="calc-buddy" id="avatar">
            <div className="calc-body">
              <div className="calc-shell">
                <div className="calc-brand">MAKESWORTH</div>
                <div className="calc-solar"></div>
                <div className="calc-display"><div className="display-text" id="displayText">£0</div></div>
                <div className="calc-buttons" id="calcButtons">
                  <div className="calc-btn clear" data-val="C">C</div><div className="calc-btn special" data-val="±">±</div><div className="calc-btn special" data-val="%">%</div><div className="calc-btn op" data-val="÷">÷</div>
                  <div className="calc-btn num" data-val="7">7</div><div className="calc-btn num" data-val="8">8</div><div className="calc-btn num" data-val="9">9</div><div className="calc-btn op" data-val="×">×</div>
                  <div className="calc-btn num" data-val="4">4</div><div className="calc-btn num" data-val="5">5</div><div className="calc-btn num" data-val="6">6</div><div className="calc-btn op" data-val="-">−</div>
                  <div className="calc-btn num" data-val="1">1</div><div className="calc-btn num" data-val="2">2</div><div className="calc-btn num" data-val="3">3</div><div className="calc-btn op" data-val="+">+</div>
                  <div className="calc-btn num" data-val="0" style={{gridColumn:"span 2",fontSize:"5px"}}>0</div><div className="calc-btn num" data-val=".">.</div><div className="calc-btn equals" data-val="=">=</div>
                </div>
              </div>
              <div className="calc-eye el"><div className="eye-bg"><div className="eye-pupil"></div><div className="eye-lid"></div></div></div>
              <div className="calc-eye er"><div className="eye-bg"><div className="eye-pupil"></div><div className="eye-lid"></div></div></div>
              <div className="receipt-paper" id="receiptPaper"><div className="receipt-inner" id="receiptInner"><div className="receipt-line"><span>Tax</span><span>£0</span></div></div></div>
            </div>
            <div className="calc-arm al"><div className="arm-seg"></div><div className="calc-hand"></div></div>
            <div className="calc-arm ar"><div className="arm-seg"></div><div className="calc-hand"></div></div>
            <div className="calc-legs"><div className="calc-legwrap"><div className="leg-seg"></div><div className="calc-shoe"></div></div><div className="calc-legwrap"><div className="leg-seg"></div><div className="calc-shoe"></div></div></div>
            <div className="floating-item f1">£</div><div className="floating-item f2">%</div><div className="floating-item f3">Σ</div><div className="floating-item f4">π</div><div className="floating-item f5">±</div>
            <div className="sparkle s1"></div><div className="sparkle s2"></div><div className="sparkle s3"></div>
            <div className="mood-badge" id="moodBadge">🧮 READY</div>
            <div className="platform-glow"></div>
          </div>
        </div>
        <div className="calcy-label">CALCY — YOUR TAX BUDDY</div>
        {/* MESSAGES */}
        <div className="chatbot-msgs" id="chatMsgs">
          <div className="chat-msg bot">
            👋 I'm <strong>Calcy</strong>! Tap a question or type your own for instant UK tax answers.
            <div className="chat-suggestions" style={{marginTop:"8px"}}>
              <span className="chat-sug" onClick={() => { askQ(0) }}>📅 Self-assessment due?</span>
              <span className="chat-sug" onClick={() => { askQ(1) }}>💷 Personal allowance?</span>
              <span className="chat-sug" onClick={() => { askQ(2) }}>⚖️ Sole trader vs Ltd?</span>
              <span className="chat-sug" onClick={() => { askQ(3) }}>📊 VAT registration?</span>
              <span className="chat-sug" onClick={() => { askQ(4) }}>💰 Tax rates?</span>
              <span className="chat-sug" onClick={() => { askQ(5) }}>🧾 Dividend allowance?</span>
              <span className="chat-sug" onClick={() => { askQ(6) }}>🏠 Work from home?</span>
              <span className="chat-sug" onClick={() => { askQ(7) }}>📱 Making Tax Digital?</span>
              <span className="chat-sug" onClick={() => { askQ(8) }}>👔 Employer NI?</span>
              <span className="chat-sug" onClick={() => { askQ(9) }}>🎓 Student loan?</span>
            </div>
          </div>
        </div>
        <div className="chatbot-input">
          <input type="text" id="chatInput" placeholder="Ask a UK tax question..." onKeyDown={(e) => { if(event.key==='Enter')sendChat() }} />
          <button onClick={() => { sendChat() }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></button>
        </div>
      </div>
    </>
  )
}