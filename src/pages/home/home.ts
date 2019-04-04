import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(private ngZone: NgZone){}

  window: any = window;
  message: string =null;
  barcodes = [];
  status: string = 'Initialization... Are you on device?';

  listen () {
    this.status = `enabled`;
    this.window.plugins.honeywell.listen(data => {
      console.log(`Scanned: ${data}`);
      this.ngZone.run(() => {
        this.barcodes = [`${data} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split('.')[0]}`, ...this.barcodes]
      });
    }, error => {
      console.log(`Error occured: ${error}`);
      this.ngZone.run(() => {
        this.barcodes = [`${error} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split('.')[0]}`, ...this.barcodes]
      });
    });
  }

  disable () {
    this.status = `disabled`;
    this.window.plugins.honeywell.release(success => {
      this.message = `DISABLE_SUCCESS: ${success}`
    }, error => {
      this.message = `DISABLE_ERROR: ${error}`;
    });
  }

  enable () {
    this.status='enabled';
    this.window.plugins.honeywell.claim(success => {
      this.message = `ENABLE_SUCCESS: ${success}`
      this.listen();
    }, error => {
      this.message = `ENABLE_ERROR ${error}`;
    });
  }

  ngOnInit() {
    this.listen();
  }

}
