import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tvService } from 'src/app/services/tv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.page.html',
  styleUrls: ['./tv-details.page.scss'],
})
export class TvDetailsPage implements OnInit {
  tv = null;
  imageBaseUrl = environment.images;
  constructor(private route: ActivatedRoute, private tvService: tvService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvService.getTvDetails(id).subscribe((res) => {
      console.log(res);
      this.tv = res;
    });
  }

  openHomepage(){
    window.open(this.tv.homepage)
  }

}
