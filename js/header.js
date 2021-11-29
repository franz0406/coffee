window.addEventListener("load", function(){

        // 메뉴 아이콘
    const navBar = document.querySelector(".navbar"),
    menuBtn = document.getElementById("menu_btn");

    menuBtn.addEventListener("click", () =>{
    navBar.classList.toggle("active");    
    cartBox.classList.remove("active");
    searchForm.classList.remove("active");
    })

    // 장바구니 아이콘
    const cartBox = document.querySelector(".cart_item_container"),
    cartBtn = document.getElementById("cart_btn");

    cartBtn.addEventListener("click", () =>{
    cartBox.classList.toggle("active");
    navBar.classList.remove("active");    
    searchForm.classList.remove("active");
    })

    // 검색 아이콘
    const searchForm = document.querySelector(".search_form"),
    srchBtn = document.getElementById("search_btn");

    srchBtn.addEventListener("click", () =>{
    searchForm.classList.toggle("active");
    navBar.classList.remove("active");
    cartBox.classList.remove("active");    
    })

    window.addEventListener("scroll", () => {
    navBar.classList.remove("active");
    cartBox.classList.remove("active");
    searchForm.classList.remove("active");
    })

})

