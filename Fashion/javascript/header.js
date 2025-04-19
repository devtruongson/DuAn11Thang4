const cates = JSON.parse(localStorage.getItem("categories")) || [];
const htmlCate = cates
    .map(
        (item) => `<a
                        href="#"
                        class="text-gray-800 hover:text-purple-600 font-medium"
                        >${item.name}</a
                    >`
    )
    .join("");
const cateWpRender = (document.querySelector("#cateRenderHeader").innerHTML =
    htmlCate);

const settings = JSON.parse(localStorage.getItem("settings")) || {};
const storeName = settings.storeName || "FASHIONSTORE";

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
        settings.supportEmail || "info@fashionstore.com";
}

const headerBack = document.querySelector("#header_back");

if (headerBack) {
    headerBack.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
