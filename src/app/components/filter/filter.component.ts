import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleMenu()
    this.selectedItems()
  }
  
  menuTitle: string = "Select Generations"
  isMenuOpened: boolean = false
  isChecked: boolean = false

  generations: Array<any> = [
    "1ª Generation",
    "2ª Generation",
    "3ª Generation",
    "4ª Generation",
    "5ª Generation",
    "6ª Generation",
    "7ª Generation",
    "8ª Generation",
  ]

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened

    // MODO JAVASCRIPT DE FAZER
    // const selectBtn = document.querySelector(".select-btn")
    // selectBtn?.addEventListener("click", () => {
    //   selectBtn.classList.toggle("open")
    // })
  }


  selectedItems() {
    this.isChecked = !this.isChecked
  }


  // selectedItems() {
  //   const items = document.querySelectorAll(".item")

  //   items.forEach(item => {
  //     item.addEventListener("click", () => {
  //       item.classList.toggle("checked")

  //       let checked = document.querySelectorAll(".checked")

  //       if(checked && checked.length > 0) {
  //         this.menuTitle = `${checked.length} Selected`
  //       } else {
  //         this.menuTitle = "Select Generations"
  //       }
  //     })
  //   })
  // }
}
