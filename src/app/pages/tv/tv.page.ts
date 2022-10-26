import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { tvService } from 'src/app/services/tv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tv = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private tvService: tvService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadTv();
    }

  async loadTv(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.tvService.getTopRatedTv(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.tv.push(...res.results);
      console.log(res);

      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadTv(event);
  }
}
