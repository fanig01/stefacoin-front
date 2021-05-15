import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mensagem } from './../../../models/mensagem';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { SignupService } from './../../../services/signup.service';
import { Professor } from './../../../models/professor';
import { ProfessorService } from './../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // id: any

  // textoBotao: string = 'Cadastrar'
  professor: Professor
  usuario: Usuario
  mensagem: Mensagem
  
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private professorService: ProfessorService,
    private signupService: SignupService
    // private authService: AuthService
  ) { }

  ngOnInit(): void {
    // console.log("nome", this.professor.nome)
    // if(this.authService.isAuthenticated()) {
    //   this.router.nvigate(['/nova-conta'])
    // } else {
    //   this.router.navigate(['login'])
    // }

    // this.activatedRoute.params.subscribe(parametros => {
    //   if(parametros['id']){
    //     this.textoBotao = 'Editar'
    //     this.id = parametros['id']
    //     this.professorService.obterPorId(this.id).subscribe(user => {
    //       this.usuario = user
    //     })


    //     console.log(`Id enviado: ${this.id}`)
    //   }
    // })
  }

  cadastrar() {
    this.usuario = {
      nome: this.cadastroForm.get('nome')?.value,
      email: this.cadastroForm.get('email')?.value,
      senha: this.cadastroForm.get('senha')?.value,
      tipo: this.cadastroForm.get('tipo')?.value,
    };

    console.warn(this.cadastroForm.value);

    this.signupService.incluir(this.usuario).subscribe(
      (response) => {
        this.toastr.success(response.mensagem);
      },
      (err) => this.toastr.error(err.mensagem)
    );
  }

  // adicionar = () => {
  //   if(this.textoBotao == 'Cadastrar'){
  //     this.signupService.incluir(this.usuario).subscribe(
  //       success => this.router.navigate(['']),
  //       error => console.log("Deu ruim"),
  //       () => console.log("Requisição completa")
  //       )
  //     }else{
  //       this.editar()
  //     }
  //   }

  // editar = () => {
  //   this.professorService.alterar(this.usuario).subscribe(
  //     success => this.router.navigate(['']),
  //     error => console.log("Deu ruim"),
  //     () => console.log("Requisição completa")
  //   )
  // }

}
