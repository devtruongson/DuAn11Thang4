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
            id: 1,
            name: "Chó Corgi tai cụp đáng yêu",
            category: "Thú cưng",
            subcategory: "Chó",
            sku: "PET001",
            price: 3000000,
            salePrice: 2500000,
            stock: 10,
            material: "Lông tự nhiên",
            description:
                "Chó Corgi thuần chủng, dễ nuôi, phù hợp với môi trường sống trong nhà và gia đình có trẻ nhỏ.",
            colors: ["Vàng", "Trắng"],
            sizes: ["2Kg", "5Kg"],
            tags: ["chó", "corgi", "thú cưng"],
            onSale: true,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://petviet.vn/wp-content/uploads/2023/07/huan-luyen-cho-corgi-800x521.jpg?v=1689053627",
                "https://petservicehcm.com/wp-content/uploads/2023/11/dog-corgi-cute-4988985.jpg",
            ],
        },
        {
            id: 2,
            name: "Mèo Anh lông ngắn cực kỳ dễ thương",
            category: "Thú cưng",
            subcategory: "Mèo",
            sku: "PET002",
            price: 2500000,
            salePrice: 2100000,
            stock: 15,
            material: "Lông mềm mượt",
            description:
                "Mèo Anh lông ngắn, cực kỳ thân thiện và ít gây dị ứng.",
            colors: ["Xám", "Trắng"],
            sizes: ["2Kg"],
            tags: ["mèo", "anh", "thú cưng"],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: false,
            images: [
                "https://image.phunuonline.com.vn/fckeditor/upload/2022/20220724/images/5-thu-cung-tuyet-voi-cho-khong-_771658650135.jpg",
                "https://anh.24h.com.vn/upload/4-2016/images/2016-12-10/1481376983-148109988692130-6.jpg",
            ],
        },
        {
            id: 3,
            name: "Thỏ lùn Hà Lan siêu nhỏ nhắn",
            category: "Thú cưng",
            subcategory: "Thỏ",
            sku: "PET003",
            price: 800000,
            salePrice: 650000,
            stock: 20,
            material: "Lông mềm",
            description:
                "Thỏ lùn Hà Lan dễ thương, thân thiện với trẻ nhỏ, thích hợp nuôi trong không gian nhỏ.",
            colors: ["Nâu", "Trắng"],
            sizes: ["1Kg", "3Kg"],
            tags: ["thỏ", "lùn", "dễ thương"],
            onSale: true,
            isNew: true,
            isBestSeller: false,
            featured: false,
            images: [
                "https://thietbithuyvietnam.com/wp-content/uploads/2023/12/1703043289-8673-10-e1577931867792.jpg",
                "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/6/15/nuoi-thu-cung-16868144826582042476786.jpg",
            ],
        },
        {
            id: 4,
            name: "Chuột Hamster siêu hiền lành",
            category: "Thú cưng",
            subcategory: "Chuột",
            sku: "PET004",
            price: 120000,
            salePrice: 100000,
            stock: 35,
            material: "Lông mềm",
            description:
                "Hamster đáng yêu, nhỏ gọn, dễ nuôi, không cần nhiều không gian.",
            colors: ["Xám", "Nâu"],
            sizes: ["4Kg", "6Kg"],
            tags: ["chuột", "hamster", "mini"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://nhachannuoi.vn/wp-content/uploads/2019/09/pet-registration.jpg",
                "https://congcutot.vn/uploads/store/page/article/2023/10/thu-cung-voi-moi-truong.jpg",
            ],
        },
        {
            id: 5,
            name: "Chim Vẹt nói được",
            category: "Thú cưng",
            subcategory: "Chim",
            sku: "PET005",
            price: 1500000,
            salePrice: 1350000,
            stock: 8,
            material: "Lông vũ",
            description:
                "Vẹt thông minh, biết nói chuyện, dễ huấn luyện, tạo không khí vui nhộn.",
            colors: ["Xanh", "Đỏ", "Vàng"],
            sizes: ["3Kg", "1Kg"],
            tags: ["chim", "vẹt", "biết nói"],
            onSale: true,
            isNew: false,
            isBestSeller: false,
            featured: false,
            images: [
                "https://petfair-vietnam.com/wp-content/uploads/2024/01/TRIEN-LAM-THU-CUNG-VIET-NAM.png",
                "https://blog.maybanhang.net/hs-fs/hubfs/Mai%20Ph%C6%B0%C6%A1ng/C%E1%BB%ADa%20h%C3%A0ng%20th%C3%BA%20c%C6%B0ng/1.png?width=600&name=1.png",
            ],
        },
        {
            id: 6,
            name: "Cá Betta nhiều màu sắc",
            category: "Thú cưng",
            subcategory: "Cá",
            sku: "PET006",
            price: 80000,
            salePrice: 60000,
            stock: 100,
            material: "Vảy",
            description:
                "Cá Betta (cá xiêm) đủ loại màu sắc, dễ nuôi, không cần máy lọc khí.",
            colors: ["Xanh", "Đỏ", "Tím"],
            sizes: ["4Kg"],
            tags: ["cá", "betta", "xiêm"],
            onSale: true,
            isNew: true,
            isBestSeller: false,
            featured: true,
            images: [
                "https://thietbithuyvietnam.com/wp-content/uploads/2023/12/1703043289-8673-10-e1577931867792.jpg",
                "https://image.phunuonline.com.vn/fckeditor/upload/2022/20220724/images/5-thu-cung-tuyet-voi-cho-khong-_771658650135.jpg",
            ],
        },
        {
            id: 7,
            name: "Chó Poodle nhỏ nhắn",
            category: "Thú cưng",
            subcategory: "Chó",
            sku: "PET007",
            price: 2800000,
            salePrice: 2600000,
            stock: 12,
            material: "Lông xoăn",
            description:
                "Chó Poodle cực kỳ thông minh, ít rụng lông, dễ chăm sóc.",
            colors: ["Nâu", "Xám", "Trắng"],
            sizes: ["1.2Kg", "3Kg"],
            tags: ["chó", "poodle", "thông minh"],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: true,
            images: [
                "https://petviet.vn/wp-content/uploads/2023/07/huan-luyen-cho-corgi-800x521.jpg?v=1689053627",
                "https://blog.maybanhang.net/hs-fs/hubfs/Mai%20Ph%C6%B0%C6%A1ng/C%E1%BB%ADa%20h%C3%A0ng%20th%C3%BA%20c%C6%B0ng/1.png?width=600&name=1.png",
            ],
        },
        {
            id: 8,
            name: "Nhím kiểng siêu lạ",
            category: "Thú cưng",
            subcategory: "Nhím",
            sku: "PET008",
            price: 500000,
            salePrice: 420000,
            stock: 18,
            material: "Lông và gai",
            description: "Nhím kiểng hiền lành, không có mùi, dễ chăm sóc.",
            colors: ["Xám", "Trắng"],
            sizes: ["4Kg"],
            tags: ["nhím", "kiểng", "độc lạ"],
            onSale: false,
            isNew: true,
            isBestSeller: false,
            featured: false,
            images: [
                "https://congcutot.vn/uploads/store/page/article/2023/10/thu-cung-voi-moi-truong.jpg",
                "https://anh.24h.com.vn/upload/4-2016/images/2016-12-10/1481376983-148109988692130-6.jpg",
            ],
        },
        {
            id: 9,
            name: "Rùa nước mini",
            category: "Thú cưng",
            subcategory: "Rùa",
            sku: "PET009",
            price: 180000,
            salePrice: 150000,
            stock: 25,
            material: "Mai cứng",
            description:
                "Rùa nước hiền lành, dễ nuôi, phù hợp nuôi cảnh trong chậu thủy tinh.",
            colors: ["Xanh lá", "Nâu"],
            sizes: ["1.2Kg", "3Kg"],
            tags: ["rùa", "nước", "mini"],
            onSale: true,
            isNew: false,
            isBestSeller: false,
            featured: false,
            images: [
                "https://nhachannuoi.vn/wp-content/uploads/2019/09/pet-registration.jpg",
                "https://petfair-vietnam.com/wp-content/uploads/2024/01/TRIEN-LAM-THU-CUNG-VIET-NAM.png",
            ],
        },
        {
            id: 10,
            name: "Mèo Ba Tư sang chảnh",
            category: "Thú cưng",
            subcategory: "Mèo",
            sku: "PET010",
            price: 3200000,
            salePrice: 2900000,
            stock: 6,
            material: "Lông dài",
            description:
                "Mèo Ba Tư lông dài, vẻ ngoài quý phái, thích hợp sống trong nhà yên tĩnh.",
            colors: ["Trắng", "Xám"],
            sizes: ["1.2Kg", "3Kg"],
            tags: ["mèo", "ba tư", "sang"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://petservicehcm.com/wp-content/uploads/2023/11/dog-corgi-cute-4988985.jpg",
                "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/6/15/nuoi-thu-cung-16868144826582042476786.jpg",
            ],
        },
    ];
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}
if (!localStorage.getItem("categories")) {
    const sampleCategories = [
        { id: 1, name: "Chó", description: "Thú Cưng Chó" },
        { id: 2, name: "Mèo", description: "Thú Cưng Mèo" },
        { id: 2, name: "Thức Ăn", description: "Thức Ăn" },
        { id: 2, name: "Phụ Kiện", description: "Phụ Kiện" },
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
