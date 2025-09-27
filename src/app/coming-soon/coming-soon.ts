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

  const formData = new FormData();
  formData.append("entry.611891699", email); // <-- replace with your Google Form field ID

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSfLdfNkQ_Go5nBVxBOE-MMbXHDXYFEn8W4glZu59PxJzkg4dg/formResponse", {
    method: "POST",
    body: formData,
    mode: "no-cors"
  })
  .then(() => {
    alert("Thanks! You’ll be notified.");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong.");
  });
}
}
