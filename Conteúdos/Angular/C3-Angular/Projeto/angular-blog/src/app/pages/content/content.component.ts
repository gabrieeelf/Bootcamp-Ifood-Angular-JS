import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://centraldotimao.com.br/wp-content/uploads/2022/04/agenciacorinthians-foto-124680-scaled.jpg";
  contentTitle:string = "NOTICIA EXEMPLO";
  contentDescription:string = "TESTEEEEEEEEEEEEEEEE";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("Id"))
    )
  }

}
