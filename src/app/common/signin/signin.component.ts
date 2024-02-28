import { Component, OnInit } from "@angular/core";
import { ApiConfiguration } from "src/app/services/http/api-configuration";
import { ApiService } from "src/app/services/http/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationCheckService } from "src/app/services/auth/authentication-check.service";
import { ToastClientService } from "src/app/services/toast/toast-client.service";
import { first } from "rxjs/operators";
import { AlertService } from "src/app/shared/providers/AlertProvider";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthenticationCheckService,
    private toast: ToastClientService,
    public alertService: AlertService
  ) {
    this.loginForm = formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
    this.loginForm.valueChanges.subscribe((data) => { });
  }



  ngOnInit() {
    // this.testApi();
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let apiUrl = this.apiConfig.login;
    let body = JSON.stringify({
      LoginForm: {
        username: this.f.username.value,
        password: this.f.password.value,
        program_id: 1
      },
    });
    this.loading = true;

    this.apiService.post(this.apiConfig.login, body).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem("userDetails", JSON.stringify(res.body.data));
      this.auth.saveAuth(res.body.data.device_token);
      if (res.body.data.role_id == 1) {
        this.toast.Success("Login success.")
        this.router.navigate(["agentPanel"]);
        this.loading = false
      }

      else if (!res.body.data.status) {
        console.log(res.body.data.data)
        alert(res.body.data.data);
        this.loading = false
      }
      // this.loading = false
    }), err => {
      console.log(err)
    }
  }
}
