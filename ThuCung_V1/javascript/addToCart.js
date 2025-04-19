let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(amount);
}

window.addToCart = function (id) {
    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    const pet = pets.find((p) => p.id === id);
    if (pet) {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({
                id: pet.id,
                name: pet.name,
                price: pet.onSale && pet.salePrice ? pet.salePrice : pet.price,
                color: pet.colors[0] || "N/A",
                size: pet.sizes[0] || "N/A",
                quantity: 1,
                image: pet.images[0] || "https://via.placeholder.com/150",
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showToast(`${pet.name} đã được thêm vào giỏ hàng!`);
    } else {
        showToast("Thú cưng không tồn tại!", "error");
    }
};

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.className =
            "absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center";
    }
}

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
            type === "success"
                ? "bg-orange-600 text-white"
                : "bg-red-600 text-white"
        }`;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    } else {
        alert(message);
    }
}

document.getElementById("cartBtn")?.addEventListener("click", (e) => {
    window.location.href = "cart.html";
});

updateCartCount();
