const G=["guangzhou","foshan","zhongshan","shenzhen","yiwu"],U=["yiwu","guangzhou","foshan","zhongshan","shenzhen"],P={fair:"Canton Fair leg",city:"Sourcing city",buffer:"Unallocated days"},L=5;function B(v,h){const m=v.querySelector("[data-planner-form]"),k=v.querySelector("[data-planner-output]"),O=v.querySelector("[data-planner-summary]");if(!m||!k||!O)return;const g=e=>m.querySelector(`[name="${e}"]`),E=Array.from(m.querySelectorAll("[data-city-row]"));let d=[],S=!1;const C=(e,t,o)=>Math.min(o,Math.max(t,Math.round(e))),q=()=>{const e=g("category")?.value??h.categories[0].value,t=h.categories.find(c=>c.value===e)??h.categories[0],o=C(Number.parseInt(g("days")?.value??"10",10)||10,1,60),r=g("pace")?.value??"balanced",i=g("startCity")?.value??"guangzhou",a=g("startDate")?.value??"",u=!!m.querySelector('[name="visitFair"]')?.checked,y=C(Number.parseInt(g("fairDays")?.value??"3",10)||3,1,L),l=E.filter(c=>c.querySelector('[name="city"]')?.checked).map(c=>{const D=c.dataset.cityRow,f=Number.parseInt(c.querySelector("[data-city-days]")?.value??"",10);return{key:D,typedDays:Number.isFinite(f)&&f>0?C(f,1,30):null}});return{category:t,days:o,pace:r,startCity:i,startDate:a,visitFair:u,fairDays:y,selected:l}},z=e=>e==="shanghai"||e==="hangzhou"?U:G,H=(e,t)=>{const o=z(t),r=d.filter(a=>e.includes(a)),i=e.filter(a=>!r.includes(a));return i.sort((a,u)=>{const y=o.indexOf(a),l=o.indexOf(u);return(y===-1?99:y)-(l===-1?99:l)}),d=[...r,...i],d},A=()=>{const{category:e,days:t,pace:o,startCity:r,startDate:i,visitFair:a,fairDays:u,selected:y}=q(),l=[],c=y.map(s=>s.key);a&&!c.includes("guangzhou")&&c.push("guangzhou");const f=H(c,r).map(s=>{if(s==="guangzhou"&&a)return{key:s,days:u,kind:"fair"};const p=y.find($=>$.key===s)?.typedDays??null;return{key:s,days:p??h.cities[s].suggestedDays[o],kind:"city"}}),n=f.reduce((s,p)=>s+p.days,0);f.length===0&&l.push("Select at least one city — or tick the Canton Fair, which puts Guangzhou in the plan."),n>t&&l.push(`Your stops add up to ${n} days but you set ${t} travel days. Reduce a city's days, remove a city, or extend the trip — we do not silently cut your plan.`),a&&u<L&&l.push(`You are planning ${u} ${u===1?"day":"days"} at the Canton Fair. A phase runs five days, so check the phase dates and pick the days that match your product sections.`),a&&l.push("Canton Fair dates are not filled in automatically. Confirm the current phase dates on the official fair site before booking anything.");const x=t-n;return{stops:f,total:n,leftover:x,days:t,startDate:i,category:e,pace:o,startCity:r,visitFair:a,warnings:l}},I={guangzhou:"Guangzhou (CAN)",shenzhen:"Shenzhen (SZX)",shanghai:"Shanghai (PVG / SHA)",hangzhou:"Hangzhou (HGH)"},R=(e,t)=>{const[o,r,i]=e.split("-").map(Number);if(!o||!r||!i)return"";const a=new Date(Date.UTC(o,r-1,i));return a.setUTCDate(a.getUTCDate()+t),a.toISOString().slice(0,10)},N=(e,t=0)=>{const o=R(e,t);if(!o)return"";const[r,i,a]=o.split("-").map(Number);return new Date(Date.UTC(r,i-1,a)).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"})},b=()=>{const e=A(),{stops:t,total:o,leftover:r,days:i,startDate:a,category:u,warnings:y}=e;O.innerHTML=`
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p class="text-[15px] font-[650] text-ink">${i}-day trip${t.length?` · ${o} ${o===1?"day":"days"} planned`:""}</p>
        <p class="text-[13px] text-body">${u.label} · arriving in ${I[e.startCity]??e.startCity}</p>
      </div>
      <p class="mt-1.5 text-[13px] text-navy-800">
        ${t.length?t.map(n=>h.cities[n.key].name).join(" → "):"No cities selected yet"}
      </p>
      ${a?`<p class="mt-1 text-[12px] text-muted">Day 1 = ${N(a)} (your own start date — not a fair date)</p>`:""}
    `;let l=0;const c=t.map((n,x)=>{const s=h.cities[n.key],p=l+1,$=l+n.days;l=$;const _=a?`<span class="text-muted"> · ${N(a,p-1)}${n.days>1?` – ${N(a,$-1)}`:""}</span>`:"",M=s.activities.slice(0,n.days>=3?4:3);return`
          <li class="relative pl-6">
            <span class="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-accent bg-white"></span>
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-[15px] font-[650] text-ink">${s.name}</h3>
              <span class="rounded-full bg-mist-2 px-2.5 py-0.5 text-[11px] font-semibold text-navy-800">
                Day ${p}–${$} · ${n.days} ${n.days===1?"day":"days"}${_}
              </span>
            </div>
            <p class="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              ${P[n.kind]} · ${s.province}
            </p>
            <ul class="mt-2 flex flex-col gap-1">
              ${M.map(j=>`<li class="relative pl-3.5 text-[12.5px] leading-relaxed text-body"><span class="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-navy-600"></span>${j}</li>`).join("")}
            </ul>
            <div class="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-semibold">
              <a href="${s.guideHref}" class="text-navy-800 no-underline hover:text-accent">City guide →</a>
              <a href="${s.destinationHref}" class="text-navy-800 no-underline hover:text-accent">Main market →</a>
              <span class="ml-auto flex items-center gap-1 text-[11px] font-medium text-muted">
                <button type="button" class="rounded border border-line px-1.5 py-0.5 text-[11px] text-body hover:border-navy-700 disabled:opacity-30"
                  data-move="up" data-key="${n.key}" ${x===0?"disabled":""} aria-label="Move ${s.name} earlier">↑</button>
                <button type="button" class="rounded border border-line px-1.5 py-0.5 text-[11px] text-body hover:border-navy-700 disabled:opacity-30"
                  data-move="down" data-key="${n.key}" ${x===t.length-1?"disabled":""} aria-label="Move ${s.name} later">↓</button>
              </span>
            </div>
            ${x<t.length-1?`<p class="mt-3 border-l border-dashed border-line pl-3 text-[11.5px] leading-relaxed text-muted">Next: ${s.transportNote}</p>`:""}
          </li>
        `}).join(""),D=r>0&&t.length>0?`<div class="mt-5 rounded-xl border border-line bg-mist/70 p-4">
             <p class="text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-800">${r} ${r===1?"day":"days"} not yet allocated</p>
             <p class="mt-1.5 text-[12.5px] leading-relaxed text-body">
               That is genuine slack: a delayed sample courier, a factory visit that runs long, or a second pass at
               a shortlisted supplier. Add it to a city above, or leave it free on purpose.
             </p>
           </div>`:"",f=y.length?`<div class="mt-5 rounded-xl border border-amber-200 bg-amber-50/70 p-4">
           <p class="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-900">Check before booking</p>
           <ul class="mt-2 flex flex-col gap-1.5">
             ${y.map(n=>`<li class="text-[12.5px] leading-relaxed text-amber-900/85">— ${n}</li>`).join("")}
           </ul>
         </div>`:"";k.innerHTML=`
      <div class="rounded-xl border border-line bg-white p-5">
        ${t.length?`<ol class="relative flex flex-col gap-6 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-line">${c}</ol>`:'<p class="text-[13px] leading-relaxed text-body">Pick your cities on the left. Nothing is assumed: if you tick two cities and give each four days, that is the plan.</p>'}
        ${D}
        ${f}
        <p class="mt-4 text-[11.5px] leading-relaxed text-muted">
          Planning aid only — not an official recommendation. Day counts are your own or our rules of thumb.
          Confirm transport schedules, market opening days and fair dates before booking.
        </p>
      </div>
    `,k.querySelectorAll("[data-move]").forEach(n=>{n.addEventListener("click",()=>{const x=n.dataset.key??"",s=d.indexOf(x),p=n.dataset.move==="up"?s-1:s+1;s<0||p<0||p>=d.length||(S=!0,[d[s],d[p]]=[d[p],d[s]],b())})}),window.csTrack?.("trip_planner_complete",{category:u.value,days:i,pace:e.pace,cities:t.map(n=>n.key).join(","),fair:e.visitFair,manual_order:S})},w=()=>{const e=g("pace")?.value??"balanced";E.forEach(t=>{const o=t.dataset.cityRow,r=t.querySelector("[data-city-days]"),i=h.cities[o];r&&i&&(r.placeholder=String(i.suggestedDays[e]))})};m.addEventListener("submit",e=>{e.preventDefault(),w(),b(),k.scrollIntoView({behavior:"smooth",block:"start"})}),m.addEventListener("change",()=>{w(),b()}),m.addEventListener("input",()=>{w(),b()}),v.querySelector('[data-action="print"]')?.addEventListener("click",()=>window.print()),v.querySelector('[data-action="suggest-order"]')?.addEventListener("click",()=>{d=[],S=!1;const{startCity:e,selected:t,visitFair:o}=q(),r=t.map(i=>i.key);o&&!r.includes("guangzhou")&&r.push("guangzhou"),d=[...r].sort((i,a)=>z(e).indexOf(i)-z(e).indexOf(a)),b()}),w(),b()}const T=document.querySelector("[data-trip-planner]"),F=document.getElementById("planner-data");T&&F?.textContent&&B(T,JSON.parse(F.textContent));
