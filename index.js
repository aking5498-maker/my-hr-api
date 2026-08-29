<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منظومة شؤون الموظفين والإدارة</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background-color: #f4f6f9;
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            width: 100%;
        }
        /* الهيدر العلوي */
        header {
            background: #1e293b;
            color: #fff;
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-bottom: 3px solid #3b82f6;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        .logo-area {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .logo-icon {
            width: 45px;
            height: 45px;
            background: #3b82f6;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 20px;
        }
        .title-area h1 {
            font-size: 18px;
            margin-bottom: 2px;
        }
        .title-area p {
            color: #94a3b8;
            font-size: 12px;
        }
        .nav-links {
            display: flex;
            gap: 20px;
        }
        .nav-links a {
            text-decoration: none;
            color: #cbd5e1;
            font-size: 13px;
            font-weight: 600;
            transition: color 0.3s;
        }
        .nav-links a:hover, .nav-links a.active {
            color: #3b82f6;
        }

        /* لوحة المؤشرات (Dashboards) */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin: 30px 0 20px 0;
        }
        .stat-card {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            border-right: 4px solid #3b82f6;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .stat-card.green { border-right-color: #10b981; }
        .stat-card.orange { border-right-color: #f59e0b; }
        .stat-card.purple { border-right-color: #8b5cf6; }
        .stat-title {
            font-size: 13px;
            color: #64748b;
        }
        .stat-value {
            font-size: 24px;
            font-weight: bold;
            color: #1e293b;
        }

        /* شريط البحث والتحكم */
        .control-bar {
            background: #fff;
            padding: 15px 20px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            flex-wrap: wrap;
            gap: 15px;
        }
        .search-box {
            padding: 10px 15px;
            width: 300px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
        }
        .add-btn {
            background: #3b82f6;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 13px;
            transition: background 0.2s;
        }
        .add-btn:hover {
            background: #2563eb;
        }

        /* جدول بيانات الموظفين */
        .table-container {
            background: #fff;
            border-radius: 10px;
            overflow-x: auto;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            margin-bottom: 40px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: right;
            font-size: 14px;
        }
        th, td {
            padding: 14px 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        th {
            background: #f8fafc;
            color: #475569;
            font-weight: 600;
        }
        tr:hover {
            background: #f8fafc;
        }
        .badge {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: bold;
        }
        .badge-active { background: #dcfce7; color: #166534; }
        .badge-leave { background: #fef3c7; color: #92400e; }

        /* الفوتر */
        footer {
            background: #1e293b;
            color: #94a3b8;
            text-align: center;
            padding: 20px 0;
            margin-top: auto;
            font-size: 13px;
            border-top: 3px solid #3b82f6;
        }
    </style>
</head>
<body>

    <!-- الهيدر -->
    <header>
        <div class="container header-content">
            <div class="logo-area">
                <div class="logo-icon">📋</div>
                <div class="title-area">
                    <h1>الشؤون الإدارية والموارد البشرية</h1>
                    <p>نظام إدارة الموظفين والمتابعة الداخلية</p>
                </div>
            </div>
            <div class="nav-links">
                <a href="#" class="active">الموظفون</a>
                <a href="#">الإجازات والأذونات</a>
                <a href="#">التعاميم الإدارية</a>
                <a href="#">التقارير</a>
            </div>
        </div>
    </header>

    <!-- المحتوى الرئيسي -->
    <div class="container">
        <!-- مؤشرات سريعة -->
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-title">إجمالي الموظفين</span>
                <span class="stat-value" id="totalStaff">0</span>
            </div>
            <div class="stat-card green">
                <span class="stat-title">الحاضرون اليوم</span>
                <span class="stat-value">28</span>
            </div>
            <div class="stat-card orange">
                <span class="stat-title">في إجازة رسمية</span>
                <span class="stat-value">4</span>
            </div>
            <div class="stat-card purple">
                <span class="stat-title">الطلبات المعلقة</span>
                <span class="stat-value">3</span>
            </div>
        </div>

        <!-- شريط البحث والإجراءات -->
        <div class="control-bar">
            <input type="text" id="searchInput" class="search-box" placeholder="ابحث عن موظف بالاسم أو القسم...">
            <button class="add-btn" onclick="alert('خاصية إضافة موظف جديد قيد التفعيل')">+ تسجيل موظف جديد</button>
        </div>

        <!-- جدول الموظفين -->
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>رقم القيد</th>
                        <th>اسم الموظف</th>
                        <th>المسمى الوظيفي</th>
                        <th>القسم الإداري</th>
                        <th>حالة الدوام</th>
                        <th>الإجراء</th>
                    </tr>
                </thead>
                <tbody id="staffTableBody">
                    <!-- سيتم تعبئتها من ملف script.js -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- الفوتر -->
    <footer>
        <div class="container">
            جميع الحقوق محفوظة © 2026 | تصميم وتطوير النظام الإداري
        </div>
    </footer>

    <!-- ربط ملف البيانات المنفصل -->
    <script src="script.js"></script>
</body>
</html>
