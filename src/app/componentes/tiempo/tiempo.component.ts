import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccederService } from '../../services/user/acceder.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
formulario! : FormGroup ;
estudiantes: any[] = [];

constructor(private fb:FormBuilder, private accederService: AccederService){
  this.iniciarFormulario();
  this.Cargar();
}
ngOnInit(): void {
  
}

iniciarFormulario(){
  this.formulario = this.fb.group({
    cedula:[],
    nombre :['', [Validators.required,Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$')]],
    apellido :['', [Validators.required,Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$')]],
    telefono:[],
    direccion:[]
  })

}

Cargar(){
  this.accederService.acceder().subscribe(estudiantes => {
    this.estudiantes=estudiantes;
      console.log(this.estudiantes);
    });
}


}
