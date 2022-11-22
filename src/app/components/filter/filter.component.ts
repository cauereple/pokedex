import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  menuTitle: string = "Select Generations"
  isMenuOpened: boolean = false
  isChecked: boolean = false

  selectedGenerations: Array<any> = []

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

  existingItems(generation: any) {

    this.isChecked = !this.isChecked

    let contain = (element: any) => element === generation
    let filterArray = this.selectedGenerations.some(contain)

    if(!filterArray){
      this.selectedGenerations.push(generation)
    } else {
      this.selectedGenerations = this.selectedGenerations.filter(item => item !== generation)
    }
    console.log(this.selectedGenerations);
    console.log(this.selectedGenerations.some(contain));
  }

  selectedItems(generation: any): boolean {
    let contain = (element: any) => element === generation
    let filterArray = this.selectedGenerations.some(contain)

    return filterArray
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
