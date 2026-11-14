import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  async ngOnInit(): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      try {
        if (Capacitor.isPluginAvailable('StatusBar')) {
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: '#151611' });
          await StatusBar.setOverlaysWebView({ overlay: false });
        }
      } catch (e) {
        console.warn('Capacitor StatusBar configuration error:', e);
      }

      try {
        if (Capacitor.isPluginAvailable('Keyboard')) {
          await Keyboard.setResizeMode({ mode: KeyboardResize.Body });
        }
      } catch (e) {
        console.warn('Capacitor Keyboard configuration error:', e);
      }
    }
  }
}
