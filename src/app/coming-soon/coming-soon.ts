import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coming-soon',
  imports: [FormsModule],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css'
})
export class ComingSoon {
  title = 'coming-soon-angular';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  submit(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = (form.querySelector('input[name="email"]') as HTMLInputElement).value;

  fetch("https://script.google.com/macros/s/AKfycbyQmgDCqwzYil6Nxter01xzxfrRObM8qUZQRijlFE_7g5MOBkSWDQ7wWovo9cqoIT91/exec", {
    method: "POST",
    body: new URLSearchParams({ email })
  })
  .then(res => res.json())
  .then(data => {
    alert("Thanks! You’ll be notified.");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong. Try again later.");
  });
}
}
