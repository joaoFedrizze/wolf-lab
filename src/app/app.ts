import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideMenu } from './aside-menu/aside-menu';
import { MainHeader } from './main-header/main-header';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faEyeSlash, faPen, faL } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { SplashTextService } from './services/splash-text';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideMenu, MainHeader, CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('wolf-lab-dashboard');

  splashService = inject(SplashTextService);

  faTrash = faTrash;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPen = faPen;

  isFormOpen = signal(false);
  itemIdSelect = signal('');
  itemNameText: string = '';
  itemIsHide: boolean = true;

  isModalDeleteOpen = signal(false);
  deleteItemNameValidate: string = '';

  isUpdate = signal(false);

  splashText$ = this.splashService.getSplashText();

  changeForm(isOpen: boolean) {
    this.isFormOpen.set(isOpen);
    this.isUpdate.set(false);
    this.itemNameText = '';
    this.itemIsHide = true;
  }

  changeUpdateForm(isOpen: boolean, itemId: string, itemName: string, isVisible: boolean) {
    this.isFormOpen.set(isOpen);
    this.isUpdate.set(isOpen);
    this.itemIdSelect.set(itemId);
    this.itemNameText = itemName;
    this.itemIsHide = !isVisible;
  }

  openDelete(itemId: string, itemName: string) {
    this.isModalDeleteOpen.set(true);

    this.itemNameText = itemName;
    this.itemIdSelect.set(itemId);
  }

  // updateList() {
  //   this.splashText$ = this.splashService.getSplashText();
  // }

  closeDelete() {
    this.isModalDeleteOpen.set(false);
    this.deleteItemNameValidate = '';
  }

  delete() {
    if (this.deleteItemNameValidate === this.itemNameText) {
      this.splashService.delete(this.itemIdSelect()).subscribe();
      this.closeDelete();
    } else {
      console.log('Errou o nome');
    }
  }

  toggleHide(itemId: string, itemName: string, isHide: boolean) {
    const payload = {
      item: itemName,
      isHide: !isHide,
    };

    this.splashService.patch(itemId, payload).subscribe({
      next: (res) => {
        this.itemNameText = '';
        this.itemIsHide = true;

        this.changeForm(false);
      },
      error: (err) => {},
    });
  }

  sendData() {
    const payload = {
      item: this.itemNameText,
      isHide: !this.itemIsHide,
    };

    if (this.isUpdate()) {
      this.splashService.patch(this.itemIdSelect(), payload).subscribe({
        next: (res) => {
          this.itemNameText = '';
          this.itemIsHide = true;
          this.changeForm(false);
        },
        error: (err) => {},
      });
    } else {
      this.splashService.create(payload).subscribe({
        next: (res) => {
          this.itemNameText = '';
          this.itemIsHide = true;
          this.changeForm(false);
        },
        error: (err) => {},
      });
    }
  }

  ngOnInit() {}
}
