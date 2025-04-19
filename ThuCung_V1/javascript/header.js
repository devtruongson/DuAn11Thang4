const petCategories = JSON.parse(localStorage.getItem("petCategories")) || [];
const htmlCate = petCategories
    .map(
        (item) => `<a
                        href="#"
                        class="text-gray-800 hover:text-red-600 font-medium"
                        >${item.name}</a
                    >`
    )
    .join("");
const cateWpRender = (document.querySelector("#cateRenderHeader").innerHTML =
    htmlCate);

const settings = JSON.parse(localStorage.getItem("settings")) || {};
const storeName = settings.storeName || "PETSHOP";

if (document.getElementById("storeNameHeader")) {
    document.getElementById("storeNameHeader").textContent =
        storeName.split(" ")[0];
}

if (document.getElementById("storeNameMobile")) {
    document.getElementById("storeNameMobile").textContent =
        storeName.split(" ")[0];
}

if (document.getElementById("storeNameFooter")) {
    document.getElementById("storeNameFooter").textContent = storeName;
    document.getElementById("storeNameFooterBottom").textContent = storeName;
    document.getElementById("supportEmailFooter").textContent =
        settings.supportEmail || "info@petshop.com";
}

const headerBack = document.querySelector("#header_back");

if (headerBack) {
    headerBack.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
