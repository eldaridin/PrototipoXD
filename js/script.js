// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentUser = null;
let currentView = 'landing';
let viewHistory = [];
let pdiDone = false;
let sagDone = false;

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
    admin:    ['rf06','rf07','rf08','rf01','rf02','rf03','rf04','rf05','rf09','rf10']
};

const moduleInfo = {
    rf01: {icon:'👶', title:'RF01: Menores', desc:'Registro de menores de edad'},
    rf02: {icon:'🚗', title:'RF02: Vehículos', desc:'Admisión y salida de vehículos'},
    rf03: {icon:'🥬', title:'RF03: SAG', desc:'Declaración jurada SAG'},
    rf04: {icon:'🌐', title:'RF04: Interoperabilidad', desc:'Validación con Argentina'},
    rf05: {icon:'📋', title:'RF05: Control PDI/SAG', desc:'Revisión de pasajeros'},
    rf06: {icon:'📊', title:'RF06: Reportes', desc:'Informes estadísticos'},
    rf07: {icon:'👤', title:'RF07: Usuarios', desc:'Gestión de cuentas RBAC'},
    rf08: {icon:'📧', title:'RF08: Notificaciones', desc:'Alertas automáticas'},
    rf09: {icon:'🔍', title:'RF09: Patentes', desc:'Validación de patentes y multas'},
    rf10: {icon:'💬', title:'RF10: Chatbot', desc:'Asistente virtual FAQ'}
};

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

    currentUser = { rut, role, name: rut };
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
    currentUser = null;
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
            {icon:'📋', text:'Formulario SAG completado', time:'Hace 15 min'},
            {icon:'👶', text:'Registro de menor enviado', time:'Hace 1 hora'},
            {icon:'📧', text:'Notificación recibida: trámite aprobado', time:'Hace 2 horas'}
        ],
        aduanas: [
            {icon:'🚗', text:'Vehículo ABC-1234 validado — APROBADO', time:'14:28'},
            {icon:'⚠️', text:'Alerta: patente ROB-9988 encargada por robo', time:'14:15'},
            {icon:'👶', text:'Menor RF01-0892 autorizado para cruzar', time:'13:55'},
            {icon:'🌐', text:'Sincronización con Argentina completada', time:'13:30'}
        ],
        pdi: [
            {icon:'✅', text:'Revisión PDI pasajero 12.345.678-9 completada', time:'14:30'},
            {icon:'🚨', text:'Arraigo detectado: alerta silenciosa enviada', time:'14:10'},
            {icon:'✅', text:'Flujo de revisión cerrado — barrera habilitada', time:'13:50'}
        ],
        sag: [
            {icon:'✅', text:'Declaración SAG folio 2026-245 aprobada', time:'14:25'},
            {icon:'⚠️', text:'Carnes sin certificado sanitario — revisión', time:'14:00'},
            {icon:'✅', text:'Mascota con vacuna verificada — OK', time:'13:40'}
        ],
        admin: [
            {icon:'👤', text:'Usuario M. García — rol Aduanas — creado', time:'14:20'},
            {icon:'📊', text:'Informe semanal generado y enviado', time:'14:00'},
            {icon:'🔄', text:'Base de datos Argentina sincronizada', time:'13:30'},
            {icon:'⚙️', text:'Backup automático completado exitosamente', time:'12:00'}
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
        if (mod === 'ambos') reqs = 'ℹ️ Viaje con ambos padres — no se requiere autorización notarial adicional.';
        else if (mod === 'un_padre') reqs = '⚠️ Se requiere <strong>autorización notarial</strong> del progenitor ausente, con firma ante notario.';
        else reqs = '⚠️ Se requiere <strong>autorización notarial de ambos progenitores</strong>, con firma ante notario y legalizada.';
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
                <div style="font-size:3rem;margin-bottom:1rem">🚨</div>
                <h3 style="color:#922b21;margin-bottom:.5rem">ALERTA — Arraigo Nacional Detectado</h3>
                <p>El menor <strong>${nombre}</strong> (RUT: ${rut}) tiene una medida cautelar de arraigo nacional vigente.</p>
                <p style="margin-top:.75rem">Se ha generado una <strong>alerta silenciosa al Supervisor</strong> y el flujo migratorio ha sido <strong>bloqueado automáticamente</strong>.</p>
                <p style="margin-top:.75rem;font-size:.85rem;color:#777">Folio de incidente: INC-${Date.now().toString().slice(-6)}</p>
                <button class="btn-secondary" style="margin-top:1.5rem" onclick="rf01GoStep(1)">Nuevo Registro</button>
            </div>`;
    } else {
        const folio = 'RF01-2026-' + Math.floor(Math.random()*9000+1000);
        resultEl.innerHTML = `
            <div class="success-box" style="text-align:center;padding:2rem">
                <div class="success-icon">✅</div>
                <h3>Registro Exitoso</h3>
                <p>El menor <strong>${nombre}</strong> ha sido registrado correctamente.</p>
                <div style="background:#f0f4f8;border-radius:8px;padding:1rem;margin:1.5rem 0;text-align:left">
                    <p><strong>Folio de autorización:</strong> ${folio}</p>
                    <p><strong>RUT Menor:</strong> ${rut}</p>
                    <p><strong>Estado:</strong> <span style="color:#27ae60;font-weight:700">APROBADO — Paso habilitado</span></p>
                    <p><strong>Validación OCR:</strong> Completada ✓</p>
                    <p><strong>Registro Civil:</strong> Verificado ✓</p>
                </div>
                <p style="font-size:.85rem;color:#888">Imprima o guarde este folio como comprobante.</p>
                <div class="form-actions" style="justify-content:center;margin-top:1.5rem">
                    <button class="btn-secondary" onclick="showToast('Folio enviado al correo registrado','success')">📧 Enviar por Email</button>
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
    document.getElementById('rf02-btn-entrada').classList.toggle('active', tipo === 'ENTRADA');
    document.getElementById('rf02-btn-salida').classList.toggle('active', tipo === 'SALIDA');
}

function rf02Validate() {
    const patente = document.getElementById('rf02-patente').value.trim().toUpperCase();
    const propietario = document.getElementById('rf02-propietario').value.trim();
    if (!patente || !propietario) { showToast('Ingrese patente y RUT del propietario', 'warning'); return; }

    const tipo = document.getElementById('rf02-tipo-op').value;
    const marca = document.getElementById('rf02-marca').value || 'No especificado';
    const modelo = document.getElementById('rf02-modelo').value || 'No especificado';
    const resultEl = document.getElementById('rf02-result-content');

    let html = '';
    if (patente.startsWith('ROB')) {
        html = `<div class="alert-box alert-danger">
            <h3 style="color:#922b21;margin-bottom:.75rem">🚨 VEHÍCULO ENCARGADO POR ROBO</h3>
            <p><strong>Patente:</strong> ${patente}</p>
            <p><strong>Estado:</strong> Encargado por robo — denuncia activa</p>
            <p><strong>Acción:</strong> Vehículo retenido. Notificar a PDI inmediatamente.</p>
            <p style="margin-top:.75rem;font-size:.85rem">Folio retención: RET-${Date.now().toString().slice(-6)}</p>
        </div>`;
    } else if (patente.startsWith('MLT')) {
        const monto = (Math.floor(Math.random()*15)+3) + ' UTM';
        html = `<div class="alert-box alert-warning">
            <h3 style="color:#7d6608;margin-bottom:.75rem">⚠️ MULTAS PENDIENTES</h3>
            <p><strong>Patente:</strong> ${patente} | <strong>Marca:</strong> ${marca}</p>
            <p><strong>Multas pendientes:</strong> ${monto}</p>
            <p><strong>Estado:</strong> Salida condicionada al pago de multas</p>
            <p style="margin-top:.75rem">El propietario debe regularizar multas antes de autorizar ${tipo === 'SALIDA' ? 'la salida' : 'el ingreso'}.</p>
        </div>`;
    } else {
        const plazo = tipo === 'ENTRADA' ? 180 : 90;
        const vencimiento = new Date(); vencimiento.setDate(vencimiento.getDate() + plazo);
        const folio = 'VEH-2026-' + Math.floor(Math.random()*9000+1000);
        html = `<div class="success-box">
            <div class="success-icon" style="font-size:2rem">✅</div>
            <h3>APROBADO — ${tipo === 'ENTRADA' ? 'Ingreso Autorizado' : 'Salida Autorizada'}</h3>
            <div style="background:#f0f4f8;border-radius:8px;padding:1rem;margin:1rem 0;text-align:left;font-size:.9rem">
                <p><strong>Patente:</strong> ${patente}</p>
                <p><strong>Vehículo:</strong> ${marca} ${modelo}</p>
                <p><strong>Operación:</strong> ${tipo}</p>
                <p><strong>Plazo permitido:</strong> ${plazo} días</p>
                <p><strong>Vence:</strong> ${vencimiento.toLocaleDateString('es-CL')}</p>
                <p><strong>Folio:</strong> ${folio}</p>
                <p><strong>Argentina:</strong> Validado ✓ | <strong>Registro Civil:</strong> Sin novedad ✓</p>
            </div>
            <div class="form-actions" style="justify-content:center">
                <button class="btn-secondary" onclick="showToast('Generando PDF...','info')">📄 Generar PDF (2 copias)</button>
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

    if (hasAlto) {
        resultEl.innerHTML = `<div class="alert-box alert-warning">
            <h3 style="margin-bottom:.5rem">⚠️ Declaración Enviada — Revisión Física Requerida</h3>
            <p>Folio SAG: <strong>${folio}</strong></p>
            <p>Se han declarado productos de alto riesgo. Diríjase a la línea de revisión SAG con su declaración.</p>
            <p style="margin-top:.5rem;font-size:.85rem">Un Oficial SAG le contactará en breve para completar la revisión.</p>
        </div>`;
    } else {
        resultEl.innerHTML = `<div class="success-box">
            <div class="success-icon">✅</div>
            <h3>Declaración SAG Aprobada</h3>
            <p>Folio: <strong>${folio}</strong></p>
            <p>${checked.length === 0 ? 'Sin productos de riesgo declarados.' : 'Productos de bajo/medio riesgo verificados.'} Puede continuar su trámite.</p>
        </div>`;
    }
}

// ══════════════════════════════════════════
// RF04 — INTEROPERABILIDAD
// ══════════════════════════════════════════
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
        if (lastChar === '0' || lastChar === 'X') {
            html = `<div class="alert-box alert-danger"><strong>🚨 IMPEDIMENTO DETECTADO</strong><br>Documento: <strong>${doc}</strong><br>Resultado: Persona/Vehículo con impedimento en base Argentina. Se ha generado alerta automática y registro en auditoría.</div>`;
        } else {
            html = `<div class="alert-box alert-success" style="background:#eafaf1;border:1px solid #a9dfbf;color:#1e8449"><strong>✅ VALIDACIÓN OK</strong><br>Documento: <strong>${doc}</strong><br>Sin impedimentos registrados en Argentina. Latencia: ${Math.floor(Math.random()*100+100)}ms</div>`;
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
    pdiDone = false; sagDone = false;
    document.getElementById('rf05-barrier-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.add('hidden');
    document.getElementById('pdi-status').classList.add('hidden');
    document.getElementById('sag-status').classList.add('hidden');
    ['pdi-identidad','pdi-antecedentes','pdi-visa','pdi-arraigo',
     'sag-equipaje','sag-declaracion','sag-productos','sag-mascotas'].forEach(id => {
        document.getElementById(id).checked = false;
    });
}

function confirmPDI() {
    const boxes = ['pdi-identidad','pdi-antecedentes','pdi-visa','pdi-arraigo'];
    if (!boxes.every(id => document.getElementById(id).checked)) {
        showToast('Complete todos los ítems de revisión PDI', 'warning'); return;
    }
    pdiDone = true;
    const s = document.getElementById('pdi-status');
    s.classList.remove('hidden');
    s.style.background = '#eafaf1'; s.style.color = '#1e8449';
    s.textContent = '✅ Revisión PDI Confirmada';
    document.getElementById('pdi-confirm-btn').disabled = true;
    document.getElementById('pdi-confirm-btn').style.opacity = '.5';
    checkBarrier();
}

function confirmSAG() {
    const boxes = ['sag-equipaje','sag-declaracion','sag-productos','sag-mascotas'];
    if (!boxes.every(id => document.getElementById(id).checked)) {
        showToast('Complete todos los ítems de revisión SAG', 'warning'); return;
    }
    sagDone = true;
    const s = document.getElementById('sag-status');
    s.classList.remove('hidden');
    s.style.background = '#eafaf1'; s.style.color = '#1e8449';
    s.textContent = '✅ Revisión SAG Confirmada';
    document.getElementById('sag-confirm-btn').disabled = true;
    document.getElementById('sag-confirm-btn').style.opacity = '.5';
    checkBarrier();
}

function checkBarrier() {
    if (pdiDone && sagDone) {
        document.getElementById('rf05-barrier-panel').classList.remove('hidden');
    }
}

function enableBarrier() {
    const folio = 'AUD-' + Date.now().toString().slice(-8);
    document.getElementById('rf05-folio').textContent = folio;
    document.getElementById('rf05-barrier-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.remove('hidden');
    showToast('Barrera habilitada — folio ' + folio, 'success');
}

function rf05Reset() {
    document.getElementById('rf05-passenger-panel').classList.add('hidden');
    document.getElementById('rf05-barrier-done').classList.add('hidden');
    document.getElementById('rf05-search').value = '';
    document.getElementById('pdi-confirm-btn').disabled = false;
    document.getElementById('pdi-confirm-btn').style.opacity = '1';
    document.getElementById('sag-confirm-btn').disabled = false;
    document.getElementById('sag-confirm-btn').style.opacity = '1';
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
            <td>${u.nombre}</td>
            <td>${u.rut}</td>
            <td>${u.email}</td>
            <td>${roleBadge[u.rol]||u.rol}</td>
            <td><span class="badge ${u.estado==='Activo'?'badge-success':'badge-warning'}">${u.estado}</span></td>
            <td>${u.fa?'✅ Activo':'❌ No'}</td>
            <td>
                <button class="btn-action edit" onclick="showToast('Modo edición: ${u.nombre}','info')">✏️ Editar</button>
                <button class="btn-action disable" onclick="rf07Toggle(${i})">⛔ ${u.estado==='Activo'?'Deshabilitar':'Habilitar'}</button>
            </td>
        </tr>`).join('');
}

function rf07Toggle(i) {
    users[i].estado = users[i].estado === 'Activo' ? 'Inactivo' : 'Activo';
    renderUsersTable();
    showToast('Estado de usuario actualizado', 'success');
}

function rf07FilterUsers() {
    renderUsersTable(document.getElementById('rf07-search').value.toLowerCase());
}

function rf07ToggleCreate() {
    const p = document.getElementById('rf07-create-panel');
    p.classList.toggle('hidden');
}

function rf07CreateUser() {
    const nombre = document.getElementById('rf07-new-nombre').value.trim();
    const rut = document.getElementById('rf07-new-rut').value.trim();
    const email = document.getElementById('rf07-new-email').value.trim();
    const rol = document.getElementById('rf07-new-rol').value;
    if (!nombre || !rut || !email || !rol) { showToast('Complete todos los campos', 'warning'); return; }
    users.push({nombre, rut, email, rol, estado:'Activo', fa:false});
    renderUsersTable();
    rf07ToggleCreate();
    document.getElementById('rf07-new-nombre').value='';
    document.getElementById('rf07-new-rut').value='';
    document.getElementById('rf07-new-email').value='';
    document.getElementById('rf07-new-rol').value='';
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
    const pat = document.getElementById('rf09-patente').value.trim().toUpperCase();
    if (!pat || pat.length < 4) { showToast('Ingrese una patente válida', 'warning'); return; }
    const loader = document.getElementById('rf09-loader');
    const result = document.getElementById('rf09-result');
    loader.classList.remove('hidden');
    result.classList.add('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
        result.classList.remove('hidden');
        let html = '';
        if (pat.startsWith('ROB')) {
            html = `<div class="alert-box alert-danger">
                <h3 style="color:#922b21;margin-bottom:.75rem">🚨 VEHÍCULO ENCARGADO POR ROBO</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem">
                    <tr><td style="padding:.4rem 0;color:#888">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Estado</td><td><strong style="color:#e74c3c">ENCARGADO POR ROBO</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Denuncia N°</td><td>PDI-${Math.floor(Math.random()*90000+10000)}</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Fecha denuncia</td><td>15/05/2026</td></tr>
                </table>
                <p style="margin-top:1rem;font-weight:600">Acción: Retener vehículo y notificar PDI inmediatamente.</p>
            </div>`;
            addHistory(pat, 'Encargado robo');
        } else if (pat.startsWith('MLT')) {
            const monto = (Math.floor(Math.random()*15)+3) + ' UTM';
            html = `<div class="alert-box alert-warning">
                <h3 style="color:#7d6608;margin-bottom:.75rem">⚠️ MULTAS PENDIENTES</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem">
                    <tr><td style="padding:.4rem 0;color:#666">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#666">Multas pendientes</td><td><strong>${monto}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#666">Prohibición de circulación</td><td>Sí — hasta regularizar deuda</td></tr>
                </table>
                <p style="margin-top:1rem;font-weight:600">Acción: Condicionar salida al pago de multas.</p>
            </div>`;
            addHistory(pat, 'Multas pendientes');
        } else {
            html = `<div class="success-box">
                <div class="success-icon">✅</div>
                <h3>Sin Novedad</h3>
                <table style="width:100%;border-collapse:collapse;font-size:.9rem;text-align:left">
                    <tr><td style="padding:.4rem 0;color:#888">Patente</td><td><strong>${pat}</strong></td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Robo</td><td>Sin encargos ✓</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Multas</td><td>Sin deuda ✓</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Prohibiciones</td><td>Sin prohibiciones ✓</td></tr>
                    <tr><td style="padding:.4rem 0;color:#888">Argentina</td><td>Sin impedimentos ✓</td></tr>
                </table>
                <p style="margin-top:1rem;color:#1e8449;font-weight:600">Vehículo autorizado para cruzar la frontera.</p>
            </div>`;
            addHistory(pat, 'Sin novedad');
        }
        result.innerHTML = html;
    }, 1200);
}

function addHistory(pat, res) {
    const tbody = document.getElementById('rf09-history');
    const now = new Date().toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit'});
    const badgeClass = res === 'Sin novedad' ? 'badge-success' : res.includes('robo') ? 'badge-danger' : 'badge-warning';
    const row = `<tr><td>${pat}</td><td>${now}</td><td><span class="badge ${badgeClass}">${res}</span></td><td>${currentUser ? currentUser.rut.slice(-5) : 'Sistema'}</td></tr>`;
    tbody.insertAdjacentHTML('afterbegin', row);
}

// ══════════════════════════════════════════
// RF10 — CHATBOT
// ══════════════════════════════════════════
const chatResponses = [
    {keys:['menor','menores','niño','hijo','hija','autorización','notarial'],
     res:'Para viajar con un menor de edad necesita: (1) Cédula de identidad del menor, (2) Autorización notarial del progenitor ausente si viaja con uno solo de sus padres, (3) Autorización notarial de ambos si viaja con un tercero. Puede iniciar el trámite en el módulo <strong>RF01: Menores de Edad</strong>.'},
    {keys:['vehículo','vehiculo','auto','carro','camioneta','patente','admisión'],
     res:'Para ingresar un vehículo a Chile desde Argentina (o viceversa) necesita el Formulario de Acuerdo Chileno-Argentino. El plazo permitido es de <strong>180 días</strong> para entrada y <strong>90 días</strong> para vehículos argentinos en Chile. Acceda al módulo <strong>RF02: Admisión de Vehículos</strong>.'},
    {keys:['sag','declaración','alimento','comida','fruta','carne','vegetal'],
     res:'Debe declarar cualquier producto de origen animal o vegetal que transporte. Productos de alto riesgo (carnes, lácteos, mascotas) requieren certificado sanitario oficial. La no declaración puede resultar en multas de hasta <strong>50 UTM</strong>. Use el módulo <strong>RF03: Declaración SAG</strong>.'},
    {keys:['documento','documentos','requiero','necesito','qué traer','requisito'],
     res:'Los documentos básicos para cruzar Los Libertadores son: (1) Cédula de identidad vigente o pasaporte, (2) Para vehículos: licencia de conducir, seguro obligatorio y formulario SAG, (3) Para menores: autorización notarial según caso. ¿Necesita más detalles?'},
    {keys:['plazo','días','tiempo','cuánto','duración'],
     res:'Los plazos de estadía son: Turistas en Chile: <strong>90 días prorrogables</strong>. Vehículos extranjeros en Chile: <strong>90 días</strong>. Vehículos chilenos en Argentina con acuerdo: <strong>180 días</strong>. Para consultar el plazo de un vehículo específico use el módulo RF02.'},
    {keys:['horario','hora','abierto','cierra','disponible'],
     res:'El Complejo Los Libertadores opera <strong>24 horas los 7 días de la semana</strong>. Las horas de mayor flujo son entre las 10:00 y las 14:00. En temporada alta (enero-febrero) puede haber esperas de hasta 4 horas.'},
    {keys:['multa','multas','deuda','prohibición','cobro'],
     res:'Puede consultar multas pendientes de su vehículo en el módulo <strong>RF09: Validación de Patentes</strong>. El funcionario de aduanas también realizará esta consulta al momento de procesar su vehículo.'},
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
    div.innerHTML = `<div class="msg-bubble">${text}</div><span class="msg-time">${now}</span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// ══════════════════════════════════════════
// UTILITIES
// ══════════════════════════════════════════
function simulateUpload(fieldId) {
    const statusEl = document.getElementById(fieldId + '-status');
    if (!statusEl) return;
    const fakeNames = ['documento_notarial.pdf','cedula_identidad.pdf','certificado_sag.pdf','autorizacion.pdf'];
    const name = fakeNames[Math.floor(Math.random()*fakeNames.length)];
    statusEl.textContent = '✓ ' + name;
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
function showToast(msg, type = 'info') {
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
    console.log('✓ Aduanas System v2.0 cargado');
});