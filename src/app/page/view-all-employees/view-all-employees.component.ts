import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavCompComponent } from '../../common/nav-comp/nav-comp.component';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,NavCompComponent],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent {

  public employeeList:any;

  constructor(private http: HttpClient) { 
    this.loadEmployeeTable();
  }

  deleteEmployee(employee : any){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/emp-controller/delete-emp/${employee.id}`,{responseType:'text'}).subscribe(res=>{
          console.log(res);
          this.loadEmployeeTable();
        })
        console.log(employee);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  
    
  }

  loadEmployeeTable() {
    this.http.get(`http://localhost:8080/emp-controller/get-all`).subscribe(res => {
      this.employeeList = res; 
      console.log(res)
    });
  }
}
