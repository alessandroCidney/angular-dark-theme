import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon = ETheme.ICON_MOON
  public textTheme = ETheme.TEXT_MOON

  public toggle () {
    const theme = document.body.classList.toggle('dark-theme')

    this.icon = theme ? ETheme.ICON_SUN : ETheme.ICON_MOON
    this.textTheme = theme ? ETheme.TEXT_SUN : ETheme.TEXT_MOON
  }
}
