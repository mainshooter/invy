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
// <ul class="nav nav-tabs" id="myTab" role="tablist">
//   <li class="nav-item">
//     <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
//   </li>
// </ul>
// <div class="tab-content" id="myTabContent">
//   <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
//   <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
//   <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
// </div>
