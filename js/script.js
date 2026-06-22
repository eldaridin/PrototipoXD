// ══════════════════════════════════════════
// SVG HELPER — genera SVG inline accesible
// Fuente: Lucide Icons (MIT License) lucide.dev
// ══════════════════════════════════════════
function svg(path, size) {
    var s = size || 24;
    return '<svg aria-hidden="true" focusable="false" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
}

const ICON = {
    shield:        svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'),
    user:          svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    users:         svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    truck:         svg('<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'),
    leaf:          svg('<path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M7.67 22C7.22 17 9.17 12.7 13 10"/><path d="M3 22c2-4 6-8 14-8"/>'),
    globe:         svg('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
    clipboard:     svg('<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>'),
    barChart:      svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>'),
    bell:          svg('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'),
    search:        svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    message:       svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    paperclip:     svg('<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>'),
    checkCircle:   svg('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'),
    alertTriangle: svg('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
    alertCircle:   svg('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'),
    info:          svg('<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
    wifiOff:       svg('<line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'),
    bot:           svg('<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>'),
    send:          svg('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'),
    lock:          svg('<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    refresh:       svg('<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'),
    settings:      svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
    edit:          svg('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),
    xCircle:       svg('<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'),
    calendar:      svg('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    check:         svg('<polyline points="20 6 9 17 4 12"/>'),
    mail:          svg('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
    file:          svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
    flag:          svg('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>'),
    plane:         svg('<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'),
    arrowLeft:     svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'),
    bone:          svg('<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path d="M6 14c-.7.7-1.69 0-2.5 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/><line x1="8" y1="14" x2="16" y2="6"/>'),
    droplet:       svg('<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'),
    heart:         svg('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
    layers:        svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'),
    package:       svg('<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'),
    flask:         svg('<path d="M9 3h6l1 9H8z"/><path d="M6.7 21a6 6 0 0 1 10.6 0H6.7z"/><line x1="12" y1="12" x2="12" y2="16"/>'),
    clock:         svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    dollar:        svg('<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
    userCheck:     svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>'),
};

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentUser = null;
let currentView = 'landing';
let viewHistory = [];
let pdiDone = false;
let aduanasDone = false;
let sagDone = false;
let auditLog = [];

// XSS-safe DOM text insertion
function escapeHtml(str) {
    return String(str)
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;');
}

const roleLabels = {
    turista: 'Turista / Pasajero',
    aduanas: 'Funcionario Aduanas',
    pdi: 'Oficial PDI',
    sag: 'Oficial SAG',
    admin: 'Administrador SNA'
};

const roleModules = {
    turista:  ['rf01','rf03','rf10'],
    aduanas:  ['rf02','rf04','rf05','rf09'],
    pdi:      ['rf05','rf04'],
    sag:      ['rf03','rf05'],
    admin:    ['rf06','rf07','rf08','rf01','rf02','rf03','rf04','rf05','rf09','rf10','arco']
};

const moduleInfo = {
    rf01: {icon:ICON.user,      title:'Menores',          desc:'Registro de menores de edad'},
    rf02: {icon:ICON.truck,     title:'Vehículos',        desc:'Admisión y salida de vehículos'},
    rf03: {icon:ICON.leaf,      title:'SAG',              desc:'Declaración jurada SAG'},
    rf04: {icon:ICON.globe,     title:'Interoperabilidad',desc:'Validación con Argentina'},
    rf05: {icon:ICON.clipboard, title:'Control PDI/SAG',  desc:'Revisión de pasajeros'},
    rf06: {icon:ICON.barChart,  title:'Reportes',         desc:'Informes estadísticos'},
    rf07: {icon:ICON.users,     title:'Usuarios',         desc:'Gestión de cuentas RBAC'},
    rf08: {icon:ICON.bell,      title:'Notificaciones',   desc:'Alertas automáticas'},
    rf09: {icon:ICON.search,    title:'Patentes',         desc:'Validación de patentes y multas'},
    rf10: {icon:ICON.message,   title:'Chatbot',          desc:'Asistente virtual FAQ'},
    arco: {icon:ICON.lock,      title:'Privacidad ARCO+P',desc:'Derechos de titulares (Ley N°21.719)'},
};

// ══════════════════════════════════════════
// AUDITORÍA (Fase 3)
// ══════════════════════════════════════════
// BACKEND NOTE: En producción, este log debe escribirse en un sistema
// inmutable con timestamp firmado, no repudiable y almacenado server-side.
function addAuditEntry(action, detail) {
    const now = new Date().toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
    const user = currentUser ? escapeHtml(currentUser.rut) : 'Sistema';
    auditLog.unshift({time: now, action, detail, user});
    if (auditLog.length > 100) auditLog.pop();
}

// ══════════════════════════════════════════
// ROUTER
// ══════════════════════════════════════════
function navigateTo(viewId) {
    const prev = document.getElementById('view-' + currentView);
    if (prev) prev.classList.remove('active');
    if (currentView !== 'landing') viewHistory.push(currentView);

    const next = document.getElementById('view-' + viewId);
    if (next) {
        next.classList.add('active');
        next.classList.remove('hidden');
    }
    currentView = viewId;

    const bc = document.getElementById('breadcrumb');
    const bcText = document.getElementById('breadcrumbText');
    if (viewId === 'landing') {
        bc.classList.add('hidden');
        viewHistory = [];
    } else {
        bc.classList.remove('hidden');
        const info = moduleInfo[viewId];
        bcText.textContent = info ? info.title : 'Dashboard';
    }

    window.scrollTo({top: 0, behavior: 'smooth'});

    if (viewId === 'dashboard') renderDashboard();
    if (viewId === 'rf07') renderUsersTable();
    if (viewId === 'arco') renderArcoView();

    setTimeout(() => {
        const heading = next && (next.querySelector('h1, h2'));
        if (heading) {
            if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
            heading.focus();
        }
    }, 80);
}

function navigateBack() {
    const prev = viewHistory.pop() || 'landing';
    const cur = document.getElementById('view-' + currentView);
    if (cur) { cur.classList.remove('active'); }
    const prevEl = document.getElementById('view-' + prev);
    if (prevEl) { prevEl.classList.add('active'); prevEl.classList.remove('hidden'); }
    currentView = prev;
    const bc = document.getElementById('breadcrumb');
    if (prev === 'landing') { bc.classList.add('hidden'); viewHistory = []; }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollAfter(id) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({behavior: 'smooth'});
    }, 100);
}

// ══════════════════════════════════════════
// LOGIN / LOGOUT
// ══════════════════════════════════════════
function toggleLoginModal() {
    const m = document.getElementById('loginModal');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    const rut  = document.getElementById('rut').value.trim();
    const pass = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    if (!rut || !pass || !role) { showToast('Complete todos los campos', 'danger'); return; }

    // BACKEND NOTE: En producción verificar credenciales server-side con bcrypt/argon2id.
    // JWT con RS256, refresh tokens en cookie HttpOnly/Secure/SameSite=Strict.
    // 2FA real: TOTP RFC 6238. Jamás almacenar datos sensibles en localStorage.
    currentUser = { rut, role, name: rut };
    addAuditEntry('AUTENTICACION', 'RUT: ' + escapeHtml(rut) + ' | Rol: ' + escapeHtml(role));

    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginBtnNav').classList.add('hidden');
    document.getElementById('publicNav').classList.add('hidden');
    document.getElementById('authNav').classList.remove('hidden');
    document.getElementById('userInfoBar').classList.remove('hidden');
    document.getElementById('userBadgeText').textContent = roleLabels[role] || role;
    document.querySelector('form').reset();
    showToast('Sesión iniciada como ' + roleLabels[role], 'success');
    navigateTo('dashboard');
}

function handleLogout() {
    addAuditEntry('CIERRE_SESION', 'RUT: ' + escapeHtml(currentUser ? currentUser.rut : ''));
    currentUser = null;
    auditLog = [];
    document.getElementById('loginBtnNav').classList.remove('hidden');
    document.getElementById('publicNav').classList.remove('hidden');
    document.getElementById('authNav').classList.add('hidden');
    document.getElementById('userInfoBar').classList.add('hidden');
    navigateTo('landing');
    showToast('Sesión cerrada correctamente', 'info');
}

// ══════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════
function renderDashboard() {
    if (!currentUser) return;
    const role = currentUser.role;
    document.getElementById('dashboardRoleTitle').textContent = roleLabels[role];
    document.getElementById('dashboardWelcome').textContent = 'RUT: ' + currentUser.rut + ' · Bienvenido al panel de control.';

    const kpiSets = {
        turista: [
            {num:'2', label:'Trámites pendientes', trend:'neutral'},
            {num:'1', label:'Documentos cargados', trend:'up'},
            {num:'—', label:'Trámites aprobados', trend:'neutral'}
        ],
        aduanas: [
            {num:'1.250', label:'Pasajeros procesados hoy', trend:'up'},
            {num:'387', label:'Vehículos revisados', trend:'up'},
            {num:'3', label:'Alertas activas', trend:'down'}
        ],
        pdi: [
            {num:'892', label:'Revisiones PDI hoy', trend:'up'},
            {num:'1', label:'Arraigos detectados', trend:'neutral'},
            {num:'99.8%', label:'Tasa de autorización', trend:'up'}
        ],
        sag: [
            {num:'245', label:'Declaraciones SAG hoy', trend:'up'},
            {num:'12', label:'Productos rechazados', trend:'neutral'},
            {num:'8', label:'Revisiones pendientes', trend:'down'}
        ],
        admin: [
            {num:'42', label:'Usuarios activos', trend:'up'},
            {num:'1.682', label:'Trámites totales hoy', trend:'up'},
            {num:'99.9%', label:'Uptime del sistema', trend:'up'},
            {num:'3', label:'Incidentes registrados', trend:'down'}
        ]
    };
    const kpis = kpiSets[role] || kpiSets.aduanas;
    document.getElementById('dashboardKPIs').innerHTML = kpis.map(k =>
        `<div class="kpi-card"><span class="kpi-num">${k.num}</span><span class="kpi-label">${k.label}</span><span class="kpi-trend ${k.trend}">${k.trend==='up'?'↑ Incremento':k.trend==='down'?'↓ Reducción':'= Sin cambio'}</span></div>`
    ).join('');

    const mods = roleModules[role] || [];
    document.getElementById('dashboardModules').innerHTML = mods.map(id => {
        const m = moduleInfo[id];
        return `<div class="quick-card" onclick="navigateTo('${id}')"><h4>${m.icon} ${m.title}</h4><p>${m.desc}</p></div>`;
    }).join('');

    const activities = {
        turista: [
            {icon:ICON.clipboard,  text:'Formulario SAG completado', time:'Hace 15 min'},
            {icon:ICON.user,       text:'Registro de menor enviado', time:'Hace 1 hora'},
            {icon:ICON.bell,       text:'Notificación recibida: trámite aprobado', time:'Hace 2 horas'}
        ],
        aduanas: [
            {icon:ICON.truck,      text:'Vehículo ABC-1234 validado — APROBADO', time:'14:28'},
            {icon:ICON.alertTriangle, text:'Alerta: patente ROB-9988 encargada por robo', time:'14:15'},
            {icon:ICON.user,       text:'Menor MEN-0892 autorizado para cruzar', time:'13:55'},
            {icon:ICON.globe,      text:'Sincronización con Argentina completada', time:'13:30'}
        ],
        pdi: [
            {icon:ICON.checkCircle,  text:'Revisión PDI pasajero 12.345.678-9 completada', time:'14:30'},
            {icon:ICON.alertCircle,  text:'Arraigo detectado: alerta silenciosa enviada', time:'14:10'},
            {icon:ICON.checkCircle,  text:'Flujo de revisión cerrado — barrera habilitada', time:'13:50'}
        ],
        sag: [
            {icon:ICON.checkCircle,  text:'Declaración SAG folio SAG-2026-245 aprobada', time:'14:25'},
            {icon:ICON.alertTriangle,text:'Carnes sin certificado sanitario — revisión', time:'14:00'},
            {icon:ICON.checkCircle,  text:'Mascota con vacuna verificada — OK', time:'13:40'}
        ],
        admin: [
            {icon:ICON.userCheck,    text:'Usuario M. García — rol Aduanas — creado', time:'14:20'},
            {icon:ICON.barChart,     text:'Informe semanal generado y enviado', time:'14:00'},
            {icon:ICON.refresh,      text:'Base de datos Argentina sincronizada', time:'13:30'},
            {icon:ICON.settings,     text:'Backup automático completado exitosamente', time:'12:00'}
        ]
    };
    const acts = activities[role] || [];
    document.getElementById('dashboardActivity').innerHTML = acts.map(a =>
        `<div class="activity-row"><span class="activity-icon">${a.icon}</span><span class="activity-body">${a.text}</span><span class="activity-time">${a.time}</span></div>`
    ).join('');
}

// ══════════════════════════════════════════
// RF01 — MENORES
// ══════════════════════════════════════════
function rf01GoStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.step').forEach((s,i) => {
        s.classList.remove('active','done');
        if (i+1 < n) s.classList.add('done');
        if (i+1 === n) s.classList.add('active');
    });
    document.getElementById('rf01-step' + n).classList.add('active');
}

function rf01NextStep(from) {
    if (from === 1) {
        const rut = document.getElementById('rf01-rut').value.trim();
        const nombre = document.getElementById('rf01-nombre').value.trim();
        const nac = document.getElementById('rf01-nacimiento').value;
        const nacion = document.getElementById('rf01-nacionalidad').value;
        const dest = document.getElementById('rf01-destino').value;
        if (!rut || !nombre || !nac || !nacion || !dest) {
            showToast('Complete todos los campos obligatorios', 'warning'); return;
        }
        rf01GoStep(2);
    } else if (from === 2) {
        const modalidad = document.querySelector('input[name="rf01-modalidad"]:checked');
        if (!modalidad) { showToast('Seleccione la modalidad de viaje', 'warning'); return; }
        const mod = modalidad.value;
        let reqs = '';
        if (mod === 'ambos')
            reqs = 'Viaje con ambos padres — no se requiere autorización notarial adicional.';
        else if (mod === 'un_padre')
            reqs = 'Se requiere <strong>autorización notarial</strong> del progenitor ausente, con firma ante notario.';
        else
            reqs = 'Se requiere <strong>autorización notarial de ambos progenitores</strong>, con firma ante notario y legalizada.';
        document.getElementById('rf01-docs-reqs').innerHTML = reqs;
        rf01GoStep(3);
    }
}

function toggleTutorInfo() {
    const sel = document.querySelector('input[name="rf01-modalidad"]:checked');
    const panel = document.getElementById('rf01-tutor-info');
    if (sel && (sel.value === 'un_padre' || sel.value === 'sin_padres')) {
        panel.classList.remove('hidden');
    } else {
        panel.classList.add('hidden');
    }
}

function rf01Submit() {
    const rut = document.getElementById('rf01-rut').value.trim();
    const nombre = document.getElementById('rf01-nombre').value.trim();
    const lastDigit = rut.replace(/\D/g,'').slice(-1);
    rf01GoStep(4);
    const resultEl = document.getElementById('rf01-result');

    if (lastDigit === '0') {
        resultEl.innerHTML = `
            <div class="alert-box alert-danger" style="text-align:center;padding:2rem">
                <div style="margin-bottom:1rem;color:#922b21">${ICON.alertCircle.replace('width="24" height="24"','width="48" height="48"')}</div>
                <h3 style="color:#922b21;margin-bottom:.5rem">ALERTA — Arraigo Nacional Detectado</h3>
                <p>El menor <strong>${escapeHtml(nombre)}</strong> (RUT: ${escapeHtml(rut)}) tiene una medida cautelar de arraigo nacional vigente.</p>
                <p style="margin-top:.75rem">Se ha generado una <strong>alerta silenciosa al Supervisor</strong> y el flujo migratorio ha sido <strong>bloqueado automáticamente</strong>.</p>
                <p style="margin-top:.75rem;font-size:.85rem;color:#777">Folio de incidente: INC-${Date.now().toString().slice(-6)}</p>
                <button class="btn-secondary" style="margin-top:1.5rem" onclick="rf01GoStep(1)">Nuevo Registro</button>
            </div>`;
        addAuditEntry('ALERTA_ARRAIGO', 'RUT menor: ' + escapeHtml(rut));
    } else {
        const folio = 'MEN-2026-' + Math.floor(Math.random()*9000+1000);
        addAuditEntry('REGISTRO_MENOR', 'RUT: ' + escapeHtml(rut) + ' | Folio: ' + folio);
        resultEl.innerHTML = `
            <div class="success-box" style="text-align:center;padding:2rem">
                <div class="success-icon">${ICON.checkCircle}</div>
                <h3>Registro Exitoso</h3>
                <p>El menor <strong>${escapeHtml(nombre)}</strong> ha sido registrado correctamente.</p>
                <div style="background:#f0f4f8;border-radius:8px;padding:1rem;margin:1.5rem 0;text-align:left">
                    <p><strong>Folio de autorización:</strong> ${folio}</p>
                    <p><strong>RUT Menor:</strong> ${escapeHtml(rut)}</p>
                    <p><strong>Estado:</strong> <span style="color:#27ae60;font-weight:700">APROBADO — Paso habilitado</span></p>
                    <p><strong>Validación OCR:</strong> Completada</p>
                    <p><strong>Registro Civil:</strong> Verificado</p>
                </div>
                <p style="font-size:.85rem;color:#888">Imprima o guarde este folio como comprobante.</p>
                <div class="form-actions" style="justify-content:center;margin-top:1.5rem">
                    <button class="btn-secondary" onclick="showToast('Folio enviado al correo registrado','success')">Enviar por Email</button>
                    <button class="btn-primary" onclick="rf01GoStep(1)">Nuevo Registro</button>
                </div>
            </div>`;
    }
}

// ══════════════════════════════════════════
// RF02 — VEHÍCULOS
// ══════════════════════════════════════════
function setTipoOp(tipo) {
    document.getElementById('rf02-tipo-op').value = tipo;
    const btnEntrada = document.getElementById('rf02-btn-entrada');
    const btnSalida = document.getElementById('rf02-btn-salida');
    btnEntrada.classList.toggle('active', tipo === 'ENTRADA');
    btnSalida.classList.toggle('active', tipo === 'SALIDA');
    btnEntrada.setAttribute('aria-pressed', tipo === 'ENTRADA' ? 'true' : 'false');
    btnSalida.setAttribute('aria-pressed', tipo === 'SALIDA' ? 'true' : 'false');
}

function rf02Validate() {
    const patente = document.getElementById('rf02-patente').value.trim().toUpperCase();
    const propietario = document.getElementById('rf02-propietario').value.trim();
    if (!patente || !propietario) { showToast('Ingrese patente y RUT del propietario', 'warning'); return; }
    const diasPDI = parseInt(document.getElementById('rf02-dias-pdi').value, 10);
    if (!diasPDI || diasPDI < 1) { showToast('Ingrese los días autorizados por PDI al conductor', 'warning'); return; }

    const tipo = document.getElementById('rf02-tipo-op').value;
    const marca = document.getElementById('rf02-marca').value || 'No especificado';
    const modelo = document.getElementById('rf02-modelo').value || 'No especificado';
    const resultEl = document.getElementById('rf02-result-content');
    const safePat = escapeHtml(patente);
    const safeMarca = escapeHtml(marca);
    const safeModelo = escapeHtml(modelo);

    let html = '';
    if (patente.startsWith('ROB')) {
        html = `<div class="alert-box alert-danger">
            <h3 style="color:#922b21;margin-bottom:.75rem">VEHÍCULO ENCARGADO POR ROBO</h3>
            <p><strong>Patente:</strong> ${safePat}</p>
            <p><strong>Estado:</strong> Encargado por robo — denuncia activa</p>
            <p><strong>Acción:</strong> Vehículo retenido. Notificar a PDI inmediatamente.</p>
            <p style="margin-top:.75rem;font-size:.85rem">Folio retención: RET-${Date.now().toString().slice(-6)}</p>
        </div>`;
        addAuditEntry('ALERTA_ROBO_VEH', 'Patente: ' + escapeHtml(patente));
    } else if (patente.startsWith('MLT')) {
        const monto = (Math.floor(Math.random()*15)+3) + ' UTM';
        html = `<div class="alert-box alert-warning">
            <h3 style="color:#7d6608;margin-bottom:.75rem">MULTAS PENDIENTES</h3>
            <p><strong>Patente:</strong> ${safePat} | <strong>Marca:</strong> ${safeMarca}</p>
            <p><strong>Multas pendientes:</strong> ${monto}</p>
            <p><strong>Estado:</strong> Salida condicionada al pago de multas</p>
            <p style="margin-top:.75rem">El propietario debe regularizar multas antes de autorizar ${tipo === 'SALIDA' ? 'la salida' : 'el ingreso'}.</p>
        </div>`;
    } else {
        const plazo = diasPDI;
        const vencimiento = new Date(); vencimiento.setDate(vencimiento.getDate() + plazo);
        const folio = 'VEH-2026-' + Math.floor(Math.random()*9000+1000);
        addAuditEntry('VEHICULO_AUTORIZADO', 'Patente: ' + escapeHtml(patente) + ' | Op: ' + tipo + ' | Folio: ' + folio);
        html = `<div class="success-box">
            <div class="success-icon">${ICON.checkCircle}</div>
            <h3>APROBADO — ${tipo === 'ENTRADA' ? 'Ingreso Autorizado' : 'Salida Autorizada'}</h3>
            <div style="background:#f0f4f8;border-radius:8px;padding:1rem;margin:1rem 0;text-align:left;font-size:.9rem">
                <p><strong>Patente:</strong> ${safePat}</p>
                <p><strong>Vehículo:</strong> ${safeMarca} ${safeModelo}</p>
                <p><strong>Operación:</strong> ${tipo}</p>
                <p><strong>Plazo TITV (= autorización migratoria PDI):</strong> ${plazo} días</p>
                <p><strong>Vence:</strong> ${vencimiento.toLocaleDateString('es-CL')}</p>
                <p><strong>Folio:</strong> ${folio}</p>
                <p><strong>Argentina:</strong> Validado | <strong>Registro Civil:</strong> Sin novedad</p>
            </div>
            <div class="form-actions" style="justify-content:center">
                <button class="btn-secondary" onclick="showToast('Generando PDF...','info')">Generar PDF (2 copias)</button>
            </div>
        </div>`;
    }
    resultEl.innerHTML = html;
}

// ══════════════════════════════════════════
// RF03 — SAG
// ══════════════════════════════════════════
function rf03CheckRisk() {
    const hasAlto = [...document.querySelectorAll('.sag-product:checked')].some(c => c.dataset.risk === 'alto');
    document.getElementById('rf03-warning').classList.toggle('hidden', !hasAlto);
}

function rf03Submit() {
    if (!document.getElementById('rf03-jurada').checked) {
        showToast('Debe aceptar la declaración jurada', 'warning'); return;
    }
    const checked = [...document.querySelectorAll('.sag-product:checked')];
    const folio = 'SAG-2026-' + Math.floor(Math.random()*9000+1000);
    const hasAlto = checked.some(c => c.dataset.risk === 'alto');
    const resultEl = document.getElementById('rf03-result');
    resultEl.classList.remove('hidden');
    addAuditEntry('DECLARACION_SAG', 'Folio: ' + folio + ' | Productos alto riesgo: ' + hasAlto);

    if (hasAlto) {
        resultEl.innerHTML = `<div class="alert-box alert-warning">
            <h3 style="margin-bottom:.5rem">Declaración Enviada — Revisión Física Requerida</h3>
            <p>Folio SAG: <strong>${folio}</strong></p>
            <p>Se han declarado productos de alto riesgo. Diríjase a la línea de revisión SAG con su declaración.</p>
            <p style="margin-top:.5rem;font-size:.85rem">Un Oficial SAG le contactará en breve para completar la revisión.</p>
        </div>`;
    } else {
        resultEl.innerHTML = `<div class="success-box">
            <div class="success-icon">${ICON.checkCircle}</div>
            <h3>Declaración SAG Aprobada</h3>
            <p>Folio: <strong>${folio}</strong></p>
            <p>${checked.length === 0 ? 'Sin productos de riesgo declarados.' : 'Productos de bajo/medio riesgo verificados.'} Puede continuar su trámite.</p>
        </div>`;
    }
}

// ══════════════════════════════════════════
// RF04 — INTEROPERABILIDAD
// ══════════════════════════════════════════
// BACKEND NOTE: Transferencia internacional de datos personales con Argentina
// debe cumplir art. 26 Ley N°21.719 (garantías adecuadas o decisión de adecuación).
// Implementar DPO (Delegado de Protección de Datos, art. 52) y DPIA (art. 37).
function toggleOfflineMode() {
    showToast('Modo offline activado — operando con cache local', 'warning');
}

function rf04Validate() {
    const doc = document.getElementById('rf04-documento').value.trim();
    if (!doc) { showToast('Ingrese un documento o patente', 'warning'); return; }
    const resultEl = document.getElementById('rf04-result');
    resultEl.classList.add('hidden');
    setTimeout(() => {
        const lastChar = doc.slice(-1);
        let html = '';
        const safeDoc = escapeHtml(doc);
        if (lastChar === '0' || lastChar === 'X') {
            html = `<div class="alert-box alert-danger"><strong>IMPEDIMENTO DETECTADO</strong><br>Documento: <strong>${safeDoc}</strong><br>Resultado: Persona/Vehículo con impedimento en base Argentina. Se ha generado alerta automática y registro en auditoría.</div>`;
            addAuditEntry('VALIDACION_AR_IMPEDIMENTO', 'Documento: ' + escapeHtml(doc));
        } else {
            html = `<div class="alert-box alert-success"><strong>VALIDACIÓN OK</strong><br>Documento: <strong>${safeDoc}</strong><br>Sin impedimentos registrados en Argentina. Latencia: ${Math.floor(Math.random()*100+100)}ms</div>`;
            addAuditEntry('VALIDACION_AR_OK', 'Documento: ' + escapeHtml(doc));
        }
        resultEl.innerHTML = html;
        resultEl.classList.remove('hidden');
    }, 800);
}

// ══════════════════════════════════════════
// RF05 — CONTROL PDI/SAG
// ══════════════════════════════════════════
const mockPassengers = [
    {name:'Juan Pérez González', rut:'12.345.678-9'},
    {name:'María López Torres', rut:'15.678.234-K'},
    {name:'Carlos Rodríguez Silva', rut:'9.876.543-2'},
    {name:'Ana Martínez Fuentes', rut:'18.234.567-8'}
];

function rf05Search() {
    const q = document.getElementById('rf05-search').value.trim();
    if (!q) { showToast('Ingrese un RUT o nombre', 'warning'); return; }
    const p = mockPassengers[Math.floor(Math.random() * mockPassengers.length)];
    document.getElementById('rf05-passenger-name').textContent = p.name;
    document.getElementById('rf05-passenger-rut').textContent = 'RUT: ' + p.rut;
    document.getElementById('rf05-passenger-panel').classList.remove('hidden');
    pdiDone = false; aduanasDone = false; sagDone = false;
    document.getElementById('rf05-barrier-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.add('hidden');
    document.getElementById('pdi-status').classList.add('hidden');
    document.getElementById('aduana-status').classList.add('hidden');
    document.getElementById('sag-status').classList.add('hidden');
    const aduanaCol = document.getElementById('aduana-col');
    const sagCol = document.getElementById('sag-col');
    aduanaCol.classList.add('locked');
    sagCol.classList.add('locked');
    ['pdi','aduana','sag','ok'].forEach(s => {
        const el = document.getElementById('flow-step-' + s);
        if (el) { el.classList.remove('active','done'); }
    });
    document.getElementById('flow-step-pdi').classList.add('active');
    ['pdi-identidad','pdi-nacionalidad-pdi','pdi-antecedentes','pdi-visa','pdi-arraigo','pdi-registro',
     'aduana-declaracion','aduana-equipaje','aduana-dpte','aduana-franquicia','aduana-titv',
     'sag-equipaje','sag-declaracion','sag-productos','sag-mascotas'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.checked = false;
    });
    ['pdi-confirm-btn','aduana-confirm-btn','sag-confirm-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) { btn.disabled = false; }
    });
}

function confirmPDI() {
    const boxes = ['pdi-identidad','pdi-nacionalidad-pdi','pdi-antecedentes','pdi-visa','pdi-arraigo','pdi-registro'];
    if (!boxes.every(id => document.getElementById(id) && document.getElementById(id).checked)) {
        showToast('Complete todos los ítems de revisión PDI / Migraciones', 'warning'); return;
    }
    pdiDone = true;
    const s = document.getElementById('pdi-status');
    s.classList.remove('hidden');
    s.classList.add('status-confirmed');
    s.textContent = 'Revisión PDI / Migraciones confirmada';
    document.getElementById('pdi-confirm-btn').disabled = true;
    const aduanaCol = document.getElementById('aduana-col');
    aduanaCol.classList.remove('locked');
    document.getElementById('flow-step-pdi').classList.remove('active');
    document.getElementById('flow-step-pdi').classList.add('done');
    document.getElementById('flow-step-aduana').classList.add('active');
    announceToScreenReader('PDI confirmado. Complete ahora la revisión de Aduanas.');
}

function confirmAduana() {
    if (!pdiDone) { showToast('Debe completar la revisión PDI primero', 'warning'); return; }
    const boxes = ['aduana-declaracion','aduana-equipaje','aduana-franquicia'];
    if (!boxes.every(id => document.getElementById(id) && document.getElementById(id).checked)) {
        showToast('Complete los ítems obligatorios de Aduanas', 'warning'); return;
    }
    aduanasDone = true;
    const s = document.getElementById('aduana-status');
    s.classList.remove('hidden');
    s.classList.add('status-confirmed');
    s.textContent = 'Revisión Aduanas confirmada';
    document.getElementById('aduana-confirm-btn').disabled = true;
    const sagCol = document.getElementById('sag-col');
    sagCol.classList.remove('locked');
    document.getElementById('flow-step-aduana').classList.remove('active');
    document.getElementById('flow-step-aduana').classList.add('done');
    document.getElementById('flow-step-sag').classList.add('active');
    announceToScreenReader('Aduanas confirmado. Complete ahora la revisión SAG.');
}

function confirmSAG() {
    if (!aduanasDone) { showToast('Debe completar la revisión de Aduanas primero', 'warning'); return; }
    const boxes = ['sag-equipaje','sag-declaracion','sag-productos','sag-mascotas'];
    if (!boxes.every(id => document.getElementById(id) && document.getElementById(id).checked)) {
        showToast('Complete todos los ítems de revisión SAG', 'warning'); return;
    }
    sagDone = true;
    const s = document.getElementById('sag-status');
    s.classList.remove('hidden');
    s.classList.add('status-confirmed');
    s.textContent = 'Revisión SAG confirmada';
    document.getElementById('sag-confirm-btn').disabled = true;
    document.getElementById('flow-step-sag').classList.remove('active');
    document.getElementById('flow-step-sag').classList.add('done');
    checkBarrier();
}

function checkBarrier() {
    if (pdiDone && aduanasDone && sagDone) {
        document.getElementById('rf05-barrier-panel').classList.remove('hidden');
        announceToScreenReader('Las tres revisiones están completas. Puede habilitar el cruce de frontera.');
    }
}

function announceToScreenReader(msg) {
    const region = document.getElementById('live-region');
    if (region) { region.textContent = ''; setTimeout(() => { region.textContent = msg; }, 50); }
}

function enableBarrier() {
    const folio = 'AUD-' + Date.now().toString().slice(-8);
    const passengerName = document.getElementById('rf05-passenger-name').textContent;
    addAuditEntry('CRUCE_AUTORIZADO', 'Folio: ' + folio + ' | Pasajero: ' + escapeHtml(passengerName));
    document.getElementById('rf05-folio').textContent = folio;
    document.getElementById('rf05-barrier-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.remove('hidden');
    document.getElementById('flow-step-ok').classList.add('done');
    showToast('Barrera habilitada — folio ' + folio, 'success');
}

function rf05Reset() {
    document.getElementById('rf05-passenger-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.add('hidden');
    document.getElementById('rf05-search').value = '';
    pdiDone = false; aduanasDone = false; sagDone = false;
    ['pdi-confirm-btn','aduana-confirm-btn','sag-confirm-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) { btn.disabled = false; }
    });
}

// ══════════════════════════════════════════
// RF07 — USUARIOS
// ══════════════════════════════════════════
let users = [
    {nombre:'Admin SNA', rut:'10.000.000-1', email:'admin@aduanas.gob.cl', rol:'admin', estado:'Activo', fa:true},
    {nombre:'Juan Pérez', rut:'12.345.678-9', email:'jperez@aduanas.gob.cl', rol:'aduanas', estado:'Activo', fa:true},
    {nombre:'María García', rut:'15.678.234-K', email:'mgarcia@pdi.cl', rol:'pdi', estado:'Activo', fa:true},
    {nombre:'Carlos López', rut:'9.876.543-2', email:'clopez@sag.gob.cl', rol:'sag', estado:'Inactivo', fa:false},
    {nombre:'Ana Rodríguez', rut:'18.234.567-8', email:'arodriguez@aduanas.gob.cl', rol:'aduanas', estado:'Activo', fa:true}
];

const roleBadge = {admin:'Administrador SNA', aduanas:'Funcionario Aduanas', pdi:'Oficial PDI', sag:'Oficial SAG', turista:'Turista'};

function renderUsersTable(filter) {
    const list = filter ? users.filter(u =>
        u.nombre.toLowerCase().includes(filter) || u.rut.includes(filter) || u.email.toLowerCase().includes(filter)
    ) : users;
    document.getElementById('rf07-users-table').innerHTML = list.map((u,i) => `
        <tr>
            <td>${escapeHtml(u.nombre)}</td>
            <td>${escapeHtml(u.rut)}</td>
            <td>${escapeHtml(u.email)}</td>
            <td>${roleBadge[u.rol]||u.rol}</td>
            <td><span class="badge ${u.estado==='Activo'?'badge-success':'badge-warning'}">${u.estado}</span></td>
            <td><span class="icon-2fa ${u.fa?'ok':'no'}">${u.fa?ICON.check:'×'} ${u.fa?'Activo':'No'}</span></td>
            <td>
                <button class="btn-action edit" onclick="showToast('Modo edición: ${escapeHtml(u.nombre)}','info')">${ICON.edit} Editar</button>
                <button class="btn-action disable" onclick="rf07Toggle(${i})">${ICON.xCircle} ${u.estado==='Activo'?'Deshabilitar':'Habilitar'}</button>
            </td>
        </tr>`).join('');
}

function rf07Toggle(i) {
    users[i].estado = users[i].estado === 'Activo' ? 'Inactivo' : 'Activo';
    addAuditEntry('CAMBIO_ESTADO_USUARIO', 'Usuario: ' + escapeHtml(users[i].nombre) + ' | Estado: ' + users[i].estado);
    renderUsersTable();
    showToast('Estado de usuario actualizado', 'success');
}

function rf07FilterUsers() {
    renderUsersTable(document.getElementById('rf07-search').value.toLowerCase());
}

function rf07ToggleCreate() {
    const p = document.getElementById('rf07-create-panel');
    p.classList.toggle('hidden');
    const btn = document.getElementById('rf07-create-toggle');
    if (btn) btn.setAttribute('aria-expanded', !p.classList.contains('hidden') ? 'true' : 'false');
}

function rf07CreateUser() {
    const nombre = document.getElementById('rf07-new-nombre').value.trim();
    const rut = document.getElementById('rf07-new-rut').value.trim();
    const email = document.getElementById('rf07-new-email').value.trim();
    const rol = document.getElementById('rf07-new-rol').value;
    if (!nombre || !rut || !email || !rol) { showToast('Complete todos los campos', 'warning'); return; }
    users.push({nombre, rut, email, rol, estado:'Activo', fa:false});
    addAuditEntry('CREAR_USUARIO', 'Usuario: ' + escapeHtml(nombre) + ' | Rol: ' + rol);
    renderUsersTable();
    rf07ToggleCreate();
    ['rf07-new-nombre','rf07-new-rut','rf07-new-email'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('rf07-new-rol').value = '';
    showToast('Usuario ' + nombre + ' creado exitosamente. Email de bienvenida enviado.', 'success');
}

// ══════════════════════════════════════════
// RF08 — NOTIFICACIONES
// ══════════════════════════════════════════
function dismissNotif(btn) {
    btn.closest('.notification-item').style.opacity='0';
    setTimeout(() => btn.closest('.notification-item').remove(), 300);
}

// ══════════════════════════════════════════
// RF09 — PATENTES
// ══════════════════════════════════════════
function rf09Search() {
    const rawPat = document.getElementById('rf09-patente').value.trim().toUpperCase();
    if (!rawPat || rawPat.length < 4) { showToast('Ingrese una patente válida', 'warning'); return; }
    const pat = escapeHtml(rawPat);
    const loader = document.getElementById('rf09-loader');
    const result = document.getElementById('rf09-result');
    loader.classList.remove('hidden');
    result.classList.add('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
        result.classList.remove('hidden');
        let html = '';
        if (rawPat.startsWith('ROB')) {
            html = `<div class="alert-box alert-danger" role="alert">
                <h3 style="color:#922b21;margin-bottom:.75rem">VEHÍCULO ENCARGADO POR ROBO</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem">
                    <tr><td style="padding:.4rem 0;color:#888">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Estado</td><td><strong style="color:#e74c3c">ENCARGADO POR ROBO</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Denuncia N°</td><td>PDI-${Math.floor(Math.random()*90000+10000)}</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Fecha denuncia</td><td>15/05/2026</td></tr>
                </table>
                <p style="margin-top:1rem;font-weight:600">Acción: Retener vehículo y notificar PDI inmediatamente.</p>
            </div>`;
            addAuditEntry('CONSULTA_PATENTE_ROBO', 'Patente: ' + escapeHtml(rawPat));
            addHistory(rawPat, 'Encargado robo');
        } else if (rawPat.startsWith('MLT')) {
            const monto = (Math.floor(Math.random()*15)+3) + ' UTM';
            html = `<div class="alert-box alert-warning" role="alert">
                <h3 style="color:#7d6608;margin-bottom:.75rem">MULTAS PENDIENTES</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem">
                    <tr><td style="padding:.4rem 0;color:#666">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#666">Multas pendientes</td><td><strong>${monto}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#666">Prohibición de circulación</td><td>Sí — hasta regularizar deuda</td></tr>
                </table>
                <p style="margin-top:1rem;font-weight:600">Acción: Condicionar salida al pago de multas.</p>
            </div>`;
            addAuditEntry('CONSULTA_PATENTE_MULTA', 'Patente: ' + escapeHtml(rawPat));
            addHistory(rawPat, 'Multas pendientes');
        } else {
            html = `<div class="success-box" role="status">
                <div class="success-icon">${ICON.checkCircle}</div>
                <h3>Sin Novedad</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem;text-align:left">
                    <tr><td style="padding:.4rem 0;color:#888">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Robo</td><td>Sin encargos</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Multas</td><td>Sin deuda</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Prohibiciones</td><td>Sin prohibiciones</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Argentina</td><td>Sin impedimentos</td></tr>
                </table>
                <p style="margin-top:1rem;color:#1e8449;font-weight:600">Vehículo autorizado para cruzar la frontera.</p>
            </div>`;
            addAuditEntry('CONSULTA_PATENTE_OK', 'Patente: ' + escapeHtml(rawPat));
            addHistory(rawPat, 'Sin novedad');
        }
        result.innerHTML = html;
    }, 1200);
}

function addHistory(pat, res) {
    const tbody = document.getElementById('rf09-history');
    const now = new Date().toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit'});
    const badgeClass = res === 'Sin novedad' ? 'badge-success' : res.includes('robo') ? 'badge-danger' : 'badge-warning';
    const safePat = escapeHtml(pat);
    const safeRes = escapeHtml(res);
    const safeUser = escapeHtml(currentUser ? currentUser.rut.slice(-5) : 'Sistema');
    const row = `<tr><td>${safePat}</td><td>${now}</td><td><span class="badge ${badgeClass}">${safeRes}</span></td><td>${safeUser}</td></tr>`;
    tbody.insertAdjacentHTML('afterbegin', row);
}

// ══════════════════════════════════════════
// RF10 — CHATBOT
// ══════════════════════════════════════════
const chatResponses = [
    {keys:['menor','menores','niño','hijo','hija','autorización','notarial'],
     res:'Para viajar con un menor de edad necesita: (1) Cédula de identidad del menor, (2) Autorización notarial del progenitor ausente si viaja con uno solo de sus padres, (3) Autorización notarial de ambos si viaja con un tercero. Puede iniciar el trámite en el módulo <strong>Menores de Edad</strong>.'},
    {keys:['vehículo','vehiculo','auto','carro','camioneta','patente','admisión'],
     res:'Para ingresar un vehículo a Chile desde Argentina (o viceversa) necesita el Formulario de Acuerdo Chileno-Argentino. El plazo de permanencia del vehículo es equivalente al que la autoridad migratoria otorgue al conductor en la misma entrada. Acceda al módulo <strong>Admisión de Vehículos</strong>.'},
    {keys:['sag','declaración','alimento','comida','fruta','carne','vegetal'],
     res:'Debe declarar cualquier producto de origen animal o vegetal que transporte. Productos de alto riesgo (carnes, lácteos, mascotas) requieren certificado sanitario oficial. La no declaración puede resultar en multas de hasta <strong>50 UTM</strong>. Use el módulo <strong>Declaración SAG</strong>.'},
    {keys:['documento','documentos','requiero','necesito','qué traer','requisito'],
     res:'Los documentos básicos para cruzar Los Libertadores son: (1) Cédula de identidad vigente o pasaporte, (2) Para vehículos: licencia de conducir, seguro obligatorio y formulario SAG, (3) Para menores: autorización notarial según caso. ¿Necesita más detalles?'},
    {keys:['plazo','días','tiempo','cuánto','duración'],
     res:'El plazo de permanencia lo determina PDI según el motivo de viaje: los turistas suelen recibir <strong>hasta 90 días prorrogables</strong>, pero la resolución definitiva es siempre de PDI en la misma entrada. Para vehículos bajo <strong>Tránsito Internacional de Vehículos (TITV)</strong>, no existe un plazo fijo: el vehículo hereda la autorización migratoria que PDI otorgue al conductor, por lo que el plazo varía en cada caso. Para registrar una admisión use el módulo <strong>Admisión de Vehículos</strong>.'},
    {keys:['horario','hora','abierto','cierra','disponible','cadena','nieve','invierno'],
     res:'El Complejo Los Libertadores opera <strong>24 horas durante la temporada estival (aproximadamente diciembre a abril)</strong>. En temporada invernal opera aproximadamente de <strong>08:00 a 20:00 horas</strong>, sujeto a cierres por clima adverso, nevazones o condiciones de ruta. Antes de viajar en invierno, consulte el estado del paso en el sitio oficial del MOP o Carabineros. <strong>Importante:</strong> en temporada de nieve es obligatorio portar cadenas para nieve o tracción en las cuatro ruedas.'},
    {keys:['multa','multas','deuda','prohibición','cobro'],
     res:'Puede consultar multas pendientes de su vehículo en el módulo <strong>Validación de Patentes</strong>. El funcionario de aduanas también realizará esta consulta al momento de procesar su vehículo.'},
    {keys:['operador','humano','persona','agente','funcionario','hablar'],
     res:'Entiendo que prefiere hablar con un funcionario. Un operador humano estará disponible en breve. Número de ticket de atención: <strong>TKT-' + Math.floor(Math.random()*9000+1000) + '</strong>. Tiempo estimado de espera: <strong>5 minutos</strong>. ¿Hay algo más en lo que pueda ayudarte mientras tanto?'}
];

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    appendChatMsg(msg, 'user');
    input.value = '';
    setTimeout(() => {
        const response = getChatResponse(msg);
        appendChatMsg(response, 'bot');
    }, 600);
}

function askChatTopic(topic) {
    const questions = {
        menores: '¿Qué necesito para viajar con un menor de edad?',
        vehiculos: '¿Cómo ingreso mi vehículo a Chile?',
        sag: '¿Qué debo declarar en el SAG?',
        documentos: '¿Qué documentos necesito para cruzar?',
        plazo: '¿Cuántos días puedo estar en el país?',
        horario: '¿En qué horario atiende el paso fronterizo?',
        multas: '¿Cómo consulto mis multas de vehículo?',
        operador: 'Quiero hablar con un funcionario'
    };
    const q = questions[topic] || topic;
    appendChatMsg(q, 'user');
    setTimeout(() => {
        const response = getChatResponse(q);
        appendChatMsg(response, 'bot');
    }, 600);
}

function getChatResponse(msg) {
    const lower = msg.toLowerCase();
    for (const entry of chatResponses) {
        if (entry.keys.some(k => lower.includes(k))) return entry.res;
    }
    return 'No encontré información específica sobre tu consulta. Te recomiendo revisar la sección <strong>FAQ</strong> o contactar directamente con un funcionario. Número de atención: <strong>TKT-' + Math.floor(Math.random()*9000+1000) + '</strong>.';
}

function appendChatMsg(text, type) {
    const container = document.getElementById('chatMessages');
    const now = new Date().toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit'});
    const div = document.createElement('div');
    div.className = 'chat-msg ' + type;
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    if (type === 'bot') {
        bubble.innerHTML = text;
    } else {
        bubble.textContent = text;
    }
    const time = document.createElement('span');
    time.className = 'msg-time';
    time.textContent = now;
    div.appendChild(bubble);
    div.appendChild(time);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// ══════════════════════════════════════════
// ARCO+P — PRIVACIDAD (Fase 3)
// ══════════════════════════════════════════
// BACKEND REQUIREMENTS (no implementado en este prototipo estático):
// - JWT con RS256 + refresh tokens en cookie HttpOnly/Secure/SameSite=Strict
// - Hash de contraseñas: argon2id (min) o bcrypt (cost >= 12)
// - 2FA real: TOTP (RFC 6238) con biblioteca como Speakeasy
// - TLS/HTTPS forzado en producción + HSTS preload
// - RBAC server-side en cada endpoint (no solo frontend)
// - Rate limiting + CSRF protection + Content-Security-Policy
// - Transferencia internacional (RF04): art. 26 Ley N°21.719
// - DPO designado (art. 52 Ley N°21.719): dpo@aduanas.gob.cl
// - DPIA obligatoria antes de implementar (art. 37 Ley N°21.719)
// - Notificación de brechas a APDP en <= 72h (art. 40 Ley N°21.719)
// - Política de retención documentada; supresión efectiva al ejercer derecho

function renderArcoView() {
    const tbody = document.getElementById('arco-audit-log');
    if (!tbody) return;
    if (auditLog.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#aaa;padding:1.5rem">No hay entradas de auditoría en esta sesión.</td></tr>';
        return;
    }
    tbody.innerHTML = auditLog.map(e => `
        <tr>
            <td>${escapeHtml(e.time)}</td>
            <td><span class="audit-action">${escapeHtml(e.action)}</span></td>
            <td>${escapeHtml(e.detail)}</td>
            <td>${escapeHtml(e.user)}</td>
        </tr>`).join('');
}

let arcoRequests = [];

function submitArcoRequest() {
    const tipo = document.getElementById('arco-tipo').value;
    const rut = document.getElementById('arco-rut').value.trim();
    const email = document.getElementById('arco-email').value.trim();
    if (!tipo || !rut || !email) { showToast('Complete los campos obligatorios', 'warning'); return; }
    const folio = 'ARCO-2026-' + Math.floor(Math.random()*9000+1000);
    addAuditEntry('SOLICITUD_ARCO', 'Tipo: ' + escapeHtml(tipo) + ' | RUT: ' + escapeHtml(rut) + ' | Folio: ' + folio);
    arcoRequests.push({folio, tipo, rut, email, fecha: new Date().toLocaleDateString('es-CL')});
    const resultEl = document.getElementById('arco-result');
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = `<div class="alert-box alert-success">
        <strong>Solicitud recibida</strong><br>
        Folio: <strong>${folio}</strong><br>
        Tipo: ${escapeHtml(tipo)}<br>
        Recibirá respuesta en el correo <strong>${escapeHtml(email)}</strong> en un plazo máximo de <strong>30 días hábiles</strong> conforme al art. 11 Ley N°21.719.
        <br><small style="color:#555;margin-top:.5rem;display:block">Conserve su folio como comprobante.</small>
    </div>`;
    document.getElementById('arco-tipo').value = '';
    document.getElementById('arco-rut').value = '';
    document.getElementById('arco-email').value = '';
    document.getElementById('arco-detalle').value = '';
    renderArcoView();
}

// ══════════════════════════════════════════
// UTILITIES
// ══════════════════════════════════════════
function simulateUpload(fieldId) {
    const statusEl = document.getElementById(fieldId + '-status');
    if (!statusEl) return;
    const fakeNames = ['documento_notarial.pdf','cedula_identidad.pdf','certificado_sag.pdf','autorizacion.pdf'];
    const name = fakeNames[Math.floor(Math.random()*fakeNames.length)];
    statusEl.textContent = 'Cargado: ' + name;
    statusEl.classList.add('uploaded');
    showToast('Archivo cargado: ' + name, 'success');
}

function toggleFAQ(index) {
    const answer = document.getElementById('faq-' + index);
    const question = answer.previousElementSibling;
    const icon = question.querySelector('.faq-icon');
    document.querySelectorAll('.faq-answer.active').forEach(item => {
        item.classList.remove('active');
        item.previousElementSibling.querySelector('.faq-icon').classList.remove('active');
    });
    answer.classList.toggle('active');
    icon.classList.toggle('active');
}

let toastTimeout;
function showToast(msg, type) {
    type = type || 'info';
    const t = document.getElementById('toast');
    t.className = 'toast ' + type;
    document.getElementById('toast-message').textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => t.classList.add('hidden'), 3500);
}

window.onclick = function(e) {
    const m = document.getElementById('loginModal');
    if (e.target === m) m.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Aduanas System v2.0 cargado');
});