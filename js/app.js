import { PROJECTS } from '../data/projects.js';
import { JOURNEY } from '../data/journey.js';
import { LAB } from '../data/lab.js';
import { TOOLBOX } from '../data/toolbox.js';
import { CURRENTLY } from '../data/currently.js';

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function init(){
  renderToolRow();
  renderWork();
  renderJourney();
  renderLab();
  renderAbout();
  renderContactIcons();
  initHeader();
  initHero();
  initSectionAnimations();
  initGitHub();
}

function initHeader(){
  const header = $('#header');
  const toggle = $('#menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const mobileActive = $('#mobile-active');
  const navLinks = $$('.nav-links a[data-nav]');
  const allNav = $$('[data-nav]');

  function onScroll(){
    const y = window.scrollY;
    if(header) header.classList.toggle('scrolled', y > 20);

    let currentId = 'hero';
    const sections = $$('section[id]');
    sections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();
      if(rect.top <= window.innerHeight * 0.4){
        currentId = sec.id;
      }
    });

    navLinks.forEach(link=>{
      const isActive = link.dataset.nav === currentId;
      link.classList.toggle('active', isActive);
    });

    if(mobileActive){
      const activeLabel = currentId.toUpperCase();
      mobileActive.textContent = activeLabel === 'HERO' ? 'HOME' : activeLabel;
    }

    // active dot is handled via .active class CSS
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if(toggle && mobileMenu){
    toggle.addEventListener('click', ()=>{
      const open = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
    });

    mobileMenu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        mobileMenu.setAttribute('aria-hidden','true');
      });
    });
  }

  // smooth scroll
  $$('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = $(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth', block:'start'});
      }
    });
  });
}

function initHero(){
  const hero = $('#hero');
  if(!hero) return;
  // trigger hero animation quickly, almost immediately usable
  requestAnimationFrame(()=>{
    setTimeout(()=> hero.classList.add('animate'), 80);
  });
}

function initSectionAnimations(){
  if(reducedMotion){
    $$('.section').forEach(el=> el.classList.add('animate'));
    $$('.project-card, .journey-node, .lab-item').forEach(el=> el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('animate');
        // stagger children
        if(entry.target.id === 'work'){
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, i)=>{
            setTimeout(()=> card.classList.add('visible'), i*90);
          });
        }
        if(entry.target.id === 'journey'){
          const nodes = entry.target.querySelectorAll('.journey-node');
          nodes.forEach((node, i)=>{
            setTimeout(()=> node.classList.add('visible'), i*80);
          });
        }
        if(entry.target.id === 'lab'){
          const items = entry.target.querySelectorAll('.lab-item');
          items.forEach((item, i)=>{
            setTimeout(()=> item.classList.add('visible'), i*70);
          });
        }
      }
    });
  }, {threshold:0.18, rootMargin:'0px 0px -10% 0px'});

  $$('.section, #hero').forEach(el=> io.observe(el));
}

function renderToolRow(){
  const row = $('#tool-row');
  if(!row) return;
  row.innerHTML = TOOLBOX.map(tool=>{
    return `
      <div class="tool-item" data-tooltip="${tool.display}">
        <span class="tool-dot"></span>
        <span>${tool.display}</span>
      </div>
    `;
  }).join('');
}

function renderWork(){
  const canvas = $('#work-canvas');
  if(!canvas) return;

  if(!PROJECTS || PROJECTS.length===0){
    canvas.innerHTML = `<div style="grid-column:span 12; font-family:var(--mono); font-size:12px; color:var(--muted); padding:24px; border:1px dashed var(--border); border-radius:var(--radius)">No projects yet — first ones are close.</div>`;
    return;
  }

  const sorted = [...PROJECTS].sort((a,b)=>{
    const order = {flagship:0, featured:1, archived:2};
    return (order[a.ranking] ?? 1) - (order[b.ranking] ?? 1);
  });

  canvas.innerHTML = sorted.map(p=>{
    return `
      <div class="project-card" data-id="${p.id}">
        <div class="project-top">
          <span class="project-num">${p.number}</span>
          <span class="project-status ${p.status}">${p.status}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-why"><span>WHY →</span><span>${p.why.replace('WHY →','').trim()}</span></div>
        <div class="project-stack">${p.tools.map(t=>`<span class="stack-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">View →</a>` : `<span style="font-family:var(--mono); font-size:10px; color:var(--muted-2)">No public link</span>`}
        </div>
        <div class="project-visual">VISUAL → ${p.id.toUpperCase()}_PREVIEW</div>
      </div>
    `;
  }).join('');
}

function renderJourney(){
  const nodesEl = $('#journey-nodes');
  const detailEl = $('#journey-detail');
  if(!nodesEl) return;

  nodesEl.innerHTML = JOURNEY.map(node=>{
    return `
      <div class="journey-node ${node.state}" data-id="${node.id}" tabindex="0" role="button" aria-label="${node.label} — ${node.title}">
        <div class="journey-node-dot"></div>
        <div class="journey-node-label">${node.label}</div>
      </div>
    `;
  }).join('');

  function showDetail(id){
    const node = JOURNEY.find(n=>n.id===id);
    if(!node || !detailEl) return;
    detailEl.innerHTML = `
      <div class="journey-detail-head">
        <span class="journey-detail-version">${node.version}</span>
        <h3 class="journey-detail-title">${node.title}</h3>
      </div>
      <div class="journey-detail-subtitle" style="font-size:13px; color:var(--muted); margin-bottom:12px">${node.subtitle}</div>
      <div class="journey-detail-grid">
        <div>
          <div class="journey-detail-label">What was learned</div>
          <div class="journey-detail-value">${node.what}</div>
        </div>
        <div>
          <div class="journey-detail-label">Why it mattered</div>
          <div class="journey-detail-value">${node.why}</div>
        </div>
      </div>
      <div style="margin-top:12px">
        <div class="journey-detail-label">What changed</div>
        <div class="journey-detail-value">${node.changed}</div>
      </div>
    `;
    detailEl.classList.add('visible');
    $$('.journey-node', nodesEl).forEach(n=> n.classList.toggle('active', n.dataset.id===id));
  }

  function hideDetail(){
    if(!detailEl) return;
    detailEl.classList.remove('visible');
    detailEl.innerHTML='';
    $$('.journey-node', nodesEl).forEach(n=> n.classList.remove('active'));
  }

  nodesEl.addEventListener('click', (e)=>{
    const node = e.target.closest('.journey-node');
    if(!node) return;
    const id = node.dataset.id;
    if(detailEl.classList.contains('visible') && detailEl.innerHTML.includes(JOURNEY.find(n=>n.id===id)?.title)){
      hideDetail();
    }else{
      showDetail(id);
    }
  });

  nodesEl.addEventListener('keydown', (e)=>{
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      e.target.closest('.journey-node')?.click();
    }
  });

  // auto-open current
  const current = JOURNEY.find(n=>n.state==='current');
  if(current) setTimeout(()=> showDetail(current.id), 400);
}

function renderLab(){
  const canvas = $('#lab-canvas');
  if(!canvas) return;

  const sizeMap = ['small','medium','large','medium','small'];

  canvas.innerHTML = LAB.map((item, idx)=>{
    const size = sizeMap[idx % sizeMap.length];
    return `
      <div class="lab-item size-${size}" data-status="${item.status}" data-id="${item.id}" tabindex="0" role="button">
        <div class="lab-top">
          <span class="lab-status">${item.status}</span>
        </div>
        <h3 class="lab-title">${item.title}</h3>
        <div class="lab-what"><strong>WHAT?</strong> ${item.what}</div>
        <div class="lab-why"><strong>WHY?</strong> ${item.why}</div>
        <div class="lab-result"><strong>RESULT?</strong> ${item.result}</div>
        <div class="lab-tools">${item.tools.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    `;
  }).join('');
}

function renderAbout(){
  const copyEl = $('#about-copy');
  if(copyEl){
    copyEl.innerHTML = CURRENTLY.about.map((p,i)=>{
      if(i===0) return `<p><strong>${p}</strong></p>`;
      return `<p>${p}</p>`;
    }).join('');
  }
}

function renderContactIcons(){
  const container = $('#contact-icons');
  if(!container) return;
  const channels = CURRENTLY.contact.channels.filter(c=>c.href);
  // add email if exists, plus github always
  const icons = [
    { id:'github', label:'GitHub', href: CURRENTLY.github },
    { id:'email', label:'Email', href: CURRENTLY.email ? `mailto:${CURRENTLY.email}` : '' },
    { id:'x', label:'X', href: CURRENTLY.x ? `https://x.com/${CURRENTLY.x.replace('@','')}` : '' },
    { id:'linkedin', label:'LinkedIn', href: CURRENTLY.linkedin || '' },
    { id:'whatsapp', label:'WhatsApp', href: CURRENTLY.whatsapp || '' }
  ].filter(c=>c.href);

  container.innerHTML = icons.map(ch=>{
    const letter = ch.label.slice(0,2).toUpperCase();
    return `<a href="${ch.href}" target="_blank" rel="noopener" class="contact-icon" aria-label="${ch.label}">${letter}</a>`;
  }).join('');
}

async function initGitHub(){
  const graphEl=$('#contrib-graph');
  const statsEl=$('#contrib-stats');
  const statusEl=$('#contrib-status');
  if(!graphEl || !statsEl || !statusEl) return;

  const usernames = [CURRENTLY.graphUsername, CURRENTLY.username, 'PusCaleb', 'CalebPiusC'].filter(Boolean);
  const unique = [...new Set(usernames)];
  statusEl.textContent='LOADING...';

  let data=null;
  let used=null;

  for(const username of unique){
    const endpoints=[
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      `https://github-contributions-api.deno.dev/${username}.json?y=last`,
      `https://github-contributions-api.jogruber.de/v4/${username}`
    ];
    for(const url of endpoints){
      try{
        const res=await fetch(url,{mode:'cors'});
        if(!res.ok) continue;
        const json=await res.json();
        if(json.contributions && json.contributions.length>0){ data=json; used=username; break; }
        if(Array.isArray(json) && json.length>0){ data={contributions:json}; used=username; break; }
      }catch{}
    }
    if(data) break;
  }

  if(!data || !data.contributions){
    try{
      const res = await fetch(`https://api.github.com/users/${unique[0]}`);
      if(res.ok){
        const user = await res.json();
        graphEl.innerHTML=`<div style="font-family:var(--mono); font-size:11px; color:var(--muted); padding:16px; border:1px dashed var(--border); border-radius:8px; line-height:1.6">
          Graph API offline.<br/>Profile has <strong>${user.public_repos} public repos</strong>.
        </div>`;
        statsEl.innerHTML=`<div><span class="k">Public Repos</span><span class="v">${user.public_repos}</span></div>`;
        statusEl.textContent='API OFFLINE';
        return;
      }
    }catch{}
    graphEl.innerHTML=`<div style="font-family:var(--mono); font-size:11px; color:var(--muted); padding:12px; border:1px dashed var(--border); border-radius:8px">Live data unavailable.</div>`;
    statusEl.textContent='OFFLINE';
    return;
  }

  const contributions=data.contributions;
  const weeks=[]; let week=[];
  contributions.forEach((c,idx)=>{
    week.push(c);
    if(week.length===7 || idx===contributions.length-1){ weeks.push(week); week=[]; }
  });

  graphEl.style.gridTemplateColumns=`repeat(${weeks.length}, 11px)`;
  graphEl.style.display='grid';
  graphEl.style.gridAutoFlow='column';
  graphEl.style.gridTemplateRows='repeat(7, 11px)';
  graphEl.style.gap='3px';
  graphEl.innerHTML='';
  let total=0, maxStreak=0, curStreak=0;
  contributions.forEach(c=>{
    total+=c.count||0;
    if((c.count||0)>0){ curStreak++; maxStreak=Math.max(maxStreak,curStreak); } else curStreak=0;
  });
  if(data.total && data.total.lastYear) total=data.total.lastYear;

  weeks.forEach(w=>{
    w.forEach(day=>{
      const div=document.createElement('div');
      div.className=`contrib-day l${day.level ?? levelFromCount(day.count)}`;
      div.title=`${day.date}: ${day.count} contributions`;
      div.addEventListener('mouseenter', ()=>{ statusEl.textContent=`${day.date} — ${day.count}`; });
      div.addEventListener('mouseleave', ()=>{ statusEl.textContent=`${total} last year`; });
      graphEl.appendChild(div);
    });
    if(w.length<7){
      for(let i=w.length;i<7;i++){
        const div=document.createElement('div');
        div.className='contrib-day l0'; div.style.opacity='0.35';
        graphEl.appendChild(div);
      }
    }
  });

  statusEl.textContent=`${total} last year (${used})`;
  statsEl.innerHTML=`
    <div><span class="k">Contributions</span><span class="v">${total} last year</span></div>
    <div><span class="k">Longest streak</span><span class="v">${maxStreak} days</span></div>
    <div><span class="k">Profile</span><span class="v">${used}</span></div>
  `;

  function levelFromCount(count){
    if(!count) return 0;
    if(count<2) return 1;
    if(count<5) return 2;
    if(count<10) return 3;
    return 4;
  }
}

init();
