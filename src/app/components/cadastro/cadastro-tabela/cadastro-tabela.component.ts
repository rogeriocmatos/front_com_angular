import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-tabela',
  templateUrl: './cadastro-tabela.component.html',
  styleUrls: ['./cadastro-tabela.component.css']
})
export class CadastroTabelaComponent implements OnInit {

  constructor(private cadastroService: CadastroService, 
    private router: Router,
    private route: ActivatedRoute
) {}

  ngOnInit(): void {
  }

  createCadastro(): void {

    this.router.navigate(['cadastro'])

  }

  cancelCadastro(): void {

    this.router.navigate([''])

  }

  tabelaCadastro(): void {

    this.router.navigate(['cadastro/tabela'])

  }

}
