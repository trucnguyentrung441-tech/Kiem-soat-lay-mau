// Cấu hình đồng bộ đám mây (Supabase).
// Để TRỐNG hai dòng dưới => app chạy kiểu cũ: dữ liệu chỉ lưu trong trình duyệt của từng máy.
// Điền đủ cả hai => bật đăng nhập, phân quyền và dữ liệu dùng chung.
// Lấy ở Supabase: Project Settings -> API -> "Project URL" và "anon public" key.
// (Khoá anon là khoá công khai, được phép nằm ở đây. TUYỆT ĐỐI KHÔNG dán khoá "service_role".)
window.APP_CONFIG = {
  SUPABASE_URL: 'https://ogljvpuafhygeccipkul.supabase.co',
SUPABASE_ANON_KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGp2cHVhZmh5Z2VjY2lwa3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1Nzc1ODQsImV4cCI6MjEwNzE1MzU4NH0.YcIqQ_sZpdo1805QH3szVSb6eL3NisXPlbAvQvwhTzw'
};
