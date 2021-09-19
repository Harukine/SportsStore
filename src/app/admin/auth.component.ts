import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  templateUrl: "auth.component.html"
})
export class AuthComponent {
  public username: string | undefined;
  public password: string | undefined;
  public errorMessage: string | undefined;

  constructor(private router: Router) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.router.navigateByUrl("/admin/main")
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
