// Preserves the original menu open/close flow, with one shared breakpoint and state.
const openButton=document.getElementById('hamburgerBtn');
const menu=document.getElementById('navMenu');
const closeButton=document.getElementById('exitBtn');
const narrow=window.matchMedia('(max-width: 760px)');
function setOpen(open){if(!menu||!openButton)return;menu.classList.toggle('hidden',narrow.matches&&!open);openButton.setAttribute('aria-expanded',String(open));openButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');}
openButton?.addEventListener('click',()=>setOpen(openButton.getAttribute('aria-expanded')!=='true'));
closeButton?.addEventListener('click',()=>{setOpen(false);openButton.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&narrow.matches&&openButton?.getAttribute('aria-expanded')==='true'){setOpen(false);openButton?.focus();}});
narrow.addEventListener('change',()=>setOpen(false));setOpen(false);
