import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
  ],
})
export class SharedDialogComponent  implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      todo: [this.data.todo.todo, [Validators.required, Validators.minLength(3)]],
      completed: [this.data.todo.completed, Validators.required],
      userId: [this.data.todo.userId, [Validators.required, Validators.min(1), Validators.max(200)]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
