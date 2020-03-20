class TabItem {

  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  present() {
    let kledingTab = document.createElement("li");
    kledingTab.classList.add("nav-item");
    let ahref = document.createElement("a");
    ahref.classList.add("nav-link");
    ahref.setAttribute("data-toggle", "tab");
    ahref.setAttribute("role", "tab");
    ahref.setAttribute("aria-controls", "profile");
    ahref.href = "#" + this.id;
    ahref.innerText = this.title;
    kledingTab.appendChild(ahref);
    return kledingTab;
  }

}

export { TabItem }
