const staffData = [
    { id: "HR-101", name: "محمود أحمد الهادي", title: "مراقب إداري أول", department: "الشؤون الإدارية", status: "active", statusText: "على رأس العمل" },
    { id: "HR-102", name: "فاطمة عمر القذافي", title: "مسؤولة أرشيف ومراسلات", department: "قسم الصادر والوارد", status: "active", statusText: "على رأس العمل" },
    { id: "HR-103", name: "سليم عبدالسلام المبروك", title: "فني دعم حاسوب", department: "قسم تقنية المعلومات", status: "leave", statusText: "إجازة سنوية" },
    { id: "HR-104", name: "أسماء محمد الطاهر", title: "أخصائية موارد بشرية", department: "شؤون الموظفين", status: "active", statusText: "على رأس العمل" },
    { id: "HR-105", name: "خالد مفتاح الزروق", title: "متابع ميداني", department: "الخدمات العامة", status: "active", statusText: "على رأس العمل" },
    { id: "HR-106", name: "كريمة حسين الفرجاني", title: "محاسبة مالية", department: "الشؤون المالية", status: "leave", statusText: "إجازة مرضية" }
];

const staffTableBody = document.getElementById('staffTableBody');
const searchInput = document.getElementById('searchInput');
const totalStaff = document.getElementById('totalStaff');

function displayStaff(list) {
    if (!staffTableBody) return;
    staffTableBody.innerHTML = "";
    
    if (totalStaff) {
        totalStaff.innerText = staffData.length;
    }

    if (list.length === 0) {
        staffTableBody.innerHTML = "<tr><td colspan='6' style='text-align: center; color: #777; padding: 20px;'>عذراً، لم نجد أي موظف مطابق للبحث.</td></tr>";
        return;
    }

    list.forEach(staff => {
        const badgeClass = staff.status === 'active' ? 'badge-active' : 'badge-leave';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${staff.id}</strong></td>
            <td>${staff.name}</td>
            <td>${staff.title}</td>
            <td>${staff.department}</td>
            <td><span class="badge ${badgeClass}">${staff.statusText}</span></td>
            <td><button style="background:none; border:none; color:#3b82f6; cursor:pointer; font-weight:600;" onclick="alert('عرض ملف الموظف: ${staff.name}')">الملف 📁</button></td>
        `;
        staffTableBody.appendChild(row);
    });
}

displayStaff(staffData);

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = staffData.filter(staff => 
            staff.name.toLowerCase().includes(term) || 
            staff.department.toLowerCase().includes(term) ||
            staff.title.toLowerCase().includes(term)
        );
        displayStaff(filtered);
    });
}
