import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public platform : Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {
  }

  public PlatformWidth() : Number {
    return ( this.platform.width() )
  }

  public PlatformHeight() : Number {
    return ( this.platform.height() )
  }

  public Platform_Url() : String {
    return ( this.platform.url() )
  }

  public Platform_Android() : Boolean {
    return ( this.platform.is('android') )
  }

  public Platform_iOS() : Boolean {
    return ( this.platform.is('ios') )
  }

  public Platform_iPhone() : Boolean {
    return ( this.platform.is('iphone') )
  }

  public Platform_iPad() : Boolean {
    return ( this.platform.is('ipad') )
  }

  public Platform_Tablet() : Boolean {
    return ( this.platform.is('tablet') )
  }

  public Platform_Phablet() : Boolean {
    return ( this.platform.is('phablet') )
  }

  public Platform_Mobile() : Boolean {
    return ( this.platform.is('mobile') )
  }

  public Platform_MobileWeb() : Boolean {
    return ( this.platform.is('mobileweb') )
  }

  public Platform_Desktop() : Boolean {
    return ( this.platform.is('desktop') )
  }

  public PlatformType() : String {
    return ( (this.platform.is('mobile') ? 'mobile' : '') + (this.platform.is('desktop') ? 'desktop' : '') )
  }


  public ShowFullHeader() : Boolean {
    return ((this.platform.width() > 768));
  }
}
