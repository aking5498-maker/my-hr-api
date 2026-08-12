const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// بيانات الاتصال بقاعدة بيانات Supabase الخاصة بك
const supabaseUrl = 'https://baqmfwwppdywoeziqckp.supabase.co';
const supabaseKey = 'sb_publishable_kgofjBP4iZFymSawTY9U2Q_Qoh4eCAt';
const supabase = createClient(supabaseUrl, supabaseKey);

// نقطة نهاية تسجيل الدخول (Login Endpoint)
app.post('/api/login', async (req, res) => {
    const { employeeId, password } = req.body;

    try {
        const { data, error } = await supabase
            .from('Employees')
            .select('*')
            .eq('EmployeeID', employeeId)
            .single();

        if (error || !data) {
            return res.status(400).json({ success: false, message: 'الرقم الوظيفي غير موجود' });
        }

        if (data.PasswordHash !== password) {
            return res.status(400).json({ success: false, message: 'كلمة المرور غير صحيحة' });
        }

        res.json({
            success: true,
            message: 'تم تسجيل الدخول بنجاح',
            employee: {
                id: data.EmployeeID,
                name: data.FullName,
                jobTitle: data.JobTitle,
                department: data.Department,
                status: data.Status
            }
        });

    } catch (err) {
        res.status(500).json({ success: false, message: 'حدث خطأ في الخادم', error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
