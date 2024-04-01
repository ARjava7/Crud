import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardarService } from '../../services/user/guardar.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  formulario! : FormGroup ;

  constructor(private fb:FormBuilder, private guardarService:GuardarService){
    this.iniciarFormulario();
  
  }

  ngOnInit(): void {
    
  }
  nuevoEstudiante: Estudiante = {
    est_cedula: '',
    est_nombre: '',
    est_apellido: '',
    est_telefono: '',
    est_direccion: ''
  };
  iniciarFormulario(){
    this.formulario = this.fb.group({
      cedula:[],
      nombre :['', [Validators.required,Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$')]],
      apellido :['', [Validators.required,Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$')]],
      telefono:[],
      direccion:[]
    })
  
  }
  

  guardar(): void {
    const estudiante: Estudiante = {
      est_cedula: this.formulario.value.est_cedula,
      est_nombre: this.formulario.value.est_nombre,
      est_apellido: this.formulario.value.est_apellido,
      est_telefono: this.formulario.value.est_telefono,
      est_direccion: this.formulario.value.est_direccion
    };
    this.guardarService.guardar(estudiante).subscribe(
      respuesta => {
        console.log('Estudiante guardado exitosamente:', respuesta);
      },
      error => {
        console.error('Error al guardar el estudiante:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }
  
}