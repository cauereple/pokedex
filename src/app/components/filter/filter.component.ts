import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.consoleLog()
  }

  consoleLog() {
    const selectBtn = document.querySelector(".pokemon-filter__btn")
    const items = document.querySelectorAll(".pokemon-list__item")

    const menu = document.querySelector(".menu-select")


    
    menu?.addEventListener("click", () => {
      menu.classList.toggle("open")
    })
  }
  

}
