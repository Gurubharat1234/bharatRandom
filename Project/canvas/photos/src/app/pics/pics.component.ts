import { Component, OnInit } from '@angular/core';
import { PicsService } from '../pics.service';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {
name;

  constructor() { }
  ngOnInit(): void {
   
  }
}
  


  // blurr(){
  //   this.data.get().subscribe((res)=>{
  //     console.log(res);
  //     this.details=res
  //   })

  // }

// }
