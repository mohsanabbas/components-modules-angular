import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"]
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "Mosh", age: 23, job: "designer", employed: true },
    { name: "Elyse", age: 33, job: "Developer", employed: true },
    { name: "Jill", age: 31, job: "Developer", employed: false }
  ];
  headers = [
    { key: "employed", label: "has a job" },
    {
      key: "name",
      label: "name"
    },
    {
      key: "age",
      label: "age"
    },
    {
      key: "job",
      label: "job"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
