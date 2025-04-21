const TYPE = "fashion";

const type = localStorage.getItem("type_app") || null;
if (!type) {
    localStorage.clear();
    localStorage.setItem("type_app", "thucung");
}

if (type === TYPE) {
    localStorage.clear();
}

if (!localStorage.getItem("products")) {
    const sampleProducts = [
        {
            id: 1745219698850,
            name: "Akita Vện Cái C12475",
            category: "Chó",
            subcategory: "Thú cưng",
            sku: "ATN001",
            price: 1200000,
            salePrice: 1100000,
            stock: 12,
            material: "Lông Trắng Đen Đốm",
            description:
                "ĐẶC QUYỀN CHỈ CÓ TẠI AZPET\n\n7 Ngày Đổi Trả với bất kỳ lý do gì\nAn tâm song hành với Bảo Hành 365 Ngày\nHỗ trợ y tế 30 Ngày\nĐường dây khẩn cấp 24/7\nQuà Tặng Đi Kèm\n\nThức ăn hạt: Đảm bảo bé ăn quen thuộc, ngon miệng\nThuốc dự phòng: Điều trị các bệnh cơ bản\nGói khám sức khỏe tổng quát: 1 năm (trị giá 400.000đ)\nGói tư vấn dinh dưỡng toàn diện: 1 năm (trị giá 500.000đ)\nƯu Đãi Tặng Thêm\n\nGiảm 5% khoá huấn luyện cơ bản\nGiảm 5% khoá huấn luyện nâng cao\nGiảm 5% khi mua phụ kiện\nHồ Sơ Bao Gồm\n\nPhiếu bảo hành\nCam kết thuần chủng\nSổ theo dõi sức khoẻ\nCẩm nang chăm sóc\nVideo hướng dẫn huấn luyện",
            colors: ["Đen", "Trắng", "Đốm"],
            sizes: ["5Kg"],
            tags: ["Akita Vện Cái C12475"],
            onSale: false,
            isNew: false,
            isBestSeller: true,
            featured: true,
            images: [
                "https://azpet.com.vn/wp-content/uploads/2021/10/Akita-Ven-C12475-1.jpg",
                "https://azpet.com.vn/wp-content/uploads/2021/10/Akita-Ven-C12475-7.jpg",
            ],
        },
        {
            id: 1745219960008,
            name: "Akita Vàng C12016",
            category: "Chó",
            subcategory: "Thú cưng",
            sku: "TR01",
            price: 1230000,
            salePrice: 1250000,
            stock: 1,
            material: "Lông Trắng Đen Đốm",
            description:
                "ĐẶC QUYỀN CHỈ CÓ TẠI AZPET\n\n7 Ngày Đổi Trả với bất kỳ lý do gì\nAn tâm song hành với Bảo Hành 365 Ngày\nHỗ trợ y tế 30 Ngày\nĐường dây khẩn cấp 24/7\nQuà Tặng Đi Kèm\n\nThức ăn hạt: Đảm bảo bé ăn quen thuộc, ngon miệng\nThuốc dự phòng: Điều trị các bệnh cơ bản\nGói khám sức khỏe tổng quát: 1 năm (trị giá 400.000đ)\nGói tư vấn dinh dưỡng toàn diện: 1 năm (trị giá 500.000đ)\nƯu Đãi Tặng Thêm\n\nGiảm 5% khoá huấn luyện cơ bản\nGiảm 5% khoá huấn luyện nâng cao\nGiảm 5% khi mua phụ kiện\nHồ Sơ Bao Gồm\n\nPhiếu bảo hành\nCam kết thuần chủng\nSổ theo dõi sức khoẻ\nCẩm nang chăm sóc\nVideo hướng dẫn huấn luyện",
            colors: ["Đỏ", "Xanh", "Đen"],
            sizes: ["5Kg"],
            tags: ["Akita Vàng C12016"],
            onSale: true,
            isNew: true,
            isBestSeller: false,
            featured: false,
            images: [
                "https://azpet.com.vn/wp-content/uploads/2021/06/C12016-0.jpg",
                "https://azpet.com.vn/wp-content/uploads/2021/06/C12016-5.jpg",
            ],
        },
        {
            id: 1745220187352,
            name: "Bé Mèo Tabby",
            category: "Mèo",
            subcategory: "Thú cưng",
            sku: "TR012",
            price: 13000000,
            salePrice: 11000000,
            stock: 1,
            material: "Lông Trắng Đen Đốm",
            description:
                "🐱 Bé Mèo Tabby – Người bạn nhỏ đáng yêu và trung thành!\nBé Mèo Tabby là một bé mèo cực kỳ dễ thương với bộ lông sọc đặc trưng, mềm mại như nhung và đôi mắt to tròn long lanh. Dáng vẻ lanh lợi, hiếu kỳ và tình cảm khiến Tabby nhanh chóng chiếm trọn trái tim của bất kỳ ai.\n\nĐặc điểm nổi bật:\n🐾 Bộ lông Tabby sọc vằn đẹp mắt, màu nâu xám đặc trưng.\n\n💛 Tính cách hiền lành, quấn chủ, thích được vuốt ve và chơi đùa.\n\n🧠 Rất thông minh và nhanh nhẹn, dễ huấn luyện.\n\n👶 Phù hợp với gia đình có trẻ nhỏ, người độc thân hoặc người lớn tuổi.\n\nThông tin chung:\nGiống mèo: Tabby (Mèo mướp)\n\nTuổi: 3 tháng\n\nĐã tiêm ngừa đầy đủ, sổ giun định kỳ\n\nĂn uống khỏe mạnh, thân thiện với môi trường mới\n\nNếu bạn đang tìm một người bạn nhỏ vừa ngoan ngoãn vừa dễ thương để bầu bạn mỗi ngày, thì Bé Mèo Tabby chính là lựa chọn tuyệt vời! 🏡💕",
            colors: ["Đen", "Trắng", "Đốm"],
            sizes: ["2Kg"],
            tags: ["Bé Mèo Tabby"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: false,
            images: [
                "https://cdn.chotot.com/ZxJah2BK-N_bXzXuyVpc7vlHRXVc9Y4C9M6uDdAlrmA/preset:view/plain/2da2dbd17ad7cb127a202b25297538a7-2927846459716537770.jpg",
                "https://cdn.chotot.com/PfkTNCa1wjx2anugWXFLZcq-C8Cn4J_cuGhceZ-MOiQ/preset:view/plain/5bfe9bb16746db79d5c22b2ecafd0095-2927846459701642135.jpg",
            ],
        },
        {
            id: 1745220300878,
            name: "Thùng Pate cho mèo 48 gói mix vị, mỗi gói 100 gram",
            category: "Thức Ăn",
            subcategory: "Thú cưng",
            sku: "TR012",
            price: 399000,
            salePrice: 299000,
            stock: 1200,
            material: "Dễ Ăn, Nhiều Dưỡng Chất",
            description:
                "Thùng pate 48 gói mix vị, mỗi gói 100gram với nhiều hương vị thơm ngon đặc trưng dành riêng cho chó mèo. Thực phẩm có tác dụng cân bằng dinh dưỡng hàng ngày, lựa chọn những thành phần thịt – cá tươi ngon nhất trong chế biến, giàu protein, các vitamin & khoáng chất thiết yếu, tăng cảm giác thèm ăn cho thú cưng của bạn ♥\n\n\n\nNGUYÊN LIỆU\n\nPate được làm từ thịt và gan\n\nTHÀNH PHẦN CHÍNH: Thịt cá hồi, cá ngừ, mực, thịt gà, thịt bò... Thạch Agar, Vitamin E, Taurin, Omega 3, Prebiotic\n\n\n\nCÔNG DỤNG\n\n- Chăm sóc lông và da khỏe mạnh\n\n- Nuôi dưỡng mắt và hệ thần kinh của chó\n\n- Tăng cường vitamin E và khoáng chất\n\n- Prebiotic giúp tốt cho hệ tiêu hóa\n\n- Omega 3 giúp cải thiện sự thèm ăn, hỗ trợ não, mắt và hệ miễn dịch.\n\n- Cung cấp năng lượng cho thú cưng hoạt động cả ngày\n\n- Không có thịt nhân tạo\n\n- Không chất bảo quản\n\n\n\nCÁCH SỬ DỤNG:\n\nDành cho chó, mèo trên 2 tháng tuổi: Pate Thịt Bò, Pate Thịt Gà, Pate Cá Hồi, Pate Cá Ngừ, Pate Mực \n\n\n\nDành cho chó, mèo trên 6 tháng tuổi: Vụn Cá Ngừ, Vụn Cá Hồi\n\n\n\nSản phẩm có thể cho ăn ngay hoặc trộn với cơm hoặc hạt thức ăn khô. Sự lựa chọn dành cho các em boss biếng ăn.\n\n\n\n***Khuyến khích sử dụng kèm với các loại thức ăn khác để đạt đủ nhu cầu dinh dưỡng và cung cấp đầy đủ nước tinh khiết.\n\n\n\nXuất xứ: Việt Nam, Đống Đa, Hà Nội",
            colors: ["Đủ loại"],
            sizes: ["5Kg", "7Kg", "10Kg"],
            tags: ["Thùng Pate cho mèo 48 gói mix vị", "mỗi gói 100 gram"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: false,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw5hapgh9u5792.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lipyzpux3u1e48.webp",
            ],
        },
        {
            id: 1745220380549,
            name: "Nôi mèo Donut, Nôi mèo đường hầm bốn mùa, Chống bẩn có thể tháo rời và giặt, sẽ không dính lông, đồ chơi cho mèo COD",
            category: "Phụ Kiện",
            subcategory: "Thú cưng",
            sku: "ATN00123",
            price: 158000,
            salePrice: 128000,
            stock: 1233,
            material: "Lông Trắng Đen Đốm",
            description:
                "Đặc điểm kỹ thuật:\n\n\n\nTính năng 1. Chức năng kép: Thiết kế hình tròn/bánh rán tổng hợp hai lớp, đáp ứng nhu cầu và mong muốn của mèo khoan lỗ để chơi, có thể mang lại niềm vui không giới hạn cho mèo, thiết kế mái vòm lõm cho phép một con mèo khác nghỉ ngơi, hai con có thể được sử dụng tại cùng một lúc, đừng làm phiền nhau. \n\n2. Chất liệu nỉ: Giường hầm cho mèo được làm từ chất liệu nỉ chọn lọc, có khả năng chống mài mòn, chống trầy xước, không bị bóng bông đáp ứng tính chất gãi, cọ xát hàng ngày của mèo. Một chiếc giường cho mèo có thể được sử dụng trong tất cả các mùa. \n\n3. Không gian cực rộng: Kích thước nhỏ đường kính 50 cm/19,68 inch, đường kính trong 18 cm/7,08 inch, cao 20 cm/7,87 inch. Lớn: đường kính 60cm/23,42 inch, đường kính trong 19cm/7,48 inch, cao 28cm/11,02 inch. Thiết kế phổ thông Four Seasons, có thể tháo rời và giặt được. \n\n4. Thiết kế tách dây kéo: Bạn có thể làm sạch mọi ngóc ngách bên trong đường hầm, để mèo có môi trường vui chơi sạch sẽ và thoải mái. Phương pháp lắp ráp đơn giản cho phép chúng ta xử lý mèo dễ dàng hơn. \n\n5. Quà tặng cho mèo: Vì hình tròn tạo thêm sự mới lạ và có nhiều nơi để ẩn nấp nên đây sẽ là lựa chọn tốt nhất cho người bạn nuôi mèo, chó nhỏ, mèo con, thỏ và các động vật nhỏ khác. \n\nThông số kỹ thuật Chất liệu: Nỉ Màu sắc: Màu xám nhạt，Màu xám đen",
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["5Kg", "7Kg", "12Kg"],
            tags: [
                "Nôi mèo Donut",
                "Nôi mèo đường hầm bốn mùa",
                "Chống bẩn có thể tháo rời và giặt",
                "sẽ không dính lông",
                "đồ chơi cho mèo COD",
            ],
            onSale: false,
            isNew: false,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3kc17kctfs14c.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3kc17kcs17la0.webp",
            ],
        },
    ];
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}
if (!localStorage.getItem("categories")) {
    const sampleCategories = [
        { id: 1, name: "Chó", description: "Thú Cưng Chó" },
        { id: 2, name: "Mèo", description: "Thú Cưng Mèo" },
        { id: 3, name: "Thức Ăn", description: "Thức Ăn" },
        { id: 4, name: "Phụ Kiện", description: "Phụ Kiện" },
    ];
    localStorage.setItem("categories", JSON.stringify(sampleCategories));
}
if (!localStorage.getItem("orders")) {
    const sampleOrders = [
        {
            id: 1,
            customer: "Nguyễn Văn B",
            total: 300000,
            status: "Đã Đặt",
            date: "2023-10-01",
        },
    ];
    localStorage.setItem("orders", JSON.stringify(sampleOrders));
}
if (!localStorage.getItem("customers")) {
    const sampleCustomers = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            email: "nva@example.com",
            phone: "0909123456",
            totalOrders: 5,
        },
    ];
    localStorage.setItem("customers", JSON.stringify(sampleCustomers));
}
if (!localStorage.getItem("settings")) {
    const sampleSettings = {
        storeName: "Pet Store",
        supportEmail: "support@petStore.com",
    };
    localStorage.setItem("settings", JSON.stringify(sampleSettings));
}

if (!localStorage.getItem("users")) {
    const users = [
        {
            fullname: "admin",
            email: "admin@gmail.com",
            password: "admin",
            role: "admin",
            phone: "0869224813",
        },
        {
            fullname: "Trường Sơn",
            email: "truongsonpt.80@gmail.com",
            password: "123456",
            role: "user",
            phone: "0869224814",
        },
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
