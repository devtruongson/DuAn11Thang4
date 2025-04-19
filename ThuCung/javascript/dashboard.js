feather.replace();

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
let products = JSON.parse(localStorage.getItem("products")) || [];
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let customers = JSON.parse(localStorage.getItem("customers")) || [];
let settings = JSON.parse(localStorage.getItem("settings")) || {};
const itemsPerPage = 10;
let currentPage = 1;
function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(amount);
}

function getCurrentPageItems(items) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
}
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
            if (containerId === "productsPagination")
                renderProducts(getCurrentPageItems(products));
            if (containerId === "categoriesPagination")
                renderCategories(getCurrentPageItems(categories));
            if (containerId === "ordersPagination")
                renderOrders(getCurrentPageItems(orders));
            if (containerId === "customersPagination")
                renderCustomers(getCurrentPageItems(customers));
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

function renderProducts(productsToRender) {
    const tableBody = document.getElementById("productsTableBody");
    tableBody.innerHTML = "";
    productsToRender.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap"><input type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded" data-id="${
                        product.id
                    }"></td>
                    <td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-10 w-10">${
                        product.images.length > 0
                            ? `<img class="h-10 w-10 rounded-full" src="${product.images[0]}" alt="">`
                            : '<div class="h-10 w-10 rounded-full bg-gray-200"></div>'
                    }</div><div class="ml-4"><div class="text-sm font-medium text-gray-900">${
            product.name
        }</div><div class="text-sm text-gray-500">${
            product.sku
        }</div></div></div></td>
                    <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${
                        product.category
                    }</div><div class="text-sm text-gray-500">${
            product.subcategory
        }</div></td>
                    <td class="px-6 py-4 whitespace-nowrap">${
                        product.onSale
                            ? `<span class="text-sm text-gray-500 line-through">${formatCurrency(
                                  product.price
                              )}</span><br>`
                            : ""
                    }<span class="text-sm font-medium text-gray-900">${formatCurrency(
            product.onSale ? product.salePrice : product.price
        )}</span></td>
                    <td class="px-6 py-4 whitespace-nowrap"><span class="text-sm text-gray-900">${
                        product.stock
                    }</span></td>
                    <td class="px-6 py-4 whitespace-nowrap">${getStockStatus(
                        product.stock
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900 mr-2" onclick="editProduct(${
                        product.id
                    })">Sửa</button><button class="text-red-600 hover:text-red-900" onclick="deleteProduct(${
            product.id
        })">Xóa</button></td>
                `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "productCount"
    ).textContent = `${products.length} sản phẩm`;
    renderPagination(products.length, "productsPagination");
}

function getStockStatus(stock) {
    if (stock > 10)
        return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Còn hàng</span>';
    if (stock > 0)
        return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Sắp hết hàng</span>';
    return '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Hết hàng</span>';
}

document.getElementById("addProductBtn")?.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Thêm sản phẩm mới";
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("productModal").classList.remove("hidden");
});

document
    .getElementById("closeModal")
    .addEventListener("click", () =>
        document.getElementById("productModal").classList.add("hidden")
    );
document
    .getElementById("cancelBtn")
    .addEventListener("click", () =>
        document.getElementById("productModal").classList.add("hidden")
    );

document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const productId = document.getElementById("productId").value;
    const productData = {
        id: productId ? parseInt(productId) : Date.now(),
        name: document.getElementById("productName").value,
        category: document.getElementById("productCategory").value,
        subcategory: document.getElementById("productSubcategory").value,
        sku: document.getElementById("productSKU").value,
        price: parseFloat(document.getElementById("productPrice").value),
        salePrice: document.getElementById("productSalePrice").value
            ? parseFloat(document.getElementById("productSalePrice").value)
            : null,
        stock: parseInt(document.getElementById("productStock").value),
        material: document.getElementById("productMaterial").value,
        description: document.getElementById("productDescription").value,
        colors: document
            .getElementById("productColors")
            .value.split(",")
            .map((c) => c.trim()),
        sizes: document
            .getElementById("productSizes")
            .value.split(",")
            .map((s) => s.trim()),
        tags: document
            .getElementById("productTags")
            .value.split(",")
            .map((t) => t.trim()),
        onSale: document.getElementById("productOnSale").checked,
        isNew: document.getElementById("productIsNew").checked,
        isBestSeller: document.getElementById("productIsBestSeller").checked,
        featured: document.getElementById("productFeatured").checked,
        images: document
            .getElementById("productImages")
            .value.split(",")
            .map((url) => url.trim()),
    };

    if (productId) {
        products = products.map((p) =>
            p.id === parseInt(productId) ? productData : p
        );
    } else {
        products.push(productData);
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(getCurrentPageItems(products));
    document.getElementById("productModal").classList.add("hidden");
});

function editProduct(id) {
    const product = products.find((p) => p.id === id);
    if (product) {
        document.getElementById("modalTitle").textContent = "Sửa sản phẩm";
        document.getElementById("productId").value = product.id;
        document.getElementById("productName").value = product.name;
        document.getElementById("productCategory").value = product.category;
        document.getElementById("productSubcategory").value =
            product.subcategory;
        document.getElementById("productSKU").value = product.sku;
        document.getElementById("productPrice").value = product.price;
        document.getElementById("productSalePrice").value =
            product.salePrice || "";
        document.getElementById("productStock").value = product.stock;
        document.getElementById("productMaterial").value = product.material;
        document.getElementById("productDescription").value =
            product.description;
        document.getElementById("productColors").value =
            product.colors.join(",");
        document.getElementById("productSizes").value = product.sizes.join(",");
        document.getElementById("productTags").value = product.tags.join(",");
        document.getElementById("productOnSale").checked = product.onSale;
        document.getElementById("productIsNew").checked = product.isNew;
        document.getElementById("productIsBestSeller").checked =
            product.isBestSeller;
        document.getElementById("productFeatured").checked = product.featured;
        document.getElementById("productImages").value =
            product.images.join(",");
        document.getElementById("productModal").classList.remove("hidden");
    }
}

let productToDelete;
function deleteProduct(id) {
    productToDelete = id;
    document.getElementById("deleteConfirmText").textContent =
        "Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể hoàn tác.";
    document.getElementById("deleteModal").classList.remove("hidden");
}

document
    .getElementById("cancelDeleteBtn")
    .addEventListener("click", () =>
        document.getElementById("deleteModal").classList.add("hidden")
    );
document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    products = products.filter((p) => p.id !== productToDelete);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(getCurrentPageItems(products));
    document.getElementById("deleteModal").classList.add("hidden");
});

function renderCategories(categoriesToRender) {
    const tableBody = document.getElementById("categoriesTableBody");
    tableBody.innerHTML = "";
    categoriesToRender.forEach((category) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">${
                        category.name
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap">${
                        category.description || ""
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900 mr-2" onclick="editCategory(${
                        category.id
                    })">Sửa</button><button class="text-red-600 hover:text-red-900" onclick="deleteCategory(${
            category.id
        })">Xóa</button></td>
                `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "categoryCount"
    ).textContent = `${categories.length} danh mục`;
    renderPagination(categories.length, "categoriesPagination");
}

function addCate() {
    document.getElementById("categoryModalTitle").textContent =
        "Thêm danh mục mới";
    document.getElementById("categoryForm").reset();
    document.getElementById("categoryId").value = "";
    document.getElementById("categoryModal").classList.remove("hidden");
}

document
    .getElementById("closeCategoryModal")
    .addEventListener("click", () =>
        document.getElementById("categoryModal").classList.add("hidden")
    );
document
    .getElementById("cancelCategoryBtn")
    .addEventListener("click", () =>
        document.getElementById("categoryModal").classList.add("hidden")
    );

document.getElementById("categoryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const categoryId = document.getElementById("categoryId").value;
    const categoryData = {
        id: categoryId ? parseInt(categoryId) : Date.now(),
        name: document.getElementById("categoryName").value,
        description: document.getElementById("categoryDescription").value,
    };

    if (categoryId) {
        categories = categories.map((c) =>
            c.id === parseInt(categoryId) ? categoryData : c
        );
    } else {
        categories.push(categoryData);
    }
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories(getCurrentPageItems(categories));
    document.getElementById("categoryModal").classList.add("hidden");
});

function editCategory(id) {
    const category = categories.find((c) => c.id === id);
    if (category) {
        document.getElementById("categoryModalTitle").textContent =
            "Sửa danh mục";
        document.getElementById("categoryId").value = category.id;
        document.getElementById("categoryName").value = category.name;
        document.getElementById("categoryDescription").value =
            category.description || "";
        document.getElementById("categoryModal").classList.remove("hidden");
    }
}

function deleteCategory(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
        categories = categories.filter((c) => c.id !== id);
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories(getCurrentPageItems(categories));
    }
}

function renderOrders(ordersToRender) {
    const tableBody = document.getElementById("ordersTableBody");
    tableBody.innerHTML = "";
    ordersToRender.forEach((order) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">${order.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${
                        order.customer
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap">${formatCurrency(
                        order.total
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${order.status}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${order.date}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900" onclick="viewOrder(${
                        order.id
                    })">Xem</button></td>
                `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "orderCount"
    ).textContent = `${orders.length} đơn hàng`;
    renderPagination(orders.length, "ordersPagination");
}

function viewOrder(id) {
    const order = orders.find((o) => o.id === id);
    if (order)
        alert(
            `Chi tiết đơn hàng #${order.id}\nKhách hàng: ${
                order.customer
            }\nTổng tiền: ${formatCurrency(order.total)}\nTrạng thái: ${
                order.status
            }\nNgày: ${order.date}`
        );
}

function renderCustomers(customersToRender) {
    const tableBody = document.getElementById("customersTableBody");
    tableBody.innerHTML = "";
    customersToRender.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">${customer.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${customer.email}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${customer.phone}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${customer.totalOrders}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button class="text-blue-600 hover:text-blue-900" onclick="viewCustomer(${customer.id})">Xem</button></td>
                `;
        tableBody.appendChild(row);
    });
    document.getElementById(
        "customerCount"
    ).textContent = `${customers.length} khách hàng`;
    renderPagination(customers.length, "customersPagination");
}

function viewCustomer(id) {
    const customer = customers.find((c) => c.id === id);
    if (customer)
        alert(
            `Chi tiết khách hàng\nTên: ${customer.name}\nEmail: ${customer.email}\nSĐT: ${customer.phone}\nTổng đơn hàng: ${customer.totalOrders}`
        );
}

const navItems = {
    navProducts: `
                <header class="bg-white shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <h2 class="text-xl font-semibold">Quản lý Sản phẩm</h2>
                        <div class="flex items-center">
                            <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="searchInput" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                            <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                        </div>
                    </div>
                </header>
                <div class="p-6">
                    <div class="mb-6 flex justify-between items-center">
                        <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách sản phẩm</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="productCount">0 sản phẩm</span></div>
                        <div><button id="addProductBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="plus" class="w-4 h-4 mr-2"></i>Thêm sản phẩm mới</button></div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm mb-6">
                        <div class="flex flex-wrap items-center space-x-4">
                            <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Danh mục</label><select id="categoryFilter" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Tất cả</option><option value="Nam">Nam</option><option value="Nữ">Nữ</option><option value="Trẻ em">Trẻ em</option><option value="Phụ kiện">Phụ kiện</option></select></div>
                            <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label><select id="statusFilter" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Tất cả</option><option value="inStock">Còn hàng</option><option value="lowStock">Sắp hết hàng</option><option value="outOfStock">Hết hàng</option></select></div>
                            <div class="w-40"><label class="block text-sm font-medium text-gray-700 mb-1">Sắp xếp theo</label><select id="sortBy" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="name">Tên sản phẩm</option><option value="priceAsc">Giá: Thấp đến cao</option><option value="priceDesc">Giá: Cao đến thấp</option><option value="newest">Mới nhất</option><option value="bestSeller">Bán chạy nhất</option><option value="stock">Tồn kho: Cao đến thấp</option></select></div>
                            <div class="mt-6"><button id="applyFilters" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center"><i data-feather="filter" class="w-4 h-4 mr-2"></i>Lọc</button></div>
                            <div class="mt-6"><button id="exportProducts" class="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="download" class="w-4 h-4 mr-2"></i>Xuất Excel</button></div>
                            <div class="mt-6"><button id="bulkActionBtn" class="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="more-horizontal" class="w-4 h-4 mr-2"></i>Hành động</button><div id="bulkActionMenu" class="absolute mt-2 w-48 bg-white rounded-md shadow-lg hidden z-10"><div class="py-1"><a href="#" id="bulkDelete" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Xóa đã chọn</a><a href="#" id="bulkUpdateStock" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cập nhật tồn kho</a><a href="#" id="bulkUpdatePrice" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cập nhật giá</a></div></div></div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><div class="flex items-center"><input id="selectAll" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded"></div></th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sản phẩm</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tồn kho</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200" id="productsTableBody"></tbody>
                        </table>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div><p class="text-sm text-gray-700" id="productsInfo"></p></div>
                                <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="productsPagination" aria-label="Pagination"></nav></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,

    navCategories: `
                <header class="bg-white shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <h2 class="text-xl font-semibold">Quản lý Danh mục</h2>
                        <div class="flex items-center">
                            <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="categorySearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                            <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                        </div>
                    </div>
                </header>
                <div class="p-6">
                    <div class="mb-6 flex justify-between items-center">
                        <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách danh mục</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="categoryCount">0 danh mục</span></div>
                        <div><button id="addCategoryBtn" onClick="addCate()" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"><i data-feather="plus" class="w-4 h-4 mr-2"></i>Thêm danh mục mới</button></div>
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
                            <tbody class="bg-white divide-y divide-gray-200" id="categoriesTableBody"></tbody>
                        </table>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div><p class="text-sm text-gray-700" id="categoriesInfo"></p></div>
                                <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="categoriesPagination" aria-label="Pagination"></nav></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,

    navOrders: `
                <header class="bg-white shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <h2 class="text-xl font-semibold">Quản lý Đơn hàng</h2>
                        <div class="flex items-center">
                            <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="orderSearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                            <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                        </div>
                    </div>
                </header>
                <div class="p-6">
                    <div class="mb-6 flex justify-between items-center">
                        <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách đơn hàng</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="orderCount">0 đơn hàng</span></div>
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
                            <tbody class="bg-white divide-y divide-gray-200" id="ordersTableBody"></tbody>
                        </table>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div><p class="text-sm text-gray-700" id="ordersInfo"></p></div>
                                <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="ordersPagination" aria-label="Pagination"></nav></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,

    navCustomers: `
                <header class="bg-white shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <h2 class="text-xl font-semibold">Quản lý Khách hàng</h2>
                        <div class="flex items-center">
                            <div class="relative mr-4"><input type="text" placeholder="Tìm kiếm..." id="customerSearch" class="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-0 top-0 h-full px-3 flex items-center"><i data-feather="search" class="w-4 h-4 text-gray-500"></i></button></div>
                            <div class="flex items-center ml-4"><span class="mr-2 text-sm text-gray-500">Admin</span><div class="w-8 h-8 bg-gray-200 rounded-full"></div></div>
                        </div>
                    </div>
                </header>
                <div class="p-6">
                    <div class="mb-6 flex justify-between items-center">
                        <div class="flex items-center"><h3 class="text-lg font-semibold">Danh sách khách hàng</h3><span class="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full" id="customerCount">0 khách hàng</span></div>
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
                            <tbody class="bg-white divide-y divide-gray-200" id="customersTableBody"></tbody>
                        </table>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div><p class="text-sm text-gray-700" id="customersInfo"></p></div>
                                <div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" id="customersPagination" aria-label="Pagination"></nav></div>
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
                                orders.reduce((sum, o) => sum + o.total, 0)
                            )}</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h4 class="text-md font-semibold mb-2">Tổng đơn hàng</h4>
                            <p class="text-2xl font-bold text-blue-600">${
                                orders.length
                            }</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h4 class="text-md font-semibold mb-2">Sản phẩm bán chạy</h4>
                            <p class="text-lg">${
                                products.filter((p) => p.isBestSeller).length >
                                0
                                    ? products.filter((p) => p.isBestSeller)[0]
                                          .name
                                    : "Không có"
                            }</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h4 class="text-md font-semibold mb-2">Khách hàng tích cực</h4>
                            <p class="text-lg">${
                                customers.length > 0
                                    ? customers.sort(
                                          (a, b) =>
                                              b.totalOrders - a.totalOrders
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
                            settings.storeName || "Fashion Store"
                        }" class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
                        <div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-1">Email hỗ trợ</label><input type="email" id="supportEmail" value="${
                            settings.supportEmail || "support@fashionstore.com"
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
        if (contentId === "navProducts") {
            renderProducts(getCurrentPageItems(products));
            setupProductEventListeners();
        }
        if (contentId === "navCategories")
            renderCategories(getCurrentPageItems(categories));
        if (contentId === "navOrders")
            renderOrders(getCurrentPageItems(orders));
        if (contentId === "navCustomers")
            renderCustomers(getCurrentPageItems(customers));
        if (contentId === "navSettings") setupSettingsEventListeners();
    });
});

// Thiết lập các sự kiện cho sản phẩm
function setupProductEventListeners() {
    document.getElementById("addProductBtn").addEventListener("click", () => {
        document.getElementById("modalTitle").textContent = "Thêm sản phẩm mới";
        document.getElementById("productForm").reset();
        document.getElementById("productId").value = "";
        document.getElementById("productModal").classList.remove("hidden");
    });

    document.getElementById("searchInput").addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(
            (p) =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.sku.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderProducts(getCurrentPageItems(filteredProducts));
    });

    document.getElementById("applyFilters").addEventListener("click", () => {
        let filteredProducts = [...products];
        const category = document.getElementById("categoryFilter").value;
        if (category)
            filteredProducts = filteredProducts.filter(
                (p) => p.category === category
            );

        const status = document.getElementById("statusFilter").value;
        if (status === "inStock")
            filteredProducts = filteredProducts.filter((p) => p.stock > 10);
        else if (status === "lowStock")
            filteredProducts = filteredProducts.filter(
                (p) => p.stock > 0 && p.stock <= 10
            );
        else if (status === "outOfStock")
            filteredProducts = filteredProducts.filter((p) => p.stock === 0);

        const sortBy = document.getElementById("sortBy").value;
        if (sortBy === "name")
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortBy === "priceAsc")
            filteredProducts.sort(
                (a, b) =>
                    (a.onSale ? a.salePrice : a.price) -
                    (b.onSale ? b.salePrice : b.price)
            );
        else if (sortBy === "priceDesc")
            filteredProducts.sort(
                (a, b) =>
                    (b.onSale ? b.salePrice : b.price) -
                    (a.onSale ? a.salePrice : a.price)
            );
        else if (sortBy === "newest")
            filteredProducts.sort((a, b) => b.id - a.id);
        else if (sortBy === "bestSeller")
            filteredProducts.sort((a, b) => b.isBestSeller - a.isBestSeller);
        else if (sortBy === "stock")
            filteredProducts.sort((a, b) => b.stock - a.stock);

        currentPage = 1;
        renderProducts(getCurrentPageItems(filteredProducts));
    });

    document.getElementById("exportProducts").addEventListener("click", () => {
        const worksheet = XLSX.utils.json_to_sheet(products);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, "products.xlsx");
    });

    document.getElementById("selectAll").addEventListener("change", (e) => {
        const checkboxes = document.querySelectorAll(
            '#productsTableBody input[type="checkbox"]'
        );
        checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
    });

    document.getElementById("bulkActionBtn").addEventListener("click", () => {
        document.getElementById("bulkActionMenu").classList.toggle("hidden");
    });

    document.getElementById("bulkDelete").addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll(
                '#productsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (
            selectedIds.length > 0 &&
            confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} sản phẩm?`)
        ) {
            products = products.filter((p) => !selectedIds.includes(p.id));
            localStorage.setItem("products", JSON.stringify(products));
            renderProducts(getCurrentPageItems(products));
        }
        document.getElementById("bulkActionMenu").classList.add("hidden");
    });

    document.getElementById("bulkUpdateStock").addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll(
                '#productsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (selectedIds.length > 0) {
            document.getElementById("selectedProductsCount").textContent =
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
                    '#productsTableBody input[type="checkbox"]:checked'
                )
            ).map((cb) => parseInt(cb.dataset.id));
            products = products.map((p) => {
                if (selectedIds.includes(p.id)) {
                    if (action === "set") p.stock = value;
                    else if (action === "add") p.stock += value;
                    else if (action === "subtract")
                        p.stock = Math.max(0, p.stock - value);
                }
                return p;
            });
            localStorage.setItem("products", JSON.stringify(products));
            renderProducts(getCurrentPageItems(products));
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
                '#productsTableBody input[type="checkbox"]:checked'
            )
        ).map((cb) => parseInt(cb.dataset.id));
        if (selectedIds.length > 0) {
            document.getElementById("selectedProductsCountPrice").textContent =
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
                    '#productsTableBody input[type="checkbox"]:checked'
                )
            ).map((cb) => parseInt(cb.dataset.id));
            products = products.map((p) => {
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
            localStorage.setItem("products", JSON.stringify(products));
            renderProducts(getCurrentPageItems(products));
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

function setupSettingsEventListeners() {
    document.getElementById("saveSettings").addEventListener("click", () => {
        const storeName = document.getElementById("storeName").value;
        const supportEmail = document.getElementById("supportEmail").value;
        settings = {
            storeName,
            supportEmail,
        };
        localStorage.setItem("settings", JSON.stringify(settings));
        alert("Cài đặt đã được lưu!");
    });
}

document.getElementById("navProducts").click();
