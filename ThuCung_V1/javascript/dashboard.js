feather.replace();

// Khởi tạo dữ liệu mẫu cho thú cưng nếu chưa có trong localStorage
if (!localStorage.getItem("pets")) {
    const samplePets = [
        {
            id: 1,
            name: "Chó Poodle Tiny Nâu Đỏ",
            category: "Chó",
            subcategory: "Poodle",
            sku: "PET001",
            price: 8000000,
            salePrice: 7500000,
            stock: 1,
            material: "Lông tự nhiên, màu nâu đỏ",
            description:
                "- HỖ TRỢ TƯ VẤN CHĂM SÓC TRỌN ĐỜI: PETSHOP hỗ trợ tư vấn chăm sóc thú cưng qua Zalo hoặc hotline. \nThú cưng đủ điều kiện bán: Đã tiêm phòng đầy đủ, có giấy chứng nhận sức khỏe, không mắc bệnh truyền nhiễm. PETSHOP không hỗ trợ đổi trả nếu khách không đáp ứng điều kiện chăm sóc tối thiểu (thức ăn, môi trường sống phù hợp).\n\nQuý khách vui lòng liên hệ trước khi đến xem thú cưng để đảm bảo lịch hẹn <3\n\nKhách hàng muốn xem thú cưng online, liên hệ qua Zalo 0369788779 để nhận video trực tiếp. Phí vận chuyển toàn quốc 500k, đảm bảo an toàn và sức khỏe. Shop cảm ơn <3\n\nHotline\nCONTACT US:\nWebsite: petshop.vn\nShopee: shope.ee/6KXaBGl94z\nLazada: https://s.lazada.vn/l.KKHO\nZalo: 0369.788.779\nHotline đặt hàng: 0369.788.779\nPhản ánh chất lượng: 0966.424.781",
            colors: ["Nâu đỏ", "Trắng", "Đen"],
            sizes: ["Tiny", "Toy", "Mini"],
            tags: ["chó", "poodle", "thú cưng"],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: false,
            images: [
                "https://pos.nvncdn.com/8d4112-8686/ps/20240716_gVeqG1QJT6.jpeg",
                "https://pos.nvncdn.com/8d4112-8686/ps/20240716_XM2Sbelp0B.jpeg",
            ],
        },
        {
            id: 1744899374415,
            name: "Mèo Anh Lông Ngắn Xám Xanh",
            category: "Mèo",
            subcategory: "Anh Lông Ngắn",
            sku: "PET002",
            price: 12000000,
            salePrice: 11000000,
            stock: 1,
            material: "Lông tự nhiên, màu xám xanh",
            description:
                "Mèo Anh Lông Ngắn với bộ lông mềm mại và đôi mắt tròn xoe, rất thân thiện và dễ gần. Thú cưng đã được tiêm phòng đầy đủ và kiểm tra sức khỏe định kỳ. PETSHOP cung cấp hướng dẫn chăm sóc chi tiết và hỗ trợ tư vấn qua Zalo 0369788779. \nPhí vận chuyển toàn quốc 500k, đảm bảo an toàn tuyệt đối. Liên hệ để xem video trực tiếp hoặc đặt lịch xem thú cưng tại cửa hàng. \nHotline\nCONTACT US:\nWebsite: petshop.vn\nShopee: shope.ee/6KXaBGl94z\nLazada: https://s.lazada.vn/l.KKHO\nZalo: 0369.788.779\nHotline đặt hàng: 0369.788.779\nPhản ánh chất lượng: 0966.424.781",
            colors: ["Xám xanh", "Trắng", "Vàng"],
            sizes: ["Nhỏ", "Trung bình"],
            tags: ["mèo", "anh lông ngắn", "thú cưng"],
            onSale: true,
            isNew: true,
            isBestSeller: false,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m064qhm0wstp6c",
                "https://cdn.tgdd.vn/Files/2022/07/20/1449349/10-cach-phoi-do-voi-chan-vay-xep-ly-ngan-nang-dong-ca-tinh-cho-ban-nu-202207202121539541.jpg",
            ],
        },
        {
            id: 1744899474067,
            name: "Cá Betta Halfmoon Đỏ Rực",
            category: "Cá",
            subcategory: "Betta",
            sku: "PET003",
            price: 150000,
            salePrice: 120000,
            stock: 5,
            material: "Vảy tự nhiên, màu đỏ rực",
            description:
                "Cá Betta Halfmoon với đuôi xòe đẹp mắt, màu sắc rực rỡ, phù hợp cho bể cá cảnh. Cá đã được kiểm tra sức khỏe và đảm bảo không mắc bệnh. PETSHOP hỗ trợ tư vấn cách nuôi cá và setup bể cá qua Zalo 0369788779. \nPhí vận chuyển toàn quốc 100k, đóng gói cẩn thận. Liên hệ để nhận thêm hình ảnh hoặc video. \nHotline\nCONTACT US:\nWebsite: petshop.vn\nShopee: shope.ee/6KXaBGl94z\nLazada: https://s.lazada.vn/l.KKHO\nZalo: 0369.788.779\nHotline đặt hàng: 0369.788.779\nPhản ánh chất lượng: 0966.424.781",
            colors: ["Đỏ", "Xanh", "Tím"],
            sizes: ["Nhỏ", "Trung bình"],
            tags: ["cá", "betta", "thú cưng"],
            onSale: true,
            isNew: true,
            isBestSeller: false,
            featured: false,
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6n9E30wUvDJHxDPiYSnmlArYOzg5Nb4EIQ&s",
                "https://pos.nvncdn.com/fa49eb-41931/ps/20211225_95FQua31FsPjOmeBHiwBhWCw.jpg",
            ],
        },
    ];
    localStorage.setItem("pets", JSON.stringify(samplePets));
}

// Khởi tạo danh mục thú cưng
if (!localStorage.getItem("petCategories")) {
    const samplePetCategories = [
        { id: 1, name: "Chó", description: "Các giống chó cảnh" },
        { id: 2, name: "Mèo", description: "Các giống mèo cảnh" },
        { id: 3, name: "Cá", description: "Cá cảnh và phụ kiện" },
    ];
    localStorage.setItem("petCategories", JSON.stringify(samplePetCategories));
}

// Khởi tạo đơn hàng
if (!localStorage.getItem("petOrders")) {
    const samplePetOrders = [
        {
            id: 1,
            customer: "Nguyễn Văn A",
            total: 8000000,
            status: "Đã Đặt",
            date: "2023-10-01",
        },
    ];
    localStorage.setItem("petOrders", JSON.stringify(samplePetOrders));
}

// Khởi tạo khách hàng
if (!localStorage.getItem("petCustomers")) {
    const samplePetCustomers = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            email: "nva@example.com",
            phone: "0909123456",
            totalOrders: 5,
        },
    ];
    localStorage.setItem("petCustomers", JSON.stringify(samplePetCustomers));
}

// Khởi tạo cài đặt cửa hàng
if (!localStorage.getItem("petSettings")) {
    const samplePetSettings = {
        storeName: "Pet Shop",
        supportEmail: "support@petshop.com",
    };
    localStorage.setItem("petSettings", JSON.stringify(samplePetSettings));
}

// Khởi tạo biến toàn cục
let pets = JSON.parse(localStorage.getItem("pets")) || [];
let petCategories = JSON.parse(localStorage.getItem("petCategories")) || [];
let petOrders = JSON.parse(localStorage.getItem("petOrders")) || [];
let petCustomers = JSON.parse(localStorage.getItem("petCustomers")) || [];
let petSettings = JSON.parse(localStorage.getItem("petSettings")) || {};
const itemsPerPage = 10;
let currentPage = 1;

// Hàm định dạng tiền tệ
function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(amount);
}

// Hàm lấy danh sách mục cho trang hiện tại
function getCurrentPageItems(items) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
}

// Hàm hiển thị phân trang
function renderPagination(totalItems, containerId) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById(containerId);
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.className = `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
            i === currentPage ? "bg-blue-100 text-blue-600" : "text-gray-700"
        } hover:bg-gray-50`;
        pageLink.textContent = i;
        pageLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = i;
            if (containerId === "petsPagination")
                renderPets(getCurrentPageItems(pets));
            if (containerId === "petCategoriesPagination")
                renderPetCategories(getCurrentPageItems(petCategories));
            if (containerId === "petOrdersPagination")
                renderPetOrders(getCurrentPageItems(petOrders));
            if (containerId === "petCustomersPagination")
                renderPetCustomers(getCurrentPageItems(petCustomers));
        });
        pagination.appendChild(pageLink);
    }
    const info = document.getElementById(
        containerId.replace("Pagination", "Info")
    );
    info.innerHTML = `Hiển thị <span class="font-medium">${
        (currentPage - 1) * itemsPerPage + 1
    }</span> đến <span class="font-medium">${Math.min(
        currentPage * itemsPerPage,
        totalItems
    )}</span> của <span class="font-medium">${totalItems}</span> mục`;
}

// Hàm hiển thị danh sách thú cưng
function renderPets(petsToRender) {
    const tableBody = document.getElementById("petsTableBody");
    tableBody.innerHTML = "";
    petsToRender.forEach((pet) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap"><input type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded" data-id="${
                pet.id
            }"></td>
            <td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-10 w-10">${
                pet.images.length > 0
                    ? `<img class="h-10 w-10 rounded-full" src="${pet.images[0]}" alt="">`
                    : '<div class="h-10 w-10 rounded-full bg-gray-200"></div>'
            }</div><div class="ml-4"><div class="text-sm font-medium text-gray-900">${
            pet.name
        }</div><div class="text-sm text-gray-500">${
            pet.sku
        }</div></div></div></td>
            <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${
                pet.category
            }</div><div class="text-sm text-gray-500">${
            pet.subcategory
        }</div></td>
            <td class="px-6 py-4 whitespace-nowrap">${
                pet.onSale
                    ? `<span class="text-sm text-gray-500 line-through">${formatCurrency(
                          pet.price
                      )}</span><br>`
                    : ""
            }<span class="text-sm font-medium text-gray-900">${formatCurrency(
            pet.onSale ? pet.salePrice : pet.price
        )}</span></td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="text-sm text-gray-900">${
                pet.stock
            }</span></td>
            <td class="px-6 py-4 whitespace-nowrap">${getStockStatus(
                pet.stock
            )}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900 mr-2" onclick="editPet(${
                pet.id
            })">Sửa</button><button class="text-red-600 hover:text-red-900" onclick="deletePet(${
            pet.id
        })">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById("petCount").textContent = `${pets.length} thú cưng`;
    renderPagination(pets.length, "petsPagination");
}

// Hàm xác định trạng thái tồn kho
function getStockStatus(stock) {
    if (stock > 2)
        return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Còn</span>';
    if (stock > 0)
        return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Sắp hết</span>';
    return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Hết</span>';
}

// Sự kiện thêm thú cưng
document.getElementById("addPetBtn")?.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Thêm thú cưng mới";
    document.getElementById("petForm").reset();
    document.getElementById("petId").value = "";
    document.getElementById("petModal").classList.remove("hidden");
});

// Đóng modal
document
    .getElementById("closeModal")
    .addEventListener("click", () =>
        document.getElementById("petModal").classList.add("hidden")
    );
document
    .getElementById("cancelBtn")
    .addEventListener("click", () =>
        document.getElementById("petModal").classList.add("hidden")
    );

// Xử lý form thêm/sửa thú cưng
document.getElementById("petForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const petId = document.getElementById("petId").value;
    const petData = {
        id: petId ? parseInt(petId) : Date.now(),
        name: document.getElementById("petName").value,
        category: document.getElementById("petCategory").value,
        subcategory: document.getElementById("petSubcategory").value,
        sku: document.getElementById("petSKU").value,
        price: parseFloat(document.getElementById("petPrice").value),
        salePrice: document.getElementById("petSalePrice").value
            ? parseFloat(document.getElementById("petSalePrice").value)
            : null,
        stock: parseInt(document.getElementById("petStock").value),
        material: document.getElementById("petMaterial").value,
        description: document.getElementById("petDescription").value,
        colors: document
            .getElementById("petColors")
            .value.split(",")
            .map((c) => c.trim()),
        sizes: document
            .getElementById("petSizes")
            .value.split(",")
            .map((s) => s.trim()),
        tags: document
            .getElementById("petTags")
            .value.split(",")
            .map((t) => t.trim()),
        onSale: document.getElementById("petOnSale").checked,
        isNew: document.getElementById("petIsNew").checked,
        isBestSeller: document.getElementById("petIsBestSeller").checked,
        featured: document.getElementById("petFeatured").checked,
        images: document
            .getElementById("petImages")
            .value.split(",")
            .map((url) => url.trim()),
    };

    if (petId) {
        pets = pets.map((p) => (p.id === parseInt(petId) ? petData : p));
    } else {
        pets.push(petData);
    }
    localStorage.setItem("pets", JSON.stringify(pets));
    renderPets(getCurrentPageItems(pets));
    document.getElementById("petModal").classList.add("hidden");
});

// Hàm chỉnh sửa thú cưng
function editPet(id) {
    const pet = pets.find((p) => p.id === id);
    if (pet) {
        document.getElementById("modalTitle").textContent = "Sửa thú cưng";
        document.getElementById("petId").value = pet.id;
        document.getElementById("petName").value = pet.name;
        document.getElementById("petCategory").value = pet.category;
        document.getElementById("petSubcategory").value = pet.subcategory;
        document.getElementById("petSKU").value = pet.sku;
        document.getElementById("petPrice").value = pet.price;
        document.getElementById("petSalePrice").value = pet.salePrice || "";
        document.getElementById("petStock").value = pet.stock;
        document.getElementById("petMaterial").value = pet.material;
        document.getElementById("petDescription").value = pet.description;
        document.getElementById("petColors").value = pet.colors.join(",");
        document.getElementById("petSizes").value = pet.sizes.join(",");
        document.getElementById("petTags").value = pet.tags.join(",");
        document.getElementById("petOnSale").checked = pet.onSale;
        document.getElementById("petIsNew").checked = pet.isNew;
        document.getElementById("petIsBestSeller").checked = pet.isBestSeller;
        document.getElementById("petFeatured").checked = pet.featured;
        document.getElementById("petImages").value = pet.images.join(",");
        document.getElementById("petModal").classList.remove("hidden");
    }
}

// Hàm xóa thú cưng
let petToDelete;
function deletePet(id) {
    petToDelete = id;
    document.getElementById("deleteConfirmText").textContent =
        "Bạn có chắc chắn muốn xóa thú cưng này? Hành động này không thể hoàn tác.";
    document.getElementById("deleteModal").classList.remove("hidden");
}

document
    .getElementById("cancelDeleteBtn")
    .addEventListener("click", () =>
        document.getElementById("deleteModal").classList.add("hidden")
    );
document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    pets = pets.filter((p) => p.id !== petToDelete);
    localStorage.setItem("pets", JSON.stringify(pets));
    renderPets(getCurrentPageItems(pets));
    document.getElementById("deleteModal").classList.add("hidden");
});

// Hàm hiển thị danh mục thú cưng
function renderPetCategories(categoriesToRender) {
    const tableBody = document.getElementById("petCategoriesTableBody");
    tableBody.innerHTML = "";
    categoriesToRender.forEach((category) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${category.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">${
                category.description || ""
            }</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900 mr-2" onclick="editPetCategory(${
                category.id
            })">Sửa</button><button class="text-red-600 hover:text-red-900" onclick="deletePetCategory(${
            category.id
        })">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "petCategoryCount"
    ).textContent = `${petCategories.length} danh mục`;
    renderPagination(petCategories.length, "petCategoriesPagination");
}

// Hàm thêm danh mục
function addPetCategory() {
    document.getElementById("petCategoryModalTitle").textContent =
        "Thêm danh mục mới";
    document.getElementById("petCategoryForm").reset();
    document.getElementById("petCategoryId").value = "";
    document.getElementById("petCategoryModal").classList.remove("hidden");
}

document
    .getElementById("closePetCategoryModal")
    .addEventListener("click", () =>
        document.getElementById("petCategoryModal").classList.add("hidden")
    );
document
    .getElementById("cancelPetCategoryBtn")
    .addEventListener("click", () =>
        document.getElementById("petCategoryModal").classList.add("hidden")
    );

document.getElementById("petCategoryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const categoryId = document.getElementById("petCategoryId").value;
    const categoryData = {
        id: categoryId ? parseInt(categoryId) : Date.now(),
        name: document.getElementById("petCategoryName").value,
        description: document.getElementById("petCategoryDescription").value,
    };

    if (categoryId) {
        petCategories = petCategories.map((c) =>
            c.id === parseInt(categoryId) ? categoryData : c
        );
    } else {
        petCategories.push(categoryData);
    }
    localStorage.setItem("petCategories", JSON.stringify(petCategories));
    renderPetCategories(getCurrentPageItems(petCategories));
    document.getElementById("petCategoryModal").classList.add("hidden");
});

// Hàm chỉnh sửa danh mục
function editPetCategory(id) {
    const category = petCategories.find((c) => c.id === id);
    if (category) {
        document.getElementById("petCategoryModalTitle").textContent =
            "Sửa danh mục";
        document.getElementById("petCategoryId").value = category.id;
        document.getElementById("petCategoryName").value = category.name;
        document.getElementById("petCategoryDescription").value =
            category.description || "";
        document.getElementById("petCategoryModal").classList.remove("hidden");
    }
}

// Hàm xóa danh mục
function deletePetCategory(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
        petCategories = petCategories.filter((c) => c.id !== id);
        localStorage.setItem("petCategories", JSON.stringify(petCategories));
        renderPetCategories(getCurrentPageItems(petCategories));
    }
}

// Hàm hiển thị đơn hàng
function renderPetOrders(ordersToRender) {
    const tableBody = document.getElementById("petOrdersTableBody");
    tableBody.innerHTML = "";
    ordersToRender.forEach((order) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${order.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">${order.customer}</td>
            <td class="px-6 py-4 whitespace-nowrap">${formatCurrency(
                order.total
            )}</td>
            <td class="px-6 py-4 whitespace-nowrap">${order.status}</td>
            <td class="px-6 py-4 whitespace-nowrap">${order.date}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900" onclick="viewPetOrder(${
                order.id
            })">Xem</button></td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "petOrderCount"
    ).textContent = `${petOrders.length} đơn hàng`;
    renderPagination(petOrders.length, "petOrdersPagination");
}

// Hàm xem chi tiết đơn hàng
function viewPetOrder(id) {
    const order = petOrders.find((o) => o.id === id);
    if (order)
        alert(
            `Chi tiết đơn hàng #${order.id}\nKhách hàng: ${
                order.customer
            }\nTổng tiền: ${formatCurrency(order.total)}\nTrạng thái: ${
                order.status
            }\nNgày: ${order.date}`
        );
}

// Hàm hiển thị khách hàng
function renderPetCustomers(customersToRender) {
    const tableBody = document.getElementById("petCustomersTableBody");
    tableBody.innerHTML = "";
    customersToRender.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${customer.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">${customer.email}</td>
            <td class="px-6 py-4 whitespace-nowrap">${customer.phone}</td>
            <td class="px-6 py-4 whitespace-nowrap">${customer.totalOrders}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900" onclick="viewPetCustomer(${customer.id})">Xem</button></td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "petCustomerCount"
    ).textContent = `${petCustomers.length} khách hàng`;
    renderPagination(petCustomers.length, "petCustomersPagination");
}

// Hàm xem chi tiết khách hàng
function viewPetCustomer(id) {
    const customer = petCustomers.find((c) => c.id === id);
    if (customer)
        alert(
            `Chi tiết khách hàng\nTên: ${customer.name}\nEmail: ${customer.email}\nSĐT: ${customer.phone}\nTổng đơn hàng: ${customer.totalOrders}`
        );
}

// Giao diện điều hướng
const navItems = {
    navPets: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Quản lý Thú Cưng</h2>
                <div class="flex items-center">
                    <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="searchInput" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách thú cưng</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="petCount">0 thú cưng</span></div>
                <div><button id="addPetBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="plus" class="w-4 h-4 mr-2"></i>Thêm thú cưng mới</button></div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div class="flex flex-wrap items-center space-x-4">
                    <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Loại thú cưng</label><select id="categoryFilter" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Tất cả</option><option value="Chó">Chó</option><option value="Mèo">Mèo</option><option value="Cá">Cá</option></select></div>
                    <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label><select id="statusFilter" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Tất cả</option><option value="inStock">Còn</option><option value="lowStock">Sắp hết</option><option value="outOfStock">Hết</option></select></div>
                    <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Sắp xếp theo</label><select id="sortBy" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="name">Tên thú cưng</option><option value="priceAsc">Giá: Thấp đến cao</option><option value="priceDesc">Giá: Cao đến thấp</option><option value="newest">Mới nhất</option><option value="bestSeller">Bán chạy nhất</option><option value="stock">Số lượng: Cao đến thấp</option></select></div>
                    <div class="mt-6"><button id="applyFilters" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center"><i data-feather="filter" class="w-4 h-4 mr-2"></i>Lọc</button></div>
                    <div class="mt-6"><button id="exportPets" class="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="download" class="w-4 h-4 mr-2"></i>Xuất Excel</button></div>
                    <div class="mt-6"><button id="bulkActionBtn" class="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="more-horizontal" class="w-4 h-4 mr-2"></i>Hành động</button><div id="bulkActionMenu" class="absolute mt-2 w-48 bg-white rounded-md shadow-lg hidden z-10"><div class="py-1"><a href="#" id="bulkDelete" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Xóa đã chọn</a><a href="#" id="bulkUpdateStock" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cập nhật số lượng</a><a href="#" id="bulkUpdatePrice" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cập nhật giá</a></div></div></div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><div class="flex items-center"><input id="selectAll" type="checkbox" class="h-4 h-4 text-blue-600 border-gray-300 rounded"></div></th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thú cưng</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="petsTableBody"></tbody>
                </table>
                <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div><p class="text-sm text-gray-700" id="petsInfo"></p></div>
                        <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="petsPagination" aria-label="Pagination"></nav></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    navPetCategories: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Quản lý Danh mục Thú Cưng</h2>
                <div class="flex items-center">
                    <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="petCategorySearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách danh mục</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="petCategoryCount">0 danh mục</span></div>
                <div><button id="addPetCategoryBtn" onClick="addPetCategory()" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="plus" class="w-4 h-4 mr-2"></i>Thêm danh mục mới</button></div>
            </div>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên danh mục</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="petCategoriesTableBody"></tbody>
                </table>
                <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div><p class="text-sm text-gray-700" id="petCategoriesInfo"></p></div>
                        <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="petCategoriesPagination" aria-label="Pagination"></nav></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    navPetOrders: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Quản lý Đơn hàng</h2>
                <div class="flex items-center">
                    <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="petOrderSearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách đơn hàng</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="petOrderCount">0 đơn hàng</span></div>
            </div>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn hàng</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đặt</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="petOrdersTableBody"></tbody>
                </table>
                <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div><p class="text-sm text-gray-700" id="petOrdersInfo"></p></div>
                        <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="petOrdersPagination" aria-label="Pagination"></nav></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    navPetCustomers: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Quản lý Khách hàng</h2>
                <div class="flex items-center">
                    <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="petCustomerSearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách khách hàng</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="petCustomerCount">0 khách hàng</span></div>
            </div>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số điện thoại</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng đơn hàng</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="petCustomersTableBody"></tbody>
                </table>
                <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div><p class="text-sm text-gray-700" id="petCustomersInfo"></p></div>
                        <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="petCustomersPagination" aria-label="Pagination"></nav></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    navAnalytics: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Thống kê</h2>
                <div class="flex items-center">
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <h3 class="text-lg font-semibold mb-4">Thống kê bán hàng</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                    <h4 class="text-md font-semibold mb-2">Tổng doanh thu</h4>
                    <p class="text-2xl font-bold text-blue-600">${formatCurrency(
                        petOrders.reduce((sum, o) => sum + o.total, 0)
                    )}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                    <h4 class="text-md font-semibold mb-2">Tổng đơn hàng</h4>
                    <p class="text-2xl font-bold text-blue-600">${
                        petOrders.length
                    }</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                    <h4 class="text-md font-semibold mb-2">Thú cưng bán chạy</h4>
                    <p class="text-lg">${
                        pets.filter((p) => p.isBestSeller).length > 0
                            ? pets.filter((p) => p.isBestSeller)[0].name
                            : "Không có"
                    }</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                    <h4 class="text-md font-semibold mb-2">Khách hàng tích cực</h4>
                    <p class="text-lg">${
                        petCustomers.length > 0
                            ? petCustomers.sort(
                                  (a, b) => b.totalOrders - a.totalOrders
                              )[0].name
                            : "Không có"
                    }</p>
                </div>
            </div>
        </div>
    `,

    navSettings: `
        <header class="bg-white shadow-sm">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-xl font-semibold">Cài đặt</h2>
                <div class="flex items-center">
                    <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                </div>
            </div>
        </header>
        <div class="p-6">
            <h3 class="text-lg font-semibold mb-4">Cài đặt hệ thống</h3>
            <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-1">Tên cửa hàng</label><input type="text" id="storeName" value="${
                    petSettings.storeName || "Pet Shop"
                }" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
                <div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-1">Email hỗ trợ</label><input type="email" id="supportEmail" value="${
                    petSettings.supportEmail || "support@petshop.com"
                }" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
                <div class="flex justify-end"><button id="saveSettings" class="px-4 py-2 bg-blue-600 text-white rounded-md">Lưu cài đặt</button></div>
            </div>
        </div>
    `,
};

// Xử lý click trên nav
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document
            .querySelectorAll("nav a")
            .forEach((l) => l.classList.remove("bg-gray-700", "text-white"));
        link.classList.add("bg-gray-700", "text-white");
        const contentId = link.id;
        document.getElementById("mainContent").innerHTML = navItems[contentId];
        feather.replace();
        currentPage = 1;
        if (contentId === "navPets") {
            renderPets(getCurrentPageItems(pets));
            setupPetEventListeners();
        }
        if (contentId === "navPetCategories")
            renderPetCategories(getCurrentPageItems(petCategories));
        if (contentId === "navPetOrders")
            renderPetOrders(getCurrentPageItems(petOrders));
        if (contentId === "navPetCustomers")
            renderPetCustomers(getCurrentPageItems(petCustomers));
        if (contentId === "navSettings") setupSettingsEventListeners();
    });
});

// Thiết lập các sự kiện cho thú cưng
function setupPetEventListeners() {
    document.getElementById("addPetBtn").addEventListener("click", () => {
        document.getElementById("modalTitle").textContent = "Thêm thú cưng mới";
        document.getElementById("petForm").reset();
        document.getElementById("petId").value = "";
        document.getElementById("petModal").classList.remove("hidden");
    });

    document.getElementById("searchInput").addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPets = pets.filter(
            (p) =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.sku.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderPets(getCurrentPageItems(filteredPets));
    });

    document.getElementById("applyFilters").addEventListener("click", () => {
        let filteredPets = [...pets];
        const category = document.getElementById("categoryFilter").value;
        if (category)
            filteredPets = filteredPets.filter((p) => p.category === category);

        const status = document.getElementById("statusFilter").value;
        if (status === "inStock")
            filteredPets = filteredPets.filter((p) => p.stock > 2);
        else if (status === "lowStock")
            filteredPets = filteredPets.filter(
                (p) => p.stock > 0 && p.stock <= 2
            );
        else if (status === "outOfStock")
            filteredPets = filteredPets.filter((p) => p.stock === 0);

        const sortBy = document.getElementById("sortBy").value;
        if (sortBy === "name")
            filteredPets.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortBy === "priceAsc")
            filteredPets.sort(
                (a, b) =>
                    (a.onSale ? a.salePrice : a.price) -
                    (b.onSale ? b.salePrice : b.price)
            );
        else if (sortBy === "priceDesc")
            filteredPets.sort(
                (a, b) =>
                    (b.onSale ? b.salePrice : b.price) -
                    (a.onSale ? a.salePrice : a.price)
            );
        else if (sortBy === "newest") filteredPets.sort((a, b) => b.id - a.id);
        else if (sortBy === "bestSeller")
            filteredPets.sort((a, b) => b.isBestSeller - a.isBestSeller);
        else if (sortBy === "stock")
            filteredPets.sort((a, b) => b.stock - a.stock);

        currentPage = 1;
        renderPets(getCurrentPageItems(filteredPets));
    });

    document.getElementById("exportPets").addEventListener("click", () => {
        const worksheet = XLSX.utils.json_to_sheet(pets);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Pets");
        XLSX.writeFile(workbook, "pets.xlsx");
    });

    document.getElementById("selectAll").addEventListener("change", (e) => {
        const checkboxes = document.querySelectorAll(
            '#petsTableBody input[type="checkbox"]'
        );
        checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
    });

    document.getElementById("bulkActionBtn").addEventListener("click", () => {
        document.getElementById("bulkActionMenu").classList.toggle("hidden");
    });

    document.getElementById(" bulkDelete").addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll(
                '#petsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (
            selectedIds.length > 0 &&
            confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} thú cưng?`)
        ) {
            pets = pets.filter((p) => !selectedIds.includes(p.id));
            localStorage.setItem("pets", JSON.stringify(pets));
            renderPets(getCurrentPageItems(pets));
        }
        document.getElementById("bulkActionMenu").classList.add("hidden");
    });

    document.getElementById("bulkUpdateStock").addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll(
                '#petsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (selectedIds.length > 0) {
            document.getElementById("selectedPetsCount").textContent =
                selectedIds.length;
            document
                .getElementById("bulkStockModal")
                .classList.remove("hidden");
        }
        document.getElementById("bulkActionMenu").classList.add("hidden");
    });

    document
        .getElementById("applyBulkStockBtn")
        .addEventListener("click", () => {
            const action = document.getElementById("bulkStockAction").value;
            const value = parseInt(
                document.getElementById("bulkStockValue").value
            );
            const selectedIds = Array.from(
                document.querySelectorAll(
                    '#petsTableBody input[type="checkbox"]:checked'
                )
            ).map((cb) => parseInt(cb.dataset.id));
            pets = pets.map((p) => {
                if (selectedIds.includes(p.id)) {
                    if (action === "set") p.stock = value;
                    else if (action === "add") p.stock += value;
                    else if (action === "subtract")
                        p.stock = Math.max(0, p.stock - value);
                }
                return p;
            });
            localStorage.setItem("pets", JSON.stringify(pets));
            renderPets(getCurrentPageItems(pets));
            document.getElementById("bulkStockModal").classList.add("hidden");
        });

    document
        .getElementById("cancelBulkStockBtn")
        .addEventListener("click", () =>
            document.getElementById("bulkStockModal").classList.add("hidden")
        );

    document.getElementById("bulkUpdatePrice").addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll(
                '#petsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (selectedIds.length > 0) {
            document.getElementById("selectedPetsCountPrice").textContent =
                selectedIds.length;
            document
                .getElementById("bulkPriceModal")
                .classList.remove("hidden");
        }
        document.getElementById("bulkActionMenu").classList.add("hidden");
    });

    document
        .getElementById("applyBulkPriceBtn")
        .addEventListener("click", () => {
            const field = document.getElementById("bulkPriceField").value;
            const action = document.getElementById("bulkPriceAction").value;
            const value = parseFloat(
                document.getElementById("bulkPriceValue").value
            );
            const selectedIds = Array.from(
                document.querySelectorAll(
                    '#petsTableBody input[type="checkbox"]:checked'
                )
            ).map((cb) => parseInt(cb.dataset.id));
            pets = pets.map((p) => {
                if (selectedIds.includes(p.id)) {
                    if (field === "price" || field === "both") {
                        p.price = applyPriceAction(p.price, action, value);
                    }
                    if (
                        (field === "salePrice" || field === "both") &&
                        p.salePrice
                    ) {
                        p.salePrice = applyPriceAction(
                            p.salePrice,
                            action,
                            value
                        );
                    }
                }
                return p;
            });
            localStorage.setItem("pets", JSON.stringify(pets));
            renderPets(getCurrentPageItems(pets));
            document.getElementById("bulkPriceModal").classList.add("hidden");
        });

    function applyPriceAction(current, action, value) {
        if (action === "set") return value;
        if (action === "increase") return current + value;
        if (action === "decrease") return Math.max(0, current - value);
        if (action === "increasePercent") return current * (1 + value / 100);
        if (action === "decreasePercent") return current * (1 - value / 100);
        return current;
    }

    document
        .getElementById("cancelBulkPriceBtn")
        .addEventListener("click", () =>
            document.getElementById("bulkPriceModal").classList.add("hidden")
        );
}

// Thiết lập sự kiện cài đặt
function setupSettingsEventListeners() {
    document.getElementById("saveSettings").addEventListener("click", () => {
        const storeName = document.getElementById("storeName").value;
        const supportEmail = document.getElementById("supportEmail").value;
        petSettings = {
            storeName,
            supportEmail,
        };
        localStorage.setItem("petSettings", JSON.stringify(petSettings));
        alert("Cài đặt đã được lưu!");
    });
}

// Khởi tạo trang thú cưng
document.getElementById("navPets").click();
